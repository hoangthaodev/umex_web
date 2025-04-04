'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import Layout from '@/components/admin/theme/theme/header/Layout'
import Navigation from '@/components/admin/theme/theme/header/Navigation'
import DivNgang from '@/components/DivNgang'
import React from 'react'

const page = () => {
  const { topbarEnable, topbarLayoutHeight, topbarLayoutTextColor, topbarLayoutBackgroundColor, topbarLayoutBackgroundImage
    , topbarLayoutBackgroundRepeat, topbarIsUppercase, topbarNavColor, topbarNavColorHover, topbarNavHeight, topbarNavStyle
    , setTopbarEnable, setTopbarLayoutHeight, setTopbarLayoutTextColor, setTopbarLayoutBackgroundColor, setTopbarLayoutBackgroundImage
    , setTopbarLayoutBackgroundRepeat, setTopbarIsUppercase, setTopbarNavColor, setTopbarNavColorHover, setTopbarNavHeight, setTopbarNavStyle
  } = useTheme()

  return (
    <div className='flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Top Bar", link: "/ux-admin/theme/header/topbar" },
      ]} />
      <div className='flex gap-2 items-center p-2'>
        <input
          className='w-4 h-4'
          type="checkbox" checked={topbarEnable} onChange={() => { setTopbarEnable(!topbarEnable) }} />
        <label onClick={() => { setTopbarEnable(!topbarEnable) }}>Enable Top Bar</label>
      </div>
      <div className={`${topbarEnable ? "display" : "hidden"}`}>
        <Layout layoutHeightMin={10} layoutHeightMax={100} layoutHeightDefault={30} layoutRepeat={topbarLayoutBackgroundRepeat} setLayoutRepeat={setTopbarLayoutBackgroundRepeat} layoutImage={topbarLayoutBackgroundImage} setLayoutImage={setTopbarLayoutBackgroundImage} layoutHeight={topbarLayoutHeight} setLayoutHeight={setTopbarLayoutHeight} layoutTextColor={topbarLayoutTextColor} setLayoutTextColor={setTopbarLayoutTextColor} layoutBackgroundColor={topbarLayoutBackgroundColor} setLayoutBackgroundColor={setTopbarLayoutBackgroundColor} />
        <Navigation navHeightMin={0} navHeightMax={100} navHeightDefault={20} isUppercase={topbarIsUppercase} navColor={topbarNavColor} navColorHover={topbarNavColorHover} navHeight={topbarNavHeight} navStyle={topbarNavStyle} setIsUppercase={setTopbarIsUppercase} setNavColor={setTopbarNavColor} setNavColorHover={setTopbarNavColorHover} setNavHeight={setTopbarNavHeight} setNavStyle={setTopbarNavStyle} />
        <DivNgang className='my-2' />
      </div>
    </div>
  )
}

export default page