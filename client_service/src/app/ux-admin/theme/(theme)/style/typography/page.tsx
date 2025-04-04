'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import InputRange from '@/components/admin/theme/theme/InputRange'
import SelectOption from '@/components/admin/theme/theme/SelectOption'
import DivNgang from '@/components/DivNgang'
import { listFont, listFontWeight } from '@/lib/fontMap'
import React from 'react'

const page = () => {
  const { fontHeadline, fontHeadlineWeight, fontBase, fontBaseWeight, fontBaseSize, fontNavigation, fontNavigationWeight,
    setFontHeadline, setFontHeadlineWeight, setFontBase, setFontBaseWeight, setFontBaseSize, setFontNavigation, setFontNavigationWeight } = useTheme()

  return (
    <div>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Style", link: "/ux-admin/theme/style" },
        { name: "Typography", link: "/ux-admin/theme/style/typography" },
      ]} />
      <div>
        <h3 className='bg-gray-600 px-2 py-1 font-semibold text-gray-50'>Headlines</h3>
        <div className='flex flex-col gap-4 p-2'>
          <div>
            <h4>Font</h4>
            <p className='text-xs text-gray-500 italic'>This is the font for all H1, H2, H3, H4, H5, H6 titles.</p>
          </div>
          <div className='flex flex-col gap-2 p-2 border'>
            <div className='flex flex-col'>
              <h4>Font Family</h4>
              <SelectOption value={fontHeadline} setValue={setFontHeadline} arrayOption={listFont} />
            </div>
            <div className='flex flex-col'>
              <h4>Font Weight</h4>
              <SelectOption value={fontHeadlineWeight} setValue={setFontHeadlineWeight} arrayOption={listFontWeight[fontHeadline]} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className='bg-gray-600 px-2 py-1 font-semibold text-gray-50'>Base</h3>
        <div className='flex flex-col gap-4 p-2 pb-8'>
          <div>
            <h4>Base Text Font</h4>
          </div>
          <div className='flex flex-col gap-2 p-2 border'>
            <div className='flex flex-col'>
              <h4>Font Family</h4>
              <SelectOption value={fontBase} setValue={setFontBase} arrayOption={listFont} />
            </div>
            <div className='flex flex-col'>
              <h4>Font Weight</h4>
              <SelectOption value={fontBaseWeight} setValue={setFontBaseWeight} arrayOption={listFontWeight[fontBase]} />
            </div>
          </div>
          <DivNgang />
          <div>
            <h4>Base Font Size</h4>
            <p className='text-xs text-gray-500 italic'>Set base font size in %</p>
            <InputRange min={50} max={200} defaultValue={100} value={fontBaseSize} setValue={setFontBaseSize} />
          </div>
        </div>
      </div>
      <div>
        <h3 className='bg-gray-600 px-2 py-1 font-semibold text-gray-50'>Navigation</h3>
        <div className='flex flex-col gap-4 p-2'>
          <div>
            <h4>Font</h4>
          </div>
          <div className='flex flex-col gap-2 p-2 border'>
            <div className='flex flex-col'>
              <h4>Font Family</h4>
              <SelectOption value={fontNavigation} setValue={setFontNavigation} arrayOption={listFont} />
            </div>
            <div className='flex flex-col'>
              <h4>Font Weight</h4>
              <SelectOption value={fontNavigationWeight} setValue={setFontNavigationWeight} arrayOption={listFontWeight[fontNavigation]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page