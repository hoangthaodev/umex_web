'use client'

import { createNewTag } from '@/action/tag.action'
import { TagType } from '@/lib/type'
import React from 'react'
import slugify from 'slugify'
import { toast } from 'sonner'
import { z } from 'zod'

type Props = {
  className?: string
  typeId: number | null
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const AddNewTag = ({ className, typeId, setIsLoading }: Props) => {
  const [name, setName] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')
  const [slug, setSlug] = React.useState<string>('')

  const validName = z.string().nonempty()
  const validSlug = z.string().regex(/^\S+$/)

  const handleSave = async () => {
    if (!validName.safeParse(name.trim()).success) {
      toast.error('Name is required')
      return
    }
    if (slug !== '' && !validSlug.safeParse(slug.trim()).success) {
      toast.error('Slug cannot contain spaces')
      return
    }
    if (typeId === null) return

    const newTag: TagType = {
      tag_name: name.trim(),
      tag_slug: slug === '' ? slugify(name.trim(), { lower: true, locale: 'vi' }) : slug,
      tag_description: description,
      type_id: typeId,
    }

    const tag = await createNewTag(newTag)
    if (tag) {
      setIsLoading(true)
      toast.success('Tag created successfully')
      setName('')
      setSlug('')
      setDescription('')
    } else {
      toast.error('Failed to create tag')
    }
  }

  return (
    <div className={`${className} flex flex-col gap-2`}>
      <h4>Add New Tag</h4>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <label>Name</label>
          <input
            className='border px-2 py-1 rounded-xs'
            type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
          <p className='text-gray-400 text-sm'>The name is how it appears on your site.</p>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Slug</label>
          <input
            className='border px-2 py-1 rounded-xs'
            type="text" value={slug} onChange={(e) => { setSlug(e.target.value) }} />
          <p className='text-gray-400 text-sm'>The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.</p>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Description</label>
          <textarea
            className='border px-2 py-1 rounded-xs h-24'
            value={description} onChange={(e) => { setDescription(e.target.value) }} />
          <p className='text-gray-400 text-sm'>The description is not prominent by default; however, some themes may show it.</p>
        </div>

      </div>
      <button
        className='rounded-xs bg-blue-400 text-gray-100 hover:bg-blue-500 px-2 py-1 w-fit cursor-pointer'
        onClick={handleSave}
      >Add New Tag</button>
    </div>
  )
}

export default AddNewTag