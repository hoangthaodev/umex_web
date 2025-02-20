package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type CategoryController struct {
	services.CategoryService
}

func (cc *CategoryController) GetAllCategory(c *gin.Context) {
	res, err := cc.CategoryService.GetAllCategory()
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *CategoryController) GetCategoryById(c *gin.Context) {
	catId := c.Param("id")
	res, err := cc.CategoryService.GetCategoryById(utils.StringToInt64(catId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *CategoryController) GetCategoryBySlug(c *gin.Context) {
	slug := c.Param("slug")
	res, err := cc.CategoryService.GetCategoryBySlug(slug)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *CategoryController) GetCategoryByParent(c *gin.Context) {
	parentId := c.Param("id")
	res, err := cc.CategoryService.GetCategoryByParent(utils.StringToInt64(parentId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *CategoryController) GetCategoryByType(c *gin.Context) {
	typeId := c.Param("id")
	res, err := cc.CategoryService.GetCategoryByType(utils.StringToInt64(typeId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *CategoryController) CreateNewCategory(c *gin.Context) {
	var newCat utils.Category
	err := c.ShouldBindJSON(&newCat)
	if err != nil {
		log.Println("error binding category")
		return
	}
	res, err := cc.CategoryService.CreateNewCategory(newCat.CatName, newCat.CatSlug, newCat.CatDes, newCat.CatParent, newCat.TypeId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *CategoryController) UpdateCategory(c *gin.Context) {
	catId := c.Param("id")
	var updatedCat utils.Category
	err := c.ShouldBindJSON(&updatedCat)
	if err != nil {
		log.Println("error binding category")
		return
	}
	res, err := cc.CategoryService.UpdateCategory(utils.StringToInt64(catId), updatedCat.CatName, updatedCat.CatSlug, updatedCat.CatDes, updatedCat.CatParent, updatedCat.TypeId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *CategoryController) DeleteCategory(c *gin.Context) {
	catId := c.Param("id")
	res, err := cc.CategoryService.DeleteCategory(utils.StringToInt64(catId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}
