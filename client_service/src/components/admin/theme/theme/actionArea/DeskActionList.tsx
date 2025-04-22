'use client'

import Zone from '@/components/admin/theme/theme/actionArea/dragdrop/Zone'
import { ComponentType } from '@/lib/type'
import { useRouter } from 'next/navigation'
import React from 'react'
import { LuSettings } from 'react-icons/lu'

type Props = {
  comp1: ComponentType[]
  comp2: ComponentType[]
  comp3: ComponentType[]
  comp4: ComponentType[]
  comp5: ComponentType[]
  comp6: ComponentType[]
  comp7: ComponentType[]
  comp8: ComponentType[]
  comp9: ComponentType[]
  handleChange: (zoneId: number, itemId: number, dragIndex: number, dropIndex: number) => void
}

const DeskActionList = ({ comp1, comp2, comp3, comp4, comp5, comp6, comp7, comp8, comp9, handleChange }: Props) => {
  const router = useRouter()

  return (
    <>
      <div className='relative flex gap-2 border border-gray-600 hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/topbar") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Top Bar</span><LuSettings size={20} /></button>
        <Zone zoneId='1' items={comp1} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='2' items={comp2} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='3' items={comp3} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
      <div className='relative flex gap-2 border border-gray-600 hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/headermain") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Header Main</span><LuSettings size={20} /></button>
        <Zone zoneId='4' items={comp4} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='5' items={comp5} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='6' items={comp6} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
      <div className='relative flex gap-2 border border-gray-600 hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/headerbottom") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Header Bottom</span><LuSettings size={20} /></button>
        <Zone zoneId='7' items={comp7} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='8' items={comp8} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='9' items={comp9} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
    </>
  )
}

export default DeskActionList