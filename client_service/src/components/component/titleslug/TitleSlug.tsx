'use client'
import { typeMap } from '@/lib/pageMap'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
  typeId: number
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  slug: string
  setSlug: React.Dispatch<React.SetStateAction<string>>
}

const TitleSlug = ({ typeId, title, setTitle, slug, setSlug }: Props) => {
  const originUrl = window.location.origin
  const [editSlug, setEditSlug] = useState(slug)
  const [isEditSlug, setIsEditSlug] = useState(false)

  return (
    <div className='flex flex-col gap-2'>
      <input
        className='px-2 py-1 border border-gray-400 rounded-sm w-full'
        type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
      <div className='text-xs flex gap-1'>
        Permalink:
        <Link
          className='underline text-blue-600 hover:text-blue-700'
          href={originUrl}
        >
          {originUrl + "/" + typeMap[typeId] + "/"}
          {!isEditSlug && slug}
        </Link>
        {isEditSlug &&
          <input
            className='px-2 border border-gray-400 rounded-sm w-32'
            type='text' value={editSlug} onChange={(e) => { setEditSlug(e.target.value) }} />
        }
        <div>
          {
            isEditSlug ?
              <>
                <label
                  className='p-1 border border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700 rounded-sm'
                  onClick={() => { setSlug(editSlug); setIsEditSlug(false) }}
                >Ok</label>
                <label
                  className='underline text-blue-600 hover:text-blue-700'
                  onClick={() => { setIsEditSlug(false); setEditSlug(slug) }}
                >Cancel</label>
              </>
              : <label
                className='p-1 border border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700 rounded-sm'
                onClick={() => { setIsEditSlug(true) }}
              >Edit</label>
          }
        </div>
      </div>
    </div>
  )
}

export default TitleSlug