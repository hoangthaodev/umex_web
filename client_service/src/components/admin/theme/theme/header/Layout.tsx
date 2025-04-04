'use client'

import InputRange from '@/components/admin/theme/theme/InputRange'
import SelectColor from '@/components/admin/theme/theme/SelectColor'
import SelectImage from '@/components/admin/theme/theme/SelectImage'
import SelectTextColor from '@/components/admin/theme/theme/SelectTextColor'
import React, { SetStateAction } from 'react'

type Props = {
  layoutHeight: number
  setLayoutHeight: React.Dispatch<SetStateAction<number>>
  layoutTextColor: number
  setLayoutTextColor: React.Dispatch<SetStateAction<number>>
  layoutBackgroundColor: string | undefined
  setLayoutBackgroundColor: React.Dispatch<SetStateAction<string | undefined>>
  layoutImage: number
  setLayoutImage: React.Dispatch<SetStateAction<number>>
  layoutRepeat: number
  setLayoutRepeat: React.Dispatch<SetStateAction<number>>
  layoutHeightMin: number
  layoutHeightMax: number
  layoutHeightDefault: number
}

const Layout = ({ layoutHeightMin, layoutHeightMax, layoutHeightDefault, layoutRepeat, setLayoutRepeat, layoutImage, setLayoutImage, layoutHeight, setLayoutHeight, layoutTextColor, setLayoutTextColor, layoutBackgroundColor, setLayoutBackgroundColor }: Props) => {

  return (
    <div>
      <div className='bg-gray-600 px-2 py-1 text-gray-50'>
        <h3>Layout</h3>
      </div>
      <div className='flex flex-col px-2 py-1 gap-4'>
        <div className='flex flex-col gap-2'>
          <h4>Height</h4>
          <InputRange min={layoutHeightMin} max={layoutHeightMax} defaultValue={layoutHeightDefault} value={layoutHeight} setValue={setLayoutHeight} />
        </div>
        <div className='flex flex-col gap-2'>
          <h4>Text Color</h4>
          <SelectTextColor selected={layoutTextColor} setSelected={setLayoutTextColor} />
        </div>
        <div className='flex flex-col gap-2'>
          <h4>Background Color</h4>
          <SelectColor color={layoutBackgroundColor} setColor={setLayoutBackgroundColor} />
        </div>
        <div className='flex flex-col gap-2'>
          <h4>Background Image</h4>
          <SelectImage image={layoutImage} setImage={setLayoutImage} />
        </div>
        {
          layoutImage > 0 && (
            <div className='flex flex-col gap-2'>
              <h4>Background Repeat</h4>
              <div className='flex bg-gray-50 text-sm border border-gray-300 rounded-md w-fit'>
                <label
                  onClick={() => { setLayoutRepeat(0) }}
                  className={`${layoutRepeat === 0 ? "bg-blue-600 text-gray-50" : ""} px-2 py-1 rounded-s-md`}>Tied</label>
                <label
                  onClick={() => { setLayoutRepeat(1) }}
                  className={`${layoutRepeat === 1 ? "bg-blue-600 text-gray-50" : ""} px-2 py-1 border-l border-gray-300`}>Repeat X</label>
                <label
                  onClick={() => { setLayoutRepeat(2) }}
                  className={`${layoutRepeat === 2 ? "bg-blue-600 text-gray-50" : ""} px-2 py-1 border-l border-gray-300`}>Repeat Y</label>
                <label
                  onClick={() => { setLayoutRepeat(3) }}
                  className={`${layoutRepeat === 3 ? "bg-blue-600 text-gray-50" : ""} px-2 py-1 border-l border-gray-300 rounded-e-md`}>No Repeat</label>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Layout