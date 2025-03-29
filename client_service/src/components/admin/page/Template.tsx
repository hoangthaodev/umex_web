'use client'

import DivNgang from '@/components/DivNgang'
import { templateMap } from '@/lib/pageMap'
import React from 'react'

type Props = {
  selectedTemp: number
  setSelectedTemp: React.Dispatch<React.SetStateAction<number>>
}

const Template = ({ selectedTemp, setSelectedTemp }: Props) => {
  return (
    <div className='flex flex-col border border-gray-400'>
      <h3 className='px-2 bg-gray-300'>Template</h3>
      <DivNgang />
      <div className='flex flex-col gap-2 p-2'>
        <label>Select template</label>
        <select className='border border-gray-400 rounded-sm px-2 py-1 cursor-pointer'
          value={selectedTemp}
          onChange={(e) => setSelectedTemp(parseInt(e.target.value))}
        >
          {
            Object.entries(templateMap).map(([key, value], index) => {
              return (
                <option key={index} value={parseInt(key)}>
                  {value}
                </option>
              )
            })
          }
        </select>
      </div>
    </div>
  )
}

export default Template