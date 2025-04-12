package controller

import (
	"encoding/json"
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

func (cc *CategoryController) GetCategoryByManyId(c *gin.Context) {
	listId := c.Query("ids")
	ids := utils.StringToInt64Slice(listId)
	res, err := cc.CategoryService.GetCategoryByManyId(ids)
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

func (cc *CategoryController) GetCategoryByTypeNParent(c *gin.Context) {
	typeId := c.Query("type")
	parentId := c.Query("parent")
	res, err := cc.CategoryService.GetCategoryByTypeNParent(utils.StringToInt32(typeId), utils.StringToInt64(parentId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *CategoryController) CreateNewCategory(c *gin.Context) {
	raw, err := c.GetRawData()
	if err != nil {
		log.Println("error getting raw data")
	}

	var newCat utils.Category
	err = json.Unmarshal(raw, &newCat)
	if err != nil {
		log.Println("error unmarshalling category::", err.Error())
	}
	res, err := cc.CategoryService.CreateNewCategory(newCat.CatName, newCat.CatSlug, newCat.CatDescription, newCat.CatParent, newCat.TypeId)
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
	res, err := cc.CategoryService.UpdateCategory(utils.StringToInt64(catId), updatedCat.CatName, updatedCat.CatSlug, updatedCat.CatDescription, updatedCat.CatParent, updatedCat.TypeId)
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
