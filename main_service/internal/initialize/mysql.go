package initialize

import (
	"database/sql"
	"fmt"
	"main_service/global"
	"time"

	_ "github.com/go-sql-driver/mysql" // import mysql driver package for go-sql-driver/mysql driver
)

func InitMySql() {
	// chuoi connect mysql
	config := &global.Config.Mysql
	connectString := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", config.Username, config.Password, config.Host, config.Port, config.DBName)

	db, err := sql.Open("mysql", connectString)
	if err != nil {
		global.Logger.Fatal("error connected database")
	}

	err = db.Ping()
	if err != nil {
		global.Logger.Fatal("error status database")
	}

	global.Logger.Info("Connect database successfully")
	global.Mysql = db

	MysqlPool(db)
}

func MysqlPool(db *sql.DB) {
	db.SetMaxIdleConns(global.Config.Mysql.MaxConnIdle)
	db.SetMaxOpenConns(global.Config.Mysql.MaxConnOpen)
	db.SetConnMaxLifetime(time.Duration(global.Config.Mysql.ConnMaxLifetime) * time.Second)
}
