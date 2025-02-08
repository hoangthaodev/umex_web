package initialize

import "gateway/global"

func Run() {
	// init loadConfig
	LoadConfig()
	// init logger
	InitLogger()
	global.Logger.Info("Logger running...")

	// init router
	InitRouter()

}
