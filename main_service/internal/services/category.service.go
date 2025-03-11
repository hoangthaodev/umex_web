package services

import (
	"context"
	"fmt"
	"main_service/global"
	"main_service/internal/database"
	"main_service/internal/utils"
	"strings"
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

func (cs *CategoryService) GetCategoryByTypeNParent(typeId int32, catParent int64) ([]database.TbCategory, error) {
	queries := database.New(global.Mysql)

	return queries.GetCategoryByTypeNParent(context.Background(), database.GetCategoryByTypeNParentParams{
		TypeID:         typeId,
		CategoryParent: catParent,
	})
}

func (cs *CategoryService) CreateNewCategory(catName string, catSlug string, catDes string, catParent int64, typeId int32) (database.TbCategory, error) {
	queries := database.New(global.Mysql)

	err := queries.CreateNewCategory(context.Background(), database.CreateNewCategoryParams{
		CategoryName:        catName,
		CategorySlug:        catSlug,
		CategoryDescription: catDes,
		CategoryParent:      catParent,
		TypeID:              typeId,
		CreatedAt:           utils.TimeToInt64(time.Now()),
	})
	if err != nil {
		return database.TbCategory{}, err
	}
	return cs.GetCategoryBySlug(catSlug)
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

func (cs *CategoryService) GetCategoryByManyId(listId []int64) ([]byte, error) {
	if len(listId) == 0 {
		return nil, fmt.Errorf("listId is empty")
	}
	queries := database.New(global.Mysql)

	placeholders := make([]string, len(listId))
	for i := range listId {
		placeholders[i] = "?"
	}
	queryString := fmt.Sprintf("SELECT * FROM tb_category WHERE category_id in (%s)", strings.Join(placeholders, ", "))
	args := make([]interface{}, len(listId))
	for i, id := range listId {
		args[i] = id
	}

	return queries.QueryByString(context.Background(), queryString, args...)
}
