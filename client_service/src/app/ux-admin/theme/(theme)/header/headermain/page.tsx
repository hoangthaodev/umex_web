'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import Layout from '@/components/admin/theme/theme/header/Layout'
import Navigation from '@/components/admin/theme/theme/header/Navigation'
import React from 'react'

const page = () => {
  const { mainLayoutHeight,
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
    setMainNavStyle, } = useTheme()

  return (
    <div className='flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Header Main", link: "/ux-admin/theme/header/headermain" },
      ]} />
      <Layout layoutHeightMin={30} layoutHeightMax={500} layoutHeightDefault={90} layoutRepeat={mainLayoutBackgroundRepeat} setLayoutRepeat={setMainLayoutBackgroundRepeat} layoutImage={mainLayoutBackgroundImage} setLayoutImage={setMainLayoutBackgroundImage} layoutHeight={mainLayoutHeight} setLayoutHeight={setMainLayoutHeight} layoutTextColor={mainLayoutTextColor} setLayoutTextColor={setMainLayoutTextColor} layoutBackgroundColor={mainLayoutBackgroundColor} setLayoutBackgroundColor={setMainLayoutBackgroundColor} />
      <Navigation navHeightMin={0} navHeightMax={500} navHeightDefault={16} isUppercase={mainIsUppercase} navColor={mainNavColor} navColorHover={mainNavColorHover} navHeight={mainNavHeight} navStyle={mainNavStyle} setIsUppercase={setMainIsUppercase} setNavColor={setMainNavColor} setNavColorHover={setMainNavColorHover} setNavHeight={setMainNavHeight} setNavStyle={setMainNavStyle} />
    </div>
  )
}

export default page