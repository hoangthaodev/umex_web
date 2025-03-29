'use server'

import PageTable from '@/components/admin/page/PageTable'
import { typeSlugMap } from '@/lib/pageMap'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const typeId = 4 //portfolios
  const linkAddNew = process.env.NEXT_PUBLIC_BASE_URL + "/ux-admin/page/new/" + typeId

  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex gap-2 items-center'>
        <h1 className='capitalize'>{typeSlugMap[typeId]} manager</h1>
        <Link
          className='text-blue-600 border border-blue-600 px-2 rounded-sm capitalize'
          href={linkAddNew}>Add New {typeSlugMap[typeId]}</Link>
      </div>
      <PageTable typeId={typeId} tableId={typeSlugMap[typeId]} author={true} />
    </div>
  )
}

export default page