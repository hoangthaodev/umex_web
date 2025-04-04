'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import InputRange from '@/components/admin/theme/theme/InputRange'
import SelectColor from '@/components/admin/theme/theme/SelectColor'
import SelectTextColor from '@/components/admin/theme/theme/SelectTextColor'
import DivNgang from '@/components/DivNgang'
import React, { useState } from 'react'
import { FaBars, FaX } from 'react-icons/fa6'

const page = () => {
  const {
    verticalOpenerIcon,
    verticalOpenerHeight,
    verticalOpenerWidth,
    verticalOpenerTagline,
    verticalOpenerText,
    verticalOpenerBaseColor,
    verticalOpenerColor,
    verticalOpenerBackgroundColor,
    verticalFlyoutKeepOpen,
    verticalFlyoutAddShadow,
    verticalFlyoutWidth,
    verticalFlyoutBackgroundColor,
    verticalFlyoutDivider,
    verticalFlyoutNavHeight,
    verticalFlyoutBaseColor,
    verticalFlyoutNavColor,
    verticalFlyoutNavColorHover,
    verticalFlyoutNavBackgroundHover,
    setVerticalOpenerIcon,
    setVerticalOpenerHeight,
    setVerticalOpenerWidth,
    setVerticalOpenerTagline,
    setVerticalOpenerText,
    setVerticalOpenerBaseColor,
    setVerticalOpenerColor,
    setVerticalOpenerBackgroundColor,
    setVerticalFlyoutKeepOpen,
    setVerticalFlyoutAddShadow,
    setVerticalFlyoutWidth,
    setVerticalFlyoutBackgroundColor,
    setVerticalFlyoutDivider,
    setVerticalFlyoutNavHeight,
    setVerticalFlyoutBaseColor,
    setVerticalFlyoutNavColor,
    setVerticalFlyoutNavColorHover,
    setVerticalFlyoutNavBackgroundHover,
  } = useTheme()

  return (
    <div className='py-2 flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "VerticalMenu", link: "/ux-admin/theme/header/verticalmenu" },
      ]} />
      <div>
        <h3 className='px-2 py-1 text-gray-100 bg-gray-600'>Opener</h3>
        <div className='p-2 flex flex-col gap-2'>
          <div className=' flex flex-col gap-2'>
            <h4>Icon</h4>
            <div className='text-blue-500 flex flex-wrap gap-1 justify-center'>
              <label
                onClick={() => { setVerticalOpenerIcon(1) }}
                className={`${verticalOpenerIcon === 1 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
                <label className={`${verticalOpenerIcon === 1 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500 border-blue-400 text-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
                  <FaX size={20} />
                </label>
              </label>
              <label
                onClick={() => { setVerticalOpenerIcon(2) }}
                className={`${verticalOpenerIcon === 2 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
                <label className={`${verticalOpenerIcon === 2 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500 border-blue-400 text-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
                  <FaBars size={20} />
                </label>
              </label>
            </div>
          </div>
          <DivNgang className='border-gray-300' />
          <div className=' flex flex-col gap-2'>
            <h4>Height</h4>
            <InputRange min={10} max={500} defaultValue={50} value={verticalOpenerHeight} setValue={setVerticalOpenerHeight} />
          </div>
          <DivNgang className='border-gray-300' />
          <div className=' flex flex-col gap-2'>
            <h4>Width</h4>
            <InputRange min={10} max={500} defaultValue={250} value={verticalOpenerWidth} setValue={setVerticalOpenerWidth} />
          </div>
          <DivNgang className='border-gray-300' />
          <div className=' flex flex-col gap-2'>
            <h4>Tag line</h4>
            <input
              className='border px-2 py-1 rounded-xs'
              type="text" value={verticalOpenerTagline} onChange={(e) => { setVerticalOpenerTagline(e.target.value) }} />
          </div>
          <DivNgang className='border-gray-300' />
          <div className=' flex flex-col gap-2'>
            <h4>Text</h4>
            <input
              className='border px-2 py-1 rounded-xs'
              type="text" value={verticalOpenerText} onChange={(e) => { setVerticalOpenerText(e.target.value) }} />
          </div>
          <DivNgang className='border-gray-300' />
          <div className=' flex flex-col gap-2'>
            <h4>Text base color</h4>
            <SelectTextColor selected={verticalOpenerBaseColor} setSelected={setVerticalOpenerBaseColor} />
          </div>
          <DivNgang className='border-gray-300' />
          <div className=' flex flex-col gap-2'>
            <h4>Color</h4>
            <SelectColor color={verticalOpenerColor} setColor={setVerticalOpenerColor} />
          </div>
          <DivNgang className='border-gray-300' />
          <div className=' flex flex-col gap-2'>
            <h4>Background Color</h4>
            <SelectColor color={verticalOpenerBackgroundColor} setColor={setVerticalOpenerBackgroundColor} />
          </div>
        </div>
      </div>
      <div>
        <h3 className='px-2 py-1 text-gray-100 bg-gray-600'>Fly out</h3>
        <div className='p-2 flex flex-col gap-4'>
          <div className='flex gap-2 items-center '>
            <input
              className='w-4 h-4'
              type="checkbox" checked={verticalFlyoutKeepOpen} onChange={() => { setVerticalFlyoutKeepOpen(!verticalFlyoutKeepOpen) }} />
            <label onClick={() => { setVerticalFlyoutKeepOpen(!verticalFlyoutKeepOpen) }}>Keep open on front page</label>
          </div>
          <DivNgang />
          <div className='flex gap-2 items-center '>
            <input
              className='w-4 h-4'
              type="checkbox" checked={verticalFlyoutAddShadow} onChange={() => { setVerticalFlyoutAddShadow(!verticalFlyoutAddShadow) }} />
            <label onClick={() => { setVerticalFlyoutAddShadow(!verticalFlyoutAddShadow) }}>Add shadow</label>
          </div>
          <DivNgang />
          <div className='flex flex-col gap-2 '>
            <h4>Width</h4>
            <InputRange min={10} max={500} defaultValue={250} value={verticalFlyoutWidth} setValue={setVerticalFlyoutWidth} />
          </div>
          <DivNgang />
          <div className='flex flex-col gap-2 '>
            <h4>Background color</h4>
            <SelectColor color={verticalFlyoutBackgroundColor} setColor={setVerticalFlyoutBackgroundColor} />
          </div>
        </div>
      </div>
      <div>
        <h3 className='px-2 py-1 text-gray-100 bg-gray-600'>Fly out navigation</h3>
        <div className='p-2 flex flex-col gap-4'>
          <div className='flex gap-2 items-center '>
            <input
              className='w-4 h-4'
              type="checkbox" checked={verticalFlyoutDivider} onChange={() => { setVerticalFlyoutDivider(!verticalFlyoutDivider) }} />
            <label onClick={() => { setVerticalFlyoutDivider(!verticalFlyoutDivider) }}>Divider</label>
          </div>
          <DivNgang />
          <div className='flex flex-col gap-2 '>
            <h4>Nav height</h4>
            <InputRange min={0} max={200} defaultValue={0} value={verticalFlyoutNavHeight} setValue={setVerticalFlyoutNavHeight} />
          </div>
          <DivNgang />
          <div className='flex flex-col gap-2 '>
            <h4>Text base color</h4>
            <SelectTextColor selected={verticalFlyoutBaseColor} setSelected={setVerticalFlyoutBaseColor} />
          </div>
          <DivNgang />
          <div className='flex flex-col gap-2 '>
            <h4>Nav color</h4>
            <SelectColor color={verticalFlyoutNavColor} setColor={setVerticalFlyoutNavColor} />
          </div>
          <DivNgang />
          <div className='flex flex-col gap-2 '>
            <h4>Nav color :hover</h4>
            <SelectColor color={verticalFlyoutNavColorHover} setColor={setVerticalFlyoutNavColorHover} />
          </div>
          <DivNgang />
          <div className='flex flex-col gap-2 '>
            <h4>Nav background color :hover</h4>
            <SelectColor color={verticalFlyoutNavBackgroundHover} setColor={setVerticalFlyoutNavBackgroundHover} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page