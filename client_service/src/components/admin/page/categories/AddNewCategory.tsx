'use client'

import { createNewCategory, getCategoryByType } from '@/action/category.action'
import SelectOption from '@/components/admin/theme/theme/SelectOption'
import { CategoryType } from '@/lib/type'
import React, { useEffect } from 'react'
import slugify from 'slugify'
import { toast } from 'sonner'
import { z } from 'zod'

type Props = {
  className?: string
  typeId: number | null
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  categoryList: CategoryType[]
}

const AddNewCategory = ({ className, typeId, setIsLoading, categoryList }: Props) => {
  const [name, setName] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')
  const [slug, setSlug] = React.useState<string>('')
  const [parent, setParent] = React.useState<number>(0)
  const [parentList, setParentList] = React.useState<{ id: number; name: string }[]>([])


  useEffect(() => {
    const list = categoryList.map((category) => {
      return { id: category.category_id!, name: category.category_name }
    })
    setParentList([{ id: 0, name: 'None' }, ...list])
  }, [categoryList])

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

    const newCategory: CategoryType = {
      category_name: name.trim(),
      category_slug: slug === '' ? slugify(name.trim(), { lower: true, locale: 'vi' }) : slug,
      category_description: description,
      category_parent: parent,
      type_id: typeId,
    }

    const category = await createNewCategory(newCategory)
    if (category) {
      setIsLoading(true)
      toast.success('Category created successfully')
      setName('')
      setSlug('')
      setDescription('')
      setParent(0)
    } else {
      toast.error('Failed to create category')
    }
  }

  return (
    <div className={`${className} flex flex-col gap-2`}>
      <h4>Add New Category</h4>
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
          <label>Parent Category</label>
          <SelectOption arrayOption={parentList} value={parent} setValue={setParent} />
          <p className='text-gray-400 text-sm'>Categories, unlike tags, can have a hierarchy. You might have a Jazz category, and under that have children categories for Bebop and Big Band. Totally optional.</p>
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
      >Add New Category</button>
    </div>
  )
}

export default AddNewCategory