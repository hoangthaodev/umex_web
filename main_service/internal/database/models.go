// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0

package database

type TbAuth struct {
	AuthID int64
	UserID int64
	// 111: admin, 222: shop
	RoleID    int32
	CreatedAt int64
	UpdatedAt int64
}

type TbComponent struct {
	CompID       int64
	CompName     string
	CompPosition int32
	CompIndex    int32
}

type TbConfig struct {
	ConfigID    int64
	ConfigKey   string
	ConfigValue string
	ConfigStyle string
}

type TbImage struct {
	ImageID      int64
	ImageSrc     string
	ImageTitle   string
	ImageAlt     string
	ImageCaption string
	CreatedAt    int64
	UpdatedAt    int64
}

type TbToken struct {
	TokenID      int64
	UserID       int64
	RefreshToken string
	ExpiredToken int64
	CreatedAt    int64
	UpdatedAt    int64
}

type TbUser struct {
	UserID       int64
	UserName     string
	UserPassword string
	UserEmail    string
	// 0: inactive, 1: active
	UserActive int8
	CreatedAt  int64
	UpdatedAt  int64
}
