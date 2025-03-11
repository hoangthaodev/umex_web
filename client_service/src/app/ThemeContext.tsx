'use client'
import { updateComponent } from '@/actions/component.action'
import { getAllConfig, updateConfigByKey } from '@/actions/config.action'
import { ColorType, ComponentType, ConfigType, DrawerType, LayoutType, SiteIdentifyType, TopbarType, TypographyType } from '@/lib/types'
import React, { createContext, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

type themeContextType = {
  saveTheme: () => void
  isChanged: boolean,
  changedComponent: ComponentType[],
  setChangedComponent: React.Dispatch<SetStateAction<ComponentType[]>>
  // layout
  themeMode: string
  setThemeMode: React.Dispatch<SetStateAction<string>>;
  layoutMode: string,
  dropShadow: boolean,
  siteWidth: number,
  containerWidth: number,
  backgroundsColor: string | undefined,
  backgroundImage: number,
  backgroundRepeat: string,
  contentBackground: string | undefined,
  setLayoutMode: React.Dispatch<SetStateAction<string>>,
  setDropShadow: React.Dispatch<SetStateAction<boolean>>,
  setSiteWidth: React.Dispatch<SetStateAction<number>>,
  setContainerWidth: React.Dispatch<SetStateAction<number>>,
  setBackgroundsColor: React.Dispatch<SetStateAction<string | undefined>>,
  setBackgroundImage: React.Dispatch<SetStateAction<number>>,
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
  logo: number,
  setLogo: React.Dispatch<SetStateAction<number>>,
  favicon: number,
  setFavicon: React.Dispatch<SetStateAction<number>>,
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
  topbarLayoutBackgroundImage: number,
  setTopbarLayoutBackgroundImage: React.Dispatch<SetStateAction<number>>,
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
  const [backgroundImage, setBackgroundImage] = useState<number>(0)
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
  const [logo, setLogo] = useState<number>(0)
  const [favicon, setFavicon] = useState<number>(0)
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
  const [topbarLayoutBackgroundImage, setTopbarLayoutBackgroundImage] = useState<number>(0)
  const [topbarLayoutBackgroundRepeat, setTopbarLayoutBackgroundRepeat] = useState(3)
  const [topbarIsUppercase, setTopbarIsUppercase] = useState(true)
  const [topbarNavColor, setTopbarNavColor] = useState<string | undefined>(undefined)
  const [topbarNavColorHover, setTopbarNavColorHover] = useState<string | undefined>(undefined)
  const [topbarNavHeight, setTopbarNavHeight] = useState(16)
  const [topbarNavStyle, setTopbarNavStyle] = useState(2)

  const [isChanged, setIsChanged] = useState(false)
  const [changedComponent, setChangedComponent] = useState<ComponentType[]>([])
  const [changedLayout, setChangedLayout] = useState(false)
  const [changedTypo, setChangedTypo] = useState(false)
  const [changedColors, setChangedColors] = useState(false)
  const [changedDrawer, setChangedDrawer] = useState(false)
  const [changedTopbar, setChangedTopbar] = useState(false)
  const [changedSiteIden, setChangedSiteIden] = useState(false)

  const firstMount = useRef(true);
  const [listentChange, setListentChange] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const size = document.documentElement.clientWidth
      setIsMobile(size <= 768)
      const data: ConfigType[] = await getAllConfig()
      //layout
      const layout = data.find(i => i.config_key === "layout")
      if (layout) {
        const layoutParse: LayoutType = JSON.parse(layout.config_value)
        document.documentElement.classList.toggle("dark", layoutParse.themeMode === "dark")
        setThemeMode(layoutParse.themeMode)
        setBackgroundsColor(layoutParse.backgroundsColor)
        setContainerWidth(layoutParse.containerWidth)
        setDropShadow(layoutParse.dropShadow)
        setLayoutMode(layoutParse.layoutMode)
        setSiteWidth(layoutParse.siteWidth)
        setBackgroundRepeat(layoutParse.backgroundRepeat)
        layoutParse.backgroundImage && setBackgroundImage(layoutParse.backgroundImage)
        setContentBackground(layoutParse.contentBackground)
      }
      // style_typography
      const typography = data.find(i => i.config_key === "style_typography")
      if (typography) {
        const typographyParse: TypographyType = JSON.parse(typography.config_value)
        setFontBase(typographyParse.fontBase)
        setFontBaseWeight(typographyParse.fontBaseWeight)
        setFontBaseSize(typographyParse.fontBaseSize)
        setFontHeadline(typographyParse.fontHeadline)
        setFontHeadlineWeight(typographyParse.fontHeadlineWeight)
        setFontNavigation(typographyParse.fontNavigation)
        setFontNavigationWeight(typographyParse.fontNavigationWeight)
      }
      // style_colors
      const colors = data.find(i => i.config_key === "style_color")
      if (colors) {
        const colorsParse: ColorType = JSON.parse(colors.config_value)
        setPrimaryColor(colorsParse.primaryColor)
        setSecondaryColor(colorsParse.secondaryColor)
        setSuccessColor(colorsParse.successColor)
        setAlertColor(colorsParse.alertColor)
        setBaseColor(colorsParse.baseColor)
        setHeadlineColor(colorsParse.headlineColor)
        setLinkColor(colorsParse.linkColor)
        setLinkColorHover(colorsParse.linkColorHover)
      }
      // style_drawer
      const drawer = data.find(i => i.config_key === "style_drawer")
      if (drawer) {
        const drawerParse: DrawerType = JSON.parse(drawer.config_value)
        setBackdropColor(drawerParse.backdropColor)
        setDrawerWidth(drawerParse.drawerWidth)
      }
      // header_site_identify
      const site_identify = data.find(i => i.config_key === "header_siteidentify")
      if (site_identify) {
        const site_identifyParse: SiteIdentifyType = JSON.parse(site_identify.config_value)
        setTitle(site_identifyParse.title)
        setDescription(site_identifyParse.description)
        site_identifyParse.logo && setLogo(site_identifyParse.logo)
        site_identifyParse.favicon && setFavicon(site_identifyParse.favicon)
        setIsDisplayBelowLogo(site_identifyParse.isDisplayBelowLogo)
        setLogoContainerWidth(site_identifyParse.logoContainerWidth)
        setLogoMaxWidth(site_identifyParse.logoMaxWidth)
        setLogoPadding(site_identifyParse.logoPadding)
        setLogoLink(site_identifyParse.logoLink)
      }
      // header_topbar
      const topbar = data.find(i => i.config_key === "header_topbar")
      if (topbar) {
        const topbarParse: TopbarType = JSON.parse(topbar.config_value)
        setTopbarEnable(topbarParse.topbarEnable)
        setTopbarLayoutHeight(topbarParse.topbarLayoutHeight)
        setTopbarLayoutTextColor(topbarParse.topbarLayoutTextColor)
        setTopbarLayoutBackgroundColor(topbarParse.topbarLayoutBackgroundColor)
        topbarParse.topbarLayoutBackgroundImage && setTopbarLayoutBackgroundImage(topbarParse.topbarLayoutBackgroundImage)
        setTopbarLayoutBackgroundRepeat(topbarParse.topbarLayoutBackgroundRepeat)
        setTopbarIsUppercase(topbarParse.topbarIsUppercase)
        setTopbarNavColor(topbarParse.topbarNavColor)
        setTopbarNavColorHover(topbarParse.topbarNavColorHover)
        setTopbarNavHeight(topbarParse.topbarNavHeight)
        setTopbarNavStyle(topbarParse.topbarNavStyle)
      }

      firstMount.current = false
    }
    getData()
  }, [])

  useEffect(() => {
    if (firstMount.current) return
    setListentChange(true)
  }, [firstMount.current])

  useEffect(() => {
    if (!listentChange) return
    setIsChanged(true)
  }, [
    changedComponent, changedLayout, changedTypo, changedColors, changedDrawer, changedSiteIden, changedTopbar
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedLayout(true)
  }, [
    themeMode, layoutMode, dropShadow, siteWidth, containerWidth, backgroundsColor, backgroundImage, backgroundRepeat, contentBackground,
  ])
  useEffect(() => {
    if (!listentChange) return
    setChangedTypo(true)
  }, [
    fontBase, fontHeadline, fontNavigation, fontBaseWeight, fontHeadlineWeight, fontNavigationWeight, fontBaseSize,
  ])
  useEffect(() => {
    if (!listentChange) return
    setChangedColors(true)
  }, [
    primaryColor, secondaryColor, successColor, alertColor, baseColor, headlineColor, linkColor, linkColorHover,
  ])
  useEffect(() => {
    if (!listentChange) return
    setChangedDrawer(true)
  }, [
    backdropColor, drawerWidth,
  ])
  useEffect(() => {
    if (!listentChange) return
    setChangedSiteIden(true)
  }, [
    title, description, logo, favicon, isDisplayBelowLogo, logoContainerWidth, logoMaxWidth, logoPadding, logoLink,
  ])
  useEffect(() => {
    if (!listentChange) return
    setChangedTopbar(true)
  }, [
    topbarEnable, topbarLayoutHeight, topbarLayoutTextColor, topbarLayoutBackgroundColor, topbarLayoutBackgroundImage, topbarLayoutBackgroundRepeat, topbarIsUppercase, topbarNavColor, topbarNavColorHover, topbarNavHeight, topbarNavStyle,
  ])

  const setChangedFailse = () => {
    setIsChanged(false)
    setChangedComponent([])
    setChangedLayout(false)
    setChangedTypo(false)
    setChangedColors(false)
    setChangedDrawer(false)
    setChangedSiteIden(false)
    setChangedTopbar(false)
  }

  const saveTheme = () => {
    // component
    if (changedComponent.length > 0) {
      changedComponent.map(i => {
        updateComponent(i.component_id, i.component_name, i.component_position, i.component_index, i.component_map)
          .then(data => {
            if (!data) {
              toast.error("Fail to Save Comp!");
              return;
            }
          })
      })
    }
    // layout
    if (changedLayout) {
      const layout = JSON.stringify({
        themeMode,
        layoutMode,
        dropShadow,
        siteWidth,
        containerWidth,
        backgroundsColor,
        backgroundImage,
        contentBackground,
        backgroundRepeat,
      })
      updateConfigByKey("layout", layout)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Layout!");
            return;
          }
        })
    }
    // stype_typography
    if (changedTypo) {
      const typo = JSON.stringify({
        fontHeadline,
        fontHeadlineWeight,
        fontBase,
        fontBaseWeight,
        fontBaseSize,
        fontNavigation,
        fontNavigationWeight,
      })
      updateConfigByKey("style_typography", typo)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Typo!");
            return;
          }
        })
    }
    // style_colors
    if (changedColors) {
      const color = JSON.stringify({
        primaryColor,
        secondaryColor,
        successColor,
        alertColor,
        baseColor,
        headlineColor,
        linkColor,
        linkColorHover,
      })
      updateConfigByKey("style_color", color)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Color!");
            return;
          }
        })
    }
    // style_drawer
    if (changedDrawer) {
      const draw = JSON.stringify({
        backdropColor,
        drawerWidth,
      })
      updateConfigByKey("style_drawer", draw)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Draw!");
            return;
          }
        })
    }
    // header_siteItentify
    if (changedSiteIden) {
      const siteiden = JSON.stringify({
        title,
        description,
        logo,
        favicon,
        isDisplayBelowLogo,
        logoContainerWidth,
        logoMaxWidth,
        logoPadding,
        logoLink
      })
      updateConfigByKey("header_siteidentify", siteiden)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save SiteIden!");
            return;
          }
        })
    }
    // header_topbar
    if (changedTopbar) {
      const topbar = JSON.stringify({
        topbarEnable,
        topbarLayoutHeight,
        topbarLayoutTextColor,
        topbarLayoutBackgroundColor,
        topbarLayoutBackgroundImage,
        topbarLayoutBackgroundRepeat,
        topbarIsUppercase,
        topbarNavColor,
        topbarNavColorHover,
        topbarNavHeight,
        topbarNavStyle,
      })
      updateConfigByKey("header_topbar", topbar)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Topbar!");
            return;
          }
        })
    }

    setChangedFailse()
    toast.success("Save Change Successfully!")
  }

  return (
    <themeContext.Provider value={{
      isMobile, setIsMobile, saveTheme, isChanged, changedComponent, setChangedComponent,
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