'use client'

import { getConfigByKey, updateConfigByKey } from '@/actions/config.action'
import { getImageById } from '@/actions/image.action'
import Layout from '@/components/admin/theme/Layout'
import Navigation from '@/components/admin/theme/Navigation'
import DivNgang from '@/components/DivNgang'
import { SetBreadcrumb } from '@/components/SetBreadcrumb'
import { ConfigType, ImageType } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const TopBar = () => {
  const [enable, setEnable] = useState(false)

  const [layoutHeight, setLayoutHeight] = useState(30)
  const [layoutTextColor, setLayoutTextColor] = useState("0")
  const [layoutBackgroundColor, setLayoutBackgroundColor] = useState("#333333")
  const [layoutBackgroundImage, setLayoutBackgroundImage] = useState<ImageType | undefined>(undefined)
  const [layoutBackgroundRepeat, setLayoutBackgroundRepeat] = useState(3)

  const [isUppercase, setIsUppercase] = useState(true)
  const [navColor, setNavColor] = useState('#333333')
  const [navColorHover, setNavColorHover] = useState('#333333')
  const [navHeight, setNavHeight] = useState(16)
  const [navStyle, setNavStyle] = useState(2)

  useEffect(() => {
    const setData = async () => {
      const res: ConfigType = await getConfigByKey("header_topbar")
      const data = JSON.parse(res.config_value)
      setEnable(data.enable)
      setLayoutHeight(data.layoutHeight)
      setLayoutTextColor(data.layoutTextColor)
      setLayoutBackgroundColor(data.layoutBackgroundColor)
      setLayoutBackgroundImage(await getImageById(Number(data.layoutBackgroundImage)))
      setLayoutBackgroundRepeat(data.layoutBackgroundRepeat)
      setIsUppercase(data.isUppercase)
      setNavColor(data.navColor)
      setNavColorHover(data.navColorHover)
      setNavHeight(data.navHeight)
      setNavStyle(data.navStyle)
    }
    setData()
  }, [])

  const handleSaveChange = async () => {
    const data = JSON.stringify({
      enable,
      layoutHeight,
      layoutTextColor,
      layoutBackgroundColor,
      layoutBackgroundImage: layoutBackgroundImage ? layoutBackgroundImage.img_id : undefined,
      layoutBackgroundRepeat,
      isUppercase,
      navColor,
      navColorHover,
      navHeight,
      navStyle,
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
        <input type="checkbox" checked={enable} onChange={() => { setEnable(!enable) }} />
        <label onClick={() => { setEnable(!enable) }}>Enable Top Bar</label>
      </div>
      <div className={`${enable ? "display" : "hidden"}`}>
        <Layout layoutHeightMin={10} layoutHeightMax={100} layoutHeightDefault={30} layoutRepeat={layoutBackgroundRepeat} setLayoutRepeat={setLayoutBackgroundRepeat} layoutImage={layoutBackgroundImage} setLayoutImage={setLayoutBackgroundImage} layoutHeight={layoutHeight} setLayoutHeight={setLayoutHeight} layoutTextColor={layoutTextColor} setLayoutTextColor={setLayoutTextColor} layoutBackgroundColor={layoutBackgroundColor} setLayoutBackgroundColor={setLayoutBackgroundColor} />
        <Navigation navHeightMin={0} navHeightMax={100} navHeightDefault={20} isUppercase={isUppercase} navColor={navColor} navColorHover={navColorHover} navHeight={navHeight} navStyle={navStyle} setIsUppercase={setIsUppercase} setNavColor={setNavColor} setNavColorHover={setNavColorHover} setNavHeight={setNavHeight} setNavStyle={setNavStyle} />
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