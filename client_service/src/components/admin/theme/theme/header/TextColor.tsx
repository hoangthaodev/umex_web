'use client'
import React, { SetStateAction } from 'react'

type Props = {
  selected: number,
  setSelected: React.Dispatch<SetStateAction<number>>
}

const TextColor = ({ selected, setSelected }: Props) => {

  return (
    <div className='flex gap-4'>
      <div className={`${selected === 1 ? "border-blue-500" : ""} p-1 border rounded-md`}>
        <button
          onClick={() => {
            setSelected(1)
          }}
          className={`flex ${selected === 1 ? "bg-blue-600 text-gray-50" : "bg-blue-500 text-gray-100"} hover:bg-blue-600 hover:text-gray-50 px-4 py-2 justify-center items-center text-3xl border rounded-md`}>
          Abc
        </button>
      </div>
      <div className={`${selected === 2 ? "border-blue-500" : ""} p-1 border rounded-md`}>
        <button
          onClick={() => {
            setSelected(2)
          }}
          className={`flex ${selected === 2 ? "bg-gray-50 text-blue-600" : "bg-gray-100 text-blue-500"} hover:bg-gray-50 hover:text-blue-600 px-4 py-2 justify-center items-center text-3xl border border-blue-500 rounded-md`}>
          Abc
        </button>
      </div>
    </div>
  )
}

export default TextColor