package testexporter

import (
	"go.opentelemetry.io/collector/config/confighttp"
)

type Config struct {
	confighttp.HTTPServerSettings `mapstructure:",squash"`
}

func (c *Config) Validate() error {
	return nil
}
