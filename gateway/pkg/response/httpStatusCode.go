package response

var (
	ErrCodeSuccess             = 2000
	ErrCodeGetFail             = 2001
	ErrCodeCreateFail          = 2002
	ErrCodeUpdateFail          = 2003
	ErrCodeDeleteFail          = 2004
	ErrCodeUserInputFail       = 3001
	ErrCodeUserPermisionFail   = 3002
	ErrCodeRefreshTokenRequire = 4001
)

var msg = map[int]string{
	ErrCodeSuccess:             "Successfully",
	ErrCodeGetFail:             "Get data failed",
	ErrCodeCreateFail:          "Create data failed",
	ErrCodeUpdateFail:          "Update data failed",
	ErrCodeDeleteFail:          "Delete data failed",
	ErrCodeUserInputFail:       "Data input failed",
	ErrCodeUserPermisionFail:   "Permissionision failed",
	ErrCodeRefreshTokenRequire: "Refresh token require",
}
