'use client'

import React, { SetStateAction } from 'react'

type Props = {
  label?: string,
  value: number,
  setValue: React.Dispatch<SetStateAction<number>>,
  arrayOption: Record<number, string>
}

const SelectOption = ({ label, value, setValue, arrayOption }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      {
        label && (
          <h3>{label}</h3>
        )
      }
      <select
        className='px-2 border rounded-xs'
        value={value} onChange={(e) => { setValue(parseInt(e.target.value)) }}>
        {
          Object.entries(arrayOption).map(([key, val], index) => {
            return (
              <option key={index} value={parseInt(key)}>{val}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default SelectOption