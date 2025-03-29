'use client'

import Link from 'next/link'
import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { FaCaretDown, FaCaretRight, FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6'
import { LuBlocks, LuBookOpenCheck, LuImagePlay, LuLayoutDashboard, LuNotebookPen, LuPalette, LuPin, LuScanBarcode } from 'react-icons/lu'

type ItemListType = {
  children?: ReactNode,
  href: string,
  name: string,
  icon?: ReactNode,
  selected: string,
  setSelected: Dispatch<SetStateAction<string>>,
  expand: boolean,
}
const ItemList = (props: ItemListType) => {

  const handleOnclick = () => {
    props.setSelected(props.href)
  }

  const active = props.selected.startsWith(props.href)

  return (
    <li className={`relative ${props.children ? "group" : ""}`}>
      <Link
        href={props.href}
        className={`flex gap-2 px-2 py-1 items-center hover:text-blue-500 text-gray-200 ${active && "bg-blue-500 hover:text-gray-200"}`}
        onClick={handleOnclick}
      >
        {props.icon}
        {
          props.expand && (
            <span >{props.name}</span>
          )
        }
        {
          props.children ?
            props.expand ?
              active ? (<FaCaretDown />) : (<FaCaretRight />)
              : null
            : null
        }
      </Link>
      {
        props.children && (
          <div className={`bg-gray-600 ${props.expand ? active ? "block" : "hidden group-hover:block" : "absolute top-0 left-8 invisible group-hover:visible z-50"}`}>
            {props.children}
          </div>
        )
      }
    </li>
  )
}

const Sidebar = () => {
  const [selected, setSelected] = React.useState('/ux-admin/dashboard')
  const [expand, setExpand] = useState(false)
  const [firstMount, setFirstMount] = useState(true)

  useEffect(() => {
    const pathname = window.location.pathname
    if (pathname === '/ux-admin') {
      setSelected('/ux-admin/dashboard')
    } else {
      setSelected(pathname)
    }
    setFirstMount(false)
  }, [])

  useEffect(() => {
    if (firstMount) return
    const clientSize = document.documentElement.clientWidth
    if (clientSize <= 768) {
      setExpand(false)
    } else {
      setExpand(true)
    }
  }, [firstMount])

  return (
    <div className={` flex flex-col py-2 bg-gray-700 bg-opacity-95 h-full`}>
      <ul className='whitespace-nowrap '>
        <ItemList
          href='/ux-admin/dashboard'
          name='Dashboard'
          icon={<LuLayoutDashboard />}
          selected={selected}
          setSelected={setSelected}
          expand={expand}
        />
        <ItemList
          href='/ux-admin/media'
          name='Media'
          icon={<LuImagePlay />}
          selected={selected}
          setSelected={setSelected}
          expand={expand}
        />
        <ItemList
          href='/ux-admin/theme'
          name='Theme'
          icon={<LuPalette />}
          selected={selected}
          setSelected={setSelected}
          expand={expand}
        >
          <ul>
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
                href='/ux-admin/theme/menus'
                className={`flex gap-2 px-2 py-1 items-center hover:text-blue-500 ${selected === '/ux-admin/theme/menus' ? "text-gray-50 font-semibold" : "text-gray-200"} `}
                onClick={() => { setSelected('/ux-admin/theme/menus') }}
              >
                <span >Menus</span>
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
          href='/ux-admin/page/pages'
          name='Pages'
          icon={<LuNotebookPen />}
          selected={selected}
          setSelected={setSelected}
          expand={expand}
        />
        <ItemList
          href='/ux-admin/page/posts'
          name='Posts'
          icon={<LuPin />}
          selected={selected}
          setSelected={setSelected}
          expand={expand}
        />
        <ItemList
          href='/ux-admin/page/portfolios'
          name='Portfolios'
          icon={<LuBookOpenCheck />}
          selected={selected}
          setSelected={setSelected}
          expand={expand}
        />
        <ItemList
          href='/ux-admin/page/blocks'
          name='Blocks'
          icon={<LuBlocks />}
          selected={selected}
          setSelected={setSelected}
          expand={expand}
        />
        <ItemList
          href='/ux-admin/page/products'
          name='Products'
          icon={<LuScanBarcode />}
          selected={selected}
          setSelected={setSelected}
          expand={expand}
        />
      </ul>
      <div className='mt-4'>
        <button
          className='flex gap-2 px-2 py-1 items-center hover:text-blue-500 text-gray-200 text-sm underline'
          onClick={() => { setExpand(!expand) }}
        >
          {
            expand ? (<><FaCircleChevronLeft /> Thu gọn menu</>) : (<FaCircleChevronRight />)
          }
        </button>
      </div>
    </div>
  )
}

export default Sidebar