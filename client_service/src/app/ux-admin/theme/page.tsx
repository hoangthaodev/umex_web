'use client'

import { useTheme } from '@/app/themeContext'
import ThemeLayout from '@/app/ux-admin/theme/(theme)/layout'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'
import { FaHouse, FaShareNodes } from 'react-icons/fa6'
import { LuArrowDown, LuArrowUp, LuChevronRight, LuLayoutTemplate, LuPaintbrush } from 'react-icons/lu'

const page = () => {
  const router = useRouter()
  const { title } = useTheme()

  const ItemList = ({ link, name, icon }: { link: string, name: string, icon: ReactNode }) => {
    return (
      <li>
        <button onClick={() => {
          router.push(link)
        }}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          {icon}
          <span className='grow text-start'>{name}</span>
          <LuChevronRight />
        </button>
      </li>
    )
  }

  return (
    <ThemeLayout>
      <div className='bg-white'>
        <SetBreadcrumb breadcrumb={[{ name: title, link: "/" }]} />
        <ul>
          <ItemList link='/ux-admin/theme/header' name='Header' icon={<LuArrowUp />} />
          <ItemList link='/ux-admin/theme/layout' name='Layout' icon={<LuLayoutTemplate />} />
          <ItemList link='/ux-admin/theme/style' name='Style' icon={<LuPaintbrush />} />
          <ItemList link='/ux-admin/theme/homepage' name='Homepage Setting' icon={<FaHouse />} />
          <ItemList link='/ux-admin/theme/footer' name='Footer' icon={<LuArrowDown />} />
          <ItemList link='/ux-admin/theme/share' name='Share' icon={<FaShareNodes />} />
        </ul>
      </div>
    </ThemeLayout>
  )
}

export default page