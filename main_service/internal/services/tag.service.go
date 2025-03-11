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

type TagService struct{}

func (ts *TagService) GetAllTag() ([]database.TbTag, error) {
	queries := database.New(global.Mysql)

	return queries.GetAllTag(context.Background())
}

func (ts *TagService) GetTagById(tagId int64) (database.TbTag, error) {
	queries := database.New(global.Mysql)

	return queries.GetTagById(context.Background(), tagId)
}

func (ts *TagService) GetTagByType(typeId int32) ([]database.TbTag, error) {
	queries := database.New(global.Mysql)

	return queries.GetTagByType(context.Background(), typeId)
}

func (ts *TagService) GetTagBySlug(tagSlug string) (database.TbTag, error) {
	queries := database.New(global.Mysql)

	return queries.GetTagBySlug(context.Background(), tagSlug)
}

func (ts *TagService) CreateNewTag(tagName string, tagSlug string, tagDes string, typeId int32) (database.TbTag, error) {
	queries := database.New(global.Mysql)

	err := queries.CreateNewTag(context.Background(), database.CreateNewTagParams{
		TagName:        tagName,
		TagSlug:        tagSlug,
		TagDescription: tagDes,
		TypeID:         typeId,
		CreatedAt:      utils.TimeToInt64(time.Now()),
	})
	if err != nil {
		return database.TbTag{}, err
	}
	return ts.GetTagBySlug(tagSlug)
}

func (ts *TagService) UpdateTag(tagName string, tagSlug string, tagDes string, typeId int32, tagId int64) error {
	queries := database.New(global.Mysql)

	return queries.UpdateTag(context.Background(), database.UpdateTagParams{
		TagName:        tagName,
		TagSlug:        tagSlug,
		TagDescription: tagDes,
		TypeID:         typeId,
		TagID:          tagId,
		UpdatedAt:      utils.TimeToInt64(time.Now()),
	})
}

func (ts *TagService) DeleteTag(tagId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeleteTag(context.Background(), tagId)
}

func (ts *TagService) GetTagByManyId(listId []int64) ([]byte, error) {
	if len(listId) == 0 {
		return nil, fmt.Errorf("listId is empty")
	}
	queries := database.New(global.Mysql)

	placeholders := make([]string, len(listId))
	for i := range listId {
		placeholders[i] = "?"
	}
	queryString := fmt.Sprintf("SELECT * FROM tb_tag WHERE tag_id in (%s)", strings.Join(placeholders, ","))
	args := make([]interface{}, len(listId))
	for i, id := range listId {
		args[i] = id
	}

	return queries.QueryByString(context.Background(), queryString, args...)
}
