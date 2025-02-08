package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
)

type ComponentService struct{}

func (cps *ComponentService) GetAllComponent() ([]database.TbComponent, error) {
	queries := database.New(global.Mysql)

	return queries.GetAllComponent(context.Background())
}

func (cps *ComponentService) GetComponentById(compId int64) (database.TbComponent, error) {
	queries := database.New(global.Mysql)

	return queries.GetComponentById(context.Background(), compId)
}

func (cps *ComponentService) GetComponentByName(compName string) (database.TbComponent, error) {
	queries := database.New(global.Mysql)

	return queries.GetComponentByName(context.Background(), compName)
}

func (cps *ComponentService) GetComponentByPosition(position int32) ([]database.TbComponent, error) {
	queries := database.New(global.Mysql)

	return queries.GetComponentByPosition(context.Background(), position)
}

func (cps *ComponentService) CreateNewComponent(compName string, position int32, compIndex int32) error {
	queries := database.New(global.Mysql)

	return queries.CreateNewComponent(context.Background(), database.CreateNewComponentParams{
		CompName:     compName,
		CompPosition: position,
		CompIndex:    compIndex,
	})
}

func (cps *ComponentService) UpdateComponent(compName string, position int32, compIndex int32, compId int64) error {
	queries := database.New(global.Mysql)

	return queries.UpdateComponent(context.Background(), database.UpdateComponentParams{
		CompName:     compName,
		CompPosition: position,
		CompIndex:    compIndex,
		CompID:       compId,
	})
}

func (cps *ComponentService) DeleteComponent(compId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeleteComponent(context.Background(), compId)
}
