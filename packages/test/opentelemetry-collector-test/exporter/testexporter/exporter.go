package testexporter

import (
	"context"
	"encoding/hex"
	"errors"
	"fmt"
	"net/http"
	"strings"
	"sync"
	"time"

	"github.com/tidwall/gjson"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/exporter"
	"go.opentelemetry.io/collector/pdata/ptrace"
	"go.uber.org/zap"
)

var (
	errSpansNotFound = errors.New("no spans found for trace")

	marshaler = &ptrace.JSONMarshaler{}
)

type testExporter struct {
	spans    map[string]ptrace.SpanSlice
	server   *http.Server
	config   *Config
	settings exporter.CreateSettings
	mutex    sync.RWMutex
}

func newTestExporter(settings exporter.CreateSettings, config *Config) *testExporter {
	return &testExporter{
		spans:    make(map[string]ptrace.SpanSlice),
		config:   config,
		settings: settings,
	}
}

func (x *testExporter) PushTraces(_ context.Context, traces ptrace.Traces) error {
	x.mutex.Lock()
	defer x.mutex.Unlock()

	resourceSpans := traces.ResourceSpans()
	for i := 0; i < resourceSpans.Len(); i++ {
		scopeSpans := resourceSpans.At(i).ScopeSpans()
		for j := 0; j < scopeSpans.Len(); j++ {
			spans := scopeSpans.At(j).Spans()
			for k := 0; k < spans.Len(); k++ {
				span := spans.At(k)

				traceIDBytes := span.TraceID()
				traceIDHex := hex.EncodeToString(traceIDBytes[:])

				spanIDBytes := span.SpanID()
				spanIDHex := hex.EncodeToString(spanIDBytes[:])

				_, ok := x.spans[traceIDHex]
				if !ok {
					x.spans[traceIDHex] = ptrace.NewSpanSlice()
				}

				span.MoveTo(x.spans[traceIDHex].AppendEmpty())

				x.settings.Logger.Info("Added span", zap.String("span_id", spanIDHex), zap.String("trace_id", traceIDHex))
			}
		}
	}

	return nil
}

func (x *testExporter) Start(ctx context.Context, host component.Host) error {
	x.settings.Logger.Info("Starting HTTP server", zap.String("endpoint", x.config.Endpoint))
	listener, err := x.config.ToListener()
	if err != nil {
		return err
	}

	x.server, err = x.config.ToServer(host, x.settings.TelemetrySettings, http.HandlerFunc(x.handleRequest))
	if err != nil {
		return err
	}

	go func() {
		err := x.server.Serve(listener)
		if err != nil && !errors.Is(err, http.ErrServerClosed) {
			host.ReportFatalError(err)
		}
	}()

	return nil
}

func (x *testExporter) Shutdown(ctx context.Context) error {
	return x.server.Shutdown(ctx)
}

func (x *testExporter) handleRequest(res http.ResponseWriter, req *http.Request) {
	start := time.Now()
	traceID := strings.TrimPrefix(req.URL.Path, "/")

	spans, err := x.findSpans(req.Context(), traceID)
	if err != nil {
		if errors.Is(err, errSpansNotFound) {
			x.settings.Logger.Warn("No spans found for trace", zap.String("trace_id", traceID))
			x.finishResponse(res, http.StatusNotFound, req, start)
			return
		}

		x.settings.Logger.Error("Failed to find spans", zap.String("trace_id", traceID), zap.Error(err))
		x.finishResponse(res, http.StatusInternalServerError, req, start)
		return
	}

	traces := ptrace.NewTraces()
	spans.CopyTo(traces.ResourceSpans().AppendEmpty().ScopeSpans().AppendEmpty().Spans())
	json, err := marshaler.MarshalTraces(traces)
	if err != nil {
		x.settings.Logger.Error("Failed to marshal spans to JSON", zap.String("trace_id", traceID), zap.Error(err))
		x.finishResponse(res, http.StatusInternalServerError, req, start)
		return
	}

	fmt.Fprint(res, gjson.GetBytes(json, "{resourceSpans.0.scopeSpans.0.spans}").Raw)
	x.finishResponse(res, http.StatusOK, req, start)
}

func (x *testExporter) findSpans(ctx context.Context, traceID string) (ptrace.SpanSlice, error) {
	ctx, cancel := context.WithTimeout(ctx, 15*time.Second)
	defer cancel()

	retry := time.NewTicker(100 * time.Millisecond)
	defer retry.Stop()

	for {
		x.mutex.RLock()
		spans, ok := x.spans[traceID]
		x.mutex.RUnlock()

		if ok {
			return spans, nil
		}

		select {
		case <-retry.C:
			continue

		case <-ctx.Done():
			return ptrace.SpanSlice{}, errSpansNotFound
		}
	}
}

func (x *testExporter) finishResponse(res http.ResponseWriter, status int, req *http.Request, start time.Time) {
	res.WriteHeader(status)
	x.settings.Logger.Info(
		"Handled request",
		zap.String("method", req.Method),
		zap.String("path", req.URL.Path),
		zap.Int("status", status),
		zap.Duration("duration", time.Now().Sub(start)),
	)
}
