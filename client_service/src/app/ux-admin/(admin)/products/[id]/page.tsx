'use server'
import { getPageById } from '@/actions/page.action'
import PageForm from '@/components/component/editForm/PageForm'
import { PageType } from '@/lib/types'
import Link from 'next/link'
import React from 'react'

type Props = {
  params: Promise<{ id: string }>
}

const page = async ({ params }: Props) => {
  const pageId = (await params).id
  const page: PageType = await getPageById(Number(pageId))
  const linkAddNew = process.env.NEXT_PUBLIC_BASE_URL + "/ux-admin/products/new"

  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex gap-2 items-center'>
        <h1>Edit Product</h1>
        <Link
          className='text-blue-600 border border-blue-600 px-2 rounded-sm'
          href={linkAddNew}>Add New Product</Link>
      </div>
      <PageForm page={page} />
    </div>
  )
}

export default page