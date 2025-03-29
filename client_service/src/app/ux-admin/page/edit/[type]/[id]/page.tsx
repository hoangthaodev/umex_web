'use server'

import { getPageById } from '@/action/page.action'
import PageForm from '@/components/admin/page/PageForm'
import { typeSlugMap } from '@/lib/pageMap'
import Link from 'next/link'
import React from 'react'

type Props = {
  params: Promise<{ type: number, id: number }>
}

const page = async ({ params }: Props) => {
  const { type, id } = await params
  const page = await getPageById(id)
  if (!page) return (<div>Page not found</div>)
  const linkAddNew = process.env.NEXT_PUBLIC_BASE_URL + "/ux-admin/page/new/" + type

  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex gap-2 items-center'>
        <h1 className='capitalize'>Edit {typeSlugMap[type]}</h1>
        <Link
          className='text-blue-600 border border-blue-600 px-2 rounded-sm capitalize'
          href={linkAddNew}>Add New {typeSlugMap[type]}</Link>
      </div>
      <PageForm typeId={type} page={page} />
    </div>
  )
}

export default page