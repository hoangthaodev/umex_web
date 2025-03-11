'use client'
import { getConfigByKey, updateConfigByKey } from '@/actions/config.action'
import Layout from '@/components/admin/theme/Layout'
import Navigation from '@/components/admin/theme/Navigation'
import DivNgang from '@/components/DivNgang'
import { SetBreadcrumb } from '@/components/SetBreadcrumb'
import { ConfigType } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const HeaderBottom = () => {
  const [layoutHeight, setLayoutHeight] = useState(30)
  const [layoutTextColor, setLayoutTextColor] = useState("0")
  const [layoutBackgroundColor, setLayoutBackgroundColor] = useState<string | undefined>("#333333")
  const [layoutBackgroundImage, setLayoutBackgroundImage] = useState<number>(0)
  const [layoutBackgroundRepeat, setLayoutBackgroundRepeat] = useState(3)

  const [isUppercase, setIsUppercase] = useState(true)
  const [navColor, setNavColor] = useState<string | undefined>('#333333')
  const [navColorHover, setNavColorHover] = useState<string | undefined>('#333333')
  const [navHeight, setNavHeight] = useState(16)
  const [navStyle, setNavStyle] = useState(2)

  useEffect(() => {
    const setData = async () => {
      const res: ConfigType = await getConfigByKey("header_bottom")
      const data = JSON.parse(res.config_value)
      setLayoutHeight(data.layoutHeight)
      setLayoutTextColor(data.layoutTextColor)
      setLayoutBackgroundColor(data.layoutBackgroundColor)
      data.layoutBackgroundImage && setLayoutBackgroundImage(data.layoutBackgroundImage)
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
      layoutHeight,
      layoutTextColor,
      layoutBackgroundColor,
      layoutBackgroundImage,
      layoutBackgroundRepeat,
      isUppercase,
      navColor,
      navColorHover,
      navHeight,
      navStyle,
    })
    await updateConfigByKey("header_bottom", data)

    toast.success("Save Change Successfully!")
  }

  return (
    <div className='flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Header Bottom", link: "/ux-admin/theme/header/headerbottom" },
      ]} />
      <Layout layoutHeightMin={10} layoutHeightMax={100} layoutHeightDefault={55} layoutRepeat={layoutBackgroundRepeat} setLayoutRepeat={setLayoutBackgroundRepeat} layoutImage={layoutBackgroundImage} setLayoutImage={setLayoutBackgroundImage} layoutHeight={layoutHeight} setLayoutHeight={setLayoutHeight} layoutTextColor={layoutTextColor} setLayoutTextColor={setLayoutTextColor} layoutBackgroundColor={layoutBackgroundColor} setLayoutBackgroundColor={setLayoutBackgroundColor} />
      <Navigation navHeightMin={0} navHeightMax={100} navHeightDefault={16} isUppercase={isUppercase} navColor={navColor} navColorHover={navColorHover} navHeight={navHeight} navStyle={navStyle} setIsUppercase={setIsUppercase} setNavColor={setNavColor} setNavColorHover={setNavColorHover} setNavHeight={setNavHeight} setNavStyle={setNavStyle} />
      <DivNgang className='my-2' />
      <div className='px-2'>
        <button className='float-right bg-blue-700 text-gray-200 hover:bg-blue-800 text-sm py-1 px-2 rounded-md'
          onClick={handleSaveChange}
        >Save Change</button>
      </div>
    </div>
  )
}

export default HeaderBottom