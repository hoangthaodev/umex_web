'use client'

import { updateComponent } from '@/action/component.action'
import { getAllConfig, updateConfig } from '@/action/config.action'
import { ButtonType, ColorType, ComponentType, ConfigType, ContactType, DrawerType, FollowIconsType, HeaderBottomType, HeaderMainType, HTMLType, LayoutType, SearchType, SiteIdentifyType, StickyType, TopbarType, TypographyType } from '@/lib/type'
import React, { createContext, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

type themeContextType = {
  saveTheme: () => void
  isChanged: boolean,
  changedComponent: ComponentType[],
  setChangedComponent: React.Dispatch<SetStateAction<ComponentType[]>>
  // layout
  themeMode: string
  setThemeMode: React.Dispatch<SetStateAction<string>>;
  layoutMode: number,
  dropShadow: boolean,
  siteWidth: number,
  containerWidth: number,
  backgroundsColor: string | undefined,
  backgroundImage: number,
  backgroundRepeat: number,
  contentBackground: string | undefined,
  setLayoutMode: React.Dispatch<SetStateAction<number>>,
  setDropShadow: React.Dispatch<SetStateAction<boolean>>,
  setSiteWidth: React.Dispatch<SetStateAction<number>>,
  setContainerWidth: React.Dispatch<SetStateAction<number>>,
  setBackgroundsColor: React.Dispatch<SetStateAction<string | undefined>>,
  setBackgroundImage: React.Dispatch<SetStateAction<number>>,
  setBackgroundRepeat: React.Dispatch<SetStateAction<number>>,
  setContentBackground: React.Dispatch<SetStateAction<string | undefined>>,
  // style_typography
  fontBase: number,
  setFontBase: React.Dispatch<SetStateAction<number>>,
  fontBaseWeight: number,
  setFontBaseWeight: React.Dispatch<SetStateAction<number>>,
  fontBaseSize: number,
  setFontBaseSize: React.Dispatch<SetStateAction<number>>,
  fontHeadline: number,
  setFontHeadline: React.Dispatch<SetStateAction<number>>,
  fontHeadlineWeight: number,
  setFontHeadlineWeight: React.Dispatch<SetStateAction<number>>,
  fontNavigation: number,
  setFontNavigation: React.Dispatch<SetStateAction<number>>,
  fontNavigationWeight: number,
  setFontNavigationWeight: React.Dispatch<SetStateAction<number>>,
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
  topbarLayoutTextColor: number,
  setTopbarLayoutTextColor: React.Dispatch<SetStateAction<number>>,
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
  // header headermain
  mainLayoutHeight: number
  mainLayoutTextColor: number
  mainLayoutBackgroundColor: string | undefined
  mainLayoutBackgroundImage: number
  mainLayoutBackgroundRepeat: number
  mainIsUppercase: boolean
  mainNavColor: string | undefined
  mainNavColorHover: string | undefined
  mainNavHeight: number
  mainNavStyle: number
  setMainLayoutHeight: React.Dispatch<SetStateAction<number>>
  setMainLayoutTextColor: React.Dispatch<SetStateAction<number>>
  setMainLayoutBackgroundColor: React.Dispatch<SetStateAction<string | undefined>>
  setMainLayoutBackgroundImage: React.Dispatch<SetStateAction<number>>
  setMainLayoutBackgroundRepeat: React.Dispatch<SetStateAction<number>>
  setMainIsUppercase: React.Dispatch<SetStateAction<boolean>>
  setMainNavColor: React.Dispatch<SetStateAction<string | undefined>>
  setMainNavColorHover: React.Dispatch<SetStateAction<string | undefined>>
  setMainNavHeight: React.Dispatch<SetStateAction<number>>
  setMainNavStyle: React.Dispatch<SetStateAction<number>>
  // header headerbottom
  bottomLayoutHeight: number
  bottomLayoutTextColor: number
  bottomLayoutBackgroundColor: string | undefined
  bottomLayoutBackgroundImage: number
  bottomLayoutBackgroundRepeat: number
  bottomIsUppercase: boolean
  bottomNavColor: string | undefined
  bottomNavColorHover: string | undefined
  bottomNavHeight: number
  bottomNavStyle: number
  setBottomLayoutHeight: React.Dispatch<SetStateAction<number>>
  setBottomLayoutTextColor: React.Dispatch<SetStateAction<number>>
  setBottomLayoutBackgroundColor: React.Dispatch<SetStateAction<string | undefined>>
  setBottomLayoutBackgroundImage: React.Dispatch<SetStateAction<number>>
  setBottomLayoutBackgroundRepeat: React.Dispatch<SetStateAction<number>>
  setBottomIsUppercase: React.Dispatch<SetStateAction<boolean>>
  setBottomNavColor: React.Dispatch<SetStateAction<string | undefined>>
  setBottomNavColorHover: React.Dispatch<SetStateAction<string | undefined>>
  setBottomNavHeight: React.Dispatch<SetStateAction<number>>
  setBottomNavStyle: React.Dispatch<SetStateAction<number>>
  // header sticky
  stickyStyle: number,
  stickyHideScrolldown: boolean,
  stickyTopCheck: boolean,
  stickyMainCheck: boolean,
  stickyBottomCheck: boolean,
  stickyLogo: number,
  setStickyStyle: React.Dispatch<SetStateAction<number>>,
  setStickyHideScrolldown: React.Dispatch<SetStateAction<boolean>>,
  setStickyTopCheck: React.Dispatch<SetStateAction<boolean>>,
  setStickyMainCheck: React.Dispatch<SetStateAction<boolean>>,
  setStickyBottomCheck: React.Dispatch<SetStateAction<boolean>>,
  setStickyLogo: React.Dispatch<SetStateAction<number>>,
  // header bottons
  button1Text: string,
  button1Link: string,
  button1Case: number,
  button1Color: number,
  button1Style: number,
  button1Target: number,
  button1Rel: string,
  button1Radius: number,
  button1Icon: string,
  button1Size: number,
  button2Text: string,
  button2Link: string,
  button2Case: number,
  button2Color: number,
  button2Style: number,
  button2Target: number,
  button2Rel: string,
  button2Radius: number,
  button2Icon: string,
  button2Size: number,
  setButton1Text: React.Dispatch<SetStateAction<string>>,
  setButton1Link: React.Dispatch<SetStateAction<string>>,
  setButton1Case: React.Dispatch<SetStateAction<number>>,
  setButton1Color: React.Dispatch<SetStateAction<number>>,
  setButton1Style: React.Dispatch<SetStateAction<number>>,
  setButton1Target: React.Dispatch<SetStateAction<number>>,
  setButton1Rel: React.Dispatch<SetStateAction<string>>,
  setButton1Radius: React.Dispatch<SetStateAction<number>>,
  setButton1Icon: React.Dispatch<SetStateAction<string>>,
  setButton1Size: React.Dispatch<SetStateAction<number>>,
  setButton2Text: React.Dispatch<SetStateAction<string>>,
  setButton2Link: React.Dispatch<SetStateAction<string>>,
  setButton2Case: React.Dispatch<SetStateAction<number>>,
  setButton2Color: React.Dispatch<SetStateAction<number>>,
  setButton2Style: React.Dispatch<SetStateAction<number>>,
  setButton2Target: React.Dispatch<SetStateAction<number>>,
  setButton2Rel: React.Dispatch<SetStateAction<string>>,
  setButton2Radius: React.Dispatch<SetStateAction<number>>,
  setButton2Icon: React.Dispatch<SetStateAction<string>>,
  setButton2Size: React.Dispatch<SetStateAction<number>>,
  // header search
  searchStyle: number,
  searchType: number,
  searchPlaceholder: string,
  searchWidth: number,
  searchCategory: boolean,
  setSearchStyle: React.Dispatch<SetStateAction<number>>,
  setSearchType: React.Dispatch<SetStateAction<number>>,
  setSearchPlaceholder: React.Dispatch<SetStateAction<string>>,
  setSearchWidth: React.Dispatch<SetStateAction<number>>,
  setSearchCategory: React.Dispatch<SetStateAction<boolean>>,
  // header followicons
  iconStyle: number
  facebook: string
  instagram: string
  tiktok: string
  xTwitter: string
  email: string
  phone: string
  pinterest: string
  rss: string
  linkedIn: string
  youtube: string
  flickr: string
  icon500px: string
  telegram: string
  twitch: string
  discord: string
  setIconStyle: React.Dispatch<SetStateAction<number>>
  setFacebook: React.Dispatch<SetStateAction<string>>
  setInstagram: React.Dispatch<SetStateAction<string>>
  setTikTok: React.Dispatch<SetStateAction<string>>
  setXTwitter: React.Dispatch<SetStateAction<string>>
  setEmail: React.Dispatch<SetStateAction<string>>
  setPhone: React.Dispatch<SetStateAction<string>>
  setPinterest: React.Dispatch<SetStateAction<string>>
  setRss: React.Dispatch<SetStateAction<string>>
  setLinkedIn: React.Dispatch<SetStateAction<string>>
  setYouTube: React.Dispatch<SetStateAction<string>>
  setFlickr: React.Dispatch<SetStateAction<string>>
  setIcon500px: React.Dispatch<SetStateAction<string>>
  setTelegram: React.Dispatch<SetStateAction<string>>
  setTwitch: React.Dispatch<SetStateAction<string>>
  setDiscord: React.Dispatch<SetStateAction<string>>
  // header html
  htmlBlock1: number,
  htmlBlock2: number,
  htmlBlock3: number,
  htmlBlock4: number,
  html1: string,
  html2: string,
  html3: string,
  html4: string,
  html5: string,
  setHtmlBlock1: React.Dispatch<SetStateAction<number>>,
  setHtmlBlock2: React.Dispatch<SetStateAction<number>>,
  setHtmlBlock3: React.Dispatch<SetStateAction<number>>,
  setHtmlBlock4: React.Dispatch<SetStateAction<number>>,
  setHtml1: React.Dispatch<SetStateAction<string>>,
  setHtml2: React.Dispatch<SetStateAction<string>>,
  setHtml3: React.Dispatch<SetStateAction<string>>,
  setHtml4: React.Dispatch<SetStateAction<string>>,
  setHtml5: React.Dispatch<SetStateAction<string>>,
  // header contact
  contactIconStyle: number,
  contactIconSize: number,
  contactLocation: string,
  contactLocationLabel: string,
  contactEmail: string,
  contactEmailLabel: string,
  contactOpenhours: string,
  contactOpenhoursDetails: string,
  contactPhone: string,
  setContactIconStyle: React.Dispatch<SetStateAction<number>>,
  setContactIconSize: React.Dispatch<SetStateAction<number>>,
  setContactLocation: React.Dispatch<SetStateAction<string>>,
  setContactLocationLabel: React.Dispatch<SetStateAction<string>>,
  setContactEmail: React.Dispatch<SetStateAction<string>>,
  setContactEmailLabel: React.Dispatch<SetStateAction<string>>,
  setContactOpenhours: React.Dispatch<SetStateAction<string>>,
  setContactOpenhoursDetails: React.Dispatch<SetStateAction<string>>,
  setContactPhone: React.Dispatch<SetStateAction<string>>,

}
const themeContext = createContext<themeContextType | undefined>(undefined)

type themeProviderType = {
  children: React.ReactNode,
}
export function ThemeProvider({ children }: themeProviderType) {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  // layout 
  const [themeMode, setThemeMode] = useState<string>("light")
  const [layoutMode, setLayoutMode] = useState<number>(1)
  const [dropShadow, setDropShadow] = useState(false)
  const [siteWidth, setSiteWidth] = useState(1080)
  const [containerWidth, setContainerWidth] = useState(1080)
  const [backgroundsColor, setBackgroundsColor] = useState<string | undefined>(undefined)
  const [backgroundImage, setBackgroundImage] = useState<number>(0)
  const [backgroundRepeat, setBackgroundRepeat] = useState(1)
  const [contentBackground, setContentBackground] = useState<string | undefined>(undefined)
  // style_typography
  const [fontBase, setFontBase] = useState(1)
  const [fontHeadline, setFontHeadline] = useState(1)
  const [fontNavigation, setFontNavigation] = useState(1)
  const [fontBaseWeight, setFontBaseWeight] = useState(1)
  const [fontHeadlineWeight, setFontHeadlineWeight] = useState(1)
  const [fontNavigationWeight, setFontNavigationWeight] = useState(1)
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
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
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
  const [topbarLayoutTextColor, setTopbarLayoutTextColor] = useState(1)
  const [topbarLayoutBackgroundColor, setTopbarLayoutBackgroundColor] = useState<string | undefined>(undefined)
  const [topbarLayoutBackgroundImage, setTopbarLayoutBackgroundImage] = useState<number>(0)
  const [topbarLayoutBackgroundRepeat, setTopbarLayoutBackgroundRepeat] = useState(3)
  const [topbarIsUppercase, setTopbarIsUppercase] = useState(true)
  const [topbarNavColor, setTopbarNavColor] = useState<string | undefined>(undefined)
  const [topbarNavColorHover, setTopbarNavColorHover] = useState<string | undefined>(undefined)
  const [topbarNavHeight, setTopbarNavHeight] = useState(16)
  const [topbarNavStyle, setTopbarNavStyle] = useState(2)
  // header headermain
  const [mainLayoutHeight, setMainLayoutHeight] = useState(30)
  const [mainLayoutTextColor, setMainLayoutTextColor] = useState(1)
  const [mainLayoutBackgroundColor, setMainLayoutBackgroundColor] = useState<string | undefined>(undefined)
  const [mainLayoutBackgroundImage, setMainLayoutBackgroundImage] = useState(0)
  const [mainLayoutBackgroundRepeat, setMainLayoutBackgroundRepeat] = useState(3)
  const [mainIsUppercase, setMainIsUppercase] = useState(true)
  const [mainNavColor, setMainNavColor] = useState<string | undefined>(undefined)
  const [mainNavColorHover, setMainNavColorHover] = useState<string | undefined>(undefined)
  const [mainNavHeight, setMainNavHeight] = useState(16)
  const [mainNavStyle, setMainNavStyle] = useState(2)
  // header hearderbottom
  const [bottomLayoutHeight, setBottomLayoutHeight] = useState(30)
  const [bottomLayoutTextColor, setBottomLayoutTextColor] = useState(1)
  const [bottomLayoutBackgroundColor, setBottomLayoutBackgroundColor] = useState<string | undefined>(undefined)
  const [bottomLayoutBackgroundImage, setBottomLayoutBackgroundImage] = useState(0)
  const [bottomLayoutBackgroundRepeat, setBottomLayoutBackgroundRepeat] = useState(3)
  const [bottomIsUppercase, setBottomIsUppercase] = useState(true)
  const [bottomNavColor, setBottomNavColor] = useState<string | undefined>(undefined)
  const [bottomNavColorHover, setBottomNavColorHover] = useState<string | undefined>(undefined)
  const [bottomNavHeight, setBottomNavHeight] = useState(16)
  const [bottomNavStyle, setBottomNavStyle] = useState(2)
  // header sticky
  const [stickyStyle, setStickyStyle] = useState(1)
  const [stickyHideScrolldown, setStickyHideScrolldown] = useState(false)
  const [stickyTopCheck, setStickyTopCheck] = useState(false)
  const [stickyMainCheck, setStickyMainCheck] = useState(false)
  const [stickyBottomCheck, setStickyBottomCheck] = useState(false)
  const [stickyLogo, setStickyLogo] = useState(0)
  // header buttons
  const [button1Text, setButton1Text] = useState("")
  const [button1Link, setButton1Link] = useState("")
  const [button1Case, setButton1Case] = useState(1)
  const [button1Color, setButton1Color] = useState(1)
  const [button1Style, setButton1Style] = useState(1)
  const [button1Target, setButton1Target] = useState(1)
  const [button1Rel, setButton1Rel] = useState("")
  const [button1Radius, setButton1Radius] = useState(0)
  const [button1Icon, setButton1Icon] = useState("None")
  const [button1Size, setButton1Size] = useState(3)
  const [button2Text, setButton2Text] = useState("")
  const [button2Link, setButton2Link] = useState("")
  const [button2Case, setButton2Case] = useState(1)
  const [button2Color, setButton2Color] = useState(1)
  const [button2Style, setButton2Style] = useState(1)
  const [button2Target, setButton2Target] = useState(1)
  const [button2Rel, setButton2Rel] = useState("")
  const [button2Radius, setButton2Radius] = useState(0)
  const [button2Icon, setButton2Icon] = useState("None")
  const [button2Size, setButton2Size] = useState(3)
  // header search
  const [searchStyle, setSearchStyle] = useState(1)
  const [searchType, setSearchType] = useState(1)
  const [searchPlaceholder, setSearchPlaceholder] = useState("")
  const [searchWidth, setSearchWidth] = useState(33)
  const [searchCategory, setSearchCategory] = useState(false)
  // header followicons
  const [iconStyle, setIconStyle] = useState(1)
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [tiktok, setTikTok] = useState("")
  const [xTwitter, setXTwitter] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [pinterest, setPinterest] = useState("")
  const [rss, setRss] = useState("")
  const [linkedIn, setLinkedIn] = useState("")
  const [youtube, setYouTube] = useState("")
  const [flickr, setFlickr] = useState("")
  const [icon500px, setIcon500px] = useState("")
  const [telegram, setTelegram] = useState("")
  const [twitch, setTwitch] = useState("")
  const [discord, setDiscord] = useState("")
  // header html
  const [htmlBlock1, setHtmlBlock1] = useState(0)
  const [htmlBlock2, setHtmlBlock2] = useState(0)
  const [htmlBlock3, setHtmlBlock3] = useState(0)
  const [htmlBlock4, setHtmlBlock4] = useState(0)
  const [html1, setHtml1] = useState("")
  const [html2, setHtml2] = useState("")
  const [html3, setHtml3] = useState("")
  const [html4, setHtml4] = useState("")
  const [html5, setHtml5] = useState("")
  // header contact
  const [contactIconStyle, setContactIconStyle] = useState(1)
  const [contactIconSize, setContactIconSize] = useState(16)
  const [contactLocation, setContactLocation] = useState("")
  const [contactLocationLabel, setContactLocationLabel] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactEmailLabel, setContactEmailLabel] = useState("")
  const [contactOpenhours, setContactOpenhours] = useState("")
  const [contactOpenhoursDetails, setContactOpenhoursDetails] = useState("")
  const [contactPhone, setContactPhone] = useState("")

  const [isChanged, setIsChanged] = useState(false)
  const [changedComponent, setChangedComponent] = useState<ComponentType[]>([])
  const [changedLayout, setChangedLayout] = useState(false)
  const [changedTypo, setChangedTypo] = useState(false)
  const [changedColors, setChangedColors] = useState(false)
  const [changedDrawer, setChangedDrawer] = useState(false)
  const [changedTopbar, setChangedTopbar] = useState(false)
  const [changedSiteIden, setChangedSiteIden] = useState(false)
  const [changedHeadermain, setChangedHeadermain] = useState(false)
  const [changedHeaderbottom, setChangedHeaderbottom] = useState(false)
  const [changedSticky, setChangedSticky] = useState(false)
  const [changedButtons, setChangedButtons] = useState(false)
  const [changedSearch, setChangedSearch] = useState(false)
  const [changedFollowicons, setChangedFollowicons] = useState(false)
  const [changedHtml, setChangedHtml] = useState(false)
  const [changedContact, setChangedContact] = useState(false)

  const [firstMount, setFirstMount] = useState(true);
  const [listentChange, setListentChange] = useState(false)

  const layoutConfig = useRef<ConfigType>(undefined)
  const typographyConfig = useRef<ConfigType>(undefined)
  const colorConfig = useRef<ConfigType>(undefined)
  const drawerConfig = useRef<ConfigType>(undefined)
  const siteidentifyConfig = useRef<ConfigType>(undefined)
  const topbarConfig = useRef<ConfigType>(undefined)
  const headermainConfig = useRef<ConfigType>(undefined)
  const headerbottomConfig = useRef<ConfigType>(undefined)
  const stickyConfig = useRef<ConfigType>(undefined)
  const buttonsConfig = useRef<ConfigType>(undefined)
  const searchConfig = useRef<ConfigType>(undefined)
  const followiconsConfig = useRef<ConfigType>(undefined)
  const htmlConfig = useRef<ConfigType>(undefined)
  const contactConfig = useRef<ConfigType>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const size = document.documentElement.clientWidth
      setIsMobile(size <= 768)
      const data = await getAllConfig()
      if (data) {
        //layout
        layoutConfig.current = data.find(i => i.config_key === "layout")
        if (layoutConfig.current) {
          const layoutParse: LayoutType = JSON.parse(layoutConfig.current.config_value)
          document.documentElement.classList.toggle("dark", layoutParse.themeMode === "dark")
          setThemeMode(layoutParse.themeMode)
          setBackgroundsColor(layoutParse.backgroundsColor)
          setContainerWidth(layoutParse.containerWidth)
          setDropShadow(layoutParse.dropShadow)
          setLayoutMode(layoutParse.layoutMode)
          setSiteWidth(layoutParse.siteWidth)
          setBackgroundRepeat(layoutParse.backgroundRepeat)
          if (layoutParse.backgroundImage) setBackgroundImage(layoutParse.backgroundImage)
          setContentBackground(layoutParse.contentBackground)
        }
        // style_typography
        typographyConfig.current = data.find(i => i.config_key === "style_typography")
        if (typographyConfig.current) {
          const typographyParse: TypographyType = JSON.parse(typographyConfig.current.config_value)
          setFontBase(typographyParse.fontBase)
          setFontBaseWeight(typographyParse.fontBaseWeight)
          setFontBaseSize(typographyParse.fontBaseSize)
          setFontHeadline(typographyParse.fontHeadline)
          setFontHeadlineWeight(typographyParse.fontHeadlineWeight)
          setFontNavigation(typographyParse.fontNavigation)
          setFontNavigationWeight(typographyParse.fontNavigationWeight)
        }
        // style_colors
        colorConfig.current = data.find(i => i.config_key === "style_color")
        if (colorConfig.current) {
          const colorsParse: ColorType = JSON.parse(colorConfig.current.config_value)
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
        drawerConfig.current = data.find(i => i.config_key === "style_drawer")
        if (drawerConfig.current) {
          const drawerParse: DrawerType = JSON.parse(drawerConfig.current.config_value)
          setBackdropColor(drawerParse.backdropColor)
          setDrawerWidth(drawerParse.drawerWidth)
        }
        // header_site_identify
        siteidentifyConfig.current = data.find(i => i.config_key === "header_siteidentify")
        if (siteidentifyConfig.current) {
          const site_identifyParse: SiteIdentifyType = JSON.parse(siteidentifyConfig.current.config_value)
          setTitle(site_identifyParse.title)
          setDescription(site_identifyParse.description)
          if (site_identifyParse.logo) setLogo(site_identifyParse.logo)
          if (site_identifyParse.favicon) setFavicon(site_identifyParse.favicon)
          setIsDisplayBelowLogo(site_identifyParse.isDisplayBelowLogo)
          setLogoContainerWidth(site_identifyParse.logoContainerWidth)
          setLogoMaxWidth(site_identifyParse.logoMaxWidth)
          setLogoPadding(site_identifyParse.logoPadding)
          setLogoLink(site_identifyParse.logoLink)
        }
        // header_topbar
        topbarConfig.current = data.find(i => i.config_key === "header_topbar")
        if (topbarConfig.current) {
          const topbarParse: TopbarType = JSON.parse(topbarConfig.current.config_value)
          setTopbarEnable(topbarParse.topbarEnable)
          setTopbarLayoutHeight(topbarParse.topbarLayoutHeight)
          setTopbarLayoutTextColor(topbarParse.topbarLayoutTextColor)
          setTopbarLayoutBackgroundColor(topbarParse.topbarLayoutBackgroundColor)
          if (topbarParse.topbarLayoutBackgroundImage) setTopbarLayoutBackgroundImage(topbarParse.topbarLayoutBackgroundImage)
          setTopbarLayoutBackgroundRepeat(topbarParse.topbarLayoutBackgroundRepeat)
          setTopbarIsUppercase(topbarParse.topbarIsUppercase)
          setTopbarNavColor(topbarParse.topbarNavColor)
          setTopbarNavColorHover(topbarParse.topbarNavColorHover)
          setTopbarNavHeight(topbarParse.topbarNavHeight)
          setTopbarNavStyle(topbarParse.topbarNavStyle)
        }
        // header headermain
        headermainConfig.current = data.find(i => i.config_key === "header_main")
        if (headermainConfig.current) {
          const headermainParse: HeaderMainType = JSON.parse(headermainConfig.current.config_value)
          setMainLayoutHeight(headermainParse.mainLayoutHeight)
          setMainLayoutTextColor(headermainParse.mainLayoutTextColor)
          if (headermainParse.mainLayoutBackgroundColor) setMainLayoutBackgroundColor(headermainParse.mainLayoutBackgroundColor)
          if (headermainParse.mainLayoutBackgroundImage) setMainLayoutBackgroundImage(headermainParse.mainLayoutBackgroundImage)
          setMainLayoutBackgroundRepeat(headermainParse.mainLayoutBackgroundRepeat)
          setMainIsUppercase(headermainParse.mainIsUppercase)
          if (headermainParse.mainNavColor) setMainNavColor(headermainParse.mainNavColor)
          if (headermainParse.mainNavColorHover) setMainNavColorHover(headermainParse.mainNavColorHover)
          setMainNavHeight(headermainParse.mainNavHeight)
          setMainNavStyle(headermainParse.mainNavStyle)
        }
        // header headerbottom
        headerbottomConfig.current = data.find(i => i.config_key === "header_bottom")
        if (headerbottomConfig.current) {
          const headerbottomParse: HeaderBottomType = JSON.parse(headerbottomConfig.current.config_value)
          setBottomLayoutHeight(headerbottomParse.bottomLayoutHeight)
          setBottomLayoutTextColor(headerbottomParse.bottomLayoutTextColor)
          if (headerbottomParse.bottomLayoutBackgroundColor) setBottomLayoutBackgroundColor(headerbottomParse.bottomLayoutBackgroundColor)
          if (headerbottomParse.bottomLayoutBackgroundImage) setBottomLayoutBackgroundImage(headerbottomParse.bottomLayoutBackgroundImage)
          setBottomLayoutBackgroundRepeat(headerbottomParse.bottomLayoutBackgroundRepeat)
          setBottomIsUppercase(headerbottomParse.bottomIsUppercase)
          if (headerbottomParse.bottomNavColor) setBottomNavColor(headerbottomParse.bottomNavColor)
          if (headerbottomParse.bottomNavColorHover) setBottomNavColorHover(headerbottomParse.bottomNavColorHover)
          setBottomNavHeight(headerbottomParse.bottomNavHeight)
          setBottomNavStyle(headerbottomParse.bottomNavStyle)
        }
        // header sticky
        stickyConfig.current = data.find(i => i.config_key === "header_sticky")
        if (stickyConfig.current) {
          const stickyParse: StickyType = JSON.parse(stickyConfig.current.config_value)
          setStickyStyle(stickyParse.stickyStyle)
          setStickyHideScrolldown(stickyParse.stickyHideScrolldown)
          setStickyTopCheck(stickyParse.stickyTopCheck)
          setStickyMainCheck(stickyParse.stickyMainCheck)
          setStickyBottomCheck(stickyParse.stickyBottomCheck)
          if (stickyParse.stickyLogo) setStickyLogo(stickyParse.stickyLogo)
        }
        // header buttons
        buttonsConfig.current = data.find(i => i.config_key === "header_buttons")
        if (buttonsConfig.current) {
          const buttonParse: ButtonType = JSON.parse(buttonsConfig.current.config_value)
          setButton1Text(buttonParse.button1Text)
          setButton1Link(buttonParse.button1Link)
          setButton1Case(buttonParse.button1Case)
          setButton1Color(buttonParse.button1Color)
          setButton1Style(buttonParse.button1Style)
          setButton1Target(buttonParse.button1Target)
          setButton1Rel(buttonParse.button1Rel)
          setButton1Radius(buttonParse.button1Radius)
          setButton1Icon(buttonParse.button1Icon)
          setButton1Size(buttonParse.button1Size)
          setButton2Text(buttonParse.button2Text)
          setButton2Link(buttonParse.button2Link)
          setButton2Case(buttonParse.button2Case)
          setButton2Color(buttonParse.button2Color)
          setButton2Style(buttonParse.button2Style)
          setButton2Target(buttonParse.button2Target)
          setButton2Rel(buttonParse.button2Rel)
          setButton2Radius(buttonParse.button2Radius)
          setButton2Icon(buttonParse.button2Icon)
          setButton2Size(buttonParse.button2Size)
        }
        // header search
        searchConfig.current = data.find(i => i.config_key === "header_search")
        if (searchConfig.current) {
          const searchParse: SearchType = JSON.parse(searchConfig.current.config_value)
          setSearchStyle(searchParse.searchStyle)
          setSearchType(searchParse.searchType)
          setSearchPlaceholder(searchParse.searchPlaceholder)
          setSearchWidth(searchParse.searchWidth)
          setSearchCategory(searchParse.searchCategory)
        }
        // header followicons
        followiconsConfig.current = data.find(i => i.config_key === "header_followicons")
        if (followiconsConfig.current) {
          const followiconsParse: FollowIconsType = JSON.parse(followiconsConfig.current.config_value)
          setIconStyle(followiconsParse.iconStyle)
          setFacebook(followiconsParse.facebook)
          setInstagram(followiconsParse.instagram)
          setTikTok(followiconsParse.tiktok)
          setXTwitter(followiconsParse.xTwitter)
          setEmail(followiconsParse.email)
          setPhone(followiconsParse.phone)
          setPinterest(followiconsParse.pinterest)
          setRss(followiconsParse.rss)
          setLinkedIn(followiconsParse.linkedIn)
          setYouTube(followiconsParse.youtube)
          setFlickr(followiconsParse.flickr)
          setIcon500px(followiconsParse.icon500px)
          setTelegram(followiconsParse.telegram)
          setTwitch(followiconsParse.twitch)
          setDiscord(followiconsParse.discord)
        }
        // header html
        htmlConfig.current = data.find(i => i.config_key === "header_html")
        if (htmlConfig.current) {
          const htmlParse: HTMLType = JSON.parse(htmlConfig.current.config_value)
          setHtmlBlock1(htmlParse.htmlBlock1)
          setHtmlBlock2(htmlParse.htmlBlock2)
          setHtmlBlock3(htmlParse.htmlBlock3)
          setHtmlBlock4(htmlParse.htmlBlock4)
          setHtml1(htmlParse.html1)
          setHtml2(htmlParse.html2)
          setHtml3(htmlParse.html3)
          setHtml4(htmlParse.html4)
          setHtml5(htmlParse.html5)
        }
        // header contact
        contactConfig.current = data.find(i => i.config_key === "header_contact")
        if (contactConfig.current) {
          const contactParse: ContactType = JSON.parse(contactConfig.current.config_value)
          setContactIconStyle(contactParse.contactIconStyle)
          setContactIconSize(contactParse.contactIconSize)
          setContactLocation(contactParse.contactLocation)
          setContactLocationLabel(contactParse.contactLocationLabel)
          setContactEmail(contactParse.contactEmail)
          setContactEmailLabel(contactParse.contactEmailLabel)
          setContactOpenhours(contactParse.contactOpenhours)
          setContactOpenhoursDetails(contactParse.contactOpenhoursDetails)
          setContactPhone(contactParse.contactPhone)
        }

      }

      setFirstMount(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (firstMount) return
    setListentChange(true)
  }, [firstMount])

  useEffect(() => {
    if (!listentChange) return
    setIsChanged(true)
  }, [
    changedComponent, changedLayout, changedTypo, changedColors, changedDrawer, changedSiteIden, changedTopbar,
    changedLayout, changedTypo, changedColors, changedDrawer, changedSiteIden, changedTopbar, changedHeadermain, changedHeaderbottom,
    changedSticky, changedButtons, changedSearch, changedFollowicons, changedHtml, changedContact
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
    fontBase, fontHeadline, fontNavigation, fontBaseWeight, fontHeadlineWeight, fontNavigationWeight, fontBaseSize
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedColors(true)
  }, [
    primaryColor, secondaryColor, successColor, alertColor, baseColor, headlineColor, linkColor, linkColorHover
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedDrawer(true)
  }, [
    backdropColor, drawerWidth
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedSiteIden(true)
  }, [
    title, description, logo, favicon, isDisplayBelowLogo, logoContainerWidth, logoMaxWidth, logoPadding, logoLink
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedTopbar(true)
  }, [
    topbarEnable, topbarLayoutHeight, topbarLayoutTextColor, topbarLayoutBackgroundColor, topbarLayoutBackgroundImage, topbarLayoutBackgroundRepeat, topbarIsUppercase, topbarNavColor, topbarNavColorHover, topbarNavHeight, topbarNavStyle
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedHeadermain(true)
  }, [
    mainLayoutHeight, mainLayoutTextColor, mainLayoutBackgroundColor, mainLayoutBackgroundImage, mainLayoutBackgroundRepeat, mainIsUppercase, mainNavColor, mainNavColorHover, mainNavHeight, mainNavStyle,
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedHeaderbottom(true)
  }, [
    bottomLayoutHeight, bottomLayoutTextColor, bottomLayoutBackgroundColor, bottomLayoutBackgroundImage, bottomLayoutBackgroundRepeat, bottomIsUppercase, bottomNavColor, bottomNavColorHover, bottomNavHeight, bottomNavStyle,
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedSticky(true)
  }, [
    stickyStyle, stickyHideScrolldown, stickyTopCheck, stickyMainCheck, stickyBottomCheck, stickyLogo,
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedButtons(true)
  }, [
    button1Text, button1Link, button1Case, button1Color, button1Style, button1Target, button1Rel, button1Radius, button1Icon, button1Size, button2Text, button2Link, button2Case, button2Color, button2Style, button2Target, button2Rel, button2Radius, button2Icon, button2Size,
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedSearch(true)
  }, [
    searchStyle, searchType, searchPlaceholder, searchWidth, searchCategory,
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedFollowicons(true)
  }, [
    iconStyle, facebook, instagram, tiktok, xTwitter, email, phone, pinterest, rss, linkedIn, youtube, flickr, icon500px, telegram, twitch, discord,
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedHtml(true)
  }, [
    htmlBlock1, htmlBlock2, htmlBlock3, htmlBlock4, html1, html2, html3, html4, html5,
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedContact(true)
  }, [
    contactIconStyle, contactIconSize, contactLocation, contactLocationLabel, contactEmail, contactEmailLabel, contactOpenhours, contactOpenhoursDetails, contactPhone,
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
    setChangedHeadermain(false)
    setChangedHeaderbottom(false)
    setChangedSticky(false)
    setChangedButtons(false)
    setChangedSearch(false)
    setChangedFollowicons(false)
    setChangedHtml(false)
    setChangedContact(false)
  }

  const saveTheme = () => {
    // component
    if (changedComponent.length > 0) {
      changedComponent.map(i => {
        const newComponent: ComponentType = {
          component_id: i.component_id,
          component_name: i.component_name,
          component_position: i.component_position,
          component_index: i.component_index,
          component_map: i.component_map,
        }
        updateComponent(newComponent)
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
      if (!layoutConfig.current) return
      const layoutValue = JSON.stringify({
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

      const newLayoutConfig: ConfigType = {
        config_id: layoutConfig.current.config_id,
        config_key: layoutConfig.current.config_key,
        config_value: layoutValue,
        config_style: layoutConfig.current.config_style,
      }
      updateConfig(newLayoutConfig)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Layout!");
            return;
          }
        })
    }
    // stype_typography
    if (changedTypo) {
      if (!typographyConfig.current) return
      const typoValue = JSON.stringify({
        fontHeadline,
        fontHeadlineWeight,
        fontBase,
        fontBaseWeight,
        fontBaseSize,
        fontNavigation,
        fontNavigationWeight,
      })
      const newTypoConfig: ConfigType = {
        config_id: typographyConfig.current.config_id,
        config_key: typographyConfig.current.config_key,
        config_value: typoValue,
        config_style: typographyConfig.current.config_style,
      }
      updateConfig(newTypoConfig)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Typo!");
            return;
          }
        })
    }
    // style_colors
    if (changedColors) {
      if (!colorConfig.current) return
      const colorValue = JSON.stringify({
        primaryColor,
        secondaryColor,
        successColor,
        alertColor,
        baseColor,
        headlineColor,
        linkColor,
        linkColorHover,
      })
      const newColorConfig: ConfigType = {
        config_id: colorConfig.current.config_id,
        config_key: colorConfig.current.config_key,
        config_value: colorValue,
        config_style: colorConfig.current.config_style,
      }
      updateConfig(newColorConfig)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Color!");
            return;
          }
        })
    }
    // style_drawer
    if (changedDrawer) {
      if (!drawerConfig.current) return
      const drawValue = JSON.stringify({
        backdropColor,
        drawerWidth,
      })
      const newDrawConfig: ConfigType = {
        config_id: drawerConfig.current.config_id,
        config_key: drawerConfig.current.config_key,
        config_value: drawValue,
        config_style: drawerConfig.current.config_style,
      }
      updateConfig(newDrawConfig)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Draw!");
            return;
          }
        })
    }
    // header_siteItentify
    if (changedSiteIden) {
      if (!siteidentifyConfig.current) return
      const siteidenValue = JSON.stringify({
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
      const newSiteidenConfig: ConfigType = {
        config_id: siteidentifyConfig.current.config_id,
        config_key: siteidentifyConfig.current.config_key,
        config_value: siteidenValue,
        config_style: siteidentifyConfig.current.config_style,
      }
      updateConfig(newSiteidenConfig)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save SiteIden!");
            return;
          }
        })
    }
    // header_topbar
    if (changedTopbar) {
      if (!topbarConfig.current) return
      const topbarValue = JSON.stringify({
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
      const newTopbarConfig: ConfigType = {
        config_id: topbarConfig.current.config_id,
        config_key: topbarConfig.current.config_key,
        config_value: topbarValue,
        config_style: topbarConfig.current.config_style,
      }
      updateConfig(newTopbarConfig)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Topbar!");
            return;
          }
        })
    }
    // header heardermain
    if (changedHeadermain) {
      if (!headermainConfig.current) return
      const headermainValue = JSON.stringify({
        mainLayoutHeight,
        mainLayoutTextColor,
        mainLayoutBackgroundColor,
        mainLayoutBackgroundImage,
        mainLayoutBackgroundRepeat,
        mainIsUppercase,
        mainNavColor,
        mainNavColorHover,
        mainNavHeight,
        mainNavStyle,
      })
      const newHeadermainConfig: ConfigType = {
        config_id: headermainConfig.current.config_id,
        config_key: headermainConfig.current.config_key,
        config_value: headermainValue,
        config_style: headermainConfig.current.config_style,
      }
      updateConfig(newHeadermainConfig)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Headermain!");
            return;
          }
        })
    }
    // header hearderbottom
    if (changedHeaderbottom) {
      if (!headerbottomConfig.current) return
      const headerbottomValue = JSON.stringify({
        bottomLayoutHeight,
        bottomLayoutTextColor,
        bottomLayoutBackgroundColor,
        bottomLayoutBackgroundImage,
        bottomLayoutBackgroundRepeat,
        bottomIsUppercase,
        bottomNavColor,
        bottomNavColorHover,
        bottomNavHeight,
        bottomNavStyle,
      })
      const newHeaderbottomConfig: ConfigType = {
        config_id: headerbottomConfig.current.config_id,
        config_key: headerbottomConfig.current.config_key,
        config_value: headerbottomValue,
        config_style: headerbottomConfig.current.config_style,
      }
      updateConfig(newHeaderbottomConfig)
        .then(data => {
          if (!data) {
            toast.error("Fail to Save Headerbottom!");
            return;
          }
        })
    }
    // header sticky
    if (changedSticky) {
      if (!stickyConfig.current) return;
      const stickyValue = JSON.stringify({
        stickyStyle,
        stickyHideScrolldown,
        stickyTopCheck,
        stickyMainCheck,
        stickyBottomCheck,
        stickyLogo,
      })
      const newStickyConfig: ConfigType = {
        config_id: stickyConfig.current.config_id,
        config_key: stickyConfig.current.config_key,
        config_value: stickyValue,
        config_style: stickyConfig.current.config_style,
      }
      updateConfig(newStickyConfig).then(data => {
        if (!data) {
          toast.error("Fail to Save Sticky!");
          return;
        }
      })
    }
    // header buttons
    if (changedButtons) {
      if (!buttonsConfig.current) return;
      const buttonsValue = JSON.stringify({
        button1Text,
        button1Link,
        button1Case,
        button1Color,
        button1Style,
        button1Target,
        button1Rel,
        button1Radius,
        button1Icon,
        button1Size,
        button2Text,
        button2Link,
        button2Case,
        button2Color,
        button2Style,
        button2Target,
        button2Rel,
        button2Radius,
        button2Icon,
        button2Size,
      })
      const newButtonsConfig: ConfigType = {
        config_id: buttonsConfig.current.config_id,
        config_key: buttonsConfig.current.config_key,
        config_value: buttonsValue,
        config_style: buttonsConfig.current.config_style,
      }
      updateConfig(newButtonsConfig).then(data => {
        if (!data) {
          toast.error("Fail to Save Buttons!");
          return;
        }
      })
    }
    // header search
    if (changedSearch) {
      if (!searchConfig.current) return;
      const searchValue = JSON.stringify({
        searchStyle,
        searchType,
        searchPlaceholder,
        searchWidth,
        searchCategory,
      })
      const newSearchConfig: ConfigType = {
        config_id: searchConfig.current.config_id,
        config_key: searchConfig.current.config_key,
        config_value: searchValue,
        config_style: searchConfig.current.config_style,
      }
      updateConfig(newSearchConfig).then(data => {
        if (!data) {
          toast.error("Fail to Save Search!");
          return;
        }
      })
    }
    // header followicons
    if (changedFollowicons) {
      if (!followiconsConfig.current) return;
      const followiconsValue = JSON.stringify({
        iconStyle,
        facebook,
        instagram,
        tiktok,
        xTwitter,
        email,
        phone,
        pinterest,
        rss,
        linkedIn,
        youtube,
        flickr,
        icon500px,
        telegram,
        twitch,
        discord,
      })
      const newFollowiconsConfig: ConfigType = {
        config_id: followiconsConfig.current.config_id,
        config_key: followiconsConfig.current.config_key,
        config_value: followiconsValue,
        config_style: followiconsConfig.current.config_style,
      }
      updateConfig(newFollowiconsConfig).then(data => {
        if (!data) {
          toast.error("Fail to Save Followicons!");
          return;
        }
      })
    }
    // header html
    if (changedHtml) {
      if (!htmlConfig.current) return;
      const htmlValue = JSON.stringify({
        htmlBlock1,
        htmlBlock2,
        htmlBlock3,
        htmlBlock4,
        html1,
        html2,
        html3,
        html4,
        html5,
      })
      const newHtmlConfig: ConfigType = {
        config_id: htmlConfig.current.config_id,
        config_key: htmlConfig.current.config_key,
        config_value: htmlValue,
        config_style: htmlConfig.current.config_style,
      }
      updateConfig(newHtmlConfig).then(data => {
        if (!data) {
          toast.error("Fail to Save HTML!");
          return;
        }
      })
    }
    // header contact
    if (changedContact) {
      if (!contactConfig.current) return;
      const contactValue = JSON.stringify({
        contactIconStyle,
        contactIconSize,
        contactLocation,
        contactLocationLabel,
        contactEmail,
        contactEmailLabel,
        contactOpenhours,
        contactOpenhoursDetails,
        contactPhone,
      })
      const newContactConfig: ConfigType = {
        config_id: contactConfig.current.config_id,
        config_key: contactConfig.current.config_key,
        config_value: contactValue,
        config_style: contactConfig.current.config_style,
      }
      updateConfig(newContactConfig).then(data => {
        if (!data) {
          toast.error("Fail to Save Contact!");
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
      // header_headermain
      mainLayoutHeight,
      mainLayoutTextColor,
      mainLayoutBackgroundColor,
      mainLayoutBackgroundImage,
      mainLayoutBackgroundRepeat,
      mainIsUppercase,
      mainNavColor,
      mainNavColorHover,
      mainNavHeight,
      mainNavStyle,
      setMainLayoutHeight,
      setMainLayoutTextColor,
      setMainLayoutBackgroundColor,
      setMainLayoutBackgroundImage,
      setMainLayoutBackgroundRepeat,
      setMainIsUppercase,
      setMainNavColor,
      setMainNavColorHover,
      setMainNavHeight,
      setMainNavStyle,
      // header_headerbottom
      bottomLayoutHeight,
      bottomLayoutTextColor,
      bottomLayoutBackgroundColor,
      bottomLayoutBackgroundImage,
      bottomLayoutBackgroundRepeat,
      bottomIsUppercase,
      bottomNavColor,
      bottomNavColorHover,
      bottomNavHeight,
      bottomNavStyle,
      setBottomLayoutHeight,
      setBottomLayoutTextColor,
      setBottomLayoutBackgroundColor,
      setBottomLayoutBackgroundImage,
      setBottomLayoutBackgroundRepeat,
      setBottomIsUppercase,
      setBottomNavColor,
      setBottomNavColorHover,
      setBottomNavHeight,
      setBottomNavStyle,
      // header_sticky
      stickyStyle,
      stickyHideScrolldown,
      stickyTopCheck,
      stickyMainCheck,
      stickyBottomCheck,
      stickyLogo,
      setStickyStyle,
      setStickyHideScrolldown,
      setStickyTopCheck,
      setStickyMainCheck,
      setStickyBottomCheck,
      setStickyLogo,
      // header_buttons
      button1Text,
      button1Link,
      button1Case,
      button1Color,
      button1Style,
      button1Target,
      button1Rel,
      button1Radius,
      button1Icon,
      button1Size,
      button2Text,
      button2Link,
      button2Case,
      button2Color,
      button2Style,
      button2Target,
      button2Rel,
      button2Radius,
      button2Icon,
      button2Size,
      setButton1Text,
      setButton1Link,
      setButton1Case,
      setButton1Color,
      setButton1Style,
      setButton1Target,
      setButton1Rel,
      setButton1Radius,
      setButton1Icon,
      setButton1Size,
      setButton2Text,
      setButton2Link,
      setButton2Case,
      setButton2Color,
      setButton2Style,
      setButton2Target,
      setButton2Rel,
      setButton2Radius,
      setButton2Icon,
      setButton2Size,
      // header_search
      searchStyle,
      searchType,
      searchPlaceholder,
      searchWidth,
      searchCategory,
      setSearchStyle,
      setSearchType,
      setSearchPlaceholder,
      setSearchWidth,
      setSearchCategory,
      // header_followicons
      iconStyle,
      facebook,
      instagram,
      tiktok,
      xTwitter,
      email,
      phone,
      pinterest,
      rss,
      linkedIn,
      youtube,
      flickr,
      icon500px,
      telegram,
      twitch,
      discord,
      setIconStyle,
      setFacebook,
      setInstagram,
      setTikTok,
      setXTwitter,
      setEmail,
      setPhone,
      setPinterest,
      setRss,
      setLinkedIn,
      setYouTube,
      setFlickr,
      setIcon500px,
      setTelegram,
      setTwitch,
      setDiscord,
      // header_html
      htmlBlock1,
      htmlBlock2,
      htmlBlock3,
      htmlBlock4,
      html1,
      html2,
      html3,
      html4,
      html5,
      setHtmlBlock1,
      setHtmlBlock2,
      setHtmlBlock3,
      setHtmlBlock4,
      setHtml1,
      setHtml2,
      setHtml3,
      setHtml4,
      setHtml5,
      // header_contact
      contactIconStyle,
      contactIconSize,
      contactLocation,
      contactLocationLabel,
      contactEmail,
      contactEmailLabel,
      contactOpenhours,
      contactOpenhoursDetails,
      contactPhone,
      setContactIconStyle,
      setContactIconSize,
      setContactLocation,
      setContactLocationLabel,
      setContactEmail,
      setContactEmailLabel,
      setContactOpenhours,
      setContactOpenhoursDetails,
      setContactPhone,
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