'use client'

import { updateConfigByKey } from '@/actions/config.action'
import { useTheme } from '@/app/ThemeContext'
import { useMedia } from '@/app/ux-admin/MediaContext'
import DivNgang from '@/components/DivNgang'
import InputRange from '@/components/InputRange'
import MediaSelect from '@/components/MediaSelect'
import { SetBreadcrumb } from '@/components/SetBreadcrumb'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const SiteIdentify = () => {
  const { title, description, logo, favicon, isDisplayBelowLogo, setTitle, setDescription, setLogo, setFavicon, setIsDisplayBelowLogo
    , logoContainerWidth, setLogoContainerWidth, logoMaxWidth, setLogoMaxWidth, logoPadding, setLogoPadding, logoLink, setLogoLink
  } = useTheme()
  const [isSelectMedia, setIsSelectMedia] = useState(false)
  const { setImageSelected } = useMedia()
  const [isWhat, setIsWhat] = useState<string | undefined>(undefined)

  const handleChangeLogo = () => {
    setIsSelectMedia(true)
    setImageSelected(logo)
    setIsWhat("logo")
  }

  const handleChangeFavicon = () => {
    setIsSelectMedia(true)
    setImageSelected(favicon)
    setIsWhat("favicon")
  }

  const handleSaveChange = async () => {
    const data = JSON.stringify({
      title,
      description,
      logo: logo ? logo.image_id : undefined,
      favicon: favicon ? favicon.image_id : undefined,
      isDisplayBelowLogo,
      logoContainerWidth, setLogoContainerWidth, logoMaxWidth, setLogoMaxWidth, logoPadding, setLogoPadding, logoLink, setLogoLink
    })
    await updateConfigByKey("header_siteidentify", data)

    toast.success("Save Change Successfully!")
  }

  return (

    <div className='p-2 border-t border-gray-400'>

      {/* select media */}
      {
        isSelectMedia && (
          <MediaSelect setIsSelectMedia={setIsSelectMedia} isWhat={isWhat} logo={setLogo} favicon={setFavicon} />
        )
      }

      {/* main */}
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Logo & Site Identify", link: "/ux-admin/theme/header/siteidentify" },
      ]} />
      <div className='flex flex-col gap-2'>
        <h3>Site Title</h3>
        <input className='border border-gray-400 px-2 rounded-sm my-2'
          type="text" value={title}
          onChange={(e) => { setTitle(e.target.value) }} />
        <DivNgang className='my-2' />

        <h3>Description</h3>
        <input className='border border-gray-400 px-2 rounded-sm my-2'
          type="text" value={description}
          onChange={(e) => { setDescription(e.target.value) }} />
        <div className='flex gap-2'>
          <input id='isdisplayBelowLogo' type='checkbox' checked={isDisplayBelowLogo} onChange={() => { setIsDisplayBelowLogo(!isDisplayBelowLogo) }} />
          <label onClick={() => { setIsDisplayBelowLogo(!isDisplayBelowLogo) }}>Display below logo</label>
        </div>
        <DivNgang className='my-2' />

        <h3>Logo</h3>
        <div>
          <div className='w-32 h-32 flex items-center border border-gray-500 my-2'>
            <Image
              alt='logo'
              src={logo?.image_url || "/"}
              width={100}
              height={100}
              className='w-full h-auto'
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <button
            className='text-sm justify-center items-center w-full py-2 border border-gray-400 bg-gray-300 rounded-sm'
            onClick={handleChangeLogo}
          >
            Change Logo
          </button>
        </div>

        <h3>Logo container width</h3>
        <InputRange min={30} max={700} defaultValue={200} value={logoContainerWidth} setValue={setLogoContainerWidth} />

        <h3>Logo max width (px)</h3>
        <p className='text-xs text-gray-400 italic'>Set the logo max width in pixels. Leave it blank to make is auto fit inside the logo container.</p>
        <input
          className='border border-gray-400 rounded-sm px-2'
          type="text" value={logoMaxWidth} onChange={(e) => { setLogoMaxWidth(e.target.value) }} />

        <h3>Logo Padding</h3>
        <InputRange min={0} max={30} defaultValue={0} value={logoPadding} setValue={setLogoPadding} />

        <h3>Logo link</h3>
        <p className='text-xs text-gray-400 italic'>Custom logo link (Default to homepage link if empty).</p>
        <input
          className='border border-gray-400 rounded-sm px-2'
          type="text" value={logoLink} onChange={(e) => { setLogoLink(e.target.value) }} />
        <DivNgang className='my-2' />

        <h3>Favicon</h3>
        <div className='flex items-end'>
          <div className='w-20 h-20 flex items-center border border-gray-500 my-2'>
            <Image
              alt='favicon'
              src={favicon?.image_url || "/"}
              width={100}
              height={100}
              className='w-full h-auto'
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <button className='m-2 p-2 text-sm justify-center items-center border border-gray-400 bg-gray-300 rounded-sm'
            onClick={handleChangeFavicon}
          >
            Change icon
          </button>
        </div>
        <DivNgang className='my-2' />
      </div>
      <button className='float-right bg-blue-700 text-gray-200 hover:bg-blue-800 text-sm py-1 px-2 rounded-md'
        onClick={handleSaveChange}
      >Save Change</button>
    </div>
  )
}

export default SiteIdentify