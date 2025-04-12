'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import MenuElements from '@/components/admin/theme/theme/header/MenuElements'
import InputRange from '@/components/admin/theme/theme/InputRange'
import SelectColor from '@/components/admin/theme/theme/SelectColor'
import SelectInList from '@/components/admin/theme/theme/SelectInList'
import SelectTextColor from '@/components/admin/theme/theme/SelectTextColor'
import DivDoc from '@/components/DivDoc'
import Link from 'next/link'
import React from 'react'
import { FaAlignCenter, FaAlignJustify, FaBars } from 'react-icons/fa6'

const page = () => {
  const {
    naviconHeight,
    naviconStyle,
    naviconShowTitle,
    naviconOverlay,
    naviconBehavior,
    naviconSubmenuEffect,
    naviconTopContent,
    naviconTabs,
    naviconTab1Text,
    naviconTab2Text,
    naviconTab1Element,
    naviconTab2Element,
    naviconOverlayColor,
    naviconBackgroundColor,
    setNaviconHeight,
    setNaviconStyle,
    setNaviconShowTitle,
    setNaviconOverlay,
    setNaviconBehavior,
    setNaviconSubmenuEffect,
    setNaviconTopContent,
    setNaviconTabs,
    setNaviconTab1Text,
    setNaviconTab2Text,
    setNaviconTab1Element,
    setNaviconTab2Element,
    setNaviconOverlayColor,
    setNaviconBackgroundColor,
  } = useTheme()

  const naviconTabsList = [
    { id: 1, name: "None" },
    { id: 2, name: "2 Tabs" },
  ]

  return (
    <div className='flex flex-col gap-4 p-2'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Header Mobile Menu / Overlay", link: "/ux-admin/theme/header/navicon" },
      ]} />
      <div className='flex flex-col gap-2'>
        <h4>Mobile Header Height</h4>
        <InputRange min={30} max={500} defaultValue={70} value={naviconHeight} setValue={setNaviconHeight} />
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Menu Icon Style</h4>
        <div className='text-blue-500 flex flex-wrap gap-1 justify-center'>
          <label
            onClick={() => { setNaviconStyle(1) }}
            className={`${naviconStyle === 1 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
            <label className={`${naviconStyle === 1 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500"} border-blue-400 text-blue-400 w-full h-full border rounded-sm flex items-center justify-center`}>
              <FaBars size={20} />
            </label>
          </label>
          <label
            onClick={() => { setNaviconStyle(2) }}
            className={`${naviconStyle === 2 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
            <label className={`${naviconStyle === 2 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500"} border-blue-400 text-blue-400 w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className={`p-1 rounded-full border ${naviconStyle === 2 ? "border-blue-500" : "border-blue-400"} group-hover:border-blue-500`}>
                <FaBars size={20} />
              </label>
            </label>
          </label>
          <label
            onClick={() => { setNaviconStyle(3) }}
            className={`${naviconStyle === 3 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
            <label className={`${naviconStyle === 3 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500"} border-blue-400 text-blue-400 w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className={`p-1 rounded-full ${naviconStyle === 3 ? "bg-blue-500" : "group-hover:bg-blue-500"} bg-blue-400 text-gray-100 group-hover:border-blue-500`}>
                <FaBars size={20} />
              </label>
            </label>
          </label>
          <label
            onClick={() => { setNaviconStyle(4) }}
            className={`${naviconStyle === 4 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
            <label className={`${naviconStyle === 4 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500"} border-blue-400 text-blue-400 w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className={`p-1 rounded-sm border ${naviconStyle === 4 ? "border-blue-500" : "border-blue-400"} group-hover:border-blue-500`}>
                <FaBars size={20} />
              </label>
            </label>
          </label>
          <label
            onClick={() => { setNaviconStyle(5) }}
            className={`${naviconStyle === 5 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm group`}>
            <label className={`${naviconStyle === 5 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500"} border-blue-400 text-blue-400 w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className={`p-1 rounded-sm ${naviconStyle === 5 ? "bg-blue-500" : "group-hover:bg-blue-500"} bg-blue-400 text-gray-100 group-hover:border-blue-500`}>
                <FaBars size={20} />
              </label>
            </label>
          </label>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <input
          className='w-4 h-4'
          type="checkbox" checked={naviconShowTitle} onChange={() => { setNaviconShowTitle(!naviconShowTitle) }} />
        <label onClick={() => { setNaviconShowTitle(!naviconShowTitle) }}>Show Menu title</label>
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Menu Overlay</h4>
        <div className='flex justify-center gap-2'>
          <label
            onClick={() => { setNaviconOverlay(1) }}
            className={`w-22 h-16 p-1 rounded-sm ${naviconOverlay === 1 ? "border border-blue-500" : ""} group`}>
            <label className={`w-full h-full rounded-sm flex border border-blue-400 ${naviconOverlay === 1 ? "border-blue-500" : "group-hover:border-blue-500"}`}>
              <label className={`p-1 flex items-center text-blue-400 ${naviconOverlay === 1 ? "text-blue-500" : "group-hover:text-blue-500"}`}>
                <FaAlignJustify />
              </label>
              <DivDoc className={`${naviconOverlay === 1 ? "border-blue-500" : "group-hover:border-blue-500"} border-blue-400`} />
            </label>
          </label>
          <label
            onClick={() => { setNaviconOverlay(2) }}
            className={`w-22 h-16 p-1 rounded-sm ${naviconOverlay === 2 ? "border border-blue-500" : ""} group`}>
            <label className={`w-full h-full rounded-sm flex justify-end border border-blue-400 ${naviconOverlay === 2 ? "border-blue-500" : "group-hover:border-blue-500"}`}>
              <DivDoc className={`${naviconOverlay === 2 ? "border-blue-500" : "group-hover:border-blue-500"} border-blue-400`} />
              <label className={`p-1 flex items-center text-blue-400 ${naviconOverlay === 2 ? "text-blue-500" : "group-hover:text-blue-500"}`}>
                <FaAlignJustify />
              </label>
            </label>
          </label>
          <label
            onClick={() => { setNaviconOverlay(3) }}
            className={`w-22 h-16 p-1 rounded-sm ${naviconOverlay === 3 ? "border border-blue-500" : ""} group`}>
            <label className={`w-full h-full rounded-sm flex items-center justify-center border border-blue-400 text-blue-400 ${naviconOverlay === 3 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"}`}>
              <FaAlignCenter size={22} />
            </label>
          </label>
        </div>
      </div>
      <div className='flex items-center gap-1 text-blue-500 underline'>
        <Link href='/ux-admin/theme/style/drawer'>Customize Drawer →</Link>
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Menu item behavior</h4>
        <div className='flex flex-col'>
          <p className='text-xs text-gray-500'>Click behavior for menu items with a submenu</p>
          <div className='flex gap-2 items-center'>
            <input
              className='w-4 h-4'
              type="radio" checked={naviconBehavior === 1} onChange={() => { setNaviconBehavior(1) }} />
            <label onClick={() => { setNaviconBehavior(1) }} >Open link</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input
              className='w-4 h-4'
              type="radio" checked={naviconBehavior === 2} onChange={() => { setNaviconBehavior(2) }} />
            <label onClick={() => { setNaviconBehavior(2) }} >Toggle submenu</label>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Submenu effect</h4>
        <div className='flex flex-col'>
          <div className='flex gap-2 items-center'>
            <input
              className='w-4 h-4'
              type="radio" checked={naviconSubmenuEffect === 1} onChange={() => { setNaviconSubmenuEffect(1) }} />
            <label onClick={() => { setNaviconSubmenuEffect(1) }} >Accordion</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input
              className='w-4 h-4'
              type="radio" checked={naviconSubmenuEffect === 2} onChange={() => { setNaviconSubmenuEffect(2) }} />
            <label onClick={() => { setNaviconSubmenuEffect(2) }} >Slide</label>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Top content</h4>
        <textarea
          className='h-28 border p-2'
          value={naviconTopContent} onChange={(e) => { setNaviconTopContent(e.target.value) }} />
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Tabs</h4>
        <SelectInList arrayList={naviconTabsList} selected={naviconTabs} setSelected={setNaviconTabs} />
      </div>
      {
        naviconTabs === 2 && (
          <div className='flex flex-col gap-2'>
            <h4>Tab 1 text</h4>
            <input
              className='border px-2 py-1 rounded-xs'
              type="text" value={naviconTab1Text} onChange={(e) => { setNaviconTab1Text(e.target.value) }} />
          </div>
        )
      }
      <div className='flex flex-col gap-2'>
        <h4>Menu elements</h4>
        <MenuElements className='h-64 overflow-y-auto' listMenu={naviconTab1Element} setListMenu={setNaviconTab1Element} />
      </div>
      {
        naviconTabs === 2 && (
          <>
            <div className='flex flex-col gap-2'>
              <h4>Tab 2 text</h4>
              <input
                className='border px-2 py-1 rounded-xs'
                type="text" value={naviconTab2Text} onChange={(e) => { setNaviconTab2Text(e.target.value) }} />
            </div>
            <div className='flex flex-col gap-2'>
              <h4>Menu elements tab 2</h4>
              <MenuElements className='h-64 overflow-y-auto' listMenu={naviconTab2Element} setListMenu={setNaviconTab2Element} />
            </div>
          </>
        )
      }

      <div className='flex flex-col gap-2'>
        <h4>Overlay Color</h4>
        <SelectTextColor selected={naviconOverlayColor} setSelected={setNaviconOverlayColor} />
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Background Color</h4>
        <SelectColor color={naviconBackgroundColor} setColor={setNaviconBackgroundColor} />
      </div>
    </div>
  )
}

export default page