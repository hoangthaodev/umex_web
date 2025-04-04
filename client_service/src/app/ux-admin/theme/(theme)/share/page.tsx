'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import { ShareIconsMap } from '@/lib/iconsMap'
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa6'

const page = () => {
  const {
    shareIconStyle,
    shareIcons,
    setShareIconStyle,
    setShareIcons,
  } = useTheme()
  const [firstMount, setFirstMount] = useState(true)

  useEffect(() => {
    setFirstMount(false)
  }, [])

  const handleChecked = (id: number) => {
    return shareIcons.includes(id)
  }

  const handleCheckedChange = (id: number) => {
    if (shareIcons.includes(id)) {
      setShareIcons(shareIcons.filter((i) => i !== id))
    } else {
      setShareIcons([...shareIcons, id])
    }
  }

  if (firstMount) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className='py-4 flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Share", link: "/ux-admin/theme/share" },
      ]} />
      <div className='flex flex-col gap-2 p-2'>
        <h4>Share Icons Style</h4>
        <div className='text-blue-500 flex flex-wrap gap-1 justify-center'>
          <label
            onClick={() => { setShareIconStyle(1) }}
            className={`${shareIconStyle === 1 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
            <label className={`${shareIconStyle === 1 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500 border-blue-400 text-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <FaHeart size={20} />
            </label>
          </label>

          <label
            onClick={() => { setShareIconStyle(2) }}
            className={`${shareIconStyle === 2 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
            <label className={`${shareIconStyle === 2 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500 border-blue-400 text-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border border-blue-400 group-hover:border-blue-500 rounded-full'><FaHeart size={20} /></label>
            </label>
          </label>

          <label
            onClick={() => { setShareIconStyle(3) }}
            className={`${shareIconStyle === 3 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
            <label className={`${shareIconStyle === 3 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500 border-blue-400 text-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border bg-blue-400 group-hover:bg-blue-500 rounded-full text-gray-100'><FaHeart size={20} /></label>
            </label>
          </label>

          <label
            onClick={() => { setShareIconStyle(4) }}
            className={`${shareIconStyle === 4 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
            <label className={`${shareIconStyle === 4 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500 border-blue-400 text-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border border-blue-400 group-hover:border-blue-500 rounded-sm'><FaHeart size={20} /></label>
            </label>
          </label>

          <label
            onClick={() => { setShareIconStyle(5) }}
            className={`${shareIconStyle === 5 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
            <label className={`${shareIconStyle === 5 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500 border-blue-400 text-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border bg-blue-400 group-hover:bg-blue-500 rounded-sm text-gray-100'><FaHeart size={20} /></label>
            </label>
          </label>
        </div>
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <h4>Share Icons</h4>
        <div className='flex flex-col gap-2'>
          {
            ShareIconsMap.map((item, index) => {
              return (
                <div key={index} className='flex gap-2 items-center'>
                  <input
                    className='w-4 h-4'
                    type="checkbox" checked={handleChecked(item.id)} onChange={() => { handleCheckedChange(item.id) }} />
                  <label onClick={() => { handleCheckedChange(item.id) }}>{item.name}</label>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default page