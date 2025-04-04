'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import SelectColor from '@/components/admin/theme/theme/SelectColor'
import React from 'react'

const page = () => {
  const { backdropColor, drawerWidth, setBackdropColor, setDrawerWidth } = useTheme()

  return (
    <div className='flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Style", link: "/ux-admin/theme/style" },
        { name: "Drawer", link: "/ux-admin/theme/style/drawer" },
      ]} />

      <div className='p-2'>
        <h4>Backdrop color</h4>
        <SelectColor color={backdropColor} setColor={setBackdropColor} />
      </div>

      <div>
        <h3 className='bg-gray-600 px-2 py-1 font-semibold text-gray-50'>Drawer</h3>
        <div className='flex flex-col gap-4 p-2'>
          <div className='flex flex-col gap-4'>
            <div>
              <p className='text-xs text-justify'>Drawers are special sections that appear over your website. Think of them like sliding panels that can hold menus, filter, shopping carts, or mobile navigation.</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h4>Drawer width</h4>
              <input
                className='border border-gray-400 px-2 rounded-sm'
                type="number" value={drawerWidth} onChange={(e) => { setDrawerWidth(Number(e.target.value)) }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page