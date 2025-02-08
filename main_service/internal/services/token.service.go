package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
	"main_service/internal/utils"
	"time"
)

type TokenService struct{}

func (ts *TokenService) GetTokenById(tokenId int64) (database.TbToken, error) {
	queries := database.New(global.Mysql)

	return queries.GetTokenById(context.Background(), tokenId)
}

func (ts *TokenService) GetTokenByUserId(userId int64) (database.TbToken, error) {
	queries := database.New(global.Mysql)

	return queries.GetTokenByUserId(context.Background(), userId)
}

func (ts *TokenService) CreateNewToken(userId int64, refreshToken string, expiredToken int64) error {
	queries := database.New(global.Mysql)

	createAt := utils.TimeToInt64(time.Now())

	return queries.CreateNewToken(context.Background(), database.CreateNewTokenParams{
		UserID:       userId,
		RefreshToken: refreshToken,
		ExpiredToken: expiredToken,
		CreatedAt:    createAt,
	})
}

func (ts *TokenService) UpdateToken(refreshToken string, expiredToken int64, tokenId int64) error {
	queries := database.New(global.Mysql)

	updateAt := utils.TimeToInt64(time.Now())

	return queries.UpdateToken(context.Background(), database.UpdateTokenParams{
		RefreshToken: refreshToken,
		ExpiredToken: expiredToken,
		UpdatedAt:    updateAt,
		TokenID:      tokenId,
	})
}

func (ts *TokenService) DeleteToken(tokenId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeleteToken(context.Background(), tokenId)
}
