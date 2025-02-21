package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
	"main_service/internal/utils"
	"time"
)

type CategoryService struct{}

func (cs *CategoryService) GetAllCategories() ([]database.TbCategory, error) {
	queries := database.New(global.Mysql)

	return queries.GetAllCategory(context.Background())
}

func (cs *CategoryService) GetCategoryById(catId int64) (database.TbCategory, error) {
	queries := database.New(global.Mysql)

	return queries.GetCategoryById(context.Background(), catId)
}

func (cs *CategoryService) GetCategoryBySlug(catSlug string) (database.TbCategory, error) {
	queries := database.New(global.Mysql)

	return queries.GetCategoryBySlug(context.Background(), catSlug)
}

func (cs *CategoryService) GetCategoryByType(typeId int32) ([]database.TbCategory, error) {
	queries := database.New(global.Mysql)

	return queries.GetCategoryByType(context.Background(), typeId)
}

func (cs *CategoryService) GetCategoryByParent(catParent int64) ([]database.TbCategory, error) {
	queries := database.New(global.Mysql)

	return queries.GetCategoryByParent(context.Background(), catParent)
}

func (cs *CategoryService) CreateNewCategory(catName string, catSlug string, catDes string, catParent int64, typeId int32) error {
	queries := database.New(global.Mysql)

	return queries.CreateNewCategory(context.Background(), database.CreateNewCategoryParams{
		CategoryName:        catName,
		CategorySlug:        catSlug,
		CategoryDescription: catDes,
		CategoryParent:      catParent,
		TypeID:              typeId,
		CreatedAt:           utils.TimeToInt64(time.Now()),
	})
}

func (cs *CategoryService) UpdateCategory(catName string, catSlug string, catDes string, catParent int64, typeId int32, catId int64) error {
	queries := database.New(global.Mysql)

	return queries.UpdateCategory(context.Background(), database.UpdateCategoryParams{
		CategoryName:        catName,
		CategorySlug:        catSlug,
		CategoryDescription: catDes,
		CategoryParent:      catParent,
		TypeID:              typeId,
		CategoryID:          catId,
		UpdatedAt:           utils.TimeToInt64(time.Now()),
	})
}

func (cs *CategoryService) DeleteCategory(catId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeleteCategory(context.Background(), catId)
}
