'use client'
import { createNewCategory, getCategoryByType } from '@/actions/category.action'
import DivNgang from '@/components/DivNgang'
import { CategoryType } from '@/lib/types'
import React, { SetStateAction, useEffect, useState } from 'react'
import slugify from 'slugify'

type Props = {
  typeId: number
  selectedCategory: CategoryType[]
  setSelectedCategory: React.Dispatch<SetStateAction<CategoryType[]>>
}

const Categories = ({ typeId, selectedCategory, setSelectedCategory }: Props) => {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isAddNew, setIsAddNew] = useState(false)
  const [newCateName, setNewCateName] = useState('')
  const [newCateParent, setNewParent] = useState(0)

  useEffect(() => {
    const data = async () => {
      const res = await getCategoryByType(typeId)
      setCategories(res)
    }
    data()
  }, [isAddNew])

  const handleAddCategory = async () => {
    if (newCateName.trim() === "") return

    await createNewCategory(
      newCateName.trim(),
      slugify(newCateName.trim(), { lower: true }),
      "",
      newCateParent,
      typeId
    )

    setIsAddNew(false)
  }

  return (
    <div className='border border-gray-400'>
      <h3 className='px-2 bg-gray-300'>Categories</h3>
      <DivNgang />
      <div className='p-2'>
        <ul>
          {
            categories && categories.map((i) => {
              const isChecked = selectedCategory?.findIndex((j) => j.category_id === i.category_id) !== -1
              return (
                <li
                  onClick={
                    () => {
                      const newSelectedCategory = isChecked ? selectedCategory?.filter((j) => j.category_id !== i.category_id) : [...selectedCategory, i]
                      setSelectedCategory(newSelectedCategory)
                    }
                  }
                  key={i.category_id} className='flex gap-2 items-center'>
                  <input type="checkbox" checked={isChecked}
                    onChange={
                      () => {
                        const newSelectedCategory = isChecked ? selectedCategory?.filter((j) => j.category_id !== i.category_id) : [...selectedCategory, i]
                        setSelectedCategory(newSelectedCategory)
                      }
                    }
                  />
                  {i.category_name}
                </li>
              )
            })
          }
        </ul>
      </div>
      <DivNgang />
      <div className='p-2'>
        <label
          className='text-blue-600 underline'
          onClick={() => { setIsAddNew(!isAddNew) }}
        >+ add new category</label>
        {
          isAddNew && (
            <div className='flex flex-col gap-1'>
              <label>Name</label>
              <input
                className='border border-gray-400 rounded-sm px-2'
                type="text" value={newCateName} onChange={(e) => { setNewCateName(e.target.value) }} />
              <label>Parent</label>
              <select
                className='border border-gray-400 rounded-sm px-2'
                value={newCateParent} onChange={(e) => { setNewParent(Number(e.target.value)) }}>
                <option value={0}>---SELECT PARENT---</option>
                {
                  categories && categories.map((i, index) => {
                    return (
                      <option key={index} value={i.category_id}>{i.category_name}</option>
                    )
                  })
                }
              </select>
              <button
                className='bg-blue-600 text-gray-100 w-20 rounded-sm'
                onClick={handleAddCategory}
              >Add</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Categories