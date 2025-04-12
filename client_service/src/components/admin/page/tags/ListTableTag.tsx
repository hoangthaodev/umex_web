'use client'

import { getPagetagByTag } from '@/action/pagetag.action'
import { TagType } from '@/lib/type'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {
  className?: string
  tagList: TagType[]
}

const ListTableTag = ({ className, tagList }: Props) => {
  const [listNPage, setListNPage] = useState<
    {
      pageNum: Promise<number>;
      tag_id?: number;
      tag_name: string;
      tag_slug: string;
      tag_description: string;
      type_id: number;
    }[]
  >([])

  useEffect(() => {
    const fetchData = async () => {
      const newList = tagList.map(i => {
        const pageNum = getPagetagByTag(i.tag_id!).then(data => {
          if (!data) {
            return 0
          } else {
            return data.length
          }
        })
        return { ...i, pageNum }
      })
      setListNPage(newList)
    }
    fetchData()
  }, [tagList])

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
                  <td><Link href={`/ux-admin/page/tags/${i.type_id}/${i.tag_id}`}>{i.tag_name}</Link></td>
                  <td>{i.tag_description}</td>
                  <td>{i.tag_slug}</td>
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

export default ListTableTag