'use client'

import Zone from '@/components/admin/theme/theme/actionArea/dragdrop/Zone';
import { ComponentType } from '@/lib/type';

type Props = {
  list: ComponentType[]
  handleChange: (zoneId: number, itemId: number, dragIndex: number, dropIndex: number) => void
}

const IdleList = ({ list, handleChange }: Props) => {

  return (
    <div
      className='relative p-2 min-h-8 bg-gray-900 border border-gray-600 hover:border-blue-500 group'
    >
      <button className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'>Not in use</button>
      <Zone
        zoneId='0'
        items={list}
        className='flex flex-wrap gap-2 min-h-8'
        handleChange={handleChange}
      />
    </div>
  )
}

export default IdleList