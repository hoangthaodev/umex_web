'use client'
import { updateConfigByKey } from '@/actions/config.action'
import { useBreadcrumb } from '@/app/ux-admin/(admin)/theme/BreadcrumbContext'
import { useTheme } from '@/app/ThemeContext'
import SelectColor from '@/components/SelectColor'
import SelectImage from '@/components/SelectImage'
import TextColor from '@/components/TextColor'
import { listLayoutMode } from '@/lib/styleMap'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import ThemeMode from '@/components/ThemeMode'

type Props = {}

const ThemeLayout = (props: Props) => {
  const { themeMode, setThemeMode, layoutMode, setLayoutMode, dropShadow, setDropShadow, siteWidth, setSiteWidth,
    containerWidth, setContainerWidth, backgroundsColor, setBackgroundsColor,
    backgroundImage, setBackgroundImage, contentBackground, setContentBackground,
    backgroundRepeat, setBackgroundRepeat
  } = useTheme()
  const { setBreadcrumb } = useBreadcrumb()

  useEffect(() => {
    setBreadcrumb([
      { name: "Customizing", link: "/ux-admin/theme" },
      { name: "Layout", link: "/ux-admin/theme/layout" }
    ])
  }, [])

  const handleSaveChange = async () => {
    const data = JSON.stringify({
      themeMode,
      layoutMode,
      dropShadow,
      siteWidth,
      containerWidth,
      backgroundsColor,
      backgroundImage: backgroundImage ? backgroundImage.image_id : undefined,
      contentBackground,
      backgroundRepeat,
    })
    await updateConfigByKey("layout", data)

    toast.success("Save Change Successfully!")
  }
  return (
    <div className='p-2 flex flex-col gap-4'>
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
              backgroundImage && (
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
      <div className='px-2'>
        <button className='float-right bg-blue-700 text-gray-200 hover:bg-blue-800 text-sm py-1 px-2 rounded-md'
          onClick={handleSaveChange}
        >Save Change</button>
      </div>
    </div>
  )
}

export default ThemeLayout