package response

var (
	ErrCodeSuccess       = 2000
	ErrCodeGetFail       = 2001
	ErrCodeCreateFail    = 2002
	ErrCodeUpdateFail    = 2003
	ErrCodeDeleteFail    = 2004
	ErrCodeInputFail     = 3001
	ErrCodePermisionFail = 3002
)

var msg = map[int]string{
	ErrCodeSuccess:       "Successfully",
	ErrCodeGetFail:       "Get data failed",
	ErrCodeCreateFail:    "Create data failed",
	ErrCodeUpdateFail:    "Update data failed",
	ErrCodeDeleteFail:    "Delete data failed",
	ErrCodeInputFail:     "Data input failed",
	ErrCodePermisionFail: "Permissionision failed",
}
