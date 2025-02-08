package initialize

import (
	"main_service/global"
	"main_service/pkg/logger"
)

func InitLogger() {
	global.Logger = logger.NewLogger(&global.Config.Logger)
}
