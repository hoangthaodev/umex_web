'use client'

import { getImageById } from '@/action/image.action'
import { useTheme } from '@/app/themeContext'
import PreviewFooter from '@/components/PreviewFooter'
import PreviewHeader from '@/components/PreviewHeader'
import { getFontMap } from '@/lib/fontMap'
import { ImageType } from '@/lib/type'
import React, { CSSProperties, ReactNode, useEffect, useState } from 'react'

type Props = {
  children: ReactNode
}

const PreviewLayout = ({ children }: Props) => {
  const [containerWidth, setContainerWidth] = useState<number>(1080)
  const [contentBackground, setContentBackground] = useState<string | undefined>(undefined)
  const [layoutMode, setLayoutMode] = useState<number>(1)
  const [dropShadow, setDropShadow] = useState<boolean>(false)
  const [backgroundsColor, setBackgroundsColor] = useState<string | undefined>(undefined)
  const [bgImage, setBgImage] = useState<ImageType | undefined>(undefined)
  const [backgroundRepeat, setBackgroundRepeat] = useState<number>(1)
  const [siteWidth, setSiteWidth] = useState<number>(1080)
  const [fontHeadline, setFontHeadline] = useState<number>(1)
  const [fontHeadlineWeight, setFontHeadlineWeight] = useState<number>(1)
  const [fontBase, setFontBase] = useState(1)
  const [fontNavigation, setFontNavigation] = useState(1)
  const [fontBaseWeight, setFontBaseWeight] = useState(1)
  const [fontNavigationWeight, setFontNavigationWeight] = useState(1)
  const [fontBaseSize, setFontBaseSize] = useState(100)
  const [primaryColor, setPrimaryColor] = useState<string | undefined>(undefined)
  const [secondaryColor, setSecondaryColor] = useState<string | undefined>(undefined)
  const [successColor, setSuccessColor] = useState<string | undefined>(undefined)
  const [alertColor, setAlertColor] = useState<string | undefined>(undefined)
  const [baseColor, setBaseColor] = useState<string | undefined>(undefined)
  const [headlineColor, setHeadlineColor] = useState<string | undefined>(undefined)
  const [linkColor, setLinkColor] = useState<string | undefined>(undefined)
  const [linkColorHover, setLinkColorHover] = useState<string | undefined>(undefined)
  const [backdropColor, setBackdropColor] = useState<string | undefined>(undefined)
  const [drawerWidth, setDrawerWidth] = useState(300)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      setContainerWidth(event.data.containerWidth)
      setContentBackground(event.data.contentBackground)
      setLayoutMode(event.data.layoutMode)
      setDropShadow(event.data.dropShadow)
      setBackgroundsColor(event.data.backgroundColor)
      setBgImage(event.data.bgImage)
      setBackgroundRepeat(event.data.backgroundRepeat)
      setSiteWidth(event.data.siteWidth)
      setFontHeadline(event.data.fontHeadline)
      setFontHeadlineWeight(event.data.fontHeadlineWeight)
      setFontBase(event.data.fontBase)
      setFontNavigation(event.data.fontNavigation)
      setFontBaseWeight(event.data.fontBaseWeight)
      setFontNavigationWeight(event.data.fontNavigationWeight)
      setFontBaseSize(event.data.fontBaseSize)
      setPrimaryColor(event.data.primaryColor)
      setSecondaryColor(event.data.secondaryColor)
      setSuccessColor(event.data.successColor)
      setAlertColor(event.data.alertColor)
      setBaseColor(event.data.baseColor)
      setHeadlineColor(event.data.headlineColor)
      setLinkColor(event.data.linkColor)
      setLinkColorHover(event.data.linkColorHover)
      setBackdropColor(event.data.backdropColor)
      setDrawerWidth(event.data.drawerWidth)
    }

    window.addEventListener('message', handleMessage)
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

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
          <PreviewHeader />
          {children}
          <PreviewFooter />
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

export default PreviewLayout