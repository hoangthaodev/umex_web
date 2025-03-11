package initialize

import (
	"main_service/global"
	"main_service/internal/transport"
)

func Run() {
	LoadConfig()

	InitLogger()
	global.Logger.Info("Logger running...")

	InitMySql()

	transport.RunServer()

}
