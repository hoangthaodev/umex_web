'use client'

import { getPagecategoryByCategory } from '@/action/pagecategory.action'
import { CategoryType } from '@/lib/type'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {
  className?: string
  categoryList: CategoryType[]
  isLoading: boolean
}

const listTree = (list: CategoryType[], parentId: number = 0) => {
  var result: CategoryType[] = []
  const listParent = list.filter((i) => (i.category_parent || 0) === parentId)
  listParent.forEach((i) => {
    result.push(i)
    const child = listTree(list, i.category_id)
    child.forEach((j) => {
      result.push({ ...j, category_name: '-' + j.category_name })
    }
    )
  })
  return result
}

const ListTableCategory = ({ className, categoryList, isLoading }: Props) => {
  const [list, setList] = useState<CategoryType[]>([])
  const [listNPage, setListNPage] = useState<{
    pageNum: Promise<number>;
    category_id?: number;
    category_name: string;
    category_slug: string;
    category_description: string;
    category_parent: number;
    type_id: number;
  }[]>([])

  useEffect(() => {
    if (list.length <= 0) return
    const newList = list.map(i => {
      const pageNum = getPagecategoryByCategory(i.category_id!).then(data => {
        if (!data) {
          return 0
        } else {
          return data.length
        }
      })
      return { ...i, pageNum }
    })
    setListNPage(newList)
  }, [list])

  useEffect(() => {
    if (isLoading) return
    setList(listTree(categoryList))
  }, [isLoading])

  return (
    <div className={`${className} flex flex-col gap-4`}>
      <table id='category' className='w-full border border-gray-300'>
        <thead>
          <tr className='border-b border-gray-300'>
            <th className='w-10'>
              <input className='w-4 h-4' type="checkbox" />
            </th>
            <th className='grow text-left'>Name</th>
            <th className='grow text-left'>Description</th>
            <th className='w-36 text-left'>Slug</th>
            <th className='w-20 text-center'>Count</th>
          </tr>
        </thead>
        <tbody>
          {
            listNPage && listNPage.map((i, index) => {
              return (
                <tr key={index} className='border-b border-gray-300'>
                  <td className='text-center'>
                    <input className='w-4 h-4' type="checkbox" />
                  </td>
                  <td><Link href={`/ux-admin/page/categories/${i.type_id}/${i.category_id}`}>{i.category_name}</Link></td>
                  <td>{i.category_description}</td>
                  <td>{i.category_slug}</td>
                  <td className='text-center'>{i.pageNum}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <style>
        {`
          #category>tbody>tr:nth-child(odd){
          background-color: #f6f7f7;
        }
          #category th,td{
          padding: 5px;
        }
        `}
      </style>
    </div>
  )
}

export default ListTableCategory