package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
)

type PagecategoryService struct{}

func (ps *PagecategoryService) GetAllPagecategory() ([]database.TbPagecategory, error) {
	queries := database.New(global.Mysql)

	return queries.GetAllPagecategory(context.Background())
}

func (ps *PagecategoryService) GetPagecategoryByCategory(catId int64) ([]database.TbPagecategory, error) {
	queries := database.New(global.Mysql)

	return queries.GetPagecategoryCategory(context.Background(), catId)
}

func (ps *PagecategoryService) GetPagecategoryByPage(pageId int64) ([]database.TbPagecategory, error) {
	queries := database.New(global.Mysql)

	return queries.GetPagecategoryByPage(context.Background(), pageId)
}

func (ps *PagecategoryService) GetPagecategoryBySlug(slug string) (database.TbPagecategory, error) {
	queries := database.New(global.Mysql)

	return queries.GetPagecategoryBySlug(context.Background(), slug)
}

func (ps *PagecategoryService) CreateNewPagecategory(pageId int64, catId int64, slug string) (database.TbPagecategory, error) {
	queries := database.New(global.Mysql)

	err := queries.CreateNewPagecategory(context.Background(), database.CreateNewPagecategoryParams{
		PageID:           pageId,
		CategoryID:       catId,
		PagecategorySlug: slug,
	})
	if err != nil {
		return database.TbPagecategory{}, err
	}
	return ps.GetPagecategoryBySlug(slug)
}

func (ps *PagecategoryService) DeletePagecategory(pagecatId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeletePagecategory(context.Background(), pagecatId)
}
