package utils

type ResponseStruct struct {
	Code int `json:"code"`
	Data any `json:"data"`
}

type UserResponseStruct struct {
	UserId     int64  `json:"user_id"`
	UserName   string `json:"user_name"`
	UserEmail  string `json:"user_email"`
	UserActive int32  `json:"user_active"`
}

type JWTPayloadStruct struct {
	UserId    int64  `json:"user_id"`
	UserName  string `json:"user_name"`
	UserEmail string `json:"user_email"`
}

type TokenPairStruct struct {
	AccessToken    string `json:"access_token"`
	AccessExpired  int64  `json:"access_expired"`
	RefreshToken   string `json:"refresh_token"`
	RefreshExpired int64  `json:"refresh_expired"`
}

type TagText struct {
	TagId          string `json:"tag_id,omitempty"`
	TagName        string `json:"tag_name,omitempty"`
	TagSlug        string `json:"tag_slug,omitempty"`
	TagDescription string `json:"tag_description,omitempty"`
	TypeId         string `json:"type_id,omitempty"`
}

type CategoryText struct {
	CategoryId          string `json:"category_id,omitempty"`
	CategoryName        string `json:"category_name,omitempty"`
	CategorySlug        string `json:"category_slug,omitempty"`
	CategoryDescription string `json:"category_description,omitempty"`
	CategoryParent      string `json:"category_parent,omitempty"`
	TypeId              string `json:"type_id,omitempty"`
}

type PageText struct {
	PageId           string `json:"page_id,omitempty"`
	PageTitle        string `json:"page_title,omitempty"`
	PageSlug         string `json:"page_slug,omitempty"`
	PageContent      string `json:"page_content,omitempty"`
	PageDescription  string `json:"page_description,omitempty"`
	PageStatus       string `json:"page_status,omitempty"`
	PagePublishYear  string `json:"page_publish_year,omitempty"`
	PagePublishMonth string `json:"page_publish_month,omitempty"`
	PagePublishDay   string `json:"page_publish_day,omitempty"`
	PageFeatureImage string `json:"page_feature_image,omitempty"`
	UserId           string `json:"user_id,omitempty"`
	TypeId           string `json:"type_id,omitempty"`
	TemplateId       string `json:"template_id,omitempty"`
	Limit            string `json:"limit,omitempty"`
	Offset           string `json:"offset,omitempty"`
}
