package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type UserController struct {
	services.UserService
	services.AuthService
}

func (uc *UserController) CheckAuth(c *gin.Context) {
	var authorization = c.GetHeader("Authorization")
	res, err := uc.AuthService.CheckAuth(authorization)
	if err != nil || res.Code != 2000 {
		response.ErrorResponse(c, int(res.Code), "error: Unauthorized")
		c.Abort()
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (uc *UserController) RefreshToken(c *gin.Context) {
	var token utils.RefreshToken
	err := c.ShouldBindJSON(&token)
	if err != nil {
		log.Println("Error binding json refresh token")
		return
	}
	res, err := uc.AuthService.RefreshToken(token.RefreshToken)
	if err != nil || res.Code != 2000 {
		response.ErrorResponse(c, int(res.Code), "error: Unauthorized")
		c.Abort()
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (uc *UserController) Logout(c *gin.Context) {
	var user_id = c.GetHeader("user_id")
	userId := utils.StringToInt64(user_id)

	res, err := uc.UserService.Logout(userId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (uc *UserController) Login(c *gin.Context) {
	var user utils.User
	err := c.ShouldBindJSON(&user)
	if err != nil {
		log.Println("Error binding json user")
		return
	}
	res, err := uc.UserService.Login(user.Username, user.Password)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (uc *UserController) CreateNewUser(c *gin.Context) {
	var user utils.User

	err := c.ShouldBindJSON(&user)
	if err != nil {
		log.Println("error bind json")
		return
	}

	res, err := uc.UserService.CreateNewUser(user.Username, user.Password, user.Email)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (uc *UserController) GetAllUser(c *gin.Context) {
	res, err := uc.UserService.GetAllUser()
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (uc *UserController) GetUserId(c *gin.Context) {
	var user_id = c.Param("id")
	userId := utils.StringToInt64(user_id)

	res, err := uc.UserService.GetUserById(userId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (uc *UserController) UpdateUser(c *gin.Context) {
	var user_id = c.Param("id")
	userId := utils.StringToInt64(user_id)

	var user utils.User
	err := c.ShouldBindJSON(&user)
	if err != nil {
		log.Println("error bind json:: ", err)
		return
	}

	res, err := uc.UserService.UpdateUser(userId, user.Username, user.Password, user.Email, user.UserActive)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (uc *UserController) DeleteUser(c *gin.Context) {
	var user_id = c.Param("id")
	userId := utils.StringToInt64(user_id)

	res, err := uc.UserService.DeleteUser(userId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}
