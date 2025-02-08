package global

import (
	"gateway/pkg/logger"
	"gateway/pkg/settings"
)

var (
	Config settings.Config
	Logger *logger.LoggerZap
)
