'use client'

import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import { useRouter } from 'next/navigation'
import React from 'react'
import { LuChevronRight } from 'react-icons/lu'

const page = () => {
  const router = useRouter()

  return (
    <ul className='w-full bg-white'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Style", link: "/ux-admin/theme/style" }
      ]} />
      <li>
        <button onClick={() => router.push("/ux-admin/theme/style/typography")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Typography</span>
          <LuChevronRight />
        </button>
      </li>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/style/colors")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Colors</span>
          <LuChevronRight />
        </button>
      </li>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/style/drawer")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Drawer</span>
          <LuChevronRight />
        </button>
      </li>
    </ul>
  )
}

export default page