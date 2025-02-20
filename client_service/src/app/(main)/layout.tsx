'use client'
import { useTheme } from '@/app/ThemeContext'
import MainHeader from '@/components/main/header'
import { getFontMap } from '@/lib/fontMap'
import { color } from '@uiw/react-color'
import React, { CSSProperties } from 'react'

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  const { layoutMode, backgroundImage, backgroundsColor, containerWidth, dropShadow, contentBackground, siteWidth, backgroundRepeat,
    fontBase, fontBaseSize, fontBaseWeight, fontHeadline, fontHeadlineWeight, fontNavigation, fontNavigationWeight,
    primaryColor, secondaryColor, successColor, alertColor, baseColor, headlineColor, linkColor, linkColorHover,
    backdropColor, drawerWidth
  } = useTheme()

  let rootClass: CSSProperties | undefined
  let siteClass: CSSProperties | undefined
  let containerClass: CSSProperties | undefined

  siteClass = {
    ...siteClass,
    margin: "0 auto",
    height: "100%"
  }

  containerClass = {
    ...containerClass,
    width: `${containerWidth}px`,
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: contentBackground,
  }

  if (layoutMode === "1") {
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
    if (backgroundImage) {
      rootClass = {
        ...rootClass,
        backgroundImage: `url('${backgroundImage?.image_url}')`,
        backgroundPosition: "center",
      }
      if (backgroundRepeat === "0") {
        rootClass = {
          ...rootClass,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }
      }
    }
  }

  switch (layoutMode) {
    case "0":
      siteClass = {
        ...siteClass,
        width: "100%",
      }
      break;
    case "1":
      siteClass = {
        ...siteClass,
        width: `${siteWidth}px`,
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
    <div
      className="text-gray-900 dark:text-gray-50 dark:bg-gray-700"
      style={rootClass}>
      <div style={siteClass}>
        <main style={containerClass}>
          {/* <MainHeader /> */}
          <div>
            {children}
            <h1>day la h1</h1>
            <h2>day la h2</h2>
            <p>day la pp</p>
          </div>
          <div>footer</div>
        </main>
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
    </div>
  )
}

export default MainLayout