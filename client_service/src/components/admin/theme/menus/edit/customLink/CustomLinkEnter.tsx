'use client'

import { MenuValueType } from '@/lib/type'
import React, { SetStateAction, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'

type Props = {
  active: number
  className?: string
  menuValue: string
  setMenuValue: React.Dispatch<SetStateAction<string>>
}

const CustomLinkEnter = ({ active, className, menuValue, setMenuValue }: Props) => {
  const [customLink, setCustomLink] = useState<{ url: string, name: string }>({ url: "", name: "" })

  useEffect(() => {
    if (active !== 7) return setCustomLink({ url: "", name: "" })
  }, [active])

  const validateWebsiteInput = z.string().url({
    message: 'Invalid URL format',
  })

  const handleAddToMenu = () => {
    if (customLink.url === "" || customLink.name === "") return
    if (!validateWebsiteInput.safeParse(customLink.url).success) {
      return toast.error('Invalid URL format')
    }
    const addItem: MenuValueType[] = JSON.parse(menuValue)
    const item = {
      value_id: addItem.length + 1,
      type: active,
      content: {
        id: active,
        label: customLink.name,
        url: customLink.url,
      },
      depth: 0,
    }
    addItem.push(item)

    setMenuValue(JSON.stringify(addItem))
    setCustomLink({ url: "", name: "" })
  }

  return (
    <div className={`${className} p-2`}>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between gap-2 items-center'>
          <label>URL</label>
          <input
            className='border rounded-sm p-2'
            type="text" placeholder='https//' value={customLink.url} onChange={(e) => { setCustomLink({ url: e.currentTarget.value, name: customLink.name }) }} />
        </div>
        <div className='flex justify-between gap-2 items-center'>
          <label>Path Name</label>
          <input
            className='border rounded-sm p-2'
            type="text" value={customLink.name} onChange={(e) => { setCustomLink({ url: customLink.url, name: e.currentTarget.value }) }} />
        </div>
      </div>
      <div className='py-4 text-right'>
        <label className='text-blue-600 border border-blue-600 rounded-sm px-2 py-1 cursor-pointer'
          onClick={handleAddToMenu}
        >Add to Menu</label>
      </div>
    </div>
  )
}

export default CustomLinkEnter