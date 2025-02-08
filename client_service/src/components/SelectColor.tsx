'use client'
import React, { useState } from 'react'
import { ColorResult, Sketch } from '@uiw/react-color'
import { LuX } from 'react-icons/lu'

type Props = {
  color: string | undefined,
  setColor: React.Dispatch<React.SetStateAction<string | undefined>>
}

const SelectColor = ({ color, setColor }: Props) => {
  const [isShow, setIsShow] = useState(false);

  const handleOnChange = (color: ColorResult) => {
    setColor(color.hexa);
  };

  return (
    <div className='relative'>
      <button className={`flex h-7 items-center border border-gray-300 rounded`}
        style={{ backgroundImage: `url("/empty.png")` }}
        onClick={() => {
          setIsShow(!isShow)
        }}
      >
        <div className='w-7 h-full'
          style={{ backgroundColor: color }} />
        <div className='bg-gray-100 h-full px-2 text-sm flex items-center text-gray-700'>Select Color</div>
      </button>

      {
        isShow && (
          <>
            <div
              onClick={() => { setIsShow(false) }}
              className='absolute top-0 w-full h-full' />
            <div className='absolute flex items-center gap-4 left-40 top-1 italic cursor-pointer underline text-blue-500'>
              <button onClick={() => { setColor(undefined) }}>Clear</button>
              <LuX
                className='border border-gray-400'
                onClick={() => { setIsShow(false) }} />
            </div>
            <Sketch color={color} onChange={handleOnChange} />
          </>
        )
      }
    </div>
  )
}

export default SelectColor