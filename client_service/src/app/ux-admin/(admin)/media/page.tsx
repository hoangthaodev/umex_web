'use server'

import InfoMedia from '@/components/admin/media/InfoMedia'
import ListMedia from '@/components/admin/media/ListMedia'
import MediaUpload from '@/components/admin/media/upload/MediaUpload'
import DivDoc from '@/components/DivDoc'
import React from 'react'

const MediaPage = async () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='p-2'>
        <MediaUpload />
      </div>
      <div className='flex border border-gray-400 w-full'>
        <ListMedia className='grow p-2' />
        <DivDoc />
        <InfoMedia className='p-2 w-1/4' />
      </div>
    </div>
  )
}

export default MediaPage