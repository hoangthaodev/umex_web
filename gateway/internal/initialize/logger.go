package initialize

import (
	"gateway/global"
	"gateway/pkg/logger"
)

func InitLogger() {
	global.Logger = logger.NewLogger(&global.Config.Logger)
}
