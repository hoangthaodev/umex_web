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
	CompId       int64  `json:"comp_id"`
	CompName     string `json:"comp_name"`
	CompPosition int32  `json:"comp_position"`
	CompIndex    int32  `json:"comp_index"`
}

type Image struct {
	ImgId      int64  `json:"img_id"`
	ImgSrc     string `json:"img_src"`
	ImgTitle   string `json:"img_title"`
	ImgAlt     string `json:"img_alt"`
	ImgCaption string `json:"img_caption"`
}
