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
