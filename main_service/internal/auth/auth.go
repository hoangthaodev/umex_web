package auth

import (
	"fmt"
	"main_service/global"
	"main_service/internal/utils"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

func CreateAccessToken(payload any) (string, error) {
	accessSecret := []byte(global.Config.Server.PublishKey)
	claims := jwt.MapClaims{
		"payload":    payload,
		"expires_at": utils.TimeToInt64(time.Now().Add(24 * time.Hour)),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(accessSecret)
}

func CreateRefreshToken(payload any) (string, error) {
	refreshSecret := []byte(global.Config.Server.PrivateKey)

	claims := jwt.MapClaims{
		"payload":    payload,
		"expires_at": utils.TimeToInt64(time.Now().Add(7 * 24 * time.Hour)),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(refreshSecret)
}

func VerifyToken(tokenString string, secretKey []byte) (jwt.MapClaims, error) {

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return secretKey, nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims, nil
	} else {
		return nil, fmt.Errorf("token is not valid")
	}

}

func CreateTokenPair(payload any) (*utils.TokenPairStruct, error) {
	accessToken, err := CreateAccessToken(payload)
	if err != nil {
		return &utils.TokenPairStruct{}, err
	}
	refreshToken, err := CreateRefreshToken(payload)
	if err != nil {
		return &utils.TokenPairStruct{}, err
	}

	refreshSecret := []byte(global.Config.Server.PrivateKey)
	token, err := VerifyToken(refreshToken, refreshSecret)

	if err != nil {
		return &utils.TokenPairStruct{}, err
	}

	refreshExpires := token["expires_at"].(float64)

	return &utils.TokenPairStruct{
		AccessToken:    accessToken,
		RefreshToken:   refreshToken,
		RefreshExpires: int64(refreshExpires),
	}, err

}
