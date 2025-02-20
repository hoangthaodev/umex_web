import DivNgang from '@/components/DivNgang'
import React from 'react'

type Props = {
  categoryId: number
}

const Categories = ({ categoryId }: Props) => {
  return (
    <div className='border border-gray-400'>
      <h3 className='px-2'>Categories</h3>
      <DivNgang />
      <div className='p-2'>
        <ul>
          <li className='flex gap-2 items-center'>
            <input type="checkbox" />
            cate1
          </li>
          <li>cate2</li>
        </ul>
      </div>
    </div>
  )
}

export default Categories