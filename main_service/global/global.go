package global

import (
	"database/sql"
	"main_service/pkg/logger"
	"main_service/pkg/settings"
)

var (
	Config settings.Config
	Logger *logger.LoggerZap
	Mysql  *sql.DB
)
