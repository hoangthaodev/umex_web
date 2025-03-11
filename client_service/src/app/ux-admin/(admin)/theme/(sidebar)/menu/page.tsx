'use client'
import EditMenu from '@/components/admin/theme/menu/EditMenu'
import MenuLocation from '@/components/admin/theme/menu/MenuLocation'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {
  const [tabActive, setTabActive] = useState(0)
  const tabs = [
    { id: 0, title: "Edit Menu", content: <EditMenu /> },
    {
      id: 1, title: "Menu Location", content: <MenuLocation />
    },
  ]
  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex gap-2 items-center'>
        <h1 className='capitalize'>Menu manager</h1>
      </div>
      <div>
        <div className='flex border-b border-gray-400'>
          {tabs.map(tab =>
            <button
              key={tab.id}
              className={`${tabActive === tab.id ? "bg-gray-600 text-gray-300" : ""} border border-gray-400 px-2`}
              onClick={() => setTabActive(tab.id)}
            >{tab.title}</button>)}
        </div>
        <div className='h-full w-full'>
          {
            tabs[tabActive].content
          }
        </div>
      </div>
    </div>
  )
}

export default page