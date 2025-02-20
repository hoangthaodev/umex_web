package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type TypeController struct {
	services.TypeService
}

func (tc *TypeController) GetAllType(c *gin.Context) {
	res, err := tc.TypeService.GetAllType()
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (tc *TypeController) GetTypeById(c *gin.Context) {
	id := c.Param("id")
	res, err := tc.TypeService.GetTypeById(utils.StringToInt64(id))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (tc *TypeController) CreateNewType(c *gin.Context) {
	var newtype utils.Type
	err := c.ShouldBindJSON(&newtype)
	if err != nil {
		log.Println("error binding type")
		return
	}
	res, err := tc.TypeService.CreateNewType(newtype.TypeName)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (tc *TypeController) UpdateType(c *gin.Context) {
	id := c.Param("id")
	var updatedType utils.Type
	err := c.ShouldBindJSON(&updatedType)
	if err != nil {
		log.Println("error binding type")
		return
	}
	res, err := tc.TypeService.UpdateType(updatedType.TypeName, utils.StringToInt64(id))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (tc *TypeController) DeleteType(c *gin.Context) {
	id := c.Param("id")
	res, err := tc.TypeService.DeleteType(utils.StringToInt64(id))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}
