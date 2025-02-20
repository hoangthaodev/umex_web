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

func (pc *PagecategoryController) GetPageByCategory(c *gin.Context) {
	catId := c.Param("id")
	limit := c.Query("limit")
	offset := c.Query("offset")
	res, err := pc.PagecategoryService.GetPageByCategory(utils.StringToInt64(catId), utils.StringToInt32(limit), utils.StringToInt32(offset))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (pc *PagecategoryController) GetCategoryByPage(c *gin.Context) {
	pageId := c.Param("id")
	res, err := pc.PagecategoryService.GetCategoryByPage(utils.StringToInt64(pageId))
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
	res, err := pc.PagecategoryService.CreateNewPagecategory(pagecategory.PageId, pagecategory.CategoryId)
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
