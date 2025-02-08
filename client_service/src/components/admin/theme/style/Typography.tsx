'use client'
import { updateConfigByKey } from '@/actions/config.action';
import { useTheme } from '@/app/ThemeContext';
import DivNgang from '@/components/DivNgang';
import InputRange from '@/components/InputRange';
import SelectOption from '@/components/SelectOption';
import { SetBreadcrumb } from '@/components/SetBreadcrumb'
import { listFont, listFontWeight } from '@/lib/fontMap';
import React from 'react'
import { toast } from 'react-toastify';

type Props = {}

const Typography = (props: Props) => {
  const { fontHeadline, fontHeadlineWeight, fontBase, fontBaseWeight, fontBaseSize, fontNavigation, fontNavigationWeight,
    setFontHeadline, setFontHeadlineWeight, setFontBase, setFontBaseWeight, setFontBaseSize, setFontNavigation, setFontNavigationWeight } = useTheme()

  const handleSaveChange = async () => {
    const data = JSON.stringify({
      fontHeadline,
      fontHeadlineWeight,
      fontBase,
      fontBaseWeight,
      fontBaseSize,
      fontNavigation,
      fontNavigationWeight,
    })
    await updateConfigByKey("style_typography", data)

    toast.success("Save Change Successfully!")
  }

  return (
    <div>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Style", link: "/ux-admin/theme/style" },
        { name: "Typography", link: "/ux-admin/theme/style/typography" },
      ]} />
      <div>
        <h2 className='bg-gray-600 px-2 py-1 font-semibold text-gray-50'>Headlines</h2>
        <div className='flex flex-col gap-4 p-2'>
          <div>
            <h3>Font</h3>
            <p className='text-xs text-gray-500 italic'>This is the font for all H1, H2, H3, H4, H5, H6 titles.</p>
          </div>
          <div className='flex flex-col gap-2 p-2'>
            <SelectOption label='Font Family' value={fontHeadline} setValue={setFontHeadline} arrayOption={listFont} />
            <SelectOption label='Font Weight' value={fontHeadlineWeight} setValue={setFontHeadlineWeight} arrayOption={listFontWeight[fontHeadline]} />
          </div>
        </div>
      </div>

      <div>
        <h2 className='bg-gray-600 px-2 py-1 font-semibold text-gray-50'>Base</h2>
        <div className='flex flex-col gap-4 p-2 pb-8'>
          <div>
            <h3>Base Text Font</h3>
          </div>
          <div className='flex flex-col gap-2 p-2 border border-gray-400'>
            <SelectOption label='Font Family' value={fontBase} setValue={setFontBase} arrayOption={listFont} />
            <SelectOption label='Font Weight' value={fontBaseWeight} setValue={setFontBaseWeight} arrayOption={listFontWeight[fontBase]} />
          </div>
          <DivNgang />
          <div>
            <h3>Base Font Size</h3>
            <p className='text-xs text-gray-500 italic'>Set base font size in %</p>
            <InputRange min={50} max={200} defaultValue={100} value={fontBaseSize} setValue={setFontBaseSize} />
          </div>
        </div>
      </div>
      <div>
        <h2 className='bg-gray-600 px-2 py-1 font-semibold text-gray-50'>Navigation</h2>
        <div className='flex flex-col gap-4 p-2'>
          <div>
            <h3>Font</h3>
          </div>
          <div className='flex flex-col gap-2 p-2 border border-gray-400'>
            <SelectOption label='Font Family' value={fontNavigation} setValue={setFontNavigation} arrayOption={listFont} />
            <SelectOption label='Font Weight' value={fontNavigationWeight} setValue={setFontNavigationWeight} arrayOption={listFontWeight[fontNavigation]} />
          </div>
        </div>
      </div>
      <div className='px-2'>
        <button className='float-right bg-blue-700 text-gray-200 hover:bg-blue-800 text-sm py-1 px-2 rounded-md'
          onClick={handleSaveChange}
        >Save Change</button>
      </div>
    </div>
  )
}

export default Typography