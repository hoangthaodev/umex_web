import PageForm from '@/components/component/editForm/PageForm'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex gap-2 items-center'>
        <h1>Add New Product</h1>
      </div>
      <PageForm />
    </div>
  )
}

export default page