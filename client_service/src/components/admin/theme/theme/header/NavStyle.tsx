'use client'

import React, { SetStateAction } from 'react'

type Props = {
  style: number,
  setStyle: React.Dispatch<SetStateAction<number>>
}

const NavStyle = ({ style, setStyle }: Props) => {

  return (
    <div className='grid w-fit grid-cols-4 grid-rows-1 gap-2'>
      <div className={`${style === 0 ? "border-blue-600" : ""} w-12 h-12 border p-1 rounded-md`} >
        <button
          onClick={() => { setStyle(0) }}
          className={`w-full h-full ${style === 0 ? "border-blue-600 text-blue-600" : "border-blue-400 text-blue-400"} border rounded-md bg-gray-100 font-semibold`}>Nav</button>
      </div>
      <div className={`${style === 1 ? "border-blue-600" : ""} w-12 h-12 border p-1 rounded-md`} >
        <button
          onClick={() => { setStyle(1) }}
          className={`w-full h-full ${style === 1 ? "border-blue-600 text-blue-600" : "border-blue-400 text-blue-400"} border rounded-md bg-gray-100 font-semibold overflow-hidden`}>Nav|Na</button>
      </div>
      <div className={`${style === 2 ? "border-blue-600" : ""} w-12 h-12 border p-1 rounded-md`} >
        <button
          onClick={() => { setStyle(2) }}
          className={`w-full h-full ${style === 2 ? "border-blue-600 text-blue-600" : "border-blue-400 text-blue-400"} border rounded-md bg-gray-100 font-semibold`}><span className={`${style === 2 ? "border-blue-600" : "border-blue-400"} border-t-2`}>Nav</span></button>
      </div>
      <div className={`${style === 3 ? "border-blue-600" : ""} w-12 h-12 border p-1 rounded-md`} >
        <button
          onClick={() => { setStyle(3) }}
          className={`w-full h-full ${style === 3 ? "border-blue-600 text-blue-600" : "border-blue-400 text-blue-400"} border rounded-md bg-gray-100 font-semibold`}><span className={`${style === 3 ? "border-blue-600" : "border-blue-400"} border-b-2`}>Nav</span></button>
      </div>
      <div className={`${style === 4 ? "border-blue-600" : ""} w-12 h-12 border p-1 rounded-md`} >
        <button
          onClick={() => { setStyle(4) }}
          className={`w-full h-full ${style === 4 ? "border-blue-600 text-blue-600" : "border-blue-400 text-blue-400"} border rounded-md bg-gray-100 font-semibold`}><span className={`${style === 4 ? "bg-blue-600 text-gray-50" : "bg-blue-400 text-gray-100"} p-1`}>Nav</span></button>
      </div>
      <div className={`${style === 5 ? "border-blue-600" : ""} w-12 h-12 border p-1 rounded-md`} >
        <button
          onClick={() => { setStyle(5) }}
          className={`w-full h-full ${style === 5 ? "border-blue-600 text-blue-600" : "border-blue-400 text-blue-400"} border rounded-md bg-gray-100 font-semibold`}><span className={`${style === 5 ? "border-blue-600" : "border-blue-400"} border p-1`}>Nav</span></button>
      </div>
      <div className={`${style === 6 ? "border-blue-600" : ""} w-12 h-12 border p-1 rounded-md`} >
        <button
          onClick={() => { setStyle(6) }}
          className={`w-full h-full ${style === 6 ? "border-blue-600 text-blue-600" : "border-blue-400 text-blue-400"} border rounded-md bg-gray-100 font-semibold`}><span className={`${style === 6 ? "bg-blue-600 text-gray-50" : "bg-blue-400 text-gray-100"} rounded-md px-1`}>Nav</span></button>
      </div>
      <div className={`${style === 7 ? "border-blue-600" : ""} w-12 h-12 border p-1 rounded-md`} >
        <button
          onClick={() => { setStyle(7) }}
          className={`w-full h-full ${style === 7 ? "border-blue-600 text-blue-600" : "border-blue-400 text-blue-400"} border rounded-md bg-gray-100 font-semibold`}><span className={`${style === 7 ? "border-blue-600" : "border-blue-400"} border rounded-md px-1`}>Nav</span></button>
      </div>
    </div>
  )
}

export default NavStyle