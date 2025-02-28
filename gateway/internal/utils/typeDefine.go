package utils

type User struct {
	UserId     int64  `json:"user_id"`
	Username   string `json:"username"`
	Password   string `json:"password"`
	Email      string `json:"user_email"`
	UserActive int32  `json:"user_active"`
}

type Config struct {
	ConfigId    int64  `json:"config_id"`
	ConfigKey   string `json:"config_key"`
	ConfigValue string `json:"config_value"`
	ConfigStyle string `json:"config_style"`
}

type Component struct {
	CompId       int64  `json:"component_id"`
	CompName     string `json:"component_name"`
	CompPosition int32  `json:"component_position"`
	CompIndex    int32  `json:"component_index"`
	CompMap      string `json:"component_map"`
}

type Image struct {
	ImgId      int64  `json:"image_id"`
	ImgUrl     string `json:"image_url"`
	ImgTitle   string `json:"image_title"`
	ImgAlt     string `json:"image_alt"`
	ImgCaption string `json:"image_caption"`
}

type Menu struct {
	MenuId    int64  `json:"menu_id"`
	MenuName  string `json:"menu_name"`
	MenuValue string `json:"menu_value"`
}

type MenuLocation struct {
	LocId   int64  `json:"location_id"`
	LocName string `json:"location_name"`
	MenuId  int64  `json:"menu_id"`
}

type Pagetag struct {
	PagetagId int64 `json:"pagetag_id"`
	PageId    int64 `json:"page_id"`
	TagId     int64 `json:"tag_id"`
}

type Tag struct {
	TagId          int64  `json:"tag_id"`
	TagName        string `json:"tag_name"`
	TagSlug        string `json:"tag_slug"`
	TagDescription string `json:"tag_description"`
	TypeId         int32  `json:"type_id"`
}

type Page struct {
	PageId          int64  `json:"page_id"`
	PageTitle       string `json:"page_title"`
	PageSlug        string `json:"page_slug"`
	PageContent     string `json:"page_content"`
	PageDescription string `json:"page_description"`
	PageStatus      int32  `json:"page_status"`
	PageYear        int32  `json:"page_year"`
	PageMonth       int32  `json:"page_month"`
	PageDay         int32  `json:"page_day"`
	PageImage       int64  `json:"page_image"`
	UserId          int64  `json:"user_id"`
	TypeId          int32  `json:"type_id"`
	CatId           int64  `json:"category_id"`
	TempId          int32  `json:"template_id"`
}

type Category struct {
	CatId     int64  `json:"category_id"`
	CatName   string `json:"category_name"`
	CatSlug   string `json:"category_slug"`
	CatDes    string `json:"category_des"`
	CatParent int64  `json:"category_parent"`
	TypeId    int32  `json:"type_id"`
}

type Pagecategory struct {
	PagecategoryId int64 `json:"pagecategory_id"`
	PageId         int64 `json:"page_id"`
	CategoryId     int64 `json:"category_id"`
}
