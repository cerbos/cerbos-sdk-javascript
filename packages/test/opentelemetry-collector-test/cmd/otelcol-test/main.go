package main

import (
	"log"

	"github.com/cerbos/sdk-javascript/packages/test/opentelemetry-collector-test/exporter/testexporter"
	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextension"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/exporter"
	"go.opentelemetry.io/collector/extension"
	"go.opentelemetry.io/collector/otelcol"
	"go.opentelemetry.io/collector/receiver"
	"go.opentelemetry.io/collector/receiver/otlpreceiver"
)

func main() {
	factories := otelcol.Factories{}
	factories.Extensions, _ = extension.MakeFactoryMap(healthcheckextension.NewFactory())
	factories.Receivers, _ = receiver.MakeFactoryMap(otlpreceiver.NewFactory())
	factories.Exporters, _ = exporter.MakeFactoryMap(testexporter.NewFactory())

	err := otelcol.NewCommand(otelcol.CollectorSettings{
		BuildInfo: component.BuildInfo{
			Command:     "otelcol-test",
			Description: "OpenTelemetry Collector distribution for use in tests",
			Version:     "dev",
		},
		Factories: factories,
	}).Execute()
	if err != nil {
		log.Fatalf("Collector server exited with error: %v", err)
	}
}
