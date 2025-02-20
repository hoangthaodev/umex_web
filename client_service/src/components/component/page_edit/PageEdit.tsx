'use client'
import { GetTypeById } from '@/actions/type.action'
import Categories from '@/components/component/categories/Categories'
import TinyMCE from '@/components/component/editor/TinyMCE'
import Publish from '@/components/component/publish/Publish'
import { PageType, TypeType } from '@/lib/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {
  page: PageType
}

const PageEdit = ({ page }: Props) => {
  const [title, setTitle] = useState(page.page_title)
  const [content, setContent] = useState(page.page_content)
  const [description, setDescription] = useState(page.page_description)
  const originUrl = window.location.origin
  const [type, setType] = useState<TypeType | undefined>(undefined)
  const [slug, setSlug] = useState(page.page_slug)
  const [editSlug, setEditSlug] = useState(slug)
  const [isEditLink, setIsEditLink] = useState(false)

  useEffect(() => {
    const data = async () => {
      const res: TypeType = await GetTypeById(page.page_id)
      setType(res)
    }
    data()
  }, [])

  return (
    <div className='w-full h-full flex flex-wrap gap-4'>
      {/* <div className='w-[60%] grow flex flex-col gap-4'>
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
              {originUrl + "/" + type?.type_name + "/"}
              {!isEditLink && slug}
            </Link>
            {isEditLink &&
              <input
                className='px-2 border border-gray-400 rounded-sm w-32'
                type='text' value={editSlug} onChange={(e) => { setEditSlug(e.target.value) }} />
            }
            <div>
              {
                isEditLink ?
                  <>
                    <label
                      className='p-1 border border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700 rounded-sm'
                      onClick={() => { setSlug(editSlug); setIsEditLink(false) }}
                    >Ok</label>
                    <label
                      className='underline text-blue-600 hover:text-blue-700'
                      onClick={() => { setIsEditLink(false); setEditSlug(slug) }}
                    >Cancel</label>
                  </>
                  : <label
                    className='p-1 border border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700 rounded-sm'
                    onClick={() => { setIsEditLink(true) }}
                  >Edit</label>
              }
            </div>
          </div>
        </div>
        <TinyMCE label='Content' content={content} setContent={setContent} />
        <TinyMCE label='Description' content={description} setContent={setDescription} />
      </div> */}
      <div className='flex flex-col grow gap-2'>
        {/* <Publish page={page} /> */}
        <Categories categoryId={page.category_id} />
      </div>
    </div>
  )
}

export default PageEdit