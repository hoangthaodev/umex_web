package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
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

func (ts *TokenService) CreateNewToken(userId int64, accessToken string, accessExpired int64, refreshToken string, refreshExpired int64) (database.TbToken, error) {
	queries := database.New(global.Mysql)

	createAt := time.Now().Unix()

	err := queries.CreateNewToken(context.Background(), database.CreateNewTokenParams{
		UserID:              userId,
		AccessToken:         accessToken,
		AccessTokenExpired:  accessExpired,
		RefreshToken:        refreshToken,
		RefreshTokenExpired: refreshExpired,
		CreatedAt:           createAt,
	})
	if err != nil {
		return database.TbToken{}, err
	}
	return ts.GetTokenByUserId(userId)
}

func (ts *TokenService) UpdateToken(accessToken string, accessExpired int64, refreshToken string, refreshExpired int64, tokenId int64) error {
	queries := database.New(global.Mysql)

	updateAt := time.Now().Unix()

	return queries.UpdateToken(context.Background(), database.UpdateTokenParams{
		AccessToken:         accessToken,
		AccessTokenExpired:  accessExpired,
		RefreshToken:        refreshToken,
		RefreshTokenExpired: refreshExpired,
		UpdatedAt:           updateAt,
		TokenID:             tokenId,
	})
}

func (ts *TokenService) DeleteToken(tokenId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeleteToken(context.Background(), tokenId)
}
