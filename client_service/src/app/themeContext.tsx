'use client'

import { getAllComponent, updateComponent } from '@/action/component.action'
import { getAllConfig, updateConfig } from '@/action/config.action'
import { ButtonType, ColorType, ComponentType, ConfigType, ContactType, DrawerType, FollowIconsType, FooterType, HeaderBottomType, HeaderMainType, HomepageType, HTMLType, LayoutType, NaviconType, SearchType, ShareType, SiteIdentifyType, StickyType, TopbarType, TypographyType, VerticalType } from '@/lib/type'
import React, { createContext, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

type themeContextType = {
  saveTheme: () => void
  isChanged: boolean,
  // layout
  themeMode: number
  setThemeMode: React.Dispatch<SetStateAction<number>>;
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
  logoMaxWidth: number | undefined,
  setLogoMaxWidth: React.Dispatch<SetStateAction<number | undefined>>,
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
  // header vertical
  verticalOpenerIcon: number,
  verticalOpenerHeight: number,
  verticalOpenerWidth: number,
  verticalOpenerTagline: string,
  verticalOpenerText: string,
  verticalOpenerBaseColor: number,
  verticalOpenerColor: string | undefined
  verticalOpenerBackgroundColor: string | undefined,
  verticalFlyoutKeepOpen: boolean,
  verticalFlyoutAddShadow: boolean,
  verticalFlyoutWidth: number,
  verticalFlyoutBackgroundColor: string | undefined,
  verticalFlyoutDivider: boolean,
  verticalFlyoutNavHeight: number,
  verticalFlyoutBaseColor: number,
  verticalFlyoutNavColor: string | undefined,
  verticalFlyoutNavColorHover: string | undefined,
  verticalFlyoutNavBackgroundHover: string | undefined,
  setVerticalOpenerIcon: React.Dispatch<SetStateAction<number>>,
  setVerticalOpenerHeight: React.Dispatch<SetStateAction<number>>,
  setVerticalOpenerWidth: React.Dispatch<SetStateAction<number>>,
  setVerticalOpenerTagline: React.Dispatch<SetStateAction<string>>,
  setVerticalOpenerText: React.Dispatch<SetStateAction<string>>,
  setVerticalOpenerBaseColor: React.Dispatch<SetStateAction<number>>,
  setVerticalOpenerColor: React.Dispatch<SetStateAction<string | undefined>>,
  setVerticalOpenerBackgroundColor: React.Dispatch<SetStateAction<string | undefined>>,
  setVerticalFlyoutKeepOpen: React.Dispatch<SetStateAction<boolean>>,
  setVerticalFlyoutAddShadow: React.Dispatch<SetStateAction<boolean>>,
  setVerticalFlyoutWidth: React.Dispatch<SetStateAction<number>>,
  setVerticalFlyoutBackgroundColor: React.Dispatch<SetStateAction<string | undefined>>,
  setVerticalFlyoutDivider: React.Dispatch<SetStateAction<boolean>>,
  setVerticalFlyoutNavHeight: React.Dispatch<SetStateAction<number>>,
  setVerticalFlyoutBaseColor: React.Dispatch<SetStateAction<number>>,
  setVerticalFlyoutNavColor: React.Dispatch<SetStateAction<string | undefined>>,
  setVerticalFlyoutNavColorHover: React.Dispatch<SetStateAction<string | undefined>>,
  setVerticalFlyoutNavBackgroundHover: React.Dispatch<SetStateAction<string | undefined>>,
  // header navicon
  naviconHeight: number,
  naviconStyle: number,
  naviconShowTitle: boolean,
  naviconOverlay: number,
  naviconBehavior: number,
  naviconSubmenuEffect: number,
  naviconTopContent: string,
  naviconTabs: number,
  naviconTab1Text: string,
  naviconTab2Text: string,
  naviconTab1Element: string,
  naviconTab2Element: string,
  naviconOverlayColor: number,
  naviconBackgroundColor: string | undefined,
  setNaviconHeight: React.Dispatch<SetStateAction<number>>,
  setNaviconStyle: React.Dispatch<SetStateAction<number>>,
  setNaviconShowTitle: React.Dispatch<SetStateAction<boolean>>,
  setNaviconOverlay: React.Dispatch<SetStateAction<number>>,
  setNaviconBehavior: React.Dispatch<SetStateAction<number>>,
  setNaviconSubmenuEffect: React.Dispatch<SetStateAction<number>>,
  setNaviconTopContent: React.Dispatch<SetStateAction<string>>,
  setNaviconTabs: React.Dispatch<SetStateAction<number>>,
  setNaviconTab1Text: React.Dispatch<SetStateAction<string>>,
  setNaviconTab2Text: React.Dispatch<SetStateAction<string>>,
  setNaviconTab1Element: React.Dispatch<SetStateAction<string>>,
  setNaviconTab2Element: React.Dispatch<SetStateAction<string>>,
  setNaviconOverlayColor: React.Dispatch<SetStateAction<number>>,
  setNaviconBackgroundColor: React.Dispatch<SetStateAction<string | undefined>>,
  // footer
  footerBlock: number,
  footer1Checked: boolean,
  footer1Columns: number,
  footer1TextColor: number,
  footer1BackgroundColor: string | undefined,
  footer1BackgroundImage: number,
  footer2Checked: boolean,
  footer2Columns: number,
  footer2TextColor: number,
  footer2BackgroundColor: string | undefined,
  footer2BackgroundImage: number,
  footerAbsoluteTextColor: number,
  footerAbsoluteAlign: number,
  footerAbsoluteBackgroundColor: string | undefined,
  footerAbsoluteBottomTextPrimary: string,
  footerAbsoluteBottomTextSecondary: string,
  footerBTTEnable: boolean,
  footerBTTShape: number,
  footerBTTPosition: number,
  footerBTTShowMobile: boolean,
  footerHTMLBefore: string,
  footerHTMLAfter: string,
  setFooterBlock: React.Dispatch<SetStateAction<number>>,
  setFooter1Checked: React.Dispatch<SetStateAction<boolean>>,
  setFooter1Columns: React.Dispatch<SetStateAction<number>>,
  setFooter1TextColor: React.Dispatch<SetStateAction<number>>,
  setFooter1BackgroundColor: React.Dispatch<SetStateAction<string | undefined>>,
  setFooter1BackgroundImage: React.Dispatch<SetStateAction<number>>,
  setFooter2Checked: React.Dispatch<SetStateAction<boolean>>,
  setFooter2Columns: React.Dispatch<SetStateAction<number>>,
  setFooter2TextColor: React.Dispatch<SetStateAction<number>>,
  setFooter2BackgroundColor: React.Dispatch<SetStateAction<string | undefined>>,
  setFooter2BackgroundImage: React.Dispatch<SetStateAction<number>>,
  setFooterAbsoluteTextColor: React.Dispatch<SetStateAction<number>>,
  setFooterAbsoluteAlign: React.Dispatch<SetStateAction<number>>,
  setFooterAbsoluteBackgroundColor: React.Dispatch<SetStateAction<string | undefined>>,
  setFooterAbsoluteBottomTextPrimary: React.Dispatch<SetStateAction<string>>,
  setFooterAbsoluteBottomTextSecondary: React.Dispatch<SetStateAction<string>>,
  setFooterBTTEnable: React.Dispatch<SetStateAction<boolean>>,
  setFooterBTTShape: React.Dispatch<SetStateAction<number>>,
  setFooterBTTPosition: React.Dispatch<SetStateAction<number>>,
  setFooterBTTShowMobile: React.Dispatch<SetStateAction<boolean>>,
  setFooterHTMLBefore: React.Dispatch<SetStateAction<string>>,
  setFooterHTMLAfter: React.Dispatch<SetStateAction<string>>,
  //share
  shareIconStyle: number,
  shareIcons: number[],
  setShareIconStyle: React.Dispatch<SetStateAction<number>>,
  setShareIcons: React.Dispatch<SetStateAction<number[]>>,
  // homepage
  homepageDisplay: number,
  homepagePage: number,
  setHomepageDisplay: React.Dispatch<SetStateAction<number>>,
  setHomepagePage: React.Dispatch<SetStateAction<number>>,
  // component
  componentAll: ComponentType[],
  component0: ComponentType[],
  component1: ComponentType[],
  component2: ComponentType[],
  component3: ComponentType[],
  component4: ComponentType[],
  component5: ComponentType[],
  component6: ComponentType[],
  component7: ComponentType[],
  component8: ComponentType[],
  component9: ComponentType[],
  componentMob1: ComponentType[],
  componentMob2: ComponentType[],
  componentMob3: ComponentType[],
  componentMob4: ComponentType[],
  componentMob5: ComponentType[],
  setComponentAll: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponent0: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponent1: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponent2: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponent3: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponent4: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponent5: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponent6: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponent7: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponent8: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponent9: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponentMob1: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponentMob2: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponentMob3: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponentMob4: React.Dispatch<SetStateAction<ComponentType[]>>,
  setComponentMob5: React.Dispatch<SetStateAction<ComponentType[]>>,

}
const themeContext = createContext<themeContextType | undefined>(undefined)

type themeProviderType = {
  children: React.ReactNode,
}
export function ThemeProvider({ children }: themeProviderType) {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  // layout 
  const [themeMode, setThemeMode] = useState<number>(2)
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
  const [logoMaxWidth, setLogoMaxWidth] = useState<number | undefined>(undefined)
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
  // header vertical
  const [verticalOpenerIcon, setVerticalOpenerIcon] = useState(1)
  const [verticalOpenerHeight, setVerticalOpenerHeight] = useState(33)
  const [verticalOpenerWidth, setVerticalOpenerWidth] = useState(33)
  const [verticalOpenerTagline, setVerticalOpenerTagline] = useState("")
  const [verticalOpenerText, setVerticalOpenerText] = useState("")
  const [verticalOpenerBaseColor, setVerticalOpenerBaseColor] = useState(1)
  const [verticalOpenerColor, setVerticalOpenerColor] = useState<string | undefined>(undefined)
  const [verticalOpenerBackgroundColor, setVerticalOpenerBackgroundColor] = useState<string | undefined>(undefined)
  const [verticalFlyoutKeepOpen, setVerticalFlyoutKeepOpen] = useState(true)
  const [verticalFlyoutAddShadow, setVerticalFlyoutAddShadow] = useState(true)
  const [verticalFlyoutWidth, setVerticalFlyoutWidth] = useState(33)
  const [verticalFlyoutBackgroundColor, setVerticalFlyoutBackgroundColor] = useState<string | undefined>(undefined)
  const [verticalFlyoutDivider, setVerticalFlyoutDivider] = useState(true)
  const [verticalFlyoutNavHeight, setVerticalFlyoutNavHeight] = useState(33)
  const [verticalFlyoutBaseColor, setVerticalFlyoutBaseColor] = useState(1)
  const [verticalFlyoutNavColor, setVerticalFlyoutNavColor] = useState<string | undefined>(undefined)
  const [verticalFlyoutNavColorHover, setVerticalFlyoutNavColorHover] = useState<string | undefined>(undefined)
  const [verticalFlyoutNavBackgroundHover, setVerticalFlyoutNavBackgroundHover] = useState<string | undefined>(undefined)
  // header navicon
  const [naviconHeight, setNaviconHeight] = useState(33)
  const [naviconStyle, setNaviconStyle] = useState(1)
  const [naviconShowTitle, setNaviconShowTitle] = useState(false)
  const [naviconOverlay, setNaviconOverlay] = useState(1)
  const [naviconBehavior, setNaviconBehavior] = useState(1)
  const [naviconSubmenuEffect, setNaviconSubmenuEffect] = useState(1)
  const [naviconTopContent, setNaviconTopContent] = useState("")
  const [naviconTabs, setNaviconTabs] = useState(1)
  const [naviconTab1Text, setNaviconTab1Text] = useState("")
  const [naviconTab2Text, setNaviconTab2Text] = useState("")
  const [naviconTab1Element, setNaviconTab1Element] = useState('[]')
  const [naviconTab2Element, setNaviconTab2Element] = useState('[]')
  const [naviconOverlayColor, setNaviconOverlayColor] = useState(1)
  const [naviconBackgroundColor, setNaviconBackgroundColor] = useState<string | undefined>(undefined)
  // footer
  const [footerBlock, setFooterBlock] = useState(0)
  const [footer1Checked, setFooter1Checked] = useState(true)
  const [footer1Columns, setFooter1Columns] = useState(3)
  const [footer1TextColor, setFooter1TextColor] = useState(1)
  const [footer1BackgroundColor, setFooter1BackgroundColor] = useState<string | undefined>(undefined)
  const [footer1BackgroundImage, setFooter1BackgroundImage] = useState(0)
  const [footer2Checked, setFooter2Checked] = useState(true)
  const [footer2Columns, setFooter2Columns] = useState(3)
  const [footer2TextColor, setFooter2TextColor] = useState(1)
  const [footer2BackgroundColor, setFooter2BackgroundColor] = useState<string | undefined>(undefined)
  const [footer2BackgroundImage, setFooter2BackgroundImage] = useState(0)
  const [footerAbsoluteTextColor, setFooterAbsoluteTextColor] = useState(1)
  const [footerAbsoluteAlign, setFooterAbsoluteAlign] = useState(1)
  const [footerAbsoluteBackgroundColor, setFooterAbsoluteBackgroundColor] = useState<string | undefined>(undefined)
  const [footerAbsoluteBottomTextPrimary, setFooterAbsoluteBottomTextPrimary] = useState("")
  const [footerAbsoluteBottomTextSecondary, setFooterAbsoluteBottomTextSecondary] = useState("")
  const [footerBTTEnable, setFooterBTTEnable] = useState(false)
  const [footerBTTShape, setFooterBTTShape] = useState(1)
  const [footerBTTPosition, setFooterBTTPosition] = useState(2)
  const [footerBTTShowMobile, setFooterBTTShowMobile] = useState(false)
  const [footerHTMLBefore, setFooterHTMLBefore] = useState("")
  const [footerHTMLAfter, setFooterHTMLAfter] = useState("")
  // share
  const [shareIconStyle, setShareIconStyle] = useState(1)
  const [shareIcons, setShareIcons] = useState<number[]>([])
  // homepage
  const [homepageDisplay, setHomepageDisplay] = useState(1)
  const [homepagePage, setHomepagePage] = useState(1)
  // component
  const [componentAll, setComponentAll] = useState<ComponentType[]>([])
  const [component0, setComponent0] = useState<ComponentType[]>([])
  const [component1, setComponent1] = useState<ComponentType[]>([])
  const [component2, setComponent2] = useState<ComponentType[]>([])
  const [component3, setComponent3] = useState<ComponentType[]>([])
  const [component4, setComponent4] = useState<ComponentType[]>([])
  const [component5, setComponent5] = useState<ComponentType[]>([])
  const [component6, setComponent6] = useState<ComponentType[]>([])
  const [component7, setComponent7] = useState<ComponentType[]>([])
  const [component8, setComponent8] = useState<ComponentType[]>([])
  const [component9, setComponent9] = useState<ComponentType[]>([])
  const [componentMob1, setComponentMob1] = useState<ComponentType[]>([])
  const [componentMob2, setComponentMob2] = useState<ComponentType[]>([])
  const [componentMob3, setComponentMob3] = useState<ComponentType[]>([])
  const [componentMob4, setComponentMob4] = useState<ComponentType[]>([])
  const [componentMob5, setComponentMob5] = useState<ComponentType[]>([])

  const [isChanged, setIsChanged] = useState(false)
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
  const [changedVertical, setChangedVertical] = useState(false)
  const [changedNavicon, setChangedNavicon] = useState(false)
  const [changedFooter, setChangedFooter] = useState(false)
  const [changedShare, setChangedShare] = useState(false)
  const [changedHomepage, setChangedHomepage] = useState(false)
  const [changedComponent, setChangedComponent] = useState(false)

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
  const verticalConfig = useRef<ConfigType>(undefined)
  const naviconConfig = useRef<ConfigType>(undefined)
  const footerConfig = useRef<ConfigType>(undefined)
  const shareConfig = useRef<ConfigType>(undefined)
  const homepageConfig = useRef<ConfigType>(undefined)

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
        // header vertical
        verticalConfig.current = data.find(i => i.config_key === "header_vertical")
        if (verticalConfig.current) {
          const verticalParse: VerticalType = JSON.parse(verticalConfig.current.config_value)
          setVerticalOpenerIcon(verticalParse.verticalOpenerIcon)
          setVerticalOpenerHeight(verticalParse.verticalOpenerHeight)
          setVerticalOpenerWidth(verticalParse.verticalOpenerWidth)
          setVerticalOpenerTagline(verticalParse.verticalOpenerTagline)
          setVerticalOpenerText(verticalParse.verticalOpenerText)
          setVerticalOpenerBaseColor(verticalParse.verticalOpenerBaseColor)
          setVerticalOpenerColor(verticalParse.verticalOpenerColor)
          setVerticalOpenerBackgroundColor(verticalParse.verticalOpenerBackgroundColor)
          setVerticalFlyoutKeepOpen(verticalParse.verticalFlyoutKeepOpen)
          setVerticalFlyoutAddShadow(verticalParse.verticalFlyoutAddShadow)
          setVerticalFlyoutWidth(verticalParse.verticalFlyoutWidth)
          setVerticalFlyoutBackgroundColor(verticalParse.verticalFlyoutBackgroundColor)
          setVerticalFlyoutDivider(verticalParse.verticalFlyoutDivider)
          setVerticalFlyoutNavHeight(verticalParse.verticalFlyoutNavHeight)
          setVerticalFlyoutBaseColor(verticalParse.verticalFlyoutBaseColor)
          setVerticalFlyoutNavColor(verticalParse.verticalFlyoutNavColor)
          setVerticalFlyoutNavColorHover(verticalParse.verticalFlyoutNavColorHover)
          setVerticalFlyoutNavBackgroundHover(verticalParse.verticalFlyoutNavBackgroundHover)
        }
        // header navicon
        naviconConfig.current = data.find(i => i.config_key === "header_navicon")
        if (naviconConfig.current) {
          const naviconParse: NaviconType = JSON.parse(naviconConfig.current.config_value)
          setNaviconHeight(naviconParse.naviconHeight)
          setNaviconStyle(naviconParse.naviconStyle)
          setNaviconShowTitle(naviconParse.naviconShowTitle)
          setNaviconOverlay(naviconParse.naviconOverlay)
          setNaviconBehavior(naviconParse.naviconBehavior)
          setNaviconSubmenuEffect(naviconParse.naviconSubmenuEffect)
          setNaviconTopContent(naviconParse.naviconTopContent)
          setNaviconTabs(naviconParse.naviconTabs)
          setNaviconTab1Text(naviconParse.naviconTab1Text)
          setNaviconTab2Text(naviconParse.naviconTab2Text)
          setNaviconTab1Element(naviconParse.naviconTab1Element)
          setNaviconTab2Element(naviconParse.naviconTab2Element)
          setNaviconOverlayColor(naviconParse.naviconOverlayColor)
          setNaviconBackgroundColor(naviconParse.naviconBackgroundColor)
        }
        // footer
        footerConfig.current = data.find(i => i.config_key === "footer")
        if (footerConfig.current) {
          const footerParse: FooterType = JSON.parse(footerConfig.current.config_value)
          setFooterBlock(footerParse.footerBlock)
          setFooter1Checked(footerParse.footer1Checked)
          setFooter1Columns(footerParse.footer1Columns)
          setFooter1TextColor(footerParse.footer1TextColor)
          setFooter1BackgroundColor(footerParse.footer1BackgroundColor)
          setFooter1BackgroundImage(footerParse.footer1BackgroundImage)
          setFooter2Checked(footerParse.footer2Checked)
          setFooter2Columns(footerParse.footer2Columns)
          setFooter2TextColor(footerParse.footer2TextColor)
          setFooter2BackgroundColor(footerParse.footer2BackgroundColor)
          setFooter2BackgroundImage(footerParse.footer2BackgroundImage)
          setFooterAbsoluteTextColor(footerParse.footerAbsoluteTextColor)
          setFooterAbsoluteAlign(footerParse.footerAbsoluteAlign)
          setFooterAbsoluteBackgroundColor(footerParse.footerAbsoluteBackgroundColor)
          setFooterAbsoluteBottomTextPrimary(footerParse.footerAbsoluteBottomTextPrimary)
          setFooterAbsoluteBottomTextSecondary(footerParse.footerAbsoluteBottomTextSecondary)
          setFooterBTTEnable(footerParse.footerBTTEnable)
          setFooterBTTShape(footerParse.footerBTTShape)
          setFooterBTTPosition(footerParse.footerBTTPosition)
          setFooterBTTShowMobile(footerParse.footerBTTShowMobile)
          setFooterHTMLBefore(footerParse.footerHTMLBefore)
          setFooterHTMLAfter(footerParse.footerHTMLAfter)
        }
        // share
        shareConfig.current = data.find(i => i.config_key === "share")
        if (shareConfig.current) {
          const shareParse: ShareType = JSON.parse(shareConfig.current.config_value)
          setShareIconStyle(shareParse.shareIconStyle)
          if (shareParse.shareIcons) setShareIcons(shareParse.shareIcons)
        }
        // homepage
        homepageConfig.current = data.find(i => i.config_key === "homepage")
        if (homepageConfig.current) {
          const homepageParse: HomepageType = JSON.parse(homepageConfig.current.config_value)
          setHomepageDisplay(homepageParse.homepageDisplay)
          setHomepagePage(homepageParse.homepagePage)
        }
        // component
        const components = await getAllComponent()
        if (components) {
          setComponentAll(components)
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
    changedLayout, changedTypo, changedColors, changedDrawer, changedSiteIden, changedTopbar, changedHeadermain, changedHeaderbottom,
    changedSticky, changedButtons, changedSearch, changedFollowicons, changedHtml, changedContact, changedVertical, changedNavicon,
    changedFooter, changedShare, changedHomepage,
    changedComponent,
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

  useEffect(() => {
    if (!listentChange) return
    setChangedVertical(true)
  }, [
    verticalOpenerIcon, verticalOpenerHeight, verticalOpenerWidth, verticalOpenerTagline, verticalOpenerText, verticalOpenerBaseColor, verticalOpenerColor, verticalOpenerBackgroundColor, verticalFlyoutKeepOpen, verticalFlyoutAddShadow, verticalFlyoutWidth, verticalFlyoutBackgroundColor, verticalFlyoutDivider, verticalFlyoutNavHeight, verticalFlyoutBaseColor, verticalFlyoutNavColor, verticalFlyoutNavColorHover, verticalFlyoutNavBackgroundHover,
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedNavicon(true)
  }, [
    naviconHeight, naviconStyle, naviconShowTitle, naviconOverlay, naviconBehavior, naviconSubmenuEffect, naviconTopContent, naviconTabs, naviconTab1Text, naviconTab2Text, naviconTab1Element, naviconTab2Element, naviconOverlayColor, naviconBackgroundColor,
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedFooter(true)
  }, [
    footerBlock, footer1Checked, footer1Columns, footer1TextColor, footer1BackgroundColor, footer1BackgroundImage, footer2Checked, footer2Columns, footer2TextColor, footer2BackgroundColor, footer2BackgroundImage, footerAbsoluteTextColor, footerAbsoluteAlign, footerAbsoluteBackgroundColor, footerAbsoluteBottomTextPrimary, footerAbsoluteBottomTextSecondary, footerBTTEnable, footerBTTShape, footerBTTPosition, footerBTTShowMobile, footerHTMLBefore, footerHTMLAfter,
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedShare(true)
  }, [
    shareIconStyle, shareIcons,
  ])

  useEffect(() => {
    if (!listentChange) return
    setChangedHomepage(true)
  }, [
    homepageDisplay, homepagePage,
  ])

  useEffect(() => {
    setComponent0(componentAll.filter(i => i.component_position === (0 || undefined)).sort((a, b) => a.component_index - b.component_index))
    setComponent1(componentAll.filter(i => i.component_position === 1).sort((a, b) => a.component_index - b.component_index))
    setComponent2(componentAll.filter(i => i.component_position === 2).sort((a, b) => a.component_index - b.component_index))
    setComponent3(componentAll.filter(i => i.component_position === 3).sort((a, b) => a.component_index - b.component_index))
    setComponent4(componentAll.filter(i => i.component_position === 4).sort((a, b) => a.component_index - b.component_index))
    setComponent5(componentAll.filter(i => i.component_position === 5).sort((a, b) => a.component_index - b.component_index))
    setComponent6(componentAll.filter(i => i.component_position === 6).sort((a, b) => a.component_index - b.component_index))
    setComponent7(componentAll.filter(i => i.component_position === 7).sort((a, b) => a.component_index - b.component_index))
    setComponent8(componentAll.filter(i => i.component_position === 8).sort((a, b) => a.component_index - b.component_index))
    setComponent9(componentAll.filter(i => i.component_position === 9).sort((a, b) => a.component_index - b.component_index))
    setComponentMob1(componentAll.filter(i => i.component_position === 11).sort((a, b) => a.component_index - b.component_index))
    setComponentMob2(componentAll.filter(i => i.component_position === 12).sort((a, b) => a.component_index - b.component_index))
    setComponentMob3(componentAll.filter(i => i.component_position === 13).sort((a, b) => a.component_index - b.component_index))
    setComponentMob4(componentAll.filter(i => i.component_position === 14).sort((a, b) => a.component_index - b.component_index))
    setComponentMob5(componentAll.filter(i => i.component_position === 15).sort((a, b) => a.component_index - b.component_index))
    if (!listentChange) return
    setChangedComponent(true)
  }, [
    componentAll
  ])

  const setChangedFailse = () => {
    setChangedComponent(false)
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
    setChangedVertical(false)
    setChangedNavicon(false)
    setChangedFooter(false)
    setChangedShare(false)
    setChangedHomepage(false)

    setTimeout(() => {
      setIsChanged(false)
    }, 500);
  }

  const saveTheme = () => {
    // component
    if (changedComponent) {
      componentAll.map(i => {
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
            }
          })
      })
    }
    // layout
    if (changedLayout && layoutConfig.current) {
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
          }
        })
    }
    // stype_typography
    if (changedTypo && typographyConfig.current) {
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
          }
        })
    }
    // style_colors
    if (changedColors && colorConfig.current) {
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
          }
        })
    }
    // style_drawer
    if (changedDrawer && drawerConfig.current) {
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
          }
        })
    }
    // header_siteItentify
    if (changedSiteIden && siteidentifyConfig.current) {
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
          }
        })
    }
    // header_topbar
    if (changedTopbar && topbarConfig.current) {
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
          }
        })
    }
    // header heardermain
    if (changedHeadermain && headermainConfig.current) {
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
          }
        })
    }
    // header hearderbottom
    if (changedHeaderbottom && headerbottomConfig.current) {
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
          }
        })
    }
    // header sticky
    if (changedSticky && stickyConfig.current) {
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
        }
      })
    }
    // header buttons
    if (changedButtons && buttonsConfig.current) {
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
        }
      })
    }
    // header search
    if (changedSearch && searchConfig.current) {
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
        }
      })
    }
    // header followicons
    if (changedFollowicons && followiconsConfig.current) {
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
        }
      })
    }
    // header html
    if (changedHtml && htmlConfig.current) {
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
        }
      })
    }
    // header contact
    if (changedContact && contactConfig.current) {
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
        }
      })
    }
    // header vertical
    if (changedVertical && verticalConfig.current) {
      const verticalValue = JSON.stringify({
        verticalOpenerIcon,
        verticalOpenerHeight,
        verticalOpenerWidth,
        verticalOpenerTagline,
        verticalOpenerText,
        verticalOpenerBaseColor,
        verticalOpenerColor,
        verticalOpenerBackgroundColor,
        verticalFlyoutKeepOpen,
        verticalFlyoutAddShadow,
        verticalFlyoutWidth,
        verticalFlyoutBackgroundColor,
        verticalFlyoutDivider,
        verticalFlyoutNavHeight,
        verticalFlyoutBaseColor,
        verticalFlyoutNavColor,
        verticalFlyoutNavColorHover,
        verticalFlyoutNavBackgroundHover,
      })
      const newVerticalConfig: ConfigType = {
        config_id: verticalConfig.current.config_id,
        config_key: verticalConfig.current.config_key,
        config_value: verticalValue,
        config_style: verticalConfig.current.config_style,
      }
      updateConfig(newVerticalConfig).then(data => {
        if (!data) {
          toast.error("Fail to Save Vertical!");
        }
      })
    }
    // header navicon
    if (changedNavicon && naviconConfig.current) {
      const naviconValue = JSON.stringify({
        naviconHeight,
        naviconStyle,
        naviconShowTitle,
        naviconOverlay,
        naviconBehavior,
        naviconSubmenuEffect,
        naviconTopContent,
        naviconTabs,
        naviconTab1Text,
        naviconTab2Text,
        naviconTab1Element,
        naviconTab2Element,
        naviconOverlayColor,
        naviconBackgroundColor,
      })
      const newNaviconConfig: ConfigType = {
        config_id: naviconConfig.current.config_id,
        config_key: naviconConfig.current.config_key,
        config_value: naviconValue,
        config_style: naviconConfig.current.config_style,
      }
      updateConfig(newNaviconConfig).then(data => {
        if (!data) {
          toast.error("Fail to Save Navicon!");
        }
      })
    }
    // footer
    if (changedFooter && footerConfig.current) {
      const footerValue = JSON.stringify({
        footerBlock,
        footer1Checked,
        footer1Columns,
        footer1TextColor,
        footer1BackgroundColor,
        footer1BackgroundImage,
        footer2Checked,
        footer2Columns,
        footer2TextColor,
        footer2BackgroundColor,
        footer2BackgroundImage,
        footerAbsoluteTextColor,
        footerAbsoluteAlign,
        footerAbsoluteBackgroundColor,
        footerAbsoluteBottomTextPrimary,
        footerAbsoluteBottomTextSecondary,
        footerBTTEnable,
        footerBTTShape,
        footerBTTPosition,
        footerBTTShowMobile,
        footerHTMLBefore,
        footerHTMLAfter,
      })
      const newFooterConfig: ConfigType = {
        config_id: footerConfig.current.config_id,
        config_key: footerConfig.current.config_key,
        config_value: footerValue,
        config_style: footerConfig.current.config_style,
      }
      updateConfig(newFooterConfig).then(data => {
        if (!data) {
          toast.error("Fail to Save Footer!");
        }
      })
    }
    // share
    if (changedShare && shareConfig.current) {
      const shareValue = JSON.stringify({
        shareIconStyle,
        shareIcons,
      })
      const newShareConfig: ConfigType = {
        config_id: shareConfig.current.config_id,
        config_key: shareConfig.current.config_key,
        config_value: shareValue,
        config_style: shareConfig.current.config_style,
      }
      updateConfig(newShareConfig).then(data => {
        if (!data) {
          toast.error("Fail to Save Share!");
        }
      })
    }
    // homepage
    if (changedHomepage && homepageConfig.current) {
      const homepageValue = JSON.stringify({
        homepageDisplay,
        homepagePage,
      })
      const newHomepageConfig: ConfigType = {
        config_id: homepageConfig.current.config_id,
        config_key: homepageConfig.current.config_key,
        config_value: homepageValue,
        config_style: homepageConfig.current.config_style,
      }
      updateConfig(newHomepageConfig).then(data => {
        if (!data) {
          toast.error("Fail to Save Homepage!");
        }
      })
    }

    setChangedFailse()
    toast.success("Save Change Successfully!")
  }

  return (
    <themeContext.Provider value={{
      isMobile, setIsMobile, saveTheme, isChanged,
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
      // header_vertical
      verticalOpenerIcon,
      verticalOpenerHeight,
      verticalOpenerWidth,
      verticalOpenerTagline,
      verticalOpenerText,
      verticalOpenerBaseColor,
      verticalOpenerColor,
      verticalOpenerBackgroundColor,
      verticalFlyoutKeepOpen,
      verticalFlyoutAddShadow,
      verticalFlyoutWidth,
      verticalFlyoutBackgroundColor,
      verticalFlyoutDivider,
      verticalFlyoutNavHeight,
      verticalFlyoutBaseColor,
      verticalFlyoutNavColor,
      verticalFlyoutNavColorHover,
      verticalFlyoutNavBackgroundHover,
      setVerticalOpenerIcon,
      setVerticalOpenerHeight,
      setVerticalOpenerWidth,
      setVerticalOpenerTagline,
      setVerticalOpenerText,
      setVerticalOpenerBaseColor,
      setVerticalOpenerColor,
      setVerticalOpenerBackgroundColor,
      setVerticalFlyoutKeepOpen,
      setVerticalFlyoutAddShadow,
      setVerticalFlyoutWidth,
      setVerticalFlyoutBackgroundColor,
      setVerticalFlyoutDivider,
      setVerticalFlyoutNavHeight,
      setVerticalFlyoutBaseColor,
      setVerticalFlyoutNavColor,
      setVerticalFlyoutNavColorHover,
      setVerticalFlyoutNavBackgroundHover,
      // header navicon
      naviconHeight,
      naviconStyle,
      naviconShowTitle,
      naviconOverlay,
      naviconBehavior,
      naviconSubmenuEffect,
      naviconTopContent,
      naviconTabs,
      naviconTab1Text,
      naviconTab2Text,
      naviconTab1Element,
      naviconTab2Element,
      naviconOverlayColor,
      naviconBackgroundColor,
      setNaviconHeight,
      setNaviconStyle,
      setNaviconShowTitle,
      setNaviconOverlay,
      setNaviconBehavior,
      setNaviconSubmenuEffect,
      setNaviconTopContent,
      setNaviconTabs,
      setNaviconTab1Text,
      setNaviconTab2Text,
      setNaviconTab1Element,
      setNaviconTab2Element,
      setNaviconOverlayColor,
      setNaviconBackgroundColor,
      // footer
      footerBlock,
      footer1Checked,
      footer1Columns,
      footer1TextColor,
      footer1BackgroundColor,
      footer1BackgroundImage,
      footer2Checked,
      footer2Columns,
      footer2TextColor,
      footer2BackgroundColor,
      footer2BackgroundImage,
      footerAbsoluteTextColor,
      footerAbsoluteAlign,
      footerAbsoluteBackgroundColor,
      footerAbsoluteBottomTextPrimary,
      footerAbsoluteBottomTextSecondary,
      footerBTTEnable,
      footerBTTShape,
      footerBTTPosition,
      footerBTTShowMobile,
      footerHTMLBefore,
      footerHTMLAfter,
      setFooterBlock,
      setFooter1Checked,
      setFooter1Columns,
      setFooter1TextColor,
      setFooter1BackgroundColor,
      setFooter1BackgroundImage,
      setFooter2Checked,
      setFooter2Columns,
      setFooter2TextColor,
      setFooter2BackgroundColor,
      setFooter2BackgroundImage,
      setFooterAbsoluteTextColor,
      setFooterAbsoluteAlign,
      setFooterAbsoluteBackgroundColor,
      setFooterAbsoluteBottomTextPrimary,
      setFooterAbsoluteBottomTextSecondary,
      setFooterBTTEnable,
      setFooterBTTShape,
      setFooterBTTPosition,
      setFooterBTTShowMobile,
      setFooterHTMLBefore,
      setFooterHTMLAfter,
      // share
      shareIconStyle,
      shareIcons,
      setShareIconStyle,
      setShareIcons,
      // homepage
      homepageDisplay,
      homepagePage,
      setHomepageDisplay,
      setHomepagePage,
      // component
      componentAll,
      component0,
      component1,
      component2,
      component3,
      component4,
      component5,
      component6,
      component7,
      component8,
      component9,
      componentMob1,
      componentMob2,
      componentMob3,
      componentMob4,
      componentMob5,
      setComponentAll,
      setComponent0,
      setComponent1,
      setComponent2,
      setComponent3,
      setComponent4,
      setComponent5,
      setComponent6,
      setComponent7,
      setComponent8,
      setComponent9,
      setComponentMob1,
      setComponentMob2,
      setComponentMob3,
      setComponentMob4,
      setComponentMob5,
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