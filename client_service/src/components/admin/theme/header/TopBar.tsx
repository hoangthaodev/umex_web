'use client'

import { getConfigByKey, updateConfigByKey } from '@/actions/config.action'
import { getImageById } from '@/actions/image.action'
import { useTheme } from '@/app/ThemeContext'
import Layout from '@/components/admin/theme/Layout'
import Navigation from '@/components/admin/theme/Navigation'
import DivNgang from '@/components/DivNgang'
import NavStyle from '@/components/NavStyle'
import { SetBreadcrumb } from '@/components/SetBreadcrumb'
import { ConfigType, ImageType } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const TopBar = () => {
  const { topbarEnable, topbarLayoutHeight, topbarLayoutTextColor, topbarLayoutBackgroundColor, topbarLayoutBackgroundImage
    , topbarLayoutBackgroundRepeat, topbarIsUppercase, topbarNavColor, topbarNavColorHover, topbarNavHeight, topbarNavStyle
    , setTopbarEnable, setTopbarLayoutHeight, setTopbarLayoutTextColor, setTopbarLayoutBackgroundColor, setTopbarLayoutBackgroundImage
    , setTopbarLayoutBackgroundRepeat, setTopbarIsUppercase, setTopbarNavColor, setTopbarNavColorHover, setTopbarNavHeight, setTopbarNavStyle
  } = useTheme()


  const handleSaveChange = async () => {
    const data = JSON.stringify({
      topbarEnable,
      topbarLayoutHeight,
      topbarLayoutTextColor,
      topbarLayoutBackgroundColor,
      topbarLayoutBackgroundImage: topbarLayoutBackgroundImage ? topbarLayoutBackgroundImage.image_id : undefined,
      topbarLayoutBackgroundRepeat,
      topbarIsUppercase,
      topbarNavColor,
      topbarNavColorHover,
      topbarNavHeight,
      topbarNavStyle,
    })
    await updateConfigByKey("header_topbar", data)

    toast.success("Save Change Successfully!")
  }

  return (
    <div className='flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Top Bar", link: "/ux-admin/theme/header/topbar" },
      ]} />
      <div className='flex gap-2 items-center p-2'>
        <input type="checkbox" checked={topbarEnable} onChange={() => { setTopbarEnable(!topbarEnable) }} />
        <label onClick={() => { setTopbarEnable(!topbarEnable) }}>Enable Top Bar</label>
      </div>
      <div className={`${topbarEnable ? "display" : "hidden"}`}>
        <Layout layoutHeightMin={10} layoutHeightMax={100} layoutHeightDefault={30} layoutRepeat={topbarLayoutBackgroundRepeat} setLayoutRepeat={setTopbarLayoutBackgroundRepeat} layoutImage={topbarLayoutBackgroundImage} setLayoutImage={setTopbarLayoutBackgroundImage} layoutHeight={topbarLayoutHeight} setLayoutHeight={setTopbarLayoutHeight} layoutTextColor={topbarLayoutTextColor} setLayoutTextColor={setTopbarLayoutTextColor} layoutBackgroundColor={topbarLayoutBackgroundColor} setLayoutBackgroundColor={setTopbarLayoutBackgroundColor} />
        <Navigation navHeightMin={0} navHeightMax={100} navHeightDefault={20} isUppercase={topbarIsUppercase} navColor={topbarNavColor} navColorHover={topbarNavColorHover} navHeight={topbarNavHeight} navStyle={topbarNavStyle} setIsUppercase={setTopbarIsUppercase} setNavColor={setTopbarNavColor} setNavColorHover={setTopbarNavColorHover} setNavHeight={setTopbarNavHeight} setNavStyle={setTopbarNavStyle} />
        <DivNgang className='my-2' />
      </div>
      <div className='px-2'>
        <button className='float-right bg-blue-700 text-gray-200 hover:bg-blue-800 text-sm py-1 px-2 rounded-md'
          onClick={handleSaveChange}
        >Save Change</button>
      </div>
    </div>
  )
}

export default TopBar