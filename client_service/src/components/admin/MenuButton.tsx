'use client'
import { useSidebar } from '@/app/ux-admin/(admin)/SidebarContext'
import React from 'react'
import { LuMenu } from 'react-icons/lu'

function MenuButton({ className }: { className: string }) {
  const { setShowSidebar } = useSidebar()

  return (
    <button className={className} onClick={() => { setShowSidebar((prev) => !prev) }}>
      <LuMenu />
    </button>
  )
}

export default MenuButton