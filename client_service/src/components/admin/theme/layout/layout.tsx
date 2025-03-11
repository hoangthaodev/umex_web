'use client'
import { useTheme } from '@/app/ThemeContext'
import SelectColor from '@/components/SelectColor'
import SelectImage from '@/components/SelectImage'
import { listLayoutMode } from '@/lib/styleMap'
import React from 'react'
import ThemeMode from '@/components/ThemeMode'
import { SetBreadcrumb } from '@/components/SetBreadcrumb'

type Props = {}

const ThemeLayout = (props: Props) => {
  const { themeMode, setThemeMode, layoutMode, setLayoutMode, dropShadow, setDropShadow, siteWidth, setSiteWidth,
    containerWidth, setContainerWidth, backgroundsColor, setBackgroundsColor,
    backgroundImage, setBackgroundImage, contentBackground, setContentBackground,
    backgroundRepeat, setBackgroundRepeat
  } = useTheme()

  return (
    <div className='p-2 flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Layout", link: "/ux-admin/theme/layout" }
      ]} />
      <div className='flex flex-col gap-2'>
        <h3>Layout Mode</h3>
        <p className='text-xs italic text-gray-500'>Select Full width or boxed layout.</p>
        <div className='flex flex-wrap text-xs border border-gray-400'>
          {
            Object.entries(listLayoutMode).map(([key, val], index) => {
              return (
                <label
                  onClick={() => { setLayoutMode(key) }}
                  key={index}
                  className={`${layoutMode === key ? "bg-blue-400 text-gray-100" : ""} grow text-center px-2 py-1`}>{val}</label>
              )
            })
          }
        </div>
        {
          layoutMode === "1" && (
            <div className='flex gap-2'>
              <input type="checkbox" checked={dropShadow} onChange={() => { setDropShadow(!dropShadow) }} />
              <label onClick={() => { setDropShadow(!dropShadow) }}>Add Drop Shadow to Content box</label>
            </div>
          )
        }
      </div>
      {
        layoutMode === "1" && (
          <>
            <div className='flex flex-col'>
              <h3>Site width (px)</h3>
              <input
                className='border border-gray-400 rounded-sm px-2'
                type="number" value={siteWidth} onChange={(e) => { setSiteWidth(Number(e.target.value)) }} />
            </div>
            <div className='flex flex-col'>
              <h3>Background Color</h3>
              <SelectColor color={backgroundsColor} setColor={setBackgroundsColor} />
            </div>
            <div className='flex flex-col'>
              <h3>Background Image</h3>
              <SelectImage image={backgroundImage} setImage={setBackgroundImage} />
            </div>
            {
              backgroundImage > 0 && (
                <div className='flex flex-col'>
                  <h3>Background Repeat</h3>
                  <div className='flex flex-wrap text-xs border border-gray-400'>
                    <label
                      onClick={() => { setBackgroundRepeat("0") }}
                      className={`${backgroundRepeat === "0" ? "bg-blue-400 text-gray-100" : ""} grow text-center px-2 py-1`}>Full Size</label>
                    <label
                      onClick={() => { setBackgroundRepeat("1") }}
                      className={`${backgroundRepeat === "1" ? "bg-blue-400 text-gray-100" : ""} grow text-center px-2 py-1`}>Tiled</label>
                  </div>
                </div>
              )
            }
          </>
        )
      }
      <div className='flex flex-col gap-2'>
        <h3>Container width (px)</h3>
        <p className='text-xs italic text-gray-500'>Set the default width of content containers. (Header, Rows etc)</p>
        <input
          className='border border-gray-400 rounded-sm px-2'
          type="number" value={containerWidth} onChange={(e) => { setContainerWidth(Number(e.target.value)) }} />
      </div>
      <div className='flex flex-col gap-2'>
        <h3>Content Color (Light / Dark Mode)</h3>
        <p className='text-xs italic text-gray-500'>Light or Dark content text color</p>
        <ThemeMode selected={themeMode} setSelected={setThemeMode} />
      </div>
      <div className='flex flex-col gap-2'>
        <h3>Content Background</h3>
        <SelectColor color={contentBackground} setColor={setContentBackground} />
      </div>
    </div>
  )
}

export default ThemeLayout