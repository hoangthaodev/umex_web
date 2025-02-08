'use client'
import React, { SetStateAction, useState } from 'react'
import { LuRotateCcw } from 'react-icons/lu'

type Props = {
  min: number,
  max: number,
  defaultValue: number,
  value: number,
  setValue: React.Dispatch<SetStateAction<number>>
}

const InputRange = ({ min, max, defaultValue, value, setValue }: Props) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value))
  }
  return (
    <div className='relative flex gap-2 w-full'>
      <input
        type="range"
        name="InputRange"
        min={min}
        max={max}
        value={value}
        onChange={handleOnChange}
        className='w-11/12'
      />
      <label>{value}</label>
      <button className='absolute right-2 -top-4'
        onClick={() => { setValue(defaultValue) }}
      >
        <LuRotateCcw size={15} className='text-gray-500' />
      </button>
    </div>
  )
}

export default InputRange