'use client'

import { getConfigFromAllConfigByKey, updateConfigByKey } from '@/actions/config.action'
import { getImageById } from '@/actions/image.action'
import { useMedia } from '@/app/ux-admin/(admin)/media/MediaContext'
import DivNgang from '@/components/DivNgang'
import MediaSelect from '@/components/MediaSelect'
import { SetBreadcrumb } from '@/components/SetBreadcrumb'
import { ConfigType, ImageType } from '@/lib/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const SiteIdentify = ({ allConfig }: { allConfig: ConfigType[] }) => {
  const [title, setTitle] = useState("/")
  const [description, setDescription] = useState("/")
  const [logo, setLogo] = useState<ImageType | undefined>(undefined)
  const [favicon, setFavicon] = useState<ImageType | undefined>(undefined)
  const [isSelectMedia, setIsSelectMedia] = useState(false)
  const [isDisplayBelowLogo, setIsDisplayBelowLogo] = useState(false)
  const { setImageSelected } = useMedia()
  const [isWhat, setIsWhat] = useState<string | undefined>(undefined)

  useEffect(() => {
    const setData = async () => {
      const inf_title = await getConfigFromAllConfigByKey(allConfig, "site_name");
      const inf_description = await getConfigFromAllConfigByKey(allConfig, "site_description");
      const inf_logo = await getConfigFromAllConfigByKey(allConfig, "site_logo");
      const inf_favicon = await getConfigFromAllConfigByKey(allConfig, "site_favicon");

      const logo_item: ImageType = await getImageById(Number(inf_logo?.config_value))
      const favicon_item: ImageType = await getImageById(Number(inf_favicon?.config_value))

      setTitle(inf_title?.config_value || "/");
      setDescription(inf_description?.config_value || "/");
      const displayBelowLogo = JSON.parse(inf_description?.config_style || "")
      setIsDisplayBelowLogo(Boolean(displayBelowLogo.displayBelowLogo) || false)
      setLogo(logo_item);
      setFavicon(favicon_item);
    }
    setData()
  }, [])

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
    await updateConfigByKey("site_name", title)
    await updateConfigByKey("site_description", description, JSON.stringify({ displayBelowLogo: isDisplayBelowLogo }))
    await updateConfigByKey("site_logo", logo?.img_id.toString() || "1")
    await updateConfigByKey("site_favicon", favicon?.img_id.toString() || "1")

    toast.success("Save Change Successfully!")
  }

  return (

    <div className='p-2 border-t border-gray-400'>

      {/* select media */}
      {
        isSelectMedia && (
          <div className='fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center bg-inherit'>
            <MediaSelect setIsSelectMedia={setIsSelectMedia} isWhat={isWhat} logo={setLogo} favicon={setFavicon} />
          </div>
        )
      }

      {/* main */}
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Logo & Site Identify", link: "/ux-admin/theme/header/siteidentify" },
      ]} />
      <div className='flex flex-col'>
        <label className='font-semibold'>Site Title</label>
        <input className='border border-gray-400 px-2 rounded-sm my-2'
          type="text" value={title}
          onChange={(e) => { setTitle(e.target.value) }} />
        <DivNgang className='my-2' />

        <label className='font-semibold'>Description</label>
        <input className='border border-gray-400 px-2 rounded-sm my-2'
          type="text" value={description}
          onChange={(e) => { setDescription(e.target.value) }} />
        <div className='flex gap-2'>
          <input id='isdisplayBelowLogo' type='checkbox' checked={isDisplayBelowLogo} onChange={() => { setIsDisplayBelowLogo(!isDisplayBelowLogo) }} />
          <label onClick={() => { setIsDisplayBelowLogo(!isDisplayBelowLogo) }}>Display below logo</label>
        </div>
        <DivNgang className='my-2' />

        <label className='font-semibold'>Logo</label>
        <div>
          <div className='w-32 h-32 flex items-center border border-gray-500 my-2'>
            <Image
              alt='logo'
              src={logo?.img_src || "/"}
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
        <DivNgang className='my-2' />

        <label className='font-semibold'>Favicon</label>
        <div className='flex items-end'>
          <div className='w-20 h-20 flex items-center border border-gray-500 my-2'>
            <Image
              alt='favicon'
              src={favicon?.img_src || "/"}
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