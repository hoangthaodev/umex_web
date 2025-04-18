package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"
)

type PageService struct{}

func (ps *PageService) GetAllPage(limit int32, offset int32) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.GetAllPage(context.Background(), &pb.Page{
		Limit:  limit,
		Offset: offset,
	})
}

func (ps *PageService) GetPageDESC(typeId int32, limit int32, offset int32) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.GetPageDESC(context.Background(), &pb.Page{
		TypeId: typeId,
		Limit:  limit,
		Offset: offset,
	})
}

func (ps *PageService) GetPageById(pageId int64) (*pb.PageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.GetPageById(context.Background(), &pb.NumbRequest{
		Numb: pageId,
	})
}

func (ps *PageService) GetPageBySlug(slug string) (*pb.PageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.GetPageBySlug(context.Background(), &pb.MessageRequest{
		Str: slug,
	})
}

func (ps *PageService) GetPageByStatus(pageStatus int32, limit int32, offset int32) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.GetPageByStatus(context.Background(), &pb.Page{
		PageStatus: pageStatus,
		Limit:      limit,
		Offset:     offset,
	})
}

func (ps *PageService) GetPageByUser(userId int64, limit int32, offset int32) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.GetPageByUser(context.Background(), &pb.Page{
		UserId: userId,
		Limit:  limit,
		Offset: offset,
	})
}

func (ps *PageService) GetPageByType(typeId int32, limit int32, offset int32) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.GetPageByType(context.Background(), &pb.Page{
		TypeId: typeId,
		Limit:  limit,
		Offset: offset,
	})
}

func (ps *PageService) GetPageByTypeNStatus(typeId int32, pageStatus int32, limit int32, offset int32) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	res, err := client.GetPageByTypeNStatus(context.Background(), &pb.Page{
		TypeId:     typeId,
		PageStatus: pageStatus,
		Limit:      limit,
		Offset:     offset,
	})
	return res, err
}

func (ps *PageService) GetPageByPublishYear(year int32, limit int32, offset int32) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.GetPageByPublishYear(context.Background(), &pb.Page{
		PagePublishYear: year,
		Limit:           limit,
		Offset:          offset,
	})
}

func (ps *PageService) GetPageByPublishYearMonth(year int32, month int32, limit int32, offset int32) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.GetPageByPublishYearMonth(context.Background(), &pb.Page{
		PagePublishYear:  year,
		PagePublishMonth: month,
		Limit:            limit,
		Offset:           offset,
	})
}

func (ps *PageService) GetPageByPublishYearMonthDay(year int32, month int32, day int32, limit int32, offset int32) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.GetPageByPublishYearMonthDay(context.Background(), &pb.Page{
		PagePublishYear:  year,
		PagePublishMonth: month,
		PagePublishDay:   day,
		Limit:            limit,
		Offset:           offset,
	})
}

func (ps *PageService) CreateNewPage(pageTitle string, pageSlug string, pageContent string, pageDes string, pageStatus int32, year int32, month int32, day int32, imageId int64, userId int64, typeId int32, tempId int32) (*pb.PageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.CreateNewPage(context.Background(), &pb.Page{
		PageTitle:        pageTitle,
		PageSlug:         pageSlug,
		PageContent:      pageContent,
		PageDescription:  pageDes,
		PageStatus:       pageStatus,
		PagePublishYear:  year,
		PagePublishMonth: month,
		PagePublishDay:   day,
		PageFeatureImage: imageId,
		UserId:           userId,
		TypeId:           typeId,
		TemplateId:       tempId,
	})
}

func (ps *PageService) UpdatePage(pageId int64, pageTitle string, pageSlug string, pageContent string, pageDes string, pageStatus int32, year int32, month int32, day int32, imageId int64, userId int64, typeId int32, tempId int32) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.UpdatePage(context.Background(), &pb.Page{
		PageId:           pageId,
		PageTitle:        pageTitle,
		PageSlug:         pageSlug,
		PageContent:      pageContent,
		PageDescription:  pageDes,
		PageStatus:       pageStatus,
		PagePublishYear:  year,
		PagePublishMonth: month,
		PagePublishDay:   day,
		PageFeatureImage: imageId,
		UserId:           userId,
		TypeId:           typeId,
		TemplateId:       tempId,
	})
}

func (ps *PageService) DeletePage(pageId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.DeletePage(context.Background(), &pb.NumbRequest{
		Numb: pageId,
	})
}

func (ps *PageService) CountPageByType(typeId int64) (*pb.NumbResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.CountPageByType(context.Background(), &pb.NumbRequest{
		Numb: typeId,
	})
}

func (ps *PageService) CountPageByTypeNStatus(typeId int32, status int32) (*pb.NumbResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	return client.CountPageByTypeNStatus(context.Background(), &pb.Page{
		TypeId:     typeId,
		PageStatus: status,
	})
}

func (ps *PageService) GetPageByManyId(listId []int64) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPageServiceClient(conn)
	var numbs []*pb.NumbRequest
	for _, id := range listId {
		numbs = append(numbs, &pb.NumbRequest{Numb: id})
	}
	return client.GetPageByManyId(context.Background(), &pb.ManyNumbRequest{
		Numbs: numbs,
	})
}
