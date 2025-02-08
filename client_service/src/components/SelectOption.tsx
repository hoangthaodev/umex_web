'use client'
import React, { SetStateAction } from 'react'

type Props = {
  label: string,
  value: string,
  setValue: React.Dispatch<SetStateAction<string>>,
  arrayOption: Record<string, string>
}

const SelectOption = ({ label, value, setValue, arrayOption }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <h3>{label}</h3>
      <select
        className='px-2 border border-gray-400 rounded-sm'
        value={value} onChange={(e) => { setValue(e.target.value) }}>
        {
          Object.entries(arrayOption).map(([key, val], index) => {
            return (
              <option key={index} value={key}>{val}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default SelectOption