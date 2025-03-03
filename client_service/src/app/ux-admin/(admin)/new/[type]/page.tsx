'use server'
import PageForm from '@/components/component/editForm/PageForm'
import { typeMap } from '@/lib/pageMap'
import React from 'react'

type Props = {
  params: Promise<{ type: number }>
}

const page = async ({ params }: Props) => {
  const typeId = (await params).type
  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex gap-2 items-center'>
        <h1 className='capitalize'>Add New {typeMap[typeId]}</h1>
      </div>
      <PageForm typeId={typeId} />
    </div>
  )
}

export default page