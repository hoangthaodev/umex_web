package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type PageRouter struct {
	controller.PageController
}

func (pc *PageRouter) InitPageRouter(router *gin.RouterGroup) {
	// private
	privatePageRouter := router.Group("/admin/pages")
	// middleware
	privatePageRouter.Use(middleware.Authorization())
	privatePageRouter.Use(middleware.Permission())
	{
		privatePageRouter.GET("", pc.PageController.GetPageASC)
		privatePageRouter.GET("/desc/", pc.PageController.GetPageDESC)
		privatePageRouter.GET("/typenstatus/", pc.PageController.GetPageByTypeNStatus)
		privatePageRouter.GET("/id/:id", pc.PageController.GetPageById)
		privatePageRouter.GET("/ids/", pc.PageController.GetPageByManyId)
		privatePageRouter.GET("/year/", pc.PageController.GetPageByPublishYear)
		privatePageRouter.GET("/month/", pc.PageController.GetPageByPublishYearMonth)
		privatePageRouter.GET("/day/", pc.PageController.GetPageByPublishYearMonthDay)
		privatePageRouter.GET("/slug/:slug", pc.PageController.GetPageBySlug)
		privatePageRouter.GET("/status/:id", pc.PageController.GetPageByStatus)
		privatePageRouter.GET("/type/:id", pc.PageController.GetPageByType)
		privatePageRouter.GET("/user/:id", pc.PageController.GetPageByUser)
		privatePageRouter.POST("", pc.PageController.CreateNewPage)
		privatePageRouter.PUT("/:id", pc.PageController.UpdatePage)
		privatePageRouter.DELETE("/:id", pc.PageController.DeletePage)
		privatePageRouter.GET("/count/type/:id", pc.PageController.CountPageByType)
		privatePageRouter.GET("/count/typenstatus/", pc.PageController.CountPageByTypeNStatus)
	}
}
