'use client'

import InputRange from '@/components/InputRange'
import SelectColor from '@/components/SelectColor'
import SelectImage from '@/components/SelectImage'
import TextColor from '@/components/TextColor'
import { ImageType } from '@/lib/types'
import React, { SetStateAction } from 'react'

type Props = {
  layoutHeight: number
  setLayoutHeight: React.Dispatch<SetStateAction<number>>
  layoutTextColor: string
  setLayoutTextColor: React.Dispatch<SetStateAction<string>>
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
        <h2>Layout</h2>
      </div>
      <div className='flex flex-col px-2 py-1 gap-4'>
        <div>
          <h3>Height</h3>
          <InputRange min={layoutHeightMin} max={layoutHeightMax} defaultValue={layoutHeightDefault} value={layoutHeight} setValue={setLayoutHeight} />
        </div>
        <div>
          <h3>Text Color</h3>
          <TextColor selected={layoutTextColor} setSelected={setLayoutTextColor} />
        </div>
        <div>
          <h3>Background Color</h3>
          <SelectColor color={layoutBackgroundColor} setColor={setLayoutBackgroundColor} />
        </div>
        <div className='flex flex-col gap-2'>
          <h3>Background Image</h3>
          <SelectImage image={layoutImage} setImage={setLayoutImage} />
        </div>
        {
          layoutImage > 0 && (
            <div className='flex flex-col gap-2'>
              <h3>Background Repeat</h3>
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