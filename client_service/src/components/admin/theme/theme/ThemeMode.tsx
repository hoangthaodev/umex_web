'use client'

import React, { SetStateAction } from 'react'

type Props = {
  selected: string,
  setSelected: React.Dispatch<SetStateAction<string>>
}

const ThemeMode = ({ selected, setSelected }: Props) => {

  return (
    <div className='flex gap-4'>

      <div className={`${selected === "light" ? "border-blue-500" : ""} p-1 border rounded-md`}>
        <button
          onClick={() => {
            setSelected("light")
          }}
          className={`flex ${selected === "light" ? "bg-gray-50 text-blue-600" : "bg-gray-100 text-blue-500"} hover:bg-gray-50 hover:text-blue-600 px-4 py-2 justify-center items-center text-3xl border border-blue-500 rounded-md`}>
          Abc
        </button>
      </div>
      <div className={`${selected === "dark" ? "border-blue-500" : ""} p-1 border rounded-md`}>
        <button
          onClick={() => {
            setSelected("dark")
          }}
          className={`flex ${selected === "dark" ? "bg-blue-600 text-gray-50" : "bg-blue-500 text-gray-100"} hover:bg-blue-600 hover:text-gray-50 px-4 py-2 justify-center items-center text-3xl border rounded-md`}>
          Abc
        </button>
      </div>
    </div>
  )
}

export default ThemeMode