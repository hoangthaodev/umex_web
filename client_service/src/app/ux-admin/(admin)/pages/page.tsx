'use server'
import PageTable from '@/components/PageTable'
import { typeMap } from '@/lib/pageMap'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const typeId = 1 //pages
  const linkAddNew = process.env.NEXT_PUBLIC_BASE_URL + "/ux-admin/new/" + typeId

  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex gap-2 items-center'>
        <h1 className='capitalize'>{typeMap[typeId]} manager</h1>
        <Link
          className='text-blue-600 border border-blue-600 px-2 rounded-sm capitalize'
          href={linkAddNew}>Add New {typeMap[typeId]}</Link>
      </div>
      <PageTable typeId={typeId} tableId={typeMap[typeId]} author={true} />
    </div>
  )
}

export default page