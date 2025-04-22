'use server'

import { getConfigByKey } from '@/action/config.action'
import { getImageById } from '@/action/image.action'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getFontMap } from '@/lib/fontMap'
import { ColorType, DrawerType, ImageType, LayoutType, TypographyType } from '@/lib/type'
import React, { CSSProperties, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const MainLayout = async ({ children }: Props) => {
  let themeMode: number = 2;
  let layoutMode: number = 1;
  let dropShadow: boolean = false;
  let siteWidth: number = 1080;
  let containerWidth: number = 1080;
  let backgroundsColor: string | undefined = undefined;
  let bgImage: ImageType | undefined = undefined;
  let backgroundRepeat: number = 1;
  let contentBackground: string | undefined = undefined;
  // style_typography
  let fontBase: number = 1
  let fontHeadline: number = 1
  let fontNavigation: number = 1
  let fontBaseWeight: number = 1
  let fontHeadlineWeight: number = 1
  let fontNavigationWeight: number = 1
  let fontBaseSize: number = 100
  // style_colors
  let primaryColor: string | undefined = undefined
  let secondaryColor: string | undefined = undefined
  let successColor: string | undefined = undefined
  let alertColor: string | undefined = undefined
  let baseColor: string | undefined = undefined
  let headlineColor: string | undefined = undefined
  let linkColor: string | undefined = undefined
  let linkColorHover: string | undefined = undefined
  // style_drawer
  let backdropColor: string | undefined = undefined
  let drawerWidth: number = 300

  const layout = await getConfigByKey('layout')
  if (layout) {
    const layoutParse = JSON.parse(layout.config_value || '') as LayoutType
    themeMode = layoutParse.themeMode
    layoutMode = layoutParse.layoutMode
    dropShadow = layoutParse.dropShadow
    siteWidth = layoutParse.siteWidth
    containerWidth = layoutParse.containerWidth
    backgroundsColor = layoutParse.backgroundsColor
    if (layoutParse.backgroundImage) {
      const image = await getImageById(layoutParse.backgroundImage)
      if (image) {
        bgImage = image
      }
    }
    backgroundRepeat = layoutParse.backgroundRepeat
    contentBackground = layoutParse.contentBackground
  }

  const typography = await getConfigByKey('style_typography')
  if (typography) {
    const typographyParse = JSON.parse(typography.config_value || '') as TypographyType
    fontBase = typographyParse.fontBase
    fontHeadline = typographyParse.fontHeadline
    fontNavigation = typographyParse.fontNavigation
    fontBaseWeight = typographyParse.fontBaseWeight
    fontHeadlineWeight = typographyParse.fontHeadlineWeight
    fontNavigationWeight = typographyParse.fontNavigationWeight
    fontBaseSize = typographyParse.fontBaseSize
  }

  const color = await getConfigByKey('style_color')
  if (color) {
    const colorParse = JSON.parse(color.config_value || '') as ColorType
    if (colorParse.primaryColor) primaryColor = colorParse.primaryColor
    if (colorParse.secondaryColor) secondaryColor = colorParse.secondaryColor
    if (colorParse.successColor) successColor = colorParse.successColor
    if (colorParse.alertColor) alertColor = colorParse.alertColor
    if (colorParse.baseColor) baseColor = colorParse.baseColor
    if (colorParse.headlineColor) headlineColor = colorParse.headlineColor
    if (colorParse.linkColor) linkColor = colorParse.linkColor
    if (colorParse.linkColorHover) linkColorHover = colorParse.linkColorHover
  }

  const drawer = await getConfigByKey('style_drawer')
  if (drawer) {
    const drawerParse = JSON.parse(drawer.config_value || '') as DrawerType
    if (drawerParse.backdropColor) backdropColor = drawerParse.backdropColor
    drawerWidth = drawerParse.drawerWidth
  }

  let rootClass: CSSProperties = { width: '100%', height: 'fit-content' }
  let siteClass: CSSProperties = { margin: '0 auto' }
  let containerClass: CSSProperties = {
    width: containerWidth,
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: contentBackground,
  }

  if (layoutMode === 2) {
    if (dropShadow) {
      siteClass = {
        ...siteClass,
        boxShadow: "0 3px 6px -4px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)",
      }
    }
    if (backgroundsColor) {
      rootClass = {
        ...rootClass,
        backgroundColor: backgroundsColor,
      }
    }
    if (bgImage) {
      rootClass = {
        ...rootClass,
        backgroundImage: `url('${bgImage.image_url}')`,
        backgroundPosition: "center",
      }
      if (backgroundRepeat === 1) {
        rootClass = {
          ...rootClass,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }
      }
    }
  }

  switch (layoutMode) {
    case 1:
      siteClass = {
        ...siteClass,
        width: "100%",
      }
      break;
    case 2:
      siteClass = {
        ...siteClass,
        width: siteWidth,
      }
      break;
  }

  const headline_font = getFontMap[`${fontHeadline}_${fontHeadlineWeight}`] || getFontMap[`${fontHeadline}_0`]
  const headlineFont = `h1, h2, h3, h4, h5, h6 {
  font-family: ${headline_font.style.fontFamily};
  font-weight: ${headline_font.style.fontWeight};
  font-style: ${headline_font.style.fontStyle};
  }`

  const base_font = getFontMap[`${fontBase}_${fontBaseWeight}`] || getFontMap[`${fontBase}_0`]
  const baseFont = `body {
  font-family: ${base_font.style.fontFamily};
  font-weight: ${base_font.style.fontWeight};
  font-style: ${base_font.style.fontStyle};
  font-size: ${fontBaseSize + "%"};
  }`

  const nav_font = getFontMap[`${fontNavigation}_${fontNavigationWeight}`] || getFontMap[`${fontNavigation}_0`]
  const navFont = `.nav > li > a {
  font-family: ${nav_font.style.fontFamily};
  font-weight: ${nav_font.style.fontWeight};
  font-style: ${nav_font.style.fontStyle};
  }`

  const styleColor = `.primary {
  color: ${primaryColor}
  }
  .secondary {
  color: ${secondaryColor}
  }
  .success {
  color: ${successColor}
  }
  .alert {
  color: ${alertColor}
  }
  .bg-primary {
  background-color: ${primaryColor}
  }
  .bg-secondary {
  background-color: ${secondaryColor}
  }
  .bg-success {
  background-color: ${successColor}
  }
  .bg-alert {
  background-color: ${alertColor}
  }
  body {
  color: ${baseColor}
  }
  h1, h2, h3, h4, h5, h6 {
  color: ${headlineColor}
  }
  a {
  color: ${linkColor};
  }
  a:hover {
  color: ${linkColorHover};
  }
  `
  const styleDrawer = `.drawer_backdrop {
  background-color: ${backdropColor};
  }
  .drawer_width {
  width: ${drawerWidth};
  }
  `

  return (
    <main style={rootClass}>
      <div id='site' style={siteClass}>
        <div id='container' style={containerClass}>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
      <style>
        {`
          ${headlineFont}
          ${baseFont}
          ${navFont}
          ${styleColor}
          ${styleDrawer}
        `}
      </style>
    </main>
  )
}

export default MainLayout