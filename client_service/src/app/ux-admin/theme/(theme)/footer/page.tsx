'use client'

import { getPageByTypeNStatus } from '@/action/page.action'
import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import SelectColor from '@/components/admin/theme/theme/SelectColor'
import SelectImage from '@/components/admin/theme/theme/SelectImage'
import SelectInList from '@/components/admin/theme/theme/SelectInList'
import SelectOption from '@/components/admin/theme/theme/SelectOption'
import SelectTextColor from '@/components/admin/theme/theme/SelectTextColor'
import DivNgang from '@/components/DivNgang'
import React, { useEffect, useState } from 'react'
import { LuChevronUp } from 'react-icons/lu'

const page = () => {
  const {
    footerBlock,
    footer1Checked,
    footer1Columns,
    footer1TextColor,
    footer1BackgroundColor,
    footer1BackgroundImage,
    footer2Checked,
    footer2Columns,
    footer2TextColor,
    footer2BackgroundColor,
    footer2BackgroundImage,
    footerAbsoluteTextColor,
    footerAbsoluteAlign,
    footerAbsoluteBackgroundColor,
    footerAbsoluteBottomTextPrimary,
    footerAbsoluteBottomTextSecondary,
    footerBTTEnable,
    footerBTTShape,
    footerBTTPosition,
    footerBTTShowMobile,
    footerHTMLBefore,
    footerHTMLAfter,
    setFooterBlock,
    setFooter1Checked,
    setFooter1Columns,
    setFooter1TextColor,
    setFooter1BackgroundColor,
    setFooter1BackgroundImage,
    setFooter2Checked,
    setFooter2Columns,
    setFooter2TextColor,
    setFooter2BackgroundColor,
    setFooter2BackgroundImage,
    setFooterAbsoluteTextColor,
    setFooterAbsoluteAlign,
    setFooterAbsoluteBackgroundColor,
    setFooterAbsoluteBottomTextPrimary,
    setFooterAbsoluteBottomTextSecondary,
    setFooterBTTEnable,
    setFooterBTTShape,
    setFooterBTTPosition,
    setFooterBTTShowMobile,
    setFooterHTMLBefore,
    setFooterHTMLAfter,
  } = useTheme()

  const [footerBlockList, setFooterBlockList] = useState<{ id: number, name: string }[]>([{ id: 0, name: "--None--" }])
  const [firstMount, setFirstMount] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const blockAll = await getPageByTypeNStatus(3, 1, 1000, 0)
      if (!blockAll) return
      const blockList = blockAll.map(i => {
        return { id: i.page_id!, name: i.page_title }
      })
      setFooterBlockList([...footerBlockList, ...blockList])
      setFirstMount(false)
    }
    fetchData()
  }, [])

  const footerColumns = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" },
  ]
  const footerAbsoluteAlignList = [
    { id: 1, name: "Left/Right" },
    { id: 2, name: "Center" },
  ]
  const footerBTTPositionList = [
    { id: 1, name: "Left" },
    { id: 2, name: "Right" },
  ]

  if (firstMount) {
    return <div>Loading...</div>
  }

  return (
    <div className='py-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Footer", link: "/ux-admin/theme/footer" },
      ]} />
      <div className='flex flex-col'>
        <h3 className='px-2 py-1 bg-gray-500 text-gray-100'>Custom Footer</h3>
        <div className='p-2 flex flex-col gap-2'>
          <h4>Custom Footer Block</h4>
          <div className='flex flex-col'>
            <label className='text-gray-400 text-xs'>You can replace the Footer with a Custom Block that you can edit in the Page Builder.</label>
            <SelectOption arrayOption={footerBlockList} value={footerBlock} setValue={setFooterBlock} />
          </div>
        </div>
      </div>
      {
        footerBlock === 0 && (
          <>
            <div className='flex flex-col'>
              <h3 className='px-2 py-1 bg-gray-500 text-gray-100'>Footer 1</h3>
              <div className='p-2 flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                  <input
                    className='w-4 h-4'
                    type="checkbox" checked={footer1Checked} onChange={() => { setFooter1Checked(!footer1Checked) }} />
                  <label onClick={() => { setFooter1Checked(!footer1Checked) }} >Enable Footer 1</label>
                </div>
                <DivNgang className='border-gray-300' />
                <div className='flex flex-col gap-2'>
                  <h4>Columns</h4>
                  <SelectInList arrayList={footerColumns} selected={footer1Columns} setSelected={setFooter1Columns} />
                </div>
                <DivNgang className='border-gray-300' />
                <div className='flex flex-col gap-2'>
                  <h4>Text color</h4>
                  <SelectTextColor selected={footer1TextColor} setSelected={setFooter1TextColor} />
                </div>
                <DivNgang className='border-gray-300' />
                <div className='flex flex-col gap-2'>
                  <h4>Background Color</h4>
                  <SelectColor color={footer1BackgroundColor} setColor={setFooter1BackgroundColor} />
                </div>
                <DivNgang className='border-gray-300' />
                <div className='flex flex-col gap-2'>
                  <h4>Background Image</h4>
                  <SelectImage image={footer1BackgroundImage} setImage={setFooter1BackgroundImage} />
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <h3 className='px-2 py-1 bg-gray-500 text-gray-100'>Footer 2</h3>
              <div className='p-2 flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                  <input
                    className='w-4 h-4'
                    type="checkbox" checked={footer2Checked} onChange={() => { setFooter2Checked(!footer2Checked) }} />
                  <label onClick={() => { setFooter2Checked(!footer2Checked) }} >Enable Footer 2</label>
                </div>
                <DivNgang className='border-gray-300' />
                <div className='flex flex-col gap-2'>
                  <h4>Columns</h4>
                  <SelectInList arrayList={footerColumns} selected={footer2Columns} setSelected={setFooter2Columns} />
                </div>
                <DivNgang className='border-gray-300' />
                <div className='flex flex-col gap-2'>
                  <h4>Text color</h4>
                  <SelectTextColor selected={footer2TextColor} setSelected={setFooter2TextColor} />
                </div>
                <DivNgang className='border-gray-300' />
                <div className='flex flex-col gap-2'>
                  <h4>Background Color</h4>
                  <SelectColor color={footer2BackgroundColor} setColor={setFooter2BackgroundColor} />
                </div>
                <DivNgang className='border-gray-300' />
                <div className='flex flex-col gap-2'>
                  <h4>Background Image</h4>
                  <SelectImage image={footer2BackgroundImage} setImage={setFooter2BackgroundImage} />
                </div>
              </div>
            </div>
          </>
        )
      }
      <div className='flex flex-col'>
        <h3 className='px-2 py-1 bg-gray-500 text-gray-100'>Absolute Footer</h3>
        <div className='flex flex-col gap-4 p-2'>
          <div className='flex flex-col gap-2'>
            <h4>Text color</h4>
            <SelectTextColor selected={footerAbsoluteTextColor} setSelected={setFooterAbsoluteTextColor} />
          </div>
          <DivNgang className='border-gray-300' />
          <div className='flex flex-col gap-2'>
            <h4>Align</h4>
            <SelectInList arrayList={footerAbsoluteAlignList} selected={footerAbsoluteAlign} setSelected={setFooterAbsoluteAlign} />
          </div>
          <DivNgang className='border-gray-300' />
          <div className='flex flex-col gap-2'>
            <h4>Background Color</h4>
            <SelectColor color={footerAbsoluteBackgroundColor} setColor={setFooterAbsoluteBackgroundColor} />
          </div>
          <DivNgang className='border-gray-300' />
          <div className='flex flex-col gap-2'>
            <h4>Bottom Text - Primary</h4>
            <div className='flex flex-col'>
              <label className='text-xs text-gray-400'>Add any HTML</label>
              <textarea
                className='h-24 border p-2'
                value={footerAbsoluteBottomTextPrimary} onChange={(e) => { setFooterAbsoluteBottomTextPrimary(e.target.value) }} />
            </div>
          </div>
          <DivNgang className='border-gray-300' />
          <div className='flex flex-col gap-2'>
            <h4>Bottom Text - Secondary</h4>
            <div className='flex flex-col'>
              <label className='text-xs text-gray-400'>Add any HTML</label>
              <textarea
                className='h-24 border p-2'
                value={footerAbsoluteBottomTextSecondary} onChange={(e) => { setFooterAbsoluteBottomTextSecondary(e.target.value) }} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <h3 className='px-2 py-1 bg-gray-500 text-gray-100'>Back To Top Button</h3>
        <div className='flex flex-col gap-4 p-2'>
          <div className='flex gap-2 items-center'>
            <input
              className='w-4 h-4'
              type="checkbox" checked={footerBTTEnable} onChange={() => { setFooterBTTEnable(!footerBTTEnable) }} />
            <label onClick={() => { setFooterBTTEnable(!footerBTTEnable) }}>Enable Back To Top Button</label>
          </div>
          <DivNgang className='border-gray-300' />
          <div className='flex flex-col gap-2'>
            <h4>Button Shape</h4>
            <div className='flex gap-1 justify-center'>
              <label
                onClick={() => { setFooterBTTShape(1) }}
                className={`w-20 h-14 flex p-1 rounded-sm group ${footerBTTShape === 1 ? "border border-blue-500" : ""}`}>
                <label className={`w-full h-full flex items-center justify-center font-semibold text-2xl rounded-sm border border-blue-400 text-blue-400 ${footerBTTShape === 1 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"}`}>
                  <label className={`rounded-full p-1 border border-blue-400 text-blue-400 ${footerBTTShape === 1 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"}`}>
                    <LuChevronUp />
                  </label>
                </label>
              </label>
              <label
                onClick={() => { setFooterBTTShape(2) }}
                className={`w-20 h-14 flex p-1 rounded-sm group ${footerBTTShape === 2 ? "border border-blue-500" : ""}`}>
                <label className={`w-full h-full flex items-center justify-center font-semibold text-2xl rounded-sm border border-blue-400 text-blue-400 ${footerBTTShape === 2 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"}`}>
                  <label className={`rounded-sm p-1 border border-blue-400 text-blue-400 ${footerBTTShape === 2 ? "border-blue-500 text-blue-500" : "group-hover:border-blue-500 group-hover:text-blue-500"}`}>
                    <LuChevronUp />
                  </label>
                </label>
              </label>
            </div>
          </div>
          <DivNgang className='border-gray-300' />
          <div className='flex flex-col gap-2'>
            <h4>Position</h4>
            <SelectInList arrayList={footerBTTPositionList} selected={footerBTTPosition} setSelected={setFooterBTTPosition} />
          </div>
          <DivNgang className='border-gray-300' />
          <div className='flex gap-2 items-center'>
            <input
              className='w-4 h-4'
              type="checkbox" checked={footerBTTShowMobile} onChange={() => { setFooterBTTShowMobile(!footerBTTShowMobile) }} />
            <label onClick={() => { setFooterBTTShowMobile(!footerBTTShowMobile) }}>Show on Mobile</label>
          </div>
        </div>
      </div>
      {
        footerBlock === 0 && (
          <div className='flex flex-col'>
            <h3 className='px-2 py-1 bg-gray-500 text-gray-100'>Footer HTML</h3>
            <div className='flex flex-col gap-4 p-2'>
              <div className='flex flex-col gap-2'>
                <h4>HTML before footer</h4>
                <div className='flex flex-col'>
                  <label className='text-xs text-gray-400'>Add any HTML</label>
                  <textarea
                    className='h-24 border p-2'
                    value={footerHTMLBefore} onChange={(e) => { setFooterHTMLBefore(e.target.value) }} />
                </div>
              </div>
              <DivNgang className='border-gray-300' />
              <div className='flex flex-col gap-2'>
                <h4>HTML after footer</h4>
                <div className='flex flex-col'>
                  <label className='text-xs text-gray-400'>Add any HTML</label>
                  <textarea
                    className='h-24 border p-2'
                    value={footerHTMLAfter} onChange={(e) => { setFooterHTMLAfter(e.target.value) }} />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default page