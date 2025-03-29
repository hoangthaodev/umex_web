'use client'

import EditMenus from '@/components/admin/theme/menus/EditMenus'
import ManageLocations from '@/components/admin/theme/menus/ManageLocations'
import React, { useState } from 'react'

const page = () => {

  const [tabActive, setTabActive] = useState<number>(0)
  const tabs = [
    {
      id: 0, title: "Edit Menus", content: <EditMenus />
    },
    {
      id: 1, title: "Manage Locations", content: <ManageLocations />
    },
  ]
  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex gap-2 items-center'>
        <h1 className='capitalize'>Menus</h1>
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