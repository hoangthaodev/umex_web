package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type TagRouter struct {
	controller.TagController
}

func (tc *TagRouter) InitTagRouter(router *gin.RouterGroup) {
	// private
	privateTagRouter := router.Group("/admin/tags")
	// middleware
	privateTagRouter.Use(middleware.Authorization())
	privateTagRouter.Use(middleware.Permission())
	{
		privateTagRouter.GET("", tc.TagController.GetAllTag)
		privateTagRouter.GET("/:id", tc.TagController.GetTagById)
		privateTagRouter.GET("/slug/:slug", tc.TagController.GetTagBySlug)
		privateTagRouter.GET("/type/:id", tc.TagController.GetTagByType)
		privateTagRouter.POST("", tc.TagController.CreateNewTag)
		privateTagRouter.PUT("/:id", tc.TagController.UpdateTag)
		privateTagRouter.DELETE("/:id", tc.TagController.DeleteTag)
	}
}
