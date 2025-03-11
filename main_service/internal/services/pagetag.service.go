package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
)

type PagetagService struct{}

func (pts *PagetagService) GetPagetagByTag(tagId int64) ([]database.TbPagetag, error) {
	queries := database.New(global.Mysql)

	return queries.GetPagetagByTag(context.Background(), tagId)
}

func (pts *PagetagService) GetPagetagByPage(pageId int64) ([]database.TbPagetag, error) {
	queries := database.New(global.Mysql)

	return queries.GetPagetagByPage(context.Background(), pageId)
}

func (pts *PagetagService) GetPagetagBySlug(slug string) (database.TbPagetag, error) {
	queries := database.New(global.Mysql)

	return queries.GetPagetagBySlug(context.Background(), slug)
}

func (pts *PagetagService) CreateNewPagetag(pageId int64, tagId int64, slug string) (database.TbPagetag, error) {
	queries := database.New(global.Mysql)

	err := queries.CreateNewPagetag(context.Background(), database.CreateNewPagetagParams{
		PageID:      pageId,
		TagID:       tagId,
		PagetagSlug: slug,
	})
	if err != nil {
		return database.TbPagetag{}, err
	}
	return pts.GetPagetagBySlug(slug)
}

func (pts *PagetagService) DeletePagetag(pagetagId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeletePagetag(context.Background(), pagetagId)
}
