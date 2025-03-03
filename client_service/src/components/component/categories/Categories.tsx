'use client'
import { createNewCategory, getCategoryByType, getCategoryByTypeNParent } from '@/actions/category.action'
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
    getCategoryByType(typeId).then(data => {
      data && setCategories(data)
    })
  }, [])

  const handleAddCategory = async () => {
    if (newCateName.trim() === "") return

    await createNewCategory(
      newCateName.trim(),
      slugify(newCateName.trim(), { lower: true }),
      "",
      newCateParent,
      typeId
    )

    getCategoryByType(typeId).then(data => {
      setCategories(data)
    })

    setIsAddNew(false)
  }

  const handleChangeSelectedCategory = (checked: boolean, item: CategoryType) => {
    if (checked) {
      const newSelectedCategory = selectedCategory.filter((i) => i.category_id !== item.category_id)
      setSelectedCategory(newSelectedCategory)
    } else {
      setSelectedCategory([...selectedCategory, item])
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
    const isChecked = selectedCategory.some(i => i.category_id === node.category_id)
    const item: CategoryType = {
      category_id: node.category_id,
      category_name: node.category_name,
      category_slug: node.category_slug,
      category_des: node.category_des,
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