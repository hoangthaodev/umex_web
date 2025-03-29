'use client'

import Upload from '@/components/admin/media/upload/Upload'
import React, { useState } from 'react'

type Props = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const MediaUpload = ({ setIsLoading }: Props) => {
  const [isUpload, setIsUpload] = useState(false)

  return (
    <div className='flex flex-col gap-2 p-2'>
      <div className='flex gap-2'>
        <h1>Media Library</h1>
        <button
          className='border border-blue-400 px-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm text-blue-700'
          onClick={() => setIsUpload((prev) => !prev)}>Add new media file</button>
      </div>
      <Upload setIsLoading={setIsLoading} isUpload={isUpload} />
    </div>
  )
}

export default MediaUpload