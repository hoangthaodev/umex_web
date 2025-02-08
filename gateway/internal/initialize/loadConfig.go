package initialize

import (
	"gateway/global"
	"log"

	"github.com/spf13/viper"
)

func LoadConfig() {
	viper := viper.New()
	viper.AddConfigPath("./config")
	viper.SetConfigName("local")
	viper.SetConfigType("yaml")

	err := viper.ReadInConfig()
	if err != nil {
		log.Fatal("khong doc duoc file config", err)
	}

	log.Println("doc duoc file config: server host::", viper.GetString("server.host"))

	err = viper.Unmarshal(&global.Config)
	if err != nil {
		log.Fatal("khong gan giao dien cho global", err)
	}

	log.Println("global da gan giao dien: server port::", global.Config.Server.Port)
}
