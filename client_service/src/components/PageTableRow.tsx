'use client'
import { getUserById } from '@/actions/user.action';
import { PageType, UserType } from '@/lib/types'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Props = {
  typeId: number
  item: PageType
  author?: boolean;
  thumbnail?: boolean;
  sku?: boolean;
  stock?: boolean;
  price?: boolean;
  categories?: boolean;
  tag?: boolean;
  comment?: boolean;
}

const PageTableRow = ({ typeId, item, author = false, thumbnail = false, sku = false, stock = false, price = false, categories = false, tag = false, comment = false }: Props) => {
  const [user, setUser] = useState<UserType | undefined>(undefined)
  const editPageUrl = process.env.NEXT_PUBLIC_BASE_URL + "/ux-admin/edit/" + typeId + "/" + item.page_id

  useEffect(() => {
    const data = async () => {
      const res: UserType = await getUserById(item.user_id)
      setUser(res)
    }
    data()
  }, [])



  return (
    <tr>
      <td className='w-10 text-center'>
        <input type="checkbox" />
      </td>
      <td><Link href={editPageUrl} >{item.page_title}</Link></td>
      {
        author && <td>{user && user.user_name}</td>
      }
      <td>{item.page_status === 1 ? "Published" : "Last Modified"} {item.page_publish_year}/{item.page_publish_month}/{item.page_publish_day}</td>
    </tr>
  )
}

export default PageTableRow