'use client'

import { getMenuById } from '@/action/menu.action'
import { getMenuLocationById } from '@/action/menuLocation.action'
import { MenuValueType } from '@/lib/type'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const PreviewMainMenu = () => {
  const [menu, setMenu] = useState<MenuValueType[] | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const menuLoc = await getMenuLocationById(1)
      if (menuLoc) {
        const findMenu = await getMenuById(menuLoc.menu_id)
        if (findMenu) {
          setMenu(JSON.parse(findMenu.menu_value))
        }
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      {
        menu && menu.map((i, index) => (
          <Link key={index} href={i.content.url} >{i.content.label}</Link>
        ))
      }
    </div>
  )
}

export default PreviewMainMenu