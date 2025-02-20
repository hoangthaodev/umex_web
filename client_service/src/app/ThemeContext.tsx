'use client'
import { getConfigByKey } from '@/actions/config.action'
import { getImageById } from '@/actions/image.action'
import { ColorType, DrawerType, ImageType, LayoutType, SiteIdentifyType, TopbarType, TypographyType } from '@/lib/types'
import React, { createContext, SetStateAction, useContext, useEffect, useState } from 'react'

type themeContextType = {
  // layout
  themeMode: string
  setThemeMode: React.Dispatch<SetStateAction<string>>;
  layoutMode: string,
  dropShadow: boolean,
  siteWidth: number,
  containerWidth: number,
  backgroundsColor: string | undefined,
  backgroundImage: ImageType | undefined,
  backgroundRepeat: string,
  contentBackground: string | undefined,
  setLayoutMode: React.Dispatch<SetStateAction<string>>,
  setDropShadow: React.Dispatch<SetStateAction<boolean>>,
  setSiteWidth: React.Dispatch<SetStateAction<number>>,
  setContainerWidth: React.Dispatch<SetStateAction<number>>,
  setBackgroundsColor: React.Dispatch<SetStateAction<string | undefined>>,
  setBackgroundImage: React.Dispatch<SetStateAction<ImageType | undefined>>,
  setBackgroundRepeat: React.Dispatch<SetStateAction<string>>,
  setContentBackground: React.Dispatch<SetStateAction<string | undefined>>,
  // style_typography
  fontBase: string,
  setFontBase: React.Dispatch<SetStateAction<string>>,
  fontBaseWeight: string,
  setFontBaseWeight: React.Dispatch<SetStateAction<string>>,
  fontBaseSize: number,
  setFontBaseSize: React.Dispatch<SetStateAction<number>>,
  fontHeadline: string,
  setFontHeadline: React.Dispatch<SetStateAction<string>>,
  fontHeadlineWeight: string,
  setFontHeadlineWeight: React.Dispatch<SetStateAction<string>>,
  fontNavigation: string,
  setFontNavigation: React.Dispatch<SetStateAction<string>>,
  fontNavigationWeight: string,
  setFontNavigationWeight: React.Dispatch<SetStateAction<string>>,
  // style_colors
  primaryColor: string | undefined,
  setPrimaryColor: React.Dispatch<SetStateAction<string | undefined>>,
  secondaryColor: string | undefined,
  setSecondaryColor: React.Dispatch<SetStateAction<string | undefined>>,
  successColor: string | undefined,
  setSuccessColor: React.Dispatch<SetStateAction<string | undefined>>,
  alertColor: string | undefined,
  setAlertColor: React.Dispatch<SetStateAction<string | undefined>>,
  baseColor: string | undefined,
  setBaseColor: React.Dispatch<SetStateAction<string | undefined>>,
  headlineColor: string | undefined,
  setHeadlineColor: React.Dispatch<SetStateAction<string | undefined>>,
  linkColor: string | undefined,
  setLinkColor: React.Dispatch<SetStateAction<string | undefined>>,
  linkColorHover: string | undefined,
  setLinkColorHover: React.Dispatch<SetStateAction<string | undefined>>,
  // style_drawer
  backdropColor: string | undefined,
  setBackdropColor: React.Dispatch<SetStateAction<string | undefined>>,
  drawerWidth: number,
  setDrawerWidth: React.Dispatch<SetStateAction<number>>,
  isMobile: boolean,
  setIsMobile: React.Dispatch<SetStateAction<boolean>>,
  // header_site_identify
  title: string,
  setTitle: React.Dispatch<SetStateAction<string>>,
  description: string,
  setDescription: React.Dispatch<SetStateAction<string>>,
  logo: ImageType | undefined,
  setLogo: React.Dispatch<SetStateAction<ImageType | undefined>>,
  favicon: ImageType | undefined,
  setFavicon: React.Dispatch<SetStateAction<ImageType | undefined>>,
  isDisplayBelowLogo: boolean,
  setIsDisplayBelowLogo: React.Dispatch<SetStateAction<boolean>>,
  logoContainerWidth: number,
  setLogoContainerWidth: React.Dispatch<SetStateAction<number>>,
  logoMaxWidth: string,
  setLogoMaxWidth: React.Dispatch<SetStateAction<string>>,
  logoPadding: number,
  setLogoPadding: React.Dispatch<SetStateAction<number>>,
  logoLink: string,
  setLogoLink: React.Dispatch<SetStateAction<string>>,
  // header_topbar
  topbarEnable: boolean,
  setTopbarEnable: React.Dispatch<SetStateAction<boolean>>,
  topbarLayoutHeight: number,
  setTopbarLayoutHeight: React.Dispatch<SetStateAction<number>>,
  topbarLayoutTextColor: string,
  setTopbarLayoutTextColor: React.Dispatch<SetStateAction<string>>,
  topbarLayoutBackgroundColor: string | undefined,
  setTopbarLayoutBackgroundColor: React.Dispatch<SetStateAction<string | undefined>>,
  topbarLayoutBackgroundImage: ImageType | undefined,
  setTopbarLayoutBackgroundImage: React.Dispatch<SetStateAction<ImageType | undefined>>,
  topbarLayoutBackgroundRepeat: number,
  setTopbarLayoutBackgroundRepeat: React.Dispatch<SetStateAction<number>>,
  topbarIsUppercase: boolean,
  setTopbarIsUppercase: React.Dispatch<SetStateAction<boolean>>,
  topbarNavColor: string | undefined,
  setTopbarNavColor: React.Dispatch<SetStateAction<string | undefined>>,
  topbarNavColorHover: string | undefined,
  setTopbarNavColorHover: React.Dispatch<SetStateAction<string | undefined>>,
  topbarNavHeight: number,
  setTopbarNavHeight: React.Dispatch<SetStateAction<number>>,
  topbarNavStyle: number,
  setTopbarNavStyle: React.Dispatch<SetStateAction<number>>,


}
const themeContext = createContext<themeContextType | undefined>(undefined)

type themeProviderType = {
  children: React.ReactNode,
}
export function ThemeProvider({ children }: themeProviderType) {
  const [isMobile, setIsMobile] = useState(false)
  // layout 
  const [themeMode, setThemeMode] = useState("light")
  const [layoutMode, setLayoutMode] = useState("0")
  const [dropShadow, setDropShadow] = useState(false)
  const [siteWidth, setSiteWidth] = useState(1080)
  const [containerWidth, setContainerWidth] = useState(1080)
  const [backgroundsColor, setBackgroundsColor] = useState<string | undefined>(undefined)
  const [backgroundImage, setBackgroundImage] = useState<ImageType | undefined>(undefined)
  const [backgroundRepeat, setBackgroundRepeat] = useState("0")
  const [contentBackground, setContentBackground] = useState<string | undefined>(undefined)
  // style_typography
  const [fontBase, setFontBase] = useState("0")
  const [fontHeadline, setFontHeadline] = useState("0")
  const [fontNavigation, setFontNavigation] = useState("0")
  const [fontBaseWeight, setFontBaseWeight] = useState("0")
  const [fontHeadlineWeight, setFontHeadlineWeight] = useState("0")
  const [fontNavigationWeight, setFontNavigationWeight] = useState("0")
  const [fontBaseSize, setFontBaseSize] = useState(100)
  // style_colors
  const [primaryColor, setPrimaryColor] = useState<string | undefined>(undefined)
  const [secondaryColor, setSecondaryColor] = useState<string | undefined>(undefined)
  const [successColor, setSuccessColor] = useState<string | undefined>(undefined)
  const [alertColor, setAlertColor] = useState<string | undefined>(undefined)
  const [baseColor, setBaseColor] = useState<string | undefined>(undefined)
  const [headlineColor, setHeadlineColor] = useState<string | undefined>(undefined)
  const [linkColor, setLinkColor] = useState<string | undefined>(undefined)
  const [linkColorHover, setLinkColorHover] = useState<string | undefined>(undefined)
  // style_drawer
  const [backdropColor, setBackdropColor] = useState<string | undefined>(undefined)
  const [drawerWidth, setDrawerWidth] = useState(300)
  // header_site_identify
  const [title, setTitle] = useState("/")
  const [description, setDescription] = useState("/")
  const [logo, setLogo] = useState<ImageType | undefined>(undefined)
  const [favicon, setFavicon] = useState<ImageType | undefined>(undefined)
  const [isDisplayBelowLogo, setIsDisplayBelowLogo] = useState(false)
  const [logoContainerWidth, setLogoContainerWidth] = useState(200)
  const [logoMaxWidth, setLogoMaxWidth] = useState("")
  const [logoPadding, setLogoPadding] = useState(0)
  const [logoLink, setLogoLink] = useState("")
  // header_topbar
  const [topbarEnable, setTopbarEnable] = useState(false)
  const [topbarLayoutHeight, setTopbarLayoutHeight] = useState(30)
  const [topbarLayoutTextColor, setTopbarLayoutTextColor] = useState<string>("0")
  const [topbarLayoutBackgroundColor, setTopbarLayoutBackgroundColor] = useState<string | undefined>(undefined)
  const [topbarLayoutBackgroundImage, setTopbarLayoutBackgroundImage] = useState<ImageType | undefined>(undefined)
  const [topbarLayoutBackgroundRepeat, setTopbarLayoutBackgroundRepeat] = useState(3)
  const [topbarIsUppercase, setTopbarIsUppercase] = useState(true)
  const [topbarNavColor, setTopbarNavColor] = useState<string | undefined>(undefined)
  const [topbarNavColorHover, setTopbarNavColorHover] = useState<string | undefined>(undefined)
  const [topbarNavHeight, setTopbarNavHeight] = useState(16)
  const [topbarNavStyle, setTopbarNavStyle] = useState(2)

  useEffect(() => {
    const getData = async () => {
      const size = document.documentElement.clientWidth
      setIsMobile(size <= 768)
      //layout
      const layout = await getConfigByKey("layout")
      const layoutParse: LayoutType = JSON.parse(layout.config_value)
      document.documentElement.classList.toggle("dark", layoutParse.themeMode === "dark")
      setThemeMode(layoutParse.themeMode)
      setBackgroundsColor(layoutParse.backgroundsColor)
      setContainerWidth(layoutParse.containerWidth)
      setDropShadow(layoutParse.dropShadow)
      setLayoutMode(layoutParse.layoutMode)
      setSiteWidth(layoutParse.siteWidth)
      setBackgroundRepeat(layoutParse.backgroundRepeat)
      setBackgroundImage(await getImageById(layoutParse.backgroundImage))
      setContentBackground(layoutParse.contentBackground)
      // style_typography
      const typography = await getConfigByKey("style_typography")
      const typographyParse: TypographyType = JSON.parse(typography.config_value)
      setFontBase(typographyParse.fontBase)
      setFontBaseWeight(typographyParse.fontBaseWeight)
      setFontBaseSize(typographyParse.fontBaseSize)
      setFontHeadline(typographyParse.fontHeadline)
      setFontHeadlineWeight(typographyParse.fontHeadlineWeight)
      setFontNavigation(typographyParse.fontNavigation)
      setFontNavigationWeight(typographyParse.fontNavigationWeight)
      // style_colors
      const colors = await getConfigByKey("style_color")
      const colorsParse: ColorType = JSON.parse(colors.config_value)
      setPrimaryColor(colorsParse.primaryColor)
      setSecondaryColor(colorsParse.secondaryColor)
      setSuccessColor(colorsParse.successColor)
      setAlertColor(colorsParse.alertColor)
      setBaseColor(colorsParse.baseColor)
      setHeadlineColor(colorsParse.headlineColor)
      setLinkColor(colorsParse.linkColor)
      setLinkColorHover(colorsParse.linkColorHover)
      // style_drawer
      const drawer = await getConfigByKey("style_drawer")
      const drawerParse: DrawerType = JSON.parse(drawer.config_value)
      setBackdropColor(drawerParse.backdropColor)
      setDrawerWidth(drawerParse.drawerWidth)
      // header_site_identify
      const site_identify = await getConfigByKey("header_siteidentify")
      const site_identifyParse: SiteIdentifyType = JSON.parse(site_identify.config_value)
      setTitle(site_identifyParse.title)
      setDescription(site_identifyParse.description)
      setLogo(await getImageById(site_identifyParse.logo))
      setFavicon(await getImageById(site_identifyParse.favicon))
      setIsDisplayBelowLogo(site_identifyParse.isDisplayBelowLogo)
      setLogoContainerWidth(site_identifyParse.logoContainerWidth)
      setLogoMaxWidth(site_identifyParse.logoMaxWidth)
      setLogoPadding(site_identifyParse.logoPadding)
      setLogoLink(site_identifyParse.logoLink)
      // header_topbar
      const topbar = await getConfigByKey("header_topbar")
      const topbarParse: TopbarType = JSON.parse(topbar.config_value)
      setTopbarEnable(topbarParse.topbarEnable)
      setTopbarLayoutHeight(topbarParse.topbarLayoutHeight)
      setTopbarLayoutTextColor(topbarParse.topbarLayoutTextColor)
      setTopbarLayoutBackgroundColor(topbarParse.topbarLayoutBackgroundColor)
      setTopbarLayoutBackgroundImage(await getImageById(topbarParse.topbarLayoutBackgroundImage))
      setTopbarLayoutBackgroundRepeat(topbarParse.topbarLayoutBackgroundRepeat)
      setTopbarIsUppercase(topbarParse.topbarIsUppercase)
      setTopbarNavColor(topbarParse.topbarNavColor)
      setTopbarNavColorHover(topbarParse.topbarNavColorHover)
      setTopbarNavHeight(topbarParse.topbarNavHeight)
      setTopbarNavStyle(topbarParse.topbarNavStyle)
    }
    getData()
  }, [])
  return (
    <themeContext.Provider value={{
      isMobile, setIsMobile,
      // layout
      themeMode,
      setThemeMode,
      layoutMode,
      setLayoutMode,
      dropShadow,
      setDropShadow,
      siteWidth,
      setSiteWidth,
      containerWidth,
      setContainerWidth,
      backgroundsColor,
      setBackgroundsColor,
      backgroundImage,
      setBackgroundImage,
      backgroundRepeat,
      setBackgroundRepeat,
      contentBackground,
      setContentBackground,
      // style_typography
      fontBase,
      setFontBase,
      fontBaseWeight,
      setFontBaseWeight,
      fontBaseSize,
      setFontBaseSize,
      fontHeadline,
      setFontHeadline,
      fontHeadlineWeight,
      setFontHeadlineWeight,
      fontNavigation,
      setFontNavigation,
      fontNavigationWeight,
      setFontNavigationWeight,
      // style_colors
      primaryColor,
      setPrimaryColor,
      secondaryColor,
      setSecondaryColor,
      successColor,
      setSuccessColor,
      alertColor,
      setAlertColor,
      baseColor,
      setBaseColor,
      headlineColor,
      setHeadlineColor,
      linkColor,
      setLinkColor,
      linkColorHover,
      setLinkColorHover,
      // style_drawer
      backdropColor,
      setBackdropColor,
      drawerWidth,
      setDrawerWidth,
      // header_site_identify
      title,
      setTitle,
      description,
      setDescription,
      logo,
      setLogo,
      favicon,
      setFavicon,
      isDisplayBelowLogo,
      setIsDisplayBelowLogo,
      logoContainerWidth,
      setLogoContainerWidth,
      logoMaxWidth,
      setLogoMaxWidth,
      logoPadding,
      setLogoPadding,
      logoLink,
      setLogoLink,
      // header_topbar
      topbarEnable,
      setTopbarEnable,
      topbarLayoutHeight,
      setTopbarLayoutHeight,
      topbarLayoutTextColor,
      setTopbarLayoutTextColor,
      topbarLayoutBackgroundColor,
      setTopbarLayoutBackgroundColor,
      topbarLayoutBackgroundImage,
      setTopbarLayoutBackgroundImage,
      topbarLayoutBackgroundRepeat,
      setTopbarLayoutBackgroundRepeat,
      topbarIsUppercase,
      setTopbarIsUppercase,
      topbarNavColor,
      setTopbarNavColor,
      topbarNavColorHover,
      setTopbarNavColorHover,
      topbarNavHeight,
      setTopbarNavHeight,
      topbarNavStyle,
      setTopbarNavStyle,
    }}>
      {children}
    </themeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context;
}