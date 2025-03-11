'use client'
import PageEnter from '@/components/admin/theme/menu/edit/page/PageEnter'
import PostEnter from '@/components/admin/theme/menu/edit/post/PostEnter'
import DivNgang from '@/components/DivNgang'
import React, { useState } from 'react'

type Props = {
  isNew: boolean
}

const AddLink = ({ isNew }: Props) => {
  const [tabActive, setTabActive] = useState(0)
  return (
    <div className={`${isNew ? "opacity-50 pointer-events-none" : ""}`}>
      <div>
        <h3
          className={`${tabActive === 0 && "bg-gray-200"} hover:bg-gray-200 p-2 cursor-pointer`}
          onClick={() => { setTabActive(0) }}
        >Page</h3>
        <PageEnter className={`${tabActive === 0 ? "block" : "hidden"}`} />
      </div>
      <DivNgang />
      <div>
        <h3
          className={`${tabActive === 1 && "bg-gray-200"} hover:bg-gray-200 p-2 cursor-pointer`}
          onClick={() => { setTabActive(1) }}
        >Post</h3>
        <PostEnter className={`${tabActive === 1 ? "block" : "hidden"}`} />
      </div>
      <DivNgang />
      <div>
        <h3
          className={`${tabActive === 2 && "bg-gray-200"} hover:bg-gray-200 p-2 cursor-pointer`}
          onClick={() => { setTabActive(2) }}
        >Custom Link</h3>
      </div>
      <DivNgang />
      <div>
        <h3
          className={`${tabActive === 3 && "bg-gray-200"} hover:bg-gray-200 p-2 cursor-pointer`}
          onClick={() => { setTabActive(3) }}
        >Category</h3>
      </div>
    </div>
  )
}

export default AddLink