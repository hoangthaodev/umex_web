package initialize

import (
	"log"
	"main_service/global"

	"github.com/spf13/viper"
)

func LoadConfig() {
	viper := viper.New()
	viper.AddConfigPath("./config")
	viper.SetConfigName("local")
	viper.SetConfigType("yaml")

	err := viper.ReadInConfig()
	if err != nil {
		log.Fatal("error read in config", err)
	}

	log.Println("reading file config: server port::", viper.GetInt("server.port"))

	err = viper.Unmarshal(&global.Config)
	if err != nil {
		log.Fatal("error unmarshal config", err)
	}

	log.Println("unmarshal ok!: server port::", global.Config.Server.Port)
}
