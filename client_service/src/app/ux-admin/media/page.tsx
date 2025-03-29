'use client'

import MediaLibrary from '@/components/admin/media/MediaLibrary'
import MediaUpload from '@/components/admin/media/MediaUpload'
import { ImageType } from '@/lib/type'
import React, { useState } from 'react'

const page = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<ImageType | undefined>(undefined)
  return (
    <div className='flex flex-col w-full'>
      <MediaUpload setIsLoading={setIsLoading} />
      <MediaLibrary isLoading={isLoading} setIsLoading={setIsLoading} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </div>
  )
}

export default page