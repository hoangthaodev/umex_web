package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type ConfigController struct {
	services.ConfigService
}

func (cc *ConfigController) GetAllConfig(c *gin.Context) {
	res, err := cc.ConfigService.GetAllConfig()
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *ConfigController) GetConfigByKey(c *gin.Context) {
	key := c.Param("key")
	res, err := cc.ConfigService.GetConfigByKey(key)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *ConfigController) GetConfigById(c *gin.Context) {
	id := c.Param("id")
	confId := utils.StringToInt64(id)

	res, err := cc.ConfigService.GetConfigById(confId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *ConfigController) CreateNewConfig(c *gin.Context) {
	var config utils.Config

	err := c.ShouldBindJSON(&config)
	if err != nil {
		log.Println("Error binding json config")
		return
	}

	res, err := cc.ConfigService.CreateNewConfig(config.ConfigKey, config.ConfigValue, config.ConfigStyle)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *ConfigController) UpdateConfig(c *gin.Context) {
	id := c.Param("id")
	confId := utils.StringToInt64(id)

	var config utils.Config

	err := c.ShouldBindJSON(&config)
	if err != nil {
		log.Println("Error binding json config")
		return
	}

	res, err := cc.ConfigService.UpdateConfig(confId, config.ConfigKey, config.ConfigValue, config.ConfigStyle)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (cc *ConfigController) DeleteConfig(c *gin.Context) {
	id := c.Param("id")
	confId := utils.StringToInt64(id)

	res, err := cc.ConfigService.DeleteConfig(confId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}
