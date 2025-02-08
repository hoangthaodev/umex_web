package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type UserRouter struct {
	controller.UserController
}

func (ur *UserRouter) InitUserRouter(router *gin.RouterGroup) {
	// public router
	publicUserRouter := router.Group("/admin")
	{
		publicUserRouter.GET("/checkauth", ur.CheckAuth)
		publicUserRouter.POST("/login", ur.Login)
	}

	// private router
	privateUserRouter := router.Group("/admin")
	// middlewares
	privateUserRouter.Use(middleware.Authorization())
	privateUserRouter.Use(middleware.Permission())
	{
		privateUserRouter.POST("/logout", ur.Logout)
		privateUserRouter.POST("/users", ur.CreateNewUser)
		privateUserRouter.GET("/users", ur.GetAllUser)
		privateUserRouter.GET("/users/:id", ur.GetUserId)
		privateUserRouter.PUT("/users/:id", ur.UpdateUser)
		privateUserRouter.DELETE("/users/:id", ur.DeleteUser)
	}
}
