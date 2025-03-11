'use client'
import { useSidebar } from '@/app/ux-admin/(admin)/SidebarContext'
import Link from 'next/link'
import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { FaCaretDown, FaCaretRight } from 'react-icons/fa'
import { LuBlocks, LuBookOpenCheck, LuImagePlay, LuLayoutDashboard, LuNotebookPen, LuPalette, LuPin, LuScanBarcode } from 'react-icons/lu'

type ItemListType = {
  children?: ReactNode,
  className?: string,
  href: string,
  name: string,
  icon?: any,
  selected: string,
  setSelected: Dispatch<SetStateAction<string>>,
}
const ItemList = (props: ItemListType) => {

  const handleOnclick = () => {
    props.setSelected(props.href)
  }

  const active = props.selected.startsWith(props.href)

  return (
    <li className={`${props.className}`}>
      <Link
        href={props.href}
        className={`flex gap-2 px-2 py-1 items-center hover:text-blue-500 text-gray-200 ${active && "bg-blue-500 hover:text-gray-200"}`}
        onClick={handleOnclick}
      >
        {props.icon}
        <span >{props.name}</span>
        {
          props.children ?
            active ? (<FaCaretDown />) : (<FaCaretRight />)
            : null
        }
      </Link>
      {props.children}
    </li>
  )
}

const Sidebar = () => {
  const [selected, setSelected] = React.useState('/ux-admin/dashboard')
  const { isShowSidebar, setShowSidebar } = useSidebar()

  useEffect(() => {
    const pathname = window.location.pathname
    if (pathname === '/ux-admin') return setSelected('/ux-admin/dashboard')
    setSelected(pathname)
  }, [])

  return (
    <>
      <div className={`${isShowSidebar ? "visible" : "invisible"} fixed z-50 flex flex-col py-2 bg-gray-700 bg-opacity-95 h-full`}>
        <ul className='whitespace-nowrap '>
          <ItemList
            href='/ux-admin/dashboard'
            name='Dashboard'
            icon={<LuLayoutDashboard />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemList
            href='/ux-admin/media'
            name='Media'
            icon={<LuImagePlay />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemList
            href='/ux-admin/theme'
            name='Theme'
            icon={<LuPalette />}
            selected={selected}
            setSelected={setSelected}
            className='group'
          >
            <ul className={`bg-gray-600 group-hover:block ${selected.startsWith('/ux-admin/theme') ? "block" : "hidden"}`}>
              <li>
                <Link
                  href='/ux-admin/theme'
                  className={`flex gap-2 px-2 py-1 items-center hover:text-blue-500 ${selected === '/ux-admin/theme' ? "text-gray-50 font-semibold" : "text-gray-200"}`}
                  onClick={() => { setSelected('/ux-admin/theme') }}
                >
                  <span >Theme</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/ux-admin/theme/menu'
                  className={`flex gap-2 px-2 py-1 items-center hover:text-blue-500 ${selected === '/ux-admin/theme/menu' ? "text-gray-50 font-semibold" : "text-gray-200"} `}
                  onClick={() => { setSelected('/ux-admin/theme/menu') }}
                >
                  <span >Menu</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/ux-admin/theme/widget'
                  className={`flex gap-2 px-2 py-1 items-center hover:text-blue-500 ${selected === '/ux-admin/theme/widget' ? "text-gray-50 font-semibold" : "text-gray-200"} `}
                  onClick={() => { setSelected('/ux-admin/theme/widget') }}
                >
                  <span >Widget</span>
                </Link>
              </li>
            </ul>
          </ItemList>
          <ItemList
            href='/ux-admin/posts'
            name='Posts'
            icon={<LuPin />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemList
            href='/ux-admin/portfolios'
            name='Portfolios'
            icon={<LuBookOpenCheck />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemList
            href='/ux-admin/pages'
            name='Pages'
            icon={<LuNotebookPen />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemList
            href='/ux-admin/blocks'
            name='Blocks'
            icon={<LuBlocks />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemList
            href='/ux-admin/products'
            name='Products'
            icon={<LuScanBarcode />}
            selected={selected}
            setSelected={setSelected}
          />
        </ul>
      </div>
      <div className={`${isShowSidebar ? "visible" : "invisible"} fixed z-10 w-full h-full`}
        onClick={() => { setShowSidebar(false) }}
      />
    </>
  )
}

export default Sidebar