'use client'
import PageTable from '@/components/PageTable'
import TinyMCE from '@/components/component/editor/TinyMCE'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {
  const [content, setContent] = useState("sd")
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[700px] h-80'>
        {/* <TinyMCE label={"Product Description"} content={content} setContent={setContent} /> */}
        <PageTable tableId='test' author={true} />
      </div>
    </div>
  )
}

export default page