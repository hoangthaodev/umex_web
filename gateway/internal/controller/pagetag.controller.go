package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type PagetagController struct {
	services.PagetagService
}

func (pc *PagetagController) GetAllPagetag(c *gin.Context) {
	res, err := pc.PagetagService.GetAllPagetag()
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PagetagController) GetPagetagByTag(c *gin.Context) {
	tagId := c.Param("id")
	res, err := pc.PagetagService.GetPagetagByTag(utils.StringToInt64(tagId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PagetagController) GetPagetagByPage(c *gin.Context) {
	pageId := c.Param("id")
	res, err := pc.PagetagService.GetPagetagByPage(utils.StringToInt64(pageId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PagetagController) CreateNewPagetag(c *gin.Context) {
	var pagetag utils.Pagetag
	err := c.ShouldBindJSON(&pagetag)
	if err != nil {
		log.Println("Error binding pagetag")
		return
	}
	res, err := pc.PagetagService.CreateNewPagetag(pagetag.PageId, pagetag.TagId, pagetag.PagetagSlug)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PagetagController) DeletePagetag(c *gin.Context) {
	id := c.Param("id")

	res, err := pc.PagetagService.DeletePagetag(utils.StringToInt64(id))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}
