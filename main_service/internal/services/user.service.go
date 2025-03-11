package services

import (
	"context"
	"fmt"
	"main_service/global"
	"main_service/internal/database"
	"main_service/internal/utils"
	"time"

	"golang.org/x/crypto/bcrypt"
)

type UserService struct{}

func (us *UserService) GetAllUser() ([]database.TbUser, error) {
	queries := database.New(global.Mysql)

	return queries.GetAllUser(context.Background())
}

func (us *UserService) GetUserById(userId int64) (database.TbUser, error) {
	queries := database.New(global.Mysql)

	return queries.GetUserById(context.Background(), userId)
}

func (us *UserService) GetUserByUsername(userName string) (database.TbUser, error) {
	queries := database.New(global.Mysql)

	return queries.GetUserByUsername(context.Background(), userName)
}

func (us *UserService) GetUserByEmail(email string) (database.TbUser, error) {
	queries := database.New(global.Mysql)

	return queries.GetUserByEmail(context.Background(), email)
}

func (us *UserService) CreateNewUser(userName string, password string, email string, active int32, displayName string) (database.TbUser, error) {
	queries := database.New(global.Mysql)

	passwordHash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		global.Logger.Error(fmt.Sprintf("Error hashing password: %v", err))
		passwordHash = []byte(password)
	}
	createAt := utils.TimeToInt64(time.Now())

	err = queries.CreateNewUser(context.Background(), database.CreateNewUserParams{
		UserName:        userName,
		UserPassword:    string(passwordHash),
		UserEmail:       email,
		UserDisplayName: displayName,
		UserActive:      active,
		CreatedAt:       createAt,
	})
	if err != nil {
		return database.TbUser{}, err
	}
	return us.GetUserByUsername(userName)
}

func (us *UserService) UpdateUser(userName string, password string, email string, active int32, displayName string, userId int64) error {
	queries := database.New(global.Mysql)

	passwordHash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		global.Logger.Error(fmt.Sprintf("Error hashing password: %v", err))
		passwordHash = []byte(password)
	}
	updateAt := utils.TimeToInt64(time.Now())

	return queries.UpdateUser(context.Background(), database.UpdateUserParams{
		UserName:        userName,
		UserPassword:    string(passwordHash),
		UserEmail:       email,
		UserActive:      active,
		UserDisplayName: displayName,
		UpdatedAt:       updateAt,
		UserID:          userId,
	})
}

func (us *UserService) DeleteUser(userId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeleteUser(context.Background(), userId)
}
