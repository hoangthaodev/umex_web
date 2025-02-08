'use client'
import { getConfigByKey, updateConfigByKey } from '@/actions/config.action'
import { useTheme } from '@/app/ThemeContext'
import SelectColor from '@/components/SelectColor'
import { SetBreadcrumb } from '@/components/SetBreadcrumb'
import { ConfigType } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type Props = {}

const Drawer = (props: Props) => {
  const { backdropColor, drawerWidth, setBackdropColor, setDrawerWidth } = useTheme()

  const handleSaveChange = async () => {
    const data = JSON.stringify({
      backdropColor,
      drawerWidth,
    })
    await updateConfigByKey("style_drawer", data)

    toast.success("Save Change Successfully!")
  }
  return (
    <div className='flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Style", link: "/ux-admin/theme/style" },
        { name: "Drawer", link: "/ux-admin/theme/style/drawer" },
      ]} />

      <div className='p-2'>
        <h3>Backdrop color</h3>
        <SelectColor color={backdropColor} setColor={setBackdropColor} />
      </div>

      <div>
        <h2 className='bg-gray-600 px-2 py-1 font-semibold text-gray-50'>Drawer</h2>
        <div className='flex flex-col gap-4 p-2'>
          <div className='flex flex-col gap-4'>
            <div>
              <p className='text-xs text-justify'>Drawers are special sections that appear over your website. Think of them like sliding panels that can hold menus, filter, shopping carts, or mobile navigation.</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h3>Drawer width</h3>
              <input
                className='border border-gray-400 px-2 rounded-sm'
                type="number" value={drawerWidth} onChange={(e) => { setDrawerWidth(Number(e.target.value)) }} />
            </div>
          </div>
        </div>
      </div>
      <div className='px-2'>
        <button className='float-right bg-blue-700 text-gray-200 hover:bg-blue-800 text-sm py-1 px-2 rounded-md'
          onClick={handleSaveChange}
        >Save Change</button>
      </div>
    </div>
  )
}

export default Drawer