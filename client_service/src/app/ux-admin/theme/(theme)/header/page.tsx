'use client'

import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import { useRouter } from 'next/navigation'
import React from 'react'
import { LuChevronRight } from 'react-icons/lu'

const page = () => {
  const router = useRouter()

  return (
    <div className='w-full bg-gray-50 dark:bg-gray-600'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" }
      ]} />
      <button onClick={() => router.push("/ux-admin/theme/header/siteidentify")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>Logo & Site Identify</span>
        <LuChevronRight />
      </button>

      <button onClick={() => router.push("/ux-admin/theme/header/topbar")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>Top Bar</span>
        <LuChevronRight />
      </button>

      <button onClick={() => router.push("/ux-admin/theme/header/headermain")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>Header Main</span>
        <LuChevronRight />
      </button>

      <button onClick={() => router.push("/ux-admin/theme/header/headerbottom")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>Header Bottom</span>
        <LuChevronRight />
      </button>

      <button onClick={() => router.push("/ux-admin/theme/header/navicon")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>Header Mobile Menu / Overlay</span>
        <LuChevronRight />
      </button>

      <button onClick={() => router.push("/ux-admin/theme/header/stickyheader")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>Sticky Header</span>
        <LuChevronRight />
      </button>

      <button onClick={() => router.push("/ux-admin/theme/header/buttons")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>Buttons</span>
        <LuChevronRight />
      </button>

      <button onClick={() => router.push("/ux-admin/theme/header/html")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>HTML</span>
        <LuChevronRight />
      </button>

      <button onClick={() => router.push("/ux-admin/theme/header/contact")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>Contact</span>
        <LuChevronRight />
      </button>

      <button onClick={() => router.push("/ux-admin/theme/header/search")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>Search</span>
        <LuChevronRight />
      </button>

      <button onClick={() => router.push("/ux-admin/theme/header/verticalmenu")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>Vertical Menu</span>
        <LuChevronRight />
      </button>

      <button onClick={() => router.push("/ux-admin/theme/header/followicons")}
        className='flex gap-2 px-2 items-center text-gray-700 dark:text-gray-100 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <span className='grow text-start'>Follow Icons</span>
        <LuChevronRight />
      </button>
    </div>
  )
}

export default page