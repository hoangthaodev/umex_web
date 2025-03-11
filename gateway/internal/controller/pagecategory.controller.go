package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type PagecategoryController struct {
	services.PagecategoryService
}

func (pc *PagecategoryController) GetPagecategoryByCategory(c *gin.Context) {
	catId := c.Param("id")
	res, err := pc.PagecategoryService.GetPagecategoryByCategory(utils.StringToInt64(catId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PagecategoryController) GetPagecategoryByPage(c *gin.Context) {
	pageId := c.Param("id")
	res, err := pc.PagecategoryService.GetPagecategoryByPage(utils.StringToInt64(pageId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PagecategoryController) CreateNewPagecategory(c *gin.Context) {
	var pagecategory utils.Pagecategory
	err := c.ShouldBindJSON(&pagecategory)
	if err != nil {
		log.Println("error binding pagecategory")
		return
	}
	res, err := pc.PagecategoryService.CreateNewPagecategory(pagecategory.PageId, pagecategory.CategoryId, pagecategory.PagecategorySlug)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PagecategoryController) DeletePagecategory(c *gin.Context) {
	pagecatId := c.Param("id")
	res, err := pc.PagecategoryService.DeletePagecategory(utils.StringToInt64(pagecatId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}
