package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
)

type PagetagService struct{}

func (pts *PagetagService) GetPageByTag(tagId int64, limit int32, offset int32) ([]database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageByTag(context.Background(), database.GetPageByTagParams{
		TagID:  tagId,
		Limit:  limit,
		Offset: offset,
	})
}

func (pts *PagetagService) GetTagByPage(pageId int64) ([]database.TbTag, error) {
	queries := database.New(global.Mysql)

	return queries.GetTagByPage(context.Background(), pageId)
}

func (pts *PagetagService) CreateNewPagetag(pageId int64, tagId int64) error {
	queries := database.New(global.Mysql)

	return queries.CreateNewPagetag(context.Background(), database.CreateNewPagetagParams{
		PageID: pageId,
		TagID:  tagId,
	})
}

func (pts *PagetagService) DeletePagetag(pagetagId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeletePagetag(context.Background(), pagetagId)
}
