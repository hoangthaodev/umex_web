'use client'

import React, { SetStateAction } from 'react'

type Props = {
  selected: number
  setSelected: React.Dispatch<SetStateAction<number>>
}

const SelectTextColor = ({ selected, setSelected }: Props) => {
  return (
    <div className='flex gap-1 justify-center'>
      <label
        onClick={() => { setSelected(1) }}
        className={`w-20 h-14 flex p-1 rounded-sm group ${selected === 1 ? "border border-blue-500" : ""}`}>
        <label className={`w-full h-full flex items-center justify-center font-semibold text-xl rounded-sm bg-blue-400 text-gray-100 ${selected === 1 ? "bg-blue-500" : "group-hover:bg-blue-500"}`}>
          Abc
        </label>
      </label>
      <label
        onClick={() => { setSelected(2) }}
        className={`w-20 h-14 flex p-1 rounded-sm group ${selected === 2 ? "border border-blue-500" : ""}`}>
        <label className={`w-full h-full flex items-center justify-center font-semibold text-xl rounded-sm border border-blue-400 text-blue-400 ${selected === 2 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"}`}>
          Abc
        </label>
      </label>
    </div>
  )
}

export default SelectTextColor