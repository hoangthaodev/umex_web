'use client'

import InputRange from '@/components/InputRange'
import NavStyle from '@/components/NavStyle'
import SelectColor from '@/components/SelectColor'
import React, { SetStateAction } from 'react'

type Props = {
  isUppercase: boolean
  setIsUppercase: React.Dispatch<SetStateAction<boolean>>
  navColor: string
  setNavColor: React.Dispatch<SetStateAction<string>>
  navColorHover: string
  setNavColorHover: React.Dispatch<SetStateAction<string>>
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
        <h2>Navigation</h2>
      </div>
      <div className='flex flex-col px-2 py-1 gap-4'>
        <div>
          <h3>Nav Style</h3>
          <NavStyle style={navStyle} setStyle={setNavStyle} />
        </div>
        <div>
          <h3>Nav Height</h3>
          <InputRange min={navHeightMin} max={navHeightMax} defaultValue={navHeightDefault} value={navHeight} setValue={setNavHeight} />
        </div>
        <div className='flex items-center gap-2'>
          <input type='checkbox' checked={isUppercase} onChange={() => { setIsUppercase(!isUppercase) }} />
          <label onClick={() => { setIsUppercase(!isUppercase) }}>Uppercase</label>
        </div>
        <div>
          <h3>Nav Color</h3>
          <SelectColor color={navColor} setColor={setNavColor} />
        </div>
        <div>
          <h3>Nav Color :hover</h3>
          <SelectColor color={navColorHover} setColor={setNavColorHover} />
        </div>
      </div>
    </div>
  )
}

export default Navigation