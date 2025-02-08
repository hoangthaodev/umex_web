package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
	"main_service/internal/utils"
	"time"
)

type AuthService struct{}

func (as *AuthService) GetAuthById(authId int64) (database.TbAuth, error) {
	queries := database.New(global.Mysql)

	return queries.GetAuthById(context.Background(), authId)
}

func (as *AuthService) GetAuthByUserId(userId int64) (database.TbAuth, error) {
	queries := database.New(global.Mysql)

	return queries.GetAuthByUserId(context.Background(), userId)
}

func (as *AuthService) CreateNewAuth(userId int64, roleId int32) error {
	queries := database.New(global.Mysql)

	createAt := utils.TimeToInt64(time.Now())

	return queries.CreateNewAuth(context.Background(), database.CreateNewAuthParams{
		UserID:    userId,
		RoleID:    roleId,
		CreatedAt: createAt,
	})
}

func (as *AuthService) UpdateAuth(roleId int32, authId int64) error {
	queries := database.New(global.Mysql)

	updateAt := utils.TimeToInt64(time.Now())

	return queries.UpdateAuth(context.Background(), database.UpdateAuthParams{
		RoleID:    roleId,
		UpdatedAt: updateAt,
		AuthID:    authId,
	})
}

func (as *AuthService) DeleteAuth(authId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeleteAuth(context.Background(), authId)
}
