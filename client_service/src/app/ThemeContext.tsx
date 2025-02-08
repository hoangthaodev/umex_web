'use client'
import { getConfigByKey } from '@/actions/config.action'
import { getImageById } from '@/actions/image.action'
import { ColorType, DrawerType, ImageType, LayoutType, TypographyType } from '@/lib/types'
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

}
const themeContext = createContext<themeContextType | undefined>(undefined)

type themeProviderType = {
  children: React.ReactNode,
}
export function ThemeProvider({ children }: themeProviderType) {
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

  useEffect(() => {
    const getData = async () => {
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
    }
    getData()
  }, [])
  return (
    <themeContext.Provider value={{
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