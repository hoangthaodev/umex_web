package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type MenuLocationController struct {
	services.MenuLocationService
}

func (mlc *MenuLocationController) GetAllLocation(c *gin.Context) {
	res, err := mlc.MenuLocationService.GetAllLocation()
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (mlc *MenuLocationController) GetLocationById(c *gin.Context) {
	id := c.Param("id")
	res, err := mlc.MenuLocationService.GetLocationById(utils.StringToInt64(id))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (mlc *MenuLocationController) GetLocationByMenuId(c *gin.Context) {
	id := c.Param("id")
	res, err := mlc.MenuLocationService.GetLocationByMenuId(utils.StringToInt64(id))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (mlc *MenuLocationController) UpdateMenuLocation(c *gin.Context) {
	id := c.Param("id")
	var menuLocation utils.MenuLocation
	err := c.ShouldBindJSON(&menuLocation)
	if err != nil {
		log.Println("Error binding json menu location")
		return
	}

	res, err := mlc.MenuLocationService.UpdateMenuLocation(utils.StringToInt64(id), menuLocation.MenuId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}
