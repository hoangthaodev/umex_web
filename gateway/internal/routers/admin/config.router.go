package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type ConfigRouter struct {
	controller.ConfigController
}

func (cr *ConfigRouter) InitConfigRouter(router *gin.RouterGroup) {
	// public router
	publicConfigRouter := router.Group("/config")
	{
		publicConfigRouter.GET("/key/:key", cr.GetConfigByKey)
		publicConfigRouter.GET("", cr.GetAllConfig)
	}

	// private router
	privateConfigRouter := router.Group("/admin/configs")
	// middlewares
	privateConfigRouter.Use(middleware.Authorization())
	privateConfigRouter.Use(middleware.Permission())
	{
		privateConfigRouter.GET("/:id", cr.GetConfigById)
		privateConfigRouter.POST("", cr.CreateNewConfig)
		privateConfigRouter.PUT("/:id", cr.UpdateConfig)
		privateConfigRouter.DELETE("/:id", cr.DeleteConfig)
	}
}
