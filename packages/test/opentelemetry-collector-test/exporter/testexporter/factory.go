package testexporter

import (
	"context"

	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/config/confighttp"
	"go.opentelemetry.io/collector/consumer"
	"go.opentelemetry.io/collector/exporter"
	"go.opentelemetry.io/collector/exporter/exporterhelper"
)

func NewFactory() exporter.Factory {
	return exporter.NewFactory(
		"test",
		createDefaultConfig,
		exporter.WithTraces(createTracesExporter, component.StabilityLevelDevelopment),
	)
}

func createDefaultConfig() component.Config {
	return &Config{
		HTTPServerSettings: confighttp.HTTPServerSettings{
			Endpoint: ":8080",
		},
	}
}

func createTracesExporter(ctx context.Context, settings exporter.CreateSettings, config component.Config) (exporter.Traces, error) {
	x := newTestExporter(settings, config.(*Config))
	return exporterhelper.NewTracesExporter(ctx, settings, config, x.PushTraces,
		exporterhelper.WithCapabilities(consumer.Capabilities{MutatesData: false}),
		exporterhelper.WithStart(x.Start),
		exporterhelper.WithShutdown(x.Shutdown),
	)
}
