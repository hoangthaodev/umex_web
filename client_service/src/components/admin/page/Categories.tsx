'use client'

import { createNewCategory, getCategoryByType } from '@/action/category.action'
import DivNgang from '@/components/DivNgang'
import { CategoryType } from '@/lib/type'
import React, { SetStateAction, useEffect, useState } from 'react'
import slugify from 'slugify'

type Props = {
  typeId: number
  selectedCategory: number[]
  setSelectedCategory: React.Dispatch<SetStateAction<number[]>>
}

const Categories = ({ typeId, selectedCategory, setSelectedCategory }: Props) => {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isAddNew, setIsAddNew] = useState(false)
  const [newCateName, setNewCateName] = useState('')
  const [newCateParent, setNewParent] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading) return
    getCategoryByType(typeId).then(data => {
      if (!data) return
      setCategories(data)
    })
  }, [isLoading])

  const handleAddCategory = async () => {
    setIsLoading(true)
    if (newCateName.trim() === "") return

    const newCategory: CategoryType = {
      category_name: newCateName.trim(),
      category_slug: slugify(newCateName.trim(), { lower: true, locale: "vi" }),
      category_description: "",
      category_parent: newCateParent,
      type_id: typeId,
    }

    await createNewCategory(newCategory)

    setIsAddNew(false)
    setIsLoading(false)
  }

  const handleChangeSelectedCategory = (checked: boolean, item: CategoryType) => {
    if (checked) {
      const newSelectedCategory = selectedCategory.filter((i) => i !== item.category_id)
      setSelectedCategory(newSelectedCategory)
    } else {
      setSelectedCategory([...selectedCategory, item.category_id!])
    }
  }

  type CategoryTreeType = CategoryType & {
    children: CategoryTreeType[]
  }

  const buildCategoryTree = (categoryArr: CategoryType[], parent: number = 0): CategoryTreeType[] => {
    return categoryArr.filter(i => (i.category_parent || 0) === parent)
      .map(i => ({
        ...i,
        children: buildCategoryTree(categoryArr, i.category_id)
      })
      )
  }


  const categoryTree = buildCategoryTree(categories)

  const CategoryNode = ({ ml = 0, node }: { ml?: number, node: CategoryTreeType }) => {
    const isChecked = selectedCategory.includes(node.category_id!)
    const item: CategoryType = {
      category_id: node.category_id,
      category_name: node.category_name,
      category_slug: node.category_slug,
      category_description: node.category_description,
      category_parent: node.category_parent,
      type_id: node.type_id
    }

    return (
      <>
        <li
          onClick={() => { handleChangeSelectedCategory(isChecked, item) }}
          className='flex gap-2 items-center'
          style={{ marginLeft: ml * 15 }}
        >
          <input type="checkbox" checked={isChecked}
            onChange={() => { handleChangeSelectedCategory(isChecked, item) }}
          />
          {node.category_name}
        </li>
        {
          node.children && node.children.map((i, index) => <CategoryNode ml={ml + 1} key={index} node={i} />)
        }
      </>
    )
  }

  return (
    <div className='border border-gray-400'>
      <h3 className='px-2 bg-gray-300'>Categories</h3>
      <DivNgang />
      <div className='p-2'>
        <ul>
          {
            categoryTree && categoryTree.map((i, index) => {
              return (
                <CategoryNode key={index} node={i} />
              )
            })
          }
        </ul>
      </div>
      <DivNgang />
      <div className='p-2'>
        <label
          className='text-blue-600 underline cursor-pointer'
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
                className='border border-gray-400 rounded-sm px-2 cursor-pointer'
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
                className='bg-blue-600 text-gray-100 w-20 rounded-sm cursor-pointer'
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