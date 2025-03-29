'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import InputRange from '@/components/admin/theme/theme/InputRange'
import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const page = () => {
  const {
    searchStyle,
    searchType,
    searchPlaceholder,
    searchWidth,
    searchCategory,
    setSearchStyle,
    setSearchType,
    setSearchPlaceholder,
    setSearchWidth,
    setSearchCategory,
  } = useTheme()

  return (
    <div>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Search", link: "/ux-admin/theme/header/search" },
      ]} />
      <div className='p-2 flex flex-col gap-2'>
        <h3>Search Icon Style</h3>
        <div className='text-blue-500 flex flex-wrap gap-1 justify-center'>
          <label
            onClick={() => { setSearchStyle(1) }}
            className={`${searchStyle === 1 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm`}>
            <label className={`${searchStyle === 1 ? "text-blue-500 border-blue-500" : "hover:text-blue-500 hover:border-blue-500 border-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <FaMagnifyingGlass size={20} />
            </label>
          </label>

          <label
            onClick={() => { setSearchStyle(2) }}
            className={`${searchStyle === 2 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm`}>
            <label className={`${searchStyle === 2 ? "text-blue-500 border-blue-500" : "hover:text-blue-500 hover:border-blue-500 border-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border border-blue-400 hover:border-blue-500 rounded-full'><FaMagnifyingGlass size={20} /></label>
            </label>
          </label>

          <label
            onClick={() => { setSearchStyle(3) }}
            className={`${searchStyle === 3 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm`}>
            <label className={`${searchStyle === 3 ? "text-blue-500 border-blue-500" : "hover:text-blue-500 hover:border-blue-500 border-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border bg-blue-500 hover:bg-blue-600 rounded-full text-gray-100'><FaMagnifyingGlass size={20} /></label>
            </label>
          </label>

          <label
            onClick={() => { setSearchStyle(4) }}
            className={`${searchStyle === 4 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm`}>
            <label className={`${searchStyle === 4 ? "text-blue-500 border-blue-500" : "hover:text-blue-500 hover:border-blue-500 border-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border border-blue-400 hover:border-blue-500 rounded-sm'><FaMagnifyingGlass size={20} /></label>
            </label>
          </label>

          <label
            onClick={() => { setSearchStyle(5) }}
            className={`${searchStyle === 5 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm`}>
            <label className={`${searchStyle === 5 ? "text-blue-500 border-blue-500" : "hover:text-blue-500 hover:border-blue-500 border-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border bg-blue-500 hover:bg-blue-600 rounded-sm text-gray-100'><FaMagnifyingGlass size={20} /></label>
            </label>
          </label>

        </div>
      </div>

      <div className='p-2 flex flex-col gap-2'>
        <h3>Search Icon Type</h3>
        <div className='grid grid-cols-2'>
          <label
            onClick={() => { setSearchType(1) }}
            className={`${searchType === 1 ? "bg-blue-400 text-gray-100" : ""} p-1 text-center`}>Dropdown</label>
          <label
            onClick={() => { setSearchType(2) }}
            className={`${searchType === 2 ? "bg-blue-400 text-gray-100" : ""} p-1 text-center`}>Lightbox</label>
        </div>
      </div>

      <div className='p-2 flex flex-col gap-2'>
        <h3>Placeholder text</h3>
        <input
          className='border px-2 py-1 rounded-xs'
          type="text" value={searchPlaceholder} onChange={(e) => { setSearchPlaceholder(e.target.value) }} />
      </div>

      <div className='p-2 flex items-center gap-2'>
        <input type="checkbox" checked={searchCategory} onChange={() => { setSearchCategory(!searchCategory) }} />
        <label onClick={() => { setSearchCategory(!searchCategory) }}>Search Categories</label>
      </div>

      <div className='p-2 flex flex-col gap-2'>
        <h3>Header Search form width</h3>
        <InputRange min={10} max={100} defaultValue={60} value={searchWidth} setValue={setSearchWidth} />
      </div>
    </div>
  )
}

export default page