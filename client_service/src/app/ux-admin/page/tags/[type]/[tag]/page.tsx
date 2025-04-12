'use client'

import { deleteCategory, getCategoryById, getCategoryByType, updateCategory } from '@/action/category.action'
import { deleteTag, getTagById, updateTag } from '@/action/tag.action'
import SelectOption from '@/components/admin/theme/theme/SelectOption'
import { CategoryType, TagType } from '@/lib/type'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'

type Props = {
  params: Promise<{ type: string, tag: string }>
}

const page = ({ params }: Props) => {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [slug, setSlug] = React.useState('')

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const tagId = parseInt((await params).tag)
      const tag = await getTagById(tagId)
      if (tag) {
        setName(tag.tag_name)
        setDescription(tag.tag_description)
        setSlug(tag.tag_slug)
      }
    }
    fetchData()
  }, [])

  const validName = z.string().nonempty()
  const validSlug = z.string().regex(/^\S+$/)

  const handleUpdate = async () => {
    if (!validName.safeParse(name.trim()).success) {
      toast.error('Name is required')
      return
    }
    if (slug === '' || !validSlug.safeParse(slug.trim()).success) {
      toast.error('Slug cannot contain spaces')
      return
    }
    const typeId = parseInt((await params).type)
    const tagId = parseInt((await params).tag)
    const newTag: TagType = {
      tag_id: tagId,
      tag_name: name,
      tag_slug: slug,
      tag_description: description,
      type_id: typeId,
    }
    const tag = await updateTag(newTag)
    if (tag) {
      toast.success('Update tag successfully')
    } else {
      toast.error('Update tag failed')
      return
    }
    router.back()
  }

  const handleDelete = async () => {
    const tagId = parseInt((await params).tag)
    deleteTag(tagId).then(data => {
      if (!data) {
        toast.error('Delete tag failed')
      }
    })
    toast.success('Delete tag successfully')
    router.back()
  }

  return (
    <div className={`flex flex-col gap-4 p-4`}>
      <h2>Edit Tag</h2>
      <div className='flex flex-col gap-2 w-full'>
        <div className='flex gap-2'>
          <label className='w-40 font-semibold'>Name</label>
          <div className='w-[500px]'>
            <input
              className='border px-2 py-1 rounded-xs w-full'
              type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
            <p className='text-gray-400 text-sm'>The name is how it appears on your site.</p>
          </div>
        </div>

        <div className='flex gap-2'>
          <label className='w-40 font-semibold'>Slug</label>
          <div className='w-[500px]'>
            <input
              className='border px-2 py-1 rounded-xs w-full'
              type="text" value={slug} onChange={(e) => { setSlug(e.target.value) }} />
            <p className='text-gray-400 text-sm'>The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.</p>
          </div>
        </div>

        <div className='flex gap-2'>
          <label className='w-40 font-semibold'>Description</label>
          <div className='w-[500px]'>
            <textarea
              className='border px-2 py-1 rounded-xs h-24 w-full'
              value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <p className='text-gray-400 text-sm'>The description is not prominent by default; however, some themes may show it.</p>
          </div>
        </div>

      </div>
      <div>
        <button
          className='rounded-xs bg-blue-400 text-gray-100 hover:bg-blue-500 px-2 py-1 w-fit cursor-pointer'
          onClick={handleUpdate}
        >Update</button>
        <button
          className='text-red-500 px-2 py-1 w-fit cursor-pointer'
          onClick={handleDelete}
        >Delete</button>
      </div>
    </div>
  )
}

export default page