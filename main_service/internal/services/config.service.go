package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
)

type ConfigService struct{}

func (cs *ConfigService) GetAllConfig() ([]database.TbConfig, error) {
	queries := database.New(global.Mysql)

	return queries.GetAllConfig(context.Background())
}

func (cs *ConfigService) GetConfigById(configId int64) (database.TbConfig, error) {
	queries := database.New(global.Mysql)

	return queries.GetConfigById(context.Background(), configId)
}

func (cs *ConfigService) GetConfigByKey(key string) (database.TbConfig, error) {
	queries := database.New(global.Mysql)

	return queries.GetConfigByKey(context.Background(), key)
}

func (cs *ConfigService) CreateNewConfig(key string, value string, style string) (database.TbConfig, error) {
	queries := database.New(global.Mysql)

	err := queries.CreateNewConfig(context.Background(), database.CreateNewConfigParams{
		ConfigKey:   key,
		ConfigValue: value,
		ConfigStyle: style,
	})
	if err != nil {
		return database.TbConfig{}, err
	}
	return cs.GetConfigByKey(key)
}

func (cs *ConfigService) UpdateConfig(key string, value string, style string, configId int64) error {
	queries := database.New(global.Mysql)

	return queries.UpdateConfig(context.Background(), database.UpdateConfigParams{
		ConfigKey:   key,
		ConfigValue: value,
		ConfigStyle: style,
		ConfigID:    configId,
	})
}

func (cs *ConfigService) DeleteConfig(configId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeleteConfig(context.Background(), configId)
}
