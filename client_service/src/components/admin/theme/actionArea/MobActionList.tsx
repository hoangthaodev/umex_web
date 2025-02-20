'use client'
import { useComponent } from '@/app/ComponentContext'
import Zone from '@/components/Zone'
import { ComponentType } from '@/lib/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import { LuSettings } from 'react-icons/lu'

type props = {
}

const MobActionList = ({ }: props) => {
  const { modComponent1, modComponent2, modComponent3, modComponent4, modComponent5 } = useComponent()
  const router = useRouter()

  return (
    <>
      <div className='relative flex gap-2 hover:border hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/topbar") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Top Bar</span><LuSettings size={20} /></button>
        <Zone zoneId='MobComp1' items={modComponent1}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
      <div className='relative flex gap-2 hover:border hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/headermain") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Header Main</span><LuSettings size={20} /></button>
        <Zone zoneId='MobComp2' items={modComponent2}
          className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='MobComp3' items={modComponent3}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
        <Zone zoneId='MobComp4' items={modComponent4}
          className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
      <div className='relative flex gap-2 hover:border hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/headerbottom") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Header Bottom</span><LuSettings size={20} /></button>
        <Zone zoneId='MobComp5' items={modComponent5}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'
        />
      </div>
    </>
  )
}

export default MobActionList