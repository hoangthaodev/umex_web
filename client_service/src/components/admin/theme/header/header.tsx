'use client'
import { useBreadcrumb } from '@/app/ux-admin/(admin)/theme/(custom)/BreadcrumbContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { LuChevronRight } from 'react-icons/lu'

const ThemeHeader = () => {
  const router = useRouter()
  const { setBreadcrumb } = useBreadcrumb()
  useEffect(() => {
    setBreadcrumb([
      { name: "Customizing", link: "/ux-admin/theme" },
      { name: "Header", link: "/ux-admin/theme/header" }
    ])
  }, [])
  return (
    <ul className='w-full bg-white'>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/header/siteidentify")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Logo & Site Identify</span>
          <LuChevronRight size={20} />
        </button>
      </li>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/header/topbar")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Top Bar</span>
          <LuChevronRight size={20} />
        </button>
      </li>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/header/headermain")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Header Main</span>
          <LuChevronRight size={20} />
        </button>
      </li>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/header/headerbottom")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Header Bottom</span>
          <LuChevronRight size={20} />
        </button>
      </li>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/header/stickyheader")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Sticky Header</span>
          <LuChevronRight size={20} />
        </button>
      </li>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/header/buttons")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Buttons</span>
          <LuChevronRight size={20} />
        </button>
      </li>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/header/html")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>HTML</span>
          <LuChevronRight size={20} />
        </button>
      </li>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/header/search")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Search</span>
          <LuChevronRight size={20} />
        </button>
      </li>
      <button onClick={() => router.push("/ux-admin/theme/header/followicons")}
        className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
        <span className='grow text-start'>Follow Icons</span>
        <LuChevronRight size={20} />
      </button>
    </ul>
  )
}

export default ThemeHeader