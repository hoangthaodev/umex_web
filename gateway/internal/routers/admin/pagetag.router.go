package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type PagetagRouter struct {
	controller.PagetagController
}

func (pc *PagetagRouter) InitPagetagRouter(router *gin.RouterGroup) {
	// private
	privatePagetagRouter := router.Group("/admin/pagetags")
	// middleware
	privatePagetagRouter.Use(middleware.Authorization())
	privatePagetagRouter.Use(middleware.Permission())
	{
		privatePagetagRouter.GET("/tag/:id", pc.PagetagController.GetPageByTag)
		privatePagetagRouter.GET("/page/:id", pc.PagetagController.GetTagByPage)
		privatePagetagRouter.POST("", pc.PagetagController.CreateNewPagetag)
		privatePagetagRouter.DELETE("/:id", pc.PagetagController.DeletePagetag)
	}
}
