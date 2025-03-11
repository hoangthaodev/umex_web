'use client'
import AddLink from '@/components/admin/theme/menu/edit/AddLink'
import MenuStructure from '@/components/admin/theme/menu/edit/MenuStructure'
import React from 'react'

type Props = {}

const EditMenu = (props: Props) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 pt-4'>
      <div className='flex flex-col gap-2 md:w-[400px]'>
        <h2>Add Link</h2>
        <div className='border border-gray-400'>
          <AddLink isNew={false} />
        </div>
      </div>
      <div className='flex flex-col gap-2 grow'>
        <h2>Menu Structure</h2>
        <div className='p-2 border border-gray-400'>
          <MenuStructure />
        </div>
      </div>
    </div>
  )
}

export default EditMenu