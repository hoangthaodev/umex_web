package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type ComponentRouter struct {
	controller.ComponentController
}

func (cr *ComponentRouter) InitComponentRouter(router *gin.RouterGroup) {
	// publish routes
	publishComponentRouter := router.Group("/component")
	{
		publishComponentRouter.GET("", cr.GetAllComponent)
		publishComponentRouter.GET("/name/:name", cr.GetComponentByName)
		publishComponentRouter.GET("/position/:position", cr.GetComponentByPosition)
	}

	// private routes
	privateComponentRouter := router.Group("/admin/components")
	// middlewares
	privateComponentRouter.Use(middleware.Authorization())
	privateComponentRouter.Use(middleware.Permission())
	{
		privateComponentRouter.GET("/:id", cr.GetComponentById)
		privateComponentRouter.POST("", cr.CreateNewComponent)
		privateComponentRouter.PUT("/:id", cr.UpdateComponent)
		privateComponentRouter.DELETE("/:id", cr.DeleteComponent)
	}
}
