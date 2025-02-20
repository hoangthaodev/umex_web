package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
)

type TypeService struct{}

func (ts *TypeService) GetAllType() ([]database.TbType, error) {
	queries := database.New(global.Mysql)

	return queries.GetAllType(context.Background())
}

func (ts *TypeService) GetTypeById(typeId int64) (database.TbType, error) {
	queries := database.New(global.Mysql)

	return queries.GetTypeById(context.Background(), typeId)
}

func (ts *TypeService) CreateNewType(typeName string) error {
	queries := database.New(global.Mysql)

	return queries.CreateNewType(context.Background(), typeName)
}

func (ts *TypeService) UpdateType(typeName string, typeId int64) error {
	queries := database.New(global.Mysql)

	return queries.UpdateType(context.Background(), database.UpdateTypeParams{
		TypeName: typeName,
		TypeID:   typeId,
	})
}

func (ts *TypeService) DeleteType(typeId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeleteType(context.Background(), typeId)
}
