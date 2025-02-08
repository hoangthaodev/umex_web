'use client'
import { useTheme } from "@/app/ThemeContext"
import { getFontMap } from "@/lib/fontMap"
import { CSSProperties, useEffect } from "react"

const ShowArea = () => {
  const { themeMode, layoutMode, backgroundImage, backgroundsColor, containerWidth, dropShadow, contentBackground, siteWidth, backgroundRepeat,
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
        backgroundImage: `url('${backgroundImage?.img_src}')`,
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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeMode === "dark")
  }, [themeMode])

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
    <div>
      <p>ngoai Dark</p>
      <div
        className="text-gray-900 dark:text-gray-50 dark:bg-gray-700"
        style={rootClass}>
        <div style={siteClass}>
          <div style={containerClass}>
            header
            <h2>day la h2</h2>
            <h3>day la h3</h3>
            <p>day la base text</p>
            <p className="primary">primary</p>
            <p className="secondary">secondary</p>
            <p className="success">success</p>
            <p className="alert">alert</p>
            <ul className="nav">
              <li><a href="">li 1</a></li>
              <li><a href="">li 4</a></li>
              <li><a href="">li 3</a></li>
              <li><a href="">li 2</a></li>
            </ul>
            {/* <MainHeader /> */}
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
      </div>
    </div>
  )
}

export default ShowArea