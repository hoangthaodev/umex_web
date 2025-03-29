'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import Layout from '@/components/admin/theme/theme/header/Layout'
import Navigation from '@/components/admin/theme/theme/header/Navigation'
import React from 'react'

const page = () => {
  const { bottomLayoutHeight,
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
    setBottomNavStyle, } = useTheme()

  return (
    <div className='flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Header Bottom", link: "/ux-admin/theme/header/headerbottom" },
      ]} />
      <Layout layoutHeightMin={10} layoutHeightMax={100} layoutHeightDefault={55} layoutRepeat={bottomLayoutBackgroundRepeat} setLayoutRepeat={setBottomLayoutBackgroundRepeat} layoutImage={bottomLayoutBackgroundImage} setLayoutImage={setBottomLayoutBackgroundImage} layoutHeight={bottomLayoutHeight} setLayoutHeight={setBottomLayoutHeight} layoutTextColor={bottomLayoutTextColor} setLayoutTextColor={setBottomLayoutTextColor} layoutBackgroundColor={bottomLayoutBackgroundColor} setLayoutBackgroundColor={setBottomLayoutBackgroundColor} />
      <Navigation navHeightMin={0} navHeightMax={100} navHeightDefault={16} isUppercase={bottomIsUppercase} navColor={bottomNavColor} navColorHover={bottomNavColorHover} navHeight={bottomNavHeight} navStyle={bottomNavStyle} setIsUppercase={setBottomIsUppercase} setNavColor={setBottomNavColor} setNavColorHover={setBottomNavColorHover} setNavHeight={setBottomNavHeight} setNavStyle={setBottomNavStyle} />
    </div>
  )
}

export default page