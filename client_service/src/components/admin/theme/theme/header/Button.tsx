'use client'

import SelectOption from '@/components/admin/theme/theme/SelectOption'
import { colorMap, linkTargetMap, sizeMap, styleMap, textCaseMap } from '@/lib/styleMap'
import React, { SetStateAction } from 'react'

type Props = {
  buttonLabel?: string,
  buttonText: string,
  setButtonText: React.Dispatch<SetStateAction<string>>,
  buttonCase: number,
  setButtonCase: React.Dispatch<SetStateAction<number>>,
  buttonLink: string,
  setButtonLink: React.Dispatch<SetStateAction<string>>,
  buttonColor: number,
  setButtonColor: React.Dispatch<SetStateAction<number>>,
  buttonStyle: number,
  setButtonStyle: React.Dispatch<SetStateAction<number>>,
  buttonTarget: number,
  setButtonTarget: React.Dispatch<SetStateAction<number>>,
  buttonRel: string,
  setButtonRel: React.Dispatch<SetStateAction<string>>,
  buttonRadius: number,
  setButtonRadius: React.Dispatch<SetStateAction<number>>,
  buttonIcon: string,
  setButtonIcon: React.Dispatch<SetStateAction<string>>,
  buttonSize: number,
  setButtonSize: React.Dispatch<SetStateAction<number>>,
}

const Button = ({ buttonLabel, buttonText, setButtonText, buttonLink, setButtonLink, buttonCase, setButtonCase, buttonColor, setButtonColor, buttonStyle, setButtonStyle, buttonTarget, setButtonTarget, buttonRel, setButtonRel, buttonRadius, setButtonRadius,
  //buttonIcon, setButtonIcon, 
  buttonSize, setButtonSize
}: Props) => {

  return (
    <div className='flex flex-col'>
      {
        buttonLabel && (
          <div className='bg-gray-600 px-2 py-1 text-gray-50'>
            <h2>{buttonLabel}</h2>
          </div>
        )
      }
      <div className='p-2 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h3>Text</h3>
          <input
            className='border px-2 rounded-sm'
            type="text" value={buttonText} onChange={(e) => { setButtonText(e.target.value) }} />
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Letter case</h3>
          <div className='flex flex-wrap justify-center'>
            {
              Object.entries(textCaseMap).map(([key, val], index) => {
                return (
                  <label
                    key={index}
                    onClick={() => { setButtonCase(parseInt(key)) }}
                    className={`${buttonCase === parseInt(key) ? "text-gray-50 bg-blue-400" : ""} p-1 grow text-center`}>{val}</label>
                )
              })
            }
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Link</h3>
          <input
            placeholder='http://'
            className='border px-2 rounded-sm'
            type="text" value={buttonLink} onChange={(e) => { setButtonLink(e.target.value) }} />
        </div>

        <SelectOption label='Target' value={buttonTarget} setValue={setButtonTarget} arrayOption={linkTargetMap} />

        <div className='flex flex-col gap-2'>
          <h3>Rel</h3>
          <input
            className='border px-2 rounded-sm'
            type="text" value={buttonRel} onChange={(e) => { setButtonRel(e.target.value) }} />
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Radius</h3>
          <input
            className='border px-2 rounded-sm'
            type="number" value={buttonRadius} onChange={(e) => { setButtonRadius(Number(e.target.value)) }} />
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Color</h3>
          <div className='flex flex-wrap justify-center'>
            {
              Object.entries(colorMap).map(([key, val], index) => {
                return (
                  <label
                    key={index}
                    onClick={() => { setButtonColor(parseInt(key)) }}
                    className={`${buttonColor === parseInt(key) ? "text-gray-50 bg-blue-400" : ""} p-1 grow text-center`}>{val}</label>
                )
              })
            }

          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Style</h3>
          <div className='flex flex-wrap justify-center'>
            {
              Object.entries(styleMap).map(([key, val], index) => {
                return (
                  <label
                    key={index}
                    onClick={() => { setButtonStyle(parseInt(key)) }}
                    className={`${buttonStyle === parseInt(key) ? "text-gray-50 bg-blue-400" : ""} p-1 grow text-center`}>{val}</label>
                )
              })
            }
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Size</h3>
          <div className='flex flex-wrap justify-center'>
            {
              Object.entries(sizeMap).map(([key, val], index) => {
                return (
                  <label
                    key={index}
                    onClick={() => { setButtonSize(parseInt(key)) }}
                    className={`${buttonSize === parseInt(key) ? "text-gray-50 bg-blue-400" : ""} p-1 grow text-center`}>{val}</label>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Button