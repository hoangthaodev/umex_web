package admin

type AdminRouterGroup struct {
	UserRouter
	ConfigRouter
	ComponentRouter
	ImageRouter
	MenuRouter
	MenuLocationRouter
	CategoryRouter
	TypeRouter
	TagRouter
	PagetagRouter
	PageRouter
	PagecategoryRouter
}
