package admin

type AdminRouterGroup struct {
	UserRouter
	ConfigRouter
	ComponentRouter
	ImageRouter
	MenuRouter
	MenuLocationRouter
	CategoryRouter
	TagRouter
	PagetagRouter
	PageRouter
	PagecategoryRouter
}
