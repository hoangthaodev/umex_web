'use client'
import { useBreadcrumb } from '@/app/ux-admin/(admin)/theme/(custom)/BreadcrumbContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { LuChevronRight } from 'react-icons/lu'

type Props = {}

const ThemeStyle = (props: Props) => {
  const router = useRouter()
  const { setBreadcrumb } = useBreadcrumb()
  useEffect(() => {
    setBreadcrumb([
      { name: "Customizing", link: "/ux-admin/theme" },
      { name: "Style", link: "/ux-admin/theme/style" }
    ])
  }, [])
  return (
    <ul className='w-full bg-white'>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/style/typography")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Typography</span>
          <LuChevronRight size={20} />
        </button>
      </li>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/style/colors")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Colors</span>
          <LuChevronRight size={20} />
        </button>
      </li>
      <li>
        <button onClick={() => router.push("/ux-admin/theme/style/drawer")}
          className='flex gap-2 px-2 items-center text-gray-700 w-full hover:text-blue-700 border-l-2 hover:border-blue-700 py-2 hover:bg-gray-100'>
          <span className='grow text-start'>Drawer</span>
          <LuChevronRight size={20} />
        </button>
      </li>
    </ul>
  )
}

export default ThemeStyle