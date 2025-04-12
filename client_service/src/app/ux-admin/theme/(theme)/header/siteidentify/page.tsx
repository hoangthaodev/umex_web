'use client'

import { getImageById } from '@/action/image.action'
import { useTheme } from '@/app/themeContext'
import MediaSelect from '@/components/admin/media/MediaSelect'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import InputRange from '@/components/admin/theme/theme/InputRange'
import DivNgang from '@/components/DivNgang'
import { ImageType } from '@/lib/type'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {
  const { title, description, logo, favicon, isDisplayBelowLogo, setTitle, setDescription, setLogo, setFavicon, setIsDisplayBelowLogo
    , logoContainerWidth, setLogoContainerWidth, logoMaxWidth, setLogoMaxWidth, logoPadding, setLogoPadding, logoLink, setLogoLink
  } = useTheme()
  const [logoImage, setLogoImage] = useState<ImageType | undefined>(undefined)
  const [faviconImage, setFaviconImage] = useState<ImageType | undefined>(undefined)
  const [isLogoSelect, setIsLogoSelect] = useState(false)
  const [isFaviconSelect, setIsFaviconSelect] = useState(false)

  useEffect(() => {
    if (logo <= 0) return
    getImageById(logo).then(data => {
      if (data) {
        setLogoImage(data)
      }
    })
  }, [logo])

  useEffect(() => {
    if (favicon <= 0) return
    getImageById(favicon).then(data => {
      if (data) {
        setFaviconImage(data)
      }
    })
  }, [favicon])

  useEffect(() => {
    if (isLogoSelect) return
    if (logoImage) setLogo(logoImage.image_id!)
  }, [isLogoSelect])

  useEffect(() => {
    if (isFaviconSelect) return
    if (faviconImage) setFavicon(faviconImage.image_id!)
  }, [isFaviconSelect])

  return (

    <div className='p-2'>
      {/* select Media */}
      {
        isLogoSelect &&
        <MediaSelect setIsSelectMedia={setIsLogoSelect} setImage={setLogoImage} />
      }
      {
        isFaviconSelect &&
        <MediaSelect setIsSelectMedia={setIsFaviconSelect} setImage={setFaviconImage} />
      }
      {/* main */}
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Logo & Site Identify", link: "/ux-admin/theme/header/siteidentify" },
      ]} />
      <div className='flex flex-col gap-2'>
        <h4>Site Title</h4>
        <input className='border px-2 rounded-sm'
          type="text" value={title}
          onChange={(e) => { setTitle(e.target.value) }} />
        <DivNgang className='my-2' />

        <h4>Description</h4>
        <input className='border px-2 rounded-sm'
          type="text" value={description}
          onChange={(e) => { setDescription(e.target.value) }} />
        <div className='flex gap-2 '>
          <input
            className='w-4 h-4'
            id='isdisplayBelowLogo' type='checkbox' checked={isDisplayBelowLogo} onChange={() => { setIsDisplayBelowLogo(!isDisplayBelowLogo) }} />
          <label onClick={() => { setIsDisplayBelowLogo(!isDisplayBelowLogo) }}>Display below logo</label>
        </div>
        <DivNgang className='my-2' />

        <h4>Logo</h4>
        <div className='flex flex-col items-center'>
          <div className='w-32 h-32 flex items-center my-2'>
            <Image
              alt='logo'
              src={logoImage?.image_url || "/empty.png"}
              width={100}
              height={100}
              className='w-full h-auto'
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <button
            className='text-sm justify-center items-center w-full py-2 border bg-gray-300 dark:bg-gray-600 rounded-sm cursor-pointer'
            onClick={() => { setIsLogoSelect(true) }}
          >
            Change Logo
          </button>
        </div>

        <h4>Logo container width</h4>
        <InputRange min={30} max={700} defaultValue={200} value={logoContainerWidth} setValue={setLogoContainerWidth} />

        <h4>Logo max width (px)</h4>
        <p className='text-xs text-gray-400 italic'>Set the logo max width in pixels. Leave it blank to make is auto fit inside the logo container.</p>
        <input
          className='border rounded-sm px-2'
          type="number" value={logoMaxWidth} onChange={(e) => { setLogoMaxWidth(parseInt(e.target.value)) }} />

        <h4>Logo Padding</h4>
        <InputRange min={0} max={30} defaultValue={0} value={logoPadding} setValue={setLogoPadding} />

        <h4>Logo link</h4>
        <p className='text-xs text-gray-400 italic'>Custom logo link (Default to homepage link if empty).</p>
        <input
          className='border rounded-sm px-2'
          type="text" value={logoLink} onChange={(e) => { setLogoLink(e.target.value) }} />
        <DivNgang className='my-2' />

        <h4>Favicon</h4>
        <div className='flex items-end'>
          <div className='w-20 h-20 flex items-center border my-2'>
            <Image
              alt='favicon'
              src={faviconImage?.image_url || "/empty.png"}
              width={100}
              height={100}
              className='w-full h-auto'
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <button className='m-2 p-2 text-sm justify-center items-center border bg-gray-300 dark:bg-gray-600 rounded-sm cursor-pointer'
            onClick={() => { setIsFaviconSelect(true) }}
          >
            Change icon
          </button>
        </div>
        <DivNgang className='my-2' />
      </div>
    </div>
  )
}

export default page