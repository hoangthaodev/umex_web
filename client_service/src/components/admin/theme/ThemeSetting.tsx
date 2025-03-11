'use client'
import { useTheme } from '@/app/ThemeContext'
import { SetBreadcrumb } from '@/components/SetBreadcrumb'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaHome, FaPenFancy } from 'react-icons/fa'
import { IoDocument } from 'react-icons/io5'
import { LuArrowDown, LuArrowUp, LuChevronRight, LuLayoutTemplate, LuMenu, LuPaintbrush } from 'react-icons/lu'

const ThemeSetting = () => {
  const router = useRouter()
  const { title } = useTheme()

  const ItemList = ({ link, name, icon }: { link: string, name: string, icon: any }) => {
    return (
      <li>
        <button onClick={() => {
          router.push(link)
        }}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          {icon}
          <span className='grow text-start'>{name}</span>
          <LuChevronRight size={20} />
        </button>
      </li>
    )
  }

  return (
    <div className='bg-white'>
      <SetBreadcrumb breadcrumb={[{ name: title, link: "/" }]} />
      <ul>
        <ItemList link='/ux-admin/theme/header' name='Header' icon={<LuArrowUp size={20} />} />
        <ItemList link='/ux-admin/theme/layout' name='Layout' icon={<LuLayoutTemplate size={20} />} />
        <ItemList link='/ux-admin/theme/homepage' name='Homepage Setting' icon={<FaHome size={20} />} />
        <ItemList link='/ux-admin/theme/style' name='Style' icon={<LuPaintbrush size={20} />} />
        <ItemList link='/ux-admin/theme/menu' name='Menu' icon={<LuMenu size={20} />} />
        <ItemList link='/ux-admin/theme/blog' name='Blog' icon={<FaPenFancy size={20} />} />
        <ItemList link='/ux-admin/theme/pages' name='Pages' icon={<IoDocument size={20} />} />
        <ItemList link='/ux-admin/theme/footer' name='Footer' icon={<LuArrowDown size={20} />} />
      </ul>
    </div>
  )
}

export default ThemeSetting