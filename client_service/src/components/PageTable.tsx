import { GetAllPage } from '@/actions/page.action'
import { getUserById } from '@/actions/user.action';
import PageTableRow from '@/components/PageTableRow';
import { PageType } from '@/lib/types'
import React, { useEffect, useState } from 'react'

type Props = {
  tableId: string,
  author?: boolean;
  thumbnail?: boolean;
  sku?: boolean;
  stock?: boolean;
  price?: boolean;
  categories?: boolean;
  tag?: boolean;
  comment?: boolean;
}

const PageTable = ({ tableId, author = false, thumbnail = false, sku = false, stock = false, price = false, categories = false, tag = false, comment = false }: Props) => {
  const [dataRow, setDataRow] = useState<PageType[]>([])
  useEffect(() => {
    const data = async () => {
      const res: PageType[] = await GetAllPage(10, 0)
      setDataRow(res)
    }
    data()
  }, [])
  return (
    <div>
      <table id={tableId} className='w-full h-full border border-gray-300'>
        <thead>
          <tr className='border-b border-gray-300'>
            <th className='w-10'>
              <input type="checkbox" />
            </th>
            <th className='text-left'>Title</th>
            {
              author && <th className='w-20 text-left'>Author</th>
            }
            <th className='w-32 text-left'>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            dataRow && dataRow.map((i, index) => {
              return (
                <PageTableRow key={index} item={i} author={author} thumbnail={thumbnail} sku={sku} stock={stock} price={price} categories={categories} tag={tag} comment={comment} />
              )
            })
          }
        </tbody>
      </table>
      <style>
        {`
          #${tableId}>tbody>tr:nth-child(odd){
          background-color: #f6f7f7;
        }
          #${tableId} th,td{
          padding: 5px;
        }
        `}
      </style>
    </div>
  )
}

export default PageTable