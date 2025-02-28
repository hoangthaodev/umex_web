'use server'
import PageTable from '@/components/PageTable'
import { typeMap } from '@/lib/pageMap'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const linkAddNew = process.env.NEXT_PUBLIC_BASE_URL + "/ux-admin/portfolios/new"
  const typeId = 4 //portfolios
  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex gap-2 items-center'>
        <h1>Portfolios</h1>
        <Link
          className='text-blue-600 border border-blue-600 px-2 rounded-sm'
          href={linkAddNew}>Add New Portfolio</Link>
      </div>
      <PageTable typeId={typeId} tableId={typeMap[typeId]} author={true} />
    </div>
  )
}

export default page