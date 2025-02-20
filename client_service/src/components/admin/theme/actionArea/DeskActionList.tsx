'use client'
import { useComponent } from '@/app/ComponentContext'
import Zone from '@/components/Zone'
import { ComponentType } from '@/lib/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import { LuSettings } from 'react-icons/lu'

type props = {
}

const DeskActionList = ({ }: props) => {
  const { component1, component2, component3, component4, component5, component6, component7, component8, component9 } = useComponent()
  const router = useRouter()

  return (
    <>
      <div className='relative flex gap-2 hover:border hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/topbar") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Top Bar</span><LuSettings size={20} /></button>
        <Zone zoneId='Comp1' items={component1}
          className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='Comp2' items={component2}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='Comp3' items={component3}
          className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
      <div className='relative flex gap-2 hover:border hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/headermain") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Header Main</span><LuSettings size={20} /></button>
        <Zone zoneId='Comp4' items={component4}
          className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='Comp5' items={component5}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='Comp6' items={component6}
          className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
      <div className='relative flex gap-2 hover:border hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/headerbottom") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Header Bottom</span><LuSettings size={20} /></button>
        <Zone zoneId='Comp7' items={component7}
          className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='Comp8' items={component8}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='Comp9' items={component9}
          className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
    </>
  )
}

export default DeskActionList