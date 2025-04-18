'use client'

import { getImageById } from '@/action/image.action'
import { useTheme } from '@/app/themeContext'
import MediaSelect from '@/components/admin/media/MediaSelect'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import SelectOption from '@/components/admin/theme/theme/SelectOption'
import { ImageType } from '@/lib/type'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [isSelectMedia, setIsSelectMedia] = useState(false)
  const [logoImage, setLogoImage] = useState<ImageType | undefined>(undefined)
  const {
    stickyStyle,
    stickyHideScrolldown,
    stickyTopCheck,
    stickyMainCheck,
    stickyBottomCheck,
    stickyLogo,
    setStickyStyle,
    setStickyHideScrolldown,
    setStickyTopCheck,
    setStickyMainCheck,
    setStickyBottomCheck,
    setStickyLogo,
  } = useTheme()

  useEffect(() => {
    if (stickyLogo <= 0) return
    getImageById(stickyLogo).then(data => {
      if (data) {
        setLogoImage(data)
      }
    })
  }, [stickyLogo])

  useEffect(() => {
    if (isSelectMedia) return
    if (logoImage) {
      setStickyLogo(logoImage.image_id!)
    } else {
      setStickyLogo(0)
    }
  }, [isSelectMedia])

  const stickyStyleList = [
    { id: 1, name: "Jump Down" },
    { id: 2, name: "Fade" },
    { id: 3, name: "Shrink" },
  ]

  return (
    <div className='p-2 flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Sticky Header", link: "/ux-admin/theme/header/stickyheader" },
      ]} />
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <input
            className='w-4 h-4'
            type="checkbox" checked={stickyTopCheck} onChange={() => { setStickyTopCheck(!stickyTopCheck) }} />
          <label onClick={() => { setStickyTopCheck(!stickyTopCheck) }}>Top Bar - Sticky on Scroll</label>
        </div>
        <div className='flex gap-2'>
          <input
            className='w-4 h-4'
            type="checkbox" checked={stickyMainCheck} onChange={() => { setStickyMainCheck(!stickyMainCheck) }} />
          <label onClick={() => { setStickyMainCheck(!stickyMainCheck) }}>Header Main - Sticky on Scroll</label>
        </div>
        <div className='flex gap-2'>
          <input
            className='w-4 h-4'
            type="checkbox" checked={stickyBottomCheck} onChange={() => { setStickyBottomCheck(!stickyBottomCheck) }} />
          <label onClick={() => { setStickyBottomCheck(!stickyBottomCheck) }}>Header Bottom - Sticky on Scroll</label>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Sticky Style</h4>
        <SelectOption value={stickyStyle} setValue={setStickyStyle} arrayOption={stickyStyleList} />
      </div>
      <div className='flex gap-2'>
        <input
          className='w-4 h-4'
          type="checkbox" checked={stickyHideScrolldown} onChange={() => { setStickyHideScrolldown(!stickyHideScrolldown) }} />
        <label onClick={() => { setStickyHideScrolldown(!stickyHideScrolldown) }}>Hide sticky when scrolling down</label>
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Custom Sticky Logo</h4>
        {
          logoImage ?
            (
              <div className='w-32 h-32 border'>
                <Image
                  src={logoImage.image_url}
                  alt={logoImage.image_alt || ""}
                  width={100}
                  height={100}
                  className='w-full h-full'
                />
              </div>
            ) :
            (
              <div className='w-full p-2 text-center border border-dashed text-gray-400'>No File Selected</div>
            )
        }
        <div className='flex gap-2'>
          {
            logoImage && (
              <button
                onClick={() => { setLogoImage(undefined) }}
                className='border border-blue-600 text-blue-400 px-2 py-1 rounded-sm text-sm'
              >Remove</button>
            )
          }
          <button
            onClick={() => { setIsSelectMedia(true) }}
            className='border border-blue-600 text-blue-400 px-2 py-1 rounded-sm text-sm'>Select image</button>
        </div>
      </div>
      {
        isSelectMedia && (
          <div className='fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center bg-inherit'>
            <MediaSelect setIsSelectMedia={setIsSelectMedia} setImage={setLogoImage} />
          </div>
        )
      }
    </div>
  )
}

export default page