'use client'
import AddNewAction from '@/components/admin/media/upload/AddNewAction'
import Upload from '@/components/admin/media/upload/Upload'
import React, { useState } from 'react'

type Props = {}

const MediaUpload = (props: Props) => {
  const [isUpload, setIsUpload] = useState(false)
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <AddNewAction setUpload={setIsUpload} />
      </div>
      <div>
        <Upload isUpload={isUpload} />
      </div>
    </div>
  )
}

export default MediaUpload