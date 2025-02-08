'use client'
import { getConfigByKey, updateConfigByKey } from '@/actions/config.action'
import { getImageById } from '@/actions/image.action'
import MediaSelect from '@/components/MediaSelect'
import { SetBreadcrumb } from '@/components/SetBreadcrumb'
import { ConfigType, ImageType } from '@/lib/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const StickyHeader = () => {
  const [style, setStyle] = useState(0)
  const [hideScrolldown, setHideScrolldown] = useState(false)
  const [topCheck, setTopCheck] = useState(false)
  const [mainCheck, setMainCheck] = useState(false)
  const [bottomCheck, setBottomCheck] = useState(false)
  const [stickyLogo, setStickyLogo] = useState<ImageType | undefined>(undefined)
  const [isSelectMedia, setIsSelectMedia] = useState(false)

  useEffect(() => {
    const setData = async () => {
      const res: ConfigType = await getConfigByKey("header_sticky")
      const data = JSON.parse(res.config_value)
      setStyle(data.style)
      setHideScrolldown(data.hideScrolldown)
      setTopCheck(data.topCheck)
      setMainCheck(data.mainCheck)
      setBottomCheck(data.bottomCheck)
      setStickyLogo(await getImageById(Number(data.stickyLogo)))
    }
    setData()
  }, [])

  const handleSaveChange = async () => {
    const data = JSON.stringify({
      style,
      hideScrolldown,
      topCheck,
      mainCheck,
      bottomCheck,
      stickyLogo: stickyLogo ? stickyLogo.img_id : undefined,
    })
    await updateConfigByKey("header_sticky", data)

    toast.success("Save Change Successfully!")
  }

  return (
    <div className='p-2 flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Sticky Header", link: "/ux-admin/theme/header/stickyheader" },
      ]} />
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <input type="checkbox" checked={topCheck} onChange={() => { setTopCheck(!topCheck) }} />
          <label onClick={() => { setTopCheck(!topCheck) }}>Top Bar - Sticky on Scroll</label>
        </div>
        <div className='flex gap-2'>
          <input type="checkbox" checked={mainCheck} onChange={() => { setMainCheck(!mainCheck) }} />
          <label onClick={() => { setMainCheck(!mainCheck) }}>Header Main - Sticky on Scroll</label>
        </div>
        <div className='flex gap-2'>
          <input type="checkbox" checked={bottomCheck} onChange={() => { setBottomCheck(!bottomCheck) }} />
          <label onClick={() => { setBottomCheck(!bottomCheck) }}>Header Bottom - Sticky on Scroll</label>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <label className='font-semibold'>Sticky Style</label>
        <select className='border border-gray-400 px-2 rounded-sm' value={style} onChange={(e) => { setStyle(Number(e.target.value)) }}>
          <option value="0">Jump Down</option>
          <option value="1">Fade</option>
          <option value="2">Shrink</option>
        </select>
      </div>
      <div className='flex gap-2'>
        <input type="checkbox" checked={hideScrolldown} onChange={() => { setHideScrolldown(!hideScrolldown) }} />
        <label onClick={() => { setHideScrolldown(!hideScrolldown) }}>Hide sticky when scrolling down</label>
      </div>
      <div className='flex flex-col gap-2'>
        <label className='font-semibold'>Custom Sticky Logo</label>
        {
          stickyLogo ?
            (
              <div className='w-32 h-32 border border-gray-400'>
                <Image
                  src={stickyLogo.img_src}
                  alt={stickyLogo.img_alt}
                  width={100}
                  height={100}
                  className='w-full h-full'
                />
              </div>
            ) :
            (
              <div className='w-full p-2 text-center border border-dashed border-gray-400 text-gray-400'>No File Selected</div>
            )
        }
        <div className='flex gap-2'>
          {
            stickyLogo && (
              <button
                onClick={() => { setStickyLogo(undefined) }}
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
            <MediaSelect setIsSelectMedia={setIsSelectMedia} setImage={setStickyLogo} />
          </div>
        )
      }
      <div className='px-2'>
        <button className='float-right bg-blue-700 text-gray-200 hover:bg-blue-800 text-sm py-1 px-2 rounded-md'
          onClick={handleSaveChange}
        >Save Change</button>
      </div>
    </div>
  )
}

export default StickyHeader