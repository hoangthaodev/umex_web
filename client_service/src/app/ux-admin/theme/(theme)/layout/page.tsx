'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import SelectColor from '@/components/admin/theme/theme/SelectColor'
import SelectImage from '@/components/admin/theme/theme/SelectImage'
import SelectInList from '@/components/admin/theme/theme/SelectInList'
import SelectTextColor from '@/components/admin/theme/theme/SelectTextColor'
import React from 'react'

const page = () => {
  const { themeMode, setThemeMode, layoutMode, setLayoutMode, dropShadow, setDropShadow, siteWidth, setSiteWidth,
    containerWidth, setContainerWidth, backgroundsColor, setBackgroundsColor,
    backgroundImage, setBackgroundImage, contentBackground, setContentBackground,
    backgroundRepeat, setBackgroundRepeat
  } = useTheme()

  const layoutModeList = [
    { id: 1, name: "Full Width" },
    { id: 2, name: "Boxed" },
  ]

  const backgroundRepeatList = [
    { id: 1, name: "Full Size" },
    { id: 2, name: "Tiled" },
  ]

  return (
    <div className='p-2 flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Layout", link: "/ux-admin/theme/layout" }
      ]} />
      <div className='flex flex-col gap-2'>
        <h4>Layout Mode</h4>
        <p className='text-xs italic text-gray-500'>Select Full width or boxed layout.</p>
        <SelectInList arrayList={layoutModeList} selected={layoutMode} setSelected={setLayoutMode} />
        {
          layoutMode === 2 && (
            <div className='flex gap-2 items-center'>
              <input
                className='w-4 h-4'
                type="checkbox" checked={dropShadow} onChange={() => { setDropShadow(!dropShadow) }} />
              <label onClick={() => { setDropShadow(!dropShadow) }}>Add Drop Shadow to Content box</label>
            </div>
          )
        }
      </div>
      {
        layoutMode === 2 && (
          <>
            <div className='flex flex-col gap-2'>
              <h4>Site width (px)</h4>
              <input
                className='border border-gray-400 rounded-sm px-2'
                type="number" value={siteWidth} onChange={(e) => { setSiteWidth(Number(e.target.value)) }} />
            </div>
            <div className='flex flex-col gap-2'>
              <h4>Background Color</h4>
              <SelectColor color={backgroundsColor} setColor={setBackgroundsColor} />
            </div>
            <div className='flex flex-col gap-2'>
              <h4>Background Image</h4>
              <SelectImage image={backgroundImage} setImage={setBackgroundImage} />
            </div>
            {
              backgroundImage > 0 && (
                <div className='flex flex-col gap-2'>
                  <h4>Background Repeat</h4>
                  <SelectInList arrayList={backgroundRepeatList} selected={backgroundRepeat} setSelected={setBackgroundRepeat} />
                </div>
              )
            }
          </>
        )
      }
      <div className='flex flex-col gap-2'>
        <h4>Container width (px)</h4>
        <p className='text-xs italic text-gray-500'>Set the default width of content containers. (Header, Rows etc)</p>
        <input
          className='border border-gray-400 rounded-sm px-2'
          type="number" value={containerWidth} onChange={(e) => { setContainerWidth(Number(e.target.value)) }} />
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Content Color (Light / Dark Mode)</h4>
        <p className='text-xs italic text-gray-500'>Light or Dark content text color</p>
        <SelectTextColor selected={themeMode} setSelected={setThemeMode} />
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Content Background</h4>
        <SelectColor color={contentBackground} setColor={setContentBackground} />
      </div>
    </div>
  )
}

export default page