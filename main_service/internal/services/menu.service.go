package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
)

type MenuService struct{}

func (ms *MenuService) GetAllMenu() ([]database.TbMenu, error) {
	queries := database.New(global.Mysql)

	return queries.GetAllMenu(context.Background())
}

func (ms *MenuService) GetMenuById(menuId int64) (database.TbMenu, error) {
	queries := database.New(global.Mysql)

	return queries.GetMenuById(context.Background(), menuId)
}

func (ms *MenuService) GetMenuBySlug(menuSlug string) (database.TbMenu, error) {
	queries := database.New(global.Mysql)

	return queries.GetMenuBySlug(context.Background(), menuSlug)
}

func (ms *MenuService) CreateNewMenu(menuName string, menuSlug string, menuValue string) (database.TbMenu, error) {
	queries := database.New(global.Mysql)

	err := queries.CreateNewMenu(context.Background(), database.CreateNewMenuParams{
		MenuName:  menuName,
		MenuSlug:  menuSlug,
		MenuValue: menuValue,
	})
	if err != nil {
		return database.TbMenu{}, err
	}
	return ms.GetMenuBySlug(menuSlug)
}

func (ms *MenuService) UpdateMenu(menuName string, menuSlug string, menuValue string, menuId int64) error {
	queries := database.New(global.Mysql)

	return queries.UpdateMenu(context.Background(), database.UpdateMenuParams{
		MenuName:  menuName,
		MenuSlug:  menuSlug,
		MenuValue: menuValue,
		MenuID:    menuId,
	})
}

func (ms *MenuService) DeleteMenu(menuId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeleteMenu(context.Background(), menuId)
}
