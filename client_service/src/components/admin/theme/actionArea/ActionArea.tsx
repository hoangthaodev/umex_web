'use client'
import { useBreadcrumb } from '@/app/ux-admin/(admin)/theme/BreadcrumbContext'
import ActionList from '@/components/admin/theme/actionArea/ActionList'
import IdleList from '@/components/admin/theme/actionArea/IdleList'
import React from 'react'
import { LuX } from 'react-icons/lu'

const ActionArea = () => {
  const { isHeader, setIsHeader } = useBreadcrumb()
  if (isHeader) {
    return (
      <div className='flex flex-col border border-gray-400'>
        <div className='flex justify-between items-center p-2'>
          <h3>Header Builder</h3>
          <LuX
            className='cursor-pointer'
            onClick={() => { setIsHeader(false) }} />
        </div>
        <div className='bg-gray-700 text-gray-200 flex flex-col'>
          <div className='flex flex-col gap-2 m-2'>
            <ActionList />
          </div>
          <div className='border-b border-gray-500' />
          <div className='m-2'>
            <IdleList />
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default ActionArea