package routers

import (
	"gateway/internal/routers/admin"
	"gateway/internal/routers/user"
)

type RouterGroup struct {
	Admin admin.AdminRouterGroup
	User  user.UserRouterGroup
}

var RouterGroupApp = new(RouterGroup)
