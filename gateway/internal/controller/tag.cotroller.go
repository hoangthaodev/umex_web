package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type TagController struct {
	services.TagService
}

func (tc *TagController) GetAllTag(c *gin.Context) {
	res, err := tc.TagService.GetAllTag()
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (tc *TagController) GetTagById(c *gin.Context) {
	id := c.Param("id")
	res, err := tc.TagService.GetTagById(utils.StringToInt64(id))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (tc *TagController) GetTagByManyId(c *gin.Context) {
	listId := c.Query("ids")
	ids := utils.StringToInt64Slice(listId)
	res, err := tc.TagService.GetTagByManyId(ids)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (tc *TagController) GetTagBySlug(c *gin.Context) {
	slug := c.Param("slug")
	res, err := tc.TagService.GetTagBySlug(slug)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (tc *TagController) GetTagByType(c *gin.Context) {
	typeId := c.Param("id")
	res, err := tc.TagService.GetTagByType(utils.StringToInt64(typeId))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (tc *TagController) CreateNewTag(c *gin.Context) {
	var newTag utils.Tag
	err := c.ShouldBindJSON(&newTag)
	if err != nil {
		log.Println("Error binding json tag::", err)
		return
	}
	res, err := tc.TagService.CreateNewTag(newTag.TagName, newTag.TagSlug, newTag.TagDescription, newTag.TypeId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (tc *TagController) UpdateTag(c *gin.Context) {
	id := c.Param("id")
	var updatedTag utils.Tag
	err := c.ShouldBindJSON(&updatedTag)
	if err != nil {
		log.Println("Error binding json tag")
		return
	}
	res, err := tc.TagService.UpdateTag(utils.StringToInt64(id), updatedTag.TagName, updatedTag.TagSlug, updatedTag.TagDescription, updatedTag.TypeId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (tc *TagController) DeleteTag(c *gin.Context) {
	id := c.Param("id")
	res, err := tc.TagService.DeleteTag(utils.StringToInt64(id))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}
