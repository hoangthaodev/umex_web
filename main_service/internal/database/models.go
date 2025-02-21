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

type TbCategory struct {
	CategoryID          int64
	CategoryName        string
	CategorySlug        string
	CategoryDescription string
	CategoryParent      int64
	TypeID              int32
	CreatedAt           int64
	UpdatedAt           int64
}

type TbComponent struct {
	ComponentID       int64
	ComponentName     string
	ComponentPosition int32
	ComponentIndex    int32
	ComponentMap      string
}

type TbConfig struct {
	ConfigID    int64
	ConfigKey   string
	ConfigValue string
	ConfigStyle string
}

type TbImage struct {
	ImageID      int64
	ImageUrl     string
	ImageTitle   string
	ImageAlt     string
	ImageCaption string
	CreatedAt    int64
	UpdatedAt    int64
}

type TbMenu struct {
	MenuID    int64
	MenuName  string
	MenuValue string
}

type TbMenuLocation struct {
	LocationID   int64
	LocationName string
	MenuID       int64
}

type TbPage struct {
	PageID           int64
	PageTitle        string
	PageSlug         string
	PageContent      string
	PageDescription  string
	PageStatus       int32
	PagePublishYear  int32
	PagePublishMonth int32
	PagePublishDay   int32
	PageFeatureImage int64
	PageTrash        int32
	UserID           int64
	TypeID           int32
	TemplateID       int32
	CreatedAt        int64
	UpdatedAt        int64
}

type TbPagecategory struct {
	PagecategoryID int64
	PageID         int64
	CategoryID     int64
}

type TbPagetag struct {
	PagetagID int64
	PageID    int64
	TagID     int64
}

type TbTag struct {
	TagID          int64
	TagName        string
	TagSlug        string
	TagDescription string
	TypeID         int32
	CreatedAt      int64
	UpdatedAt      int64
}

type TbToken struct {
	TokenID      int64
	UserID       int64
	RefreshToken string
	ExpiredToken int64
	CreatedAt    int64
	UpdatedAt    int64
}

type TbType struct {
	TypeID   int64
	TypeName string
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
