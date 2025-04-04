'use client'

import InputRange from '@/components/admin/theme/theme/InputRange'
import SelectColor from '@/components/admin/theme/theme/SelectColor'
import React, { SetStateAction } from 'react'

type Props = {
  isUppercase: boolean
  setIsUppercase: React.Dispatch<SetStateAction<boolean>>
  navColor: string | undefined
  setNavColor: React.Dispatch<SetStateAction<string | undefined>>
  navColorHover: string | undefined
  setNavColorHover: React.Dispatch<SetStateAction<string | undefined>>
  navHeight: number
  setNavHeight: React.Dispatch<SetStateAction<number>>
  navStyle: number
  setNavStyle: React.Dispatch<SetStateAction<number>>
  navHeightMin: number
  navHeightMax: number
  navHeightDefault: number
}

const Navigation = ({ navHeightMin, navHeightMax, navHeightDefault, isUppercase, setIsUppercase, navStyle, setNavStyle, navColor, setNavColor, navColorHover, setNavColorHover, navHeight, setNavHeight }: Props) => {
  return (
    <div>
      <div className='bg-gray-600 px-2 py-1 text-gray-50'>
        <h3>Navigation</h3>
      </div>
      <div className='flex flex-col px-2 py-1 gap-4'>
        <div className='flex flex-col gap-2'>
          <h4>Nav Style</h4>
          <div className='grid grid-cols-4 w-fit gap-2'>
            <label
              onClick={() => { setNavStyle(1) }}
              className={`${navStyle === 1 ? "border-blue-500" : "hover:border-blue-500"} border p-1 w-12 h-12 rounded-sm group`}>
              <label className={`${navStyle === 1 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"} border border-blue-400 text-blue-400 font-semibold w-full h-full rounded-sm flex items-center justify-center`}>
                Nav
              </label>
            </label>
            <label
              onClick={() => { setNavStyle(2) }}
              className={`${navStyle === 2 ? "border-blue-500" : "hover:border-blue-500"} border p-1 w-12 h-12 rounded-sm group`}>
              <label className={`${navStyle === 2 ? "text-blue-500 border-blue-500" : "group-hover:text-blue-500 group-hover:border-blue-500 border-blue-400 text-blue-400"} font-semibold w-full h-full border rounded-sm flex items-center overflow-hidden`}>
                Nav|Na
              </label>
            </label>
            <label
              onClick={() => { setNavStyle(3) }}
              className={`${navStyle === 3 ? "border-blue-500" : "hover:border-blue-500"} border p-1 w-12 h-12 rounded-sm group`}>
              <label className={`${navStyle === 3 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"} border font-semibold border-blue-400 text-blue-400 w-full h-full rounded-sm flex items-center justify-center`}>
                <label className={`${navStyle === 3 ? "border-blue-500" : "group-hover:border-blue-500"} border-t-2 border-blue-400`}>Nav</label>
              </label>
            </label>
            <label
              onClick={() => { setNavStyle(4) }}
              className={`${navStyle === 4 ? "border-blue-500" : "hover:border-blue-500"} border p-1 w-12 h-12 rounded-sm group`}>
              <label className={`${navStyle === 4 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"} border font-semibold border-blue-400 text-blue-400 w-full h-full rounded-sm flex items-center justify-center`}>
                <label className={`${navStyle === 4 ? "border-blue-500" : "group-hover:border-blue-500"} border-b-2 border-blue-400`}>Nav</label>
              </label>
            </label>
            <label
              onClick={() => { setNavStyle(5) }}
              className={`${navStyle === 5 ? "border-blue-500" : "hover:border-blue-500"} border p-1 w-12 h-12 rounded-sm group`}>
              <label className={`${navStyle === 5 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"} border font-semibold border-blue-400 text-blue-400 w-full h-full rounded-sm flex items-center justify-center`}>
                <label className={`${navStyle === 5 ? "bg-blue-500" : "group-hover:bg-blue-500"} bg-blue-400 text-gray-100 px-1`}>Nav</label>
              </label>
            </label>
            <label
              onClick={() => { setNavStyle(6) }}
              className={`${navStyle === 6 ? "border-blue-500" : "hover:border-blue-500"} border p-1 w-12 h-12 rounded-sm group`}>
              <label className={`${navStyle === 6 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"} border font-semibold border-blue-400 text-blue-400 w-full h-full rounded-sm flex items-center justify-center`}>
                <label className={`${navStyle === 6 ? "border-blue-500" : "group-hover:border-blue-500"} border border-blue-400 px-1`}>Nav</label>
              </label>
            </label>
            <label
              onClick={() => { setNavStyle(7) }}
              className={`${navStyle === 7 ? "border-blue-500" : "hover:border-blue-500"} border p-1 w-12 h-12 rounded-sm group`}>
              <label className={`${navStyle === 7 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"} border font-semibold border-blue-400 text-blue-400 w-full h-full rounded-sm flex items-center justify-center`}>
                <label className={`${navStyle === 7 ? "bg-blue-500" : "group-hover:bg-blue-500"} bg-blue-400 text-gray-100 px-1 rounded-md`}>Nav</label>
              </label>
            </label>
            <label
              onClick={() => { setNavStyle(8) }}
              className={`${navStyle === 8 ? "border-blue-500" : "hover:border-blue-500"} border p-1 w-12 h-12 rounded-sm group`}>
              <label className={`${navStyle === 8 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"} border font-semibold border-blue-400 text-blue-400 w-full h-full rounded-sm flex items-center justify-center`}>
                <label className={`${navStyle === 8 ? "border-blue-500" : "group-hover:border-blue-500"} border border-blue-400 px-1 rounded-md`}>Nav</label>
              </label>
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h4>Nav Height</h4>
          <InputRange min={navHeightMin} max={navHeightMax} defaultValue={navHeightDefault} value={navHeight} setValue={setNavHeight} />
        </div>
        <div className='flex items-center gap-2'>
          <input
            className='w-4 h-4'
            type='checkbox' checked={isUppercase} onChange={() => { setIsUppercase(!isUppercase) }} />
          <label onClick={() => { setIsUppercase(!isUppercase) }}>Uppercase</label>
        </div>
        <div className='flex flex-col gap-2'>
          <h4>Nav Color</h4>
          <SelectColor color={navColor} setColor={setNavColor} />
        </div>
        <div className='flex flex-col gap-2'>
          <h4>Nav Color :hover</h4>
          <SelectColor color={navColorHover} setColor={setNavColorHover} />
        </div>
      </div>
    </div>
  )
}

export default Navigation