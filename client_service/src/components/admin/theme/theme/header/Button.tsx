'use client'

import SelectInList from '@/components/admin/theme/theme/SelectInList'
import SelectOption from '@/components/admin/theme/theme/SelectOption'
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

  const buttonCaseList = [
    { id: 1, name: "Abc" },
    { id: 2, name: "ABC" },
  ]

  const buttonColorList = [
    { id: 1, name: "Plain" },
    { id: 2, name: "Primary" },
    { id: 3, name: "Secondary" },
    { id: 4, name: "Success" },
    { id: 5, name: "Alert" },
  ]

  const buttonStyleList = [
    { id: 1, name: "Default" },
    { id: 2, name: "Outline" },
    { id: 3, name: "Underline" },
    { id: 4, name: "Shade" },
    { id: 5, name: "Bevel" },
    { id: 6, name: "Gloss" },
    { id: 7, name: "Link" },
  ]

  const buttonSizeList = [
    { id: 1, name: "XS" },
    { id: 2, name: "S" },
    { id: 3, name: "Default" },
    { id: 4, name: "M" },
    { id: 5, name: "L" },
    { id: 6, name: "XL" },
  ]

  const buttonTargetList = [
    { id: 1, name: "Same Window" },
    { id: 2, name: "New Window" },
  ]

  return (
    <div className='flex flex-col'>
      {
        buttonLabel && (
          <div className='bg-gray-600 px-2 py-1 text-gray-50'>
            <h3>{buttonLabel}</h3>
          </div>
        )
      }
      <div className='p-2 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h4>Text</h4>
          <input
            className='border px-2 rounded-sm'
            type="text" value={buttonText} onChange={(e) => { setButtonText(e.target.value) }} />
        </div>

        <div className='flex flex-col gap-2'>
          <h4>Letter case</h4>
          <SelectInList arrayList={buttonCaseList} selected={buttonCase} setSelected={setButtonCase} />
        </div>

        <div className='flex flex-col gap-2'>
          <h4>Link</h4>
          <input
            placeholder='http://'
            className='border px-2 rounded-sm'
            type="text" value={buttonLink} onChange={(e) => { setButtonLink(e.target.value) }} />
        </div>

        <div className='flex flex-col gap-2'>
          <h4>Target</h4>
          <SelectOption value={buttonTarget} setValue={setButtonTarget} arrayOption={buttonTargetList} />
        </div>

        <div className='flex flex-col gap-2'>
          <h4>Rel</h4>
          <input
            className='border px-2 rounded-sm'
            type="text" value={buttonRel} onChange={(e) => { setButtonRel(e.target.value) }} />
        </div>

        <div className='flex flex-col gap-2'>
          <h4>Radius</h4>
          <input
            className='border px-2 rounded-sm'
            type="number" value={buttonRadius} onChange={(e) => { setButtonRadius(Number(e.target.value)) }} />
        </div>

        <div className='flex flex-col gap-2'>
          <h4>Color</h4>
          <SelectInList arrayList={buttonColorList} selected={buttonColor} setSelected={setButtonColor} />
        </div>

        <div className='flex flex-col gap-2'>
          <h4>Style</h4>
          <SelectInList arrayList={buttonStyleList} selected={buttonStyle} setSelected={setButtonStyle} />
        </div>

        <div className='flex flex-col gap-2'>
          <h4>Size</h4>
          <SelectInList arrayList={buttonSizeList} selected={buttonSize} setSelected={setButtonSize} />
        </div>
      </div>
    </div>
  )
}

export default Button