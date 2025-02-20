package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type PageController struct {
	services.PageService
}

func (pc *PageController) GetAllPage(c *gin.Context) {
	limit := c.Query("limit")
	offset := c.Query("offset")
	res, err := pc.PageService.GetAllPage(utils.StringToInt32(limit), utils.StringToInt32(offset))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) GetPageById(c *gin.Context) {
	id := c.Param("id")
	res, err := pc.PageService.GetPageById(utils.StringToInt64(id))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) GetPageByTypeNStatus(c *gin.Context) {
	typeId := c.Query("type")
	status := c.Query("status")
	limit := c.Query("limit")
	offset := c.Query("offset")
	res, err := pc.PageService.GetPageByTypeNStatus(utils.StringToInt64(typeId), utils.StringToInt32(status), utils.StringToInt32(limit), utils.StringToInt32(offset))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) GetPageByPublishYear(c *gin.Context) {
	year := c.Query("year")
	limit := c.Query("limit")
	offset := c.Query("offset")
	res, err := pc.PageService.GetPageByPublishYear(utils.StringToInt32(year), utils.StringToInt32(limit), utils.StringToInt32(offset))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) GetPageByPublishYearMonth(c *gin.Context) {
	year := c.Query("year")
	month := c.Query("month")
	limit := c.Query("limit")
	offset := c.Query("offset")
	res, err := pc.PageService.GetPageByPublishYearMonth(utils.StringToInt32(year), utils.StringToInt32(month), utils.StringToInt32(limit), utils.StringToInt32(offset))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) GetPageByPublishYearMonthDay(c *gin.Context) {
	year := c.Query("year")
	month := c.Query("month")
	day := c.Query("day")
	limit := c.Query("limit")
	offset := c.Query("offset")
	res, err := pc.PageService.GetPageByPublishYearMonthDay(utils.StringToInt32(year), utils.StringToInt32(month), utils.StringToInt32(day), utils.StringToInt32(limit), utils.StringToInt32(offset))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) GetPageBySlug(c *gin.Context) {
	slug := c.Param("slug")
	res, err := pc.PageService.GetPageBySlug(slug)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) GetPageByStatus(c *gin.Context) {
	status := c.Param("id")
	limit := c.Query("limit")
	offset := c.Query("offset")
	res, err := pc.PageService.GetPageByStatus(utils.StringToInt32(status), utils.StringToInt32(limit), utils.StringToInt32(offset))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) GetPageByTrash(c *gin.Context) {
	trashId := c.Param("id")
	limit := c.Query("limit")
	offset := c.Query("offset")
	res, err := pc.PageService.GetPageByTrash(utils.StringToInt32(trashId), utils.StringToInt32(limit), utils.StringToInt32(offset))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) GetPageByType(c *gin.Context) {
	typeId := c.Param("id")
	limit := c.Query("limit")
	offset := c.Query("offset")
	res, err := pc.PageService.GetPageByType(utils.StringToInt64(typeId), utils.StringToInt32(limit), utils.StringToInt32(offset))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) GetPageByUser(c *gin.Context) {
	userId := c.Param("id")
	limit := c.Query("limit")
	offset := c.Query("offset")
	res, err := pc.PageService.GetPageByUser(utils.StringToInt64(userId), utils.StringToInt32(limit), utils.StringToInt32(offset))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) CreateNewPage(c *gin.Context) {
	var page utils.Page
	err := c.ShouldBindJSON(&page)
	if err != nil {
		log.Println("error binding page")
		return
	}
	res, err := pc.PageService.CreateNewPage(page.PageTitle, page.PageSlug, page.PageContent, page.PageDescription, page.PageStatus, page.PageYear, page.PageMonth, page.PageDay, page.PageImage, page.PageTrash, page.UserId, page.TypeId, page.TempId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) UpdatePage(c *gin.Context) {
	pageId := c.Param("id")
	var page utils.Page
	err := c.ShouldBindJSON(&page)
	if err != nil {
		log.Println("error binding page")
		return
	}
	res, err := pc.PageService.UpdatePage(utils.StringToInt64(pageId), page.PageTitle, page.PageSlug, page.PageContent, page.PageDescription, page.PageStatus, page.PageYear, page.PageMonth, page.PageDay, page.PageImage, page.PageTrash, page.UserId, page.TypeId, page.TempId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PageController) DeletePage(c *gin.Context) {
	pageId := c.Param("id")
	res, err := pc.PageService.DeletePage(utils.StringToInt64(pageId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}
