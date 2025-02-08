'use client'
import SelectOption from '@/components/SelectOption'
import { listColor, listLinkTarget, listSize, listStyle, listTextCase } from '@/lib/styleMap'
import React, { SetStateAction, useState } from 'react'

type Props = {
  buttonLabel?: string,
  buttonText: string,
  setButtonText: React.Dispatch<SetStateAction<string>>,
  buttonCase: string,
  setButtonCase: React.Dispatch<SetStateAction<string>>,
  buttonLink: string,
  setButtonLink: React.Dispatch<SetStateAction<string>>,
  buttonColor: string,
  setButtonColor: React.Dispatch<SetStateAction<string>>,
  buttonStyle: string,
  setButtonStyle: React.Dispatch<SetStateAction<string>>,
  buttonTarget: string,
  setButtonTarget: React.Dispatch<SetStateAction<string>>,
  buttonRel: string,
  setButtonRel: React.Dispatch<SetStateAction<string>>,
  buttonRadius: number,
  setButtonRadius: React.Dispatch<SetStateAction<number>>,
  buttonIcon: string,
  setButtonIcon: React.Dispatch<SetStateAction<string>>,
  buttonSize: string,
  setButtonSize: React.Dispatch<SetStateAction<string>>,
}

const Button = ({ buttonLabel, buttonText, setButtonText, buttonLink, setButtonLink, buttonCase, setButtonCase, buttonColor, setButtonColor, buttonStyle, setButtonStyle, buttonTarget, setButtonTarget, buttonRel, setButtonRel, buttonRadius, setButtonRadius, buttonIcon, setButtonIcon, buttonSize, setButtonSize }: Props) => {

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
            className='border border-gray-400 px-2 rounded-sm'
            type="text" value={buttonText} onChange={(e) => { setButtonText(e.target.value) }} />
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Letter case</h3>
          <div className='flex flex-wrap justify-center'>
            {
              Object.entries(listTextCase).map(([key, val], index) => {
                return (
                  <label
                    key={index}
                    onClick={() => { setButtonCase(key) }}
                    className={`${buttonCase === key ? "text-gray-50 bg-blue-400" : ""} p-1 grow text-center`}>{val}</label>
                )
              })
            }
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Link</h3>
          <input
            placeholder='http://'
            className='border border-gray-400 px-2 rounded-sm'
            type="text" value={buttonLink} onChange={(e) => { setButtonLink(e.target.value) }} />
        </div>

        <SelectOption label='Target' value={buttonTarget} setValue={setButtonTarget} arrayOption={listLinkTarget} />

        <div className='flex flex-col gap-2'>
          <h3>Rel</h3>
          <input
            className='border border-gray-400 px-2 rounded-sm'
            type="text" value={buttonRel} onChange={(e) => { setButtonRel(e.target.value) }} />
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Radius</h3>
          <input
            className='border border-gray-400 px-2 rounded-sm'
            type="number" value={buttonRadius} onChange={(e) => { setButtonRadius(Number(e.target.value)) }} />
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Color</h3>
          <div className='flex flex-wrap justify-center'>
            {
              Object.entries(listColor).map(([key, val], index) => {
                return (
                  <label
                    key={index}
                    onClick={() => { setButtonColor(key) }}
                    className={`${buttonColor === key ? "text-gray-50 bg-blue-400" : ""} p-1 grow text-center`}>{val}</label>
                )
              })
            }

          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Style</h3>
          <div className='flex flex-wrap justify-center'>
            {
              Object.entries(listStyle).map(([key, val], index) => {
                return (
                  <label
                    key={index}
                    onClick={() => { setButtonStyle(key) }}
                    className={`${buttonStyle === key ? "text-gray-50 bg-blue-400" : ""} p-1 grow text-center`}>{val}</label>
                )
              })
            }
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3>Size</h3>
          <div className='flex flex-wrap justify-center'>
            {
              Object.entries(listSize).map(([key, val], index) => {
                return (
                  <label
                    key={index}
                    onClick={() => { setButtonSize(key) }}
                    className={`${buttonSize === key ? "text-gray-50 bg-blue-400" : ""} p-1 grow text-center`}>{val}</label>
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