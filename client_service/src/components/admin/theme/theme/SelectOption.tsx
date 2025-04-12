'use client'

import React, { SetStateAction } from 'react'

type Props = {
  className?: string,
  value: number,
  setValue: React.Dispatch<SetStateAction<number>>,
  arrayOption: { id: number, name: string }[]
}

const SelectOption = ({ className, value, setValue, arrayOption }: Props) => {
  return (

    <select
      className={`${className} px-2 py-1 border rounded-xs`}
      value={value} onChange={(e) => { setValue(parseInt(e.target.value)) }}>
      {
        arrayOption.map((item, index) => {
          return (
            <option key={index} value={item.id} className='dark:bg-gray-700'>{item.name}</option>
          )
        })
      }
    </select>
  )
}

export default SelectOption