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

type PageService struct{}

func (ps *PageService) GetAllPage(limit int32, offset int32) ([]database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetAllPage(context.Background(), database.GetAllPageParams{
		Limit:  limit,
		Offset: offset,
	})
}

func (ps *PageService) GetPageDESC(typeId int32, limit int32, offset int32) ([]database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageDESC(context.Background(), database.GetPageDESCParams{
		TypeID: typeId,
		Limit:  limit,
		Offset: offset,
	})
}

func (ps *PageService) GetPageById(pageId int64) (database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageById(context.Background(), pageId)
}

func (ps *PageService) GetPageByManyId(listId []int64) ([]byte, error) {
	if len(listId) == 0 {
		return nil, fmt.Errorf("listId is empty")
	}
	queries := database.New(global.Mysql)

	placeholders := make([]string, len(listId))
	for i := range listId {
		placeholders[i] = "?"
	}
	queryString := fmt.Sprintf("SELECT * FROM tb_page WHERE page_id in(%s)", strings.Join(placeholders, ","))
	args := make([]interface{}, len(listId))
	for i, id := range listId {
		args[i] = id
	}

	return queries.QueryByString(context.Background(), queryString, args...)
}

func (ps *PageService) GetPageBySlug(pageSlug string) (database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageBySlug(context.Background(), pageSlug)
}

func (ps *PageService) GetPageByStatus(pageStatus int32, limit int32, offset int32) ([]database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageByStatus(context.Background(), database.GetPageByStatusParams{
		PageStatus: pageStatus,
		Limit:      limit,
		Offset:     offset,
	})
}

func (ps *PageService) GetPageByUser(userId int64, limit int32, offset int32) ([]database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageByUser(context.Background(), database.GetPageByUserParams{
		UserID: userId,
		Limit:  limit,
		Offset: offset,
	})
}

func (ps *PageService) GetPageByType(typeId int32, limit int32, offset int32) ([]database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageByType(context.Background(), database.GetPageByTypeParams{
		TypeID: typeId,
		Limit:  limit,
		Offset: offset,
	})
}

func (ps *PageService) GetPageByTypeNStatus(typeId int32, pageStatus int32, limit int32, offset int32) ([]database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageByTypeNStatus(context.Background(), database.GetPageByTypeNStatusParams{
		TypeID:     typeId,
		PageStatus: pageStatus,
		Limit:      limit,
		Offset:     offset,
	})
}

func (ps *PageService) GetPageByPublishYear(pagePubYear int32, limit int32, offset int32) ([]database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageByPublishYear(context.Background(), database.GetPageByPublishYearParams{
		PagePublishYear: pagePubYear,
		Limit:           limit,
		Offset:          offset,
	})
}

func (ps *PageService) GetPageByPublishYearMonth(pagePubYear int32, pagePubMonth int32, limit int32, offset int32) ([]database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageByPublishYearMonth(context.Background(), database.GetPageByPublishYearMonthParams{
		PagePublishYear:  pagePubYear,
		PagePublishMonth: pagePubMonth,
		Limit:            limit,
		Offset:           offset,
	})
}

func (ps *PageService) GetPageByPublishYearMonthDay(pagePubYear int32, pagePubMonth int32, pagePubDay int32, limit int32, offset int32) ([]database.TbPage, error) {
	queries := database.New(global.Mysql)

	return queries.GetPageByPublishYearMonthDay(context.Background(), database.GetPageByPublishYearMonthDayParams{
		PagePublishYear:  pagePubYear,
		PagePublishMonth: pagePubMonth,
		PagePublishDay:   pagePubDay,
		Limit:            limit,
		Offset:           offset,
	})
}

func (ps *PageService) CreateNewPage(pageTitle string, pageSlug string, pageContent string, pageDes string, pageStatus int32, pagePubYear int32, pagePubMonth int32, pagePubDay int32, pageFeatureImage int64, userId int64, typeId int32, tempId int32) (database.TbPage, error) {
	queries := database.New(global.Mysql)

	err := queries.CreateNewPage(context.Background(), database.CreateNewPageParams{
		PageTitle:        pageTitle,
		PageSlug:         pageSlug,
		PageContent:      pageContent,
		PageDescription:  pageDes,
		PageStatus:       pageStatus,
		PagePublishYear:  pagePubYear,
		PagePublishMonth: pagePubMonth,
		PagePublishDay:   pagePubDay,
		PageFeatureImage: pageFeatureImage,
		UserID:           userId,
		TypeID:           typeId,
		TemplateID:       tempId,
		CreatedAt:        utils.TimeToInt64(time.Now()),
	})
	if err != nil {
		return database.TbPage{}, err
	}
	return ps.GetPageBySlug(pageSlug)
}

func (ps *PageService) UpdatePage(pageTitle string, pageSlug string, pageContent string, pageDes string, pageStatus int32, pagePubYear int32, pagePubMonth int32, pagePubDay int32, pageFeatureImage int64, userId int64, typeId int32, tempId int32, pageId int64) error {
	queries := database.New(global.Mysql)

	return queries.UpdatePage(context.Background(), database.UpdatePageParams{
		PageTitle:        pageTitle,
		PageSlug:         pageSlug,
		PageContent:      pageContent,
		PageDescription:  pageDes,
		PageStatus:       pageStatus,
		PagePublishYear:  pagePubYear,
		PagePublishMonth: pagePubMonth,
		PagePublishDay:   pagePubDay,
		PageFeatureImage: pageFeatureImage,
		UserID:           userId,
		TypeID:           typeId,
		TemplateID:       tempId,
		PageID:           pageId,
		UpdatedAt:        utils.TimeToInt64(time.Now()),
	})
}

func (ps *PageService) DeletePage(pageId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeletePage(context.Background(), pageId)
}

func (ps *PageService) CountPageByType(typeId int32) (int64, error) {
	queries := database.New(global.Mysql)

	return queries.CountPageByType(context.Background(), typeId)
}

func (ps *PageService) CountPageByTypeNStatus(typeId int32, status int32) (int64, error) {
	queries := database.New(global.Mysql)

	return queries.CountPageByTypeNStatus(context.Background(), database.CountPageByTypeNStatusParams{
		TypeID:     typeId,
		PageStatus: status,
	})
}
