'use client'
import { useSidebar } from '@/app/ux-admin/(admin)/SidebarContext'
import Link from 'next/link'
import React, { Dispatch, ReactNode, SetStateAction } from 'react'
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
    props.setSelected(props.name)
  }

  return (
    <li className={`${props.className}`}>
      <Link
        href={props.href}
        className={`flex gap-2 px-2 py-1 items-center hover:text-blue-600 ${props.selected == props.name ? "text-blue-500" : ""}`}
        onClick={handleOnclick}
      >
        {props.icon}
        <span >{props.name}</span>
      </Link>
      {props.children}
    </li>
  )
}

const Sidebar = () => {
  const [selected, setSelected] = React.useState('Dashboard')
  const { isShowSidebar, setShowSidebar } = useSidebar()


  return (
    <>
      <div className={`${isShowSidebar ? "visible" : "invisible"} fixed z-50 flex flex-col justify-between py-2 bg-gray-600 bg-opacity-95 text-gray-200 h-full`}>
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
          />
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
      <div className={`${isShowSidebar ? "visible" : "invisible"} absolute z-10 w-full h-full`}
        onClick={() => { setShowSidebar(false) }}
      />
    </>
  )
}

export default Sidebar