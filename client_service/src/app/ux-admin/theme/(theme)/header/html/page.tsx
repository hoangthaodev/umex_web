'use client'

import { getPageByTypeNStatus } from '@/action/page.action'
import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import SelectOption from '@/components/admin/theme/theme/SelectOption'
import DivNgang from '@/components/DivNgang'
import { PageType } from '@/lib/type'
import React, { useEffect, useRef, useState } from 'react'

const page = () => {
  const {
    htmlBlock1,
    htmlBlock2,
    htmlBlock3,
    htmlBlock4,
    html1,
    html2,
    html3,
    html4,
    html5,
    setHtmlBlock1,
    setHtmlBlock2,
    setHtmlBlock3,
    setHtmlBlock4,
    setHtml1,
    setHtml2,
    setHtml3,
    setHtml4,
    setHtml5,
  } = useTheme()

  const [listBlock, setListBlock] = useState<{ id: number, name: string }[]>([{ id: 0, name: "--None--" }])

  useEffect(() => {
    getPageByTypeNStatus(3, 1, 1000, 0).then(data => {
      if (data) {
        const listData = data.map(i => {
          return { id: i.page_id!, name: i.page_title }
        })
        setListBlock([...listBlock, ...listData])
      }
    })
  }, [])

  return (
    <div>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "HTML", link: "/ux-admin/theme/header/html" },
      ]} />
      <div className='flex flex-col gap-2 p-2'>
        <h4>Header Block 1</h4>
        <label className='text-xs text-gray-400'>Blocks can be edited in the page builder. Select a block, go to a page and open in the the Page Builder.</label>
        <SelectOption value={htmlBlock1} setValue={setHtmlBlock1} arrayOption={listBlock} />
        <DivNgang className='border-gray-300' />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <h4>Header Block 2</h4>
        <label className='text-xs text-gray-400'>Blocks can be edited in the page builder. Select a block, go to a page and open in the the Page Builder.</label>
        <SelectOption value={htmlBlock2} setValue={setHtmlBlock2} arrayOption={listBlock} />
        <DivNgang className='border-gray-300' />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <h4>Header Block 3</h4>
        <label className='text-xs text-gray-400'>Blocks can be edited in the page builder. Select a block, go to a page and open in the the Page Builder.</label>
        <SelectOption value={htmlBlock3} setValue={setHtmlBlock3} arrayOption={listBlock} />
        <DivNgang className='border-gray-300' />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <h4>Header Block 4</h4>
        <label className='text-xs text-gray-400'>Blocks can be edited in the page builder. Select a block, go to a page and open in the the Page Builder.</label>
        <SelectOption value={htmlBlock4} setValue={setHtmlBlock4} arrayOption={listBlock} />
        <DivNgang className='border-gray-300' />
      </div>

      <div className='flex flex-col gap-2 p-2'>
        <h4>HTML 1</h4>
        <label className='text-xs text-gray-400'>Add Any HTML or Shortcode here...</label>
        <textarea className='h-20 border rounded-sm px-2 py-1' value={html1} onChange={(e) => setHtml1(e.target.value)} />
        <DivNgang className='border-gray-300' />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <h4>HTML 2</h4>
        <label className='text-xs text-gray-400'>Add Any HTML or Shortcode here...</label>
        <textarea className='h-20 border rounded-sm px-2 py-1' value={html2} onChange={(e) => setHtml2(e.target.value)} />
        <DivNgang className='border-gray-300' />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <h4>HTML 3</h4>
        <label className='text-xs text-gray-400'>Add Any HTML or Shortcode here...</label>
        <textarea className='h-20 border rounded-sm px-2 py-1' value={html3} onChange={(e) => setHtml3(e.target.value)} />
        <DivNgang className='border-gray-300' />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <h4>HTML 4</h4>
        <label className='text-xs text-gray-400'>Add Any HTML or Shortcode here...</label>
        <textarea className='h-20 border rounded-sm px-2 py-1' value={html4} onChange={(e) => setHtml4(e.target.value)} />
        <DivNgang className='border-gray-300' />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <h4>HTML 5</h4>
        <label className='text-xs text-gray-400'>Add Any HTML or Shortcode here...</label>
        <textarea className='h-20 border rounded-sm px-2 py-1' value={html5} onChange={(e) => setHtml5(e.target.value)} />
      </div>
    </div>
  )
}

export default page