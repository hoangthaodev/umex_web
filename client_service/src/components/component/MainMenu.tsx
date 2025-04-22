'use server'

import { getMenuById } from '@/action/menu.action'
import { getMenuLocationById } from '@/action/menuLocation.action'
import { MenuValueType } from '@/lib/type'
import Link from 'next/link'
import React from 'react'

const MainMenu = async () => {
  let menu: MenuValueType[] | undefined = undefined
  const menuLoc = await getMenuLocationById(1)
  if (menuLoc) {
    const findMenu = await getMenuById(menuLoc.menu_id)
    if (findMenu) {
      menu = JSON.parse(findMenu.menu_value)
    }
  }
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

export default MainMenu