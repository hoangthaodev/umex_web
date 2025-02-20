package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
)

type PagecategoryService struct{}

func (ps *PagecategoryService) GetPageByCategory(catId int64, limit int32, offset int32) ([]database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageByCategory(context.Background(), database.GetPageByCategoryParams{
		CategoryID: catId,
		Limit:      limit,
		Offset:     offset,
	})
}

func (ps *PagecategoryService) GetCategoryByPage(pageId int64) ([]database.TbCategory, error) {
	queries := database.New(global.Mysql)

	return queries.GetCategoryByPage(context.Background(), pageId)
}

func (ps *PagecategoryService) CreateNewPagecategory(pageId int64, catId int64) error {
	queries := database.New(global.Mysql)

	return queries.CreateNewPagecategory(context.Background(), database.CreateNewPagecategoryParams{
		PageID:     pageId,
		CategoryID: catId,
	})
}

func (ps *PagecategoryService) DeletePagecategory(pagecatId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeletePagecategory(context.Background(), pagecatId)
}
