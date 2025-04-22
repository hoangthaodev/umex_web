'use client'

import SelectOption from '@/components/admin/theme/theme/SelectOption'
import { WidgetPageType } from '@/lib/type'
import React, { ChangeEvent, useEffect, useState } from 'react'

type Props = {
  component: string
  attribute: {}
  setAttribute: React.Dispatch<React.SetStateAction<{}>>
}

const AttributeContent = ({ component, attribute, setAttribute }: Props) => {
  const attributeData = JSON.parse(JSON.stringify(attribute)) as WidgetPageType
  switch (component) {
    case 'Pages':
      const [title, setTitle] = useState(attributeData.title)
      const [sortby, setSortby] = useState(attributeData.sortby)
      const [exclude, setExclude] = useState(attributeData.exclude)

      useEffect(() => {
        setAttribute({
          title: title,
          sortby: sortby,
          exclude: exclude
        })
      }, [title, sortby, exclude])

      const handleExclude = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const excludeArray = value.split(',').map((item) => item.trim())
        setExclude(excludeArray)
      }

      const listSortby: { id: number, name: string }[] = [
        { id: 1, name: 'Page title' },
        { id: 2, name: 'Page order' },
        { id: 3, name: 'Page ID' },
      ]
      return (
        <div className='flex flex-col gap-2 text-sm'>
          <div className='flex flex-col'>
            <label>Title:</label>
            <input type="text" className='border p-1 rounded' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='flex flex-col'>
            <label>Sort By:</label>
            <SelectOption arrayOption={listSortby} value={sortby} setValue={setSortby} />
          </div>
          <div className='flex flex-col'>
            <label>Exclude:</label>
            <input type="text" className='border p-1 rounded' value={exclude.join(',')} onChange={handleExclude} />
            <p className='text-gray-500 text-xs'>Page IDs, separated by commas.</p>
          </div>
        </div>
      )
    default:
      return (
        <div>
          <p className='text-gray-500'>No attribute</p>
        </div>
      )
  }
}

export default AttributeContent