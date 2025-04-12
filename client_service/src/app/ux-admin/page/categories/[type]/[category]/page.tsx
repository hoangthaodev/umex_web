'use client'

import { deleteCategory, getCategoryById, getCategoryByType, updateCategory } from '@/action/category.action'
import SelectOption from '@/components/admin/theme/theme/SelectOption'
import { CategoryType } from '@/lib/type'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'

type Props = {
  params: Promise<{ type: string, category: string }>
}

const page = ({ params }: Props) => {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [slug, setSlug] = React.useState('')
  const [parent, setParent] = React.useState(0)
  const [parentList, setParentList] = React.useState<{ id: number; name: string }[]>([])

  const router = useRouter()

  const parentTree = (id: number, list: CategoryType[]) => {
    const listParentChild = list.filter(i => i.category_parent === id)
    const listId = listParentChild.map(i => i.category_id!)
    listParentChild.forEach(i => {
      const child = parentTree(i.category_id!, list)
      child.forEach(j => {
        listId.push(j)
      })
    })
    return listId
  }

  useEffect(() => {
    const fetchData = async () => {
      const categoryId = parseInt((await params).category)
      const category = await getCategoryById(categoryId)
      if (category) {
        setName(category.category_name)
        setDescription(category.category_description)
        setSlug(category.category_slug)
        setParent(category.category_parent || 0)
        const categories = await getCategoryByType(category.type_id)
        if (categories) {
          const listNot = parentTree(categoryId, categories)
          listNot.push(categoryId)
          const categoriesList = categories.filter((i) => !listNot.includes(i.category_id!))
          const list = categoriesList.map((category) => {
            return { id: category.category_id!, name: category.category_name }
          })
          setParentList([{ id: 0, name: 'None' }, ...list])
        }
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
    const categoryId = parseInt((await params).category)
    const newCategory: CategoryType = {
      category_id: categoryId,
      category_name: name,
      category_slug: slug,
      category_description: description,
      category_parent: parent,
      type_id: typeId,
    }
    const category = await updateCategory(newCategory)
    if (category) {
      toast.success('Update category successfully')
    } else {
      toast.error('Update category failed')
      return
    }
    router.back()
  }

  const handleDelete = async () => {
    const categoryId = parseInt((await params).category)
    deleteCategory(categoryId).then(data => {
      if (!data) {
        toast.error('Delete category failed')
      }
    })
    toast.success('Delete category successfully')
    router.back()
  }

  return (
    <div className={`flex flex-col gap-4 p-4`}>
      <h2>Edit Category</h2>
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
          <label className='w-40 font-semibold'>Parent Category</label>
          <div className='w-[500px]'>
            <SelectOption className='w-full' arrayOption={parentList} value={parent} setValue={setParent} />
            <p className='text-gray-400 text-sm'>Categories, unlike tags, can have a hierarchy. You might have a Jazz category, and under that have children categories for Bebop and Big Band. Totally optional.</p>
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