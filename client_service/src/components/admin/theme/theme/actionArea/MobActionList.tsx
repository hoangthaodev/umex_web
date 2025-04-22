'use client'

import Zone from '@/components/admin/theme/theme/actionArea/dragdrop/Zone'
import { ComponentType } from '@/lib/type'
import { useRouter } from 'next/navigation'
import React from 'react'
import { LuSettings } from 'react-icons/lu'

type Props = {
  compMob1: ComponentType[]
  compMob2: ComponentType[]
  compMob3: ComponentType[]
  compMob4: ComponentType[]
  compMob5: ComponentType[]
  handleChange: (zoneId: number, itemId: number, dragIndex: number, dropIndex: number) => void
}
const MobActionList = ({ compMob1, compMob2, compMob3, compMob4, compMob5, handleChange }: Props) => {
  const router = useRouter()

  return (
    <>
      <div className='relative flex gap-2 border border-gray-600 hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/topbar") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Top Bar</span><LuSettings size={20} /></button>
        <Zone zoneId='11' items={compMob1} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
      <div className='relative flex gap-2 border border-gray-600 hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/headermain") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Header Main</span><LuSettings size={20} /></button>
        <Zone zoneId='12' items={compMob2} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='13' items={compMob3} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='14' items={compMob4} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
      <div className='relative flex gap-2 border border-gray-600 hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/headerbottom") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Header Bottom</span><LuSettings size={20} /></button>
        <Zone zoneId='15' items={compMob5} handleChange={handleChange}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
    </>
  )
}

export default MobActionList