package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
)

type MenuLocationService struct{}

func (mls *MenuLocationService) GetAllLocation() ([]database.TbMenuLocation, error) {
	queries := database.New(global.Mysql)

	return queries.GetAllLocation(context.Background())
}

func (mls *MenuLocationService) GetLocationById(locId int64) (database.TbMenuLocation, error) {
	queries := database.New(global.Mysql)

	return queries.GetLocationById(context.Background(), locId)
}

func (mls *MenuLocationService) GetLocationByMenuId(menuId int64) ([]database.TbMenuLocation, error) {
	queries := database.New(global.Mysql)

	return queries.GetLocationByMenuId(context.Background(), menuId)
}

func (mls *MenuLocationService) UpdateMenuLocation(menuId int64, locId int64) error {
	queries := database.New(global.Mysql)

	return queries.UpdateMenuLocation(context.Background(), database.UpdateMenuLocationParams{
		MenuID:     menuId,
		LocationID: locId,
	})
}
