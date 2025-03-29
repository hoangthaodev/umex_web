'use client'

import MediaLibrary from '@/components/admin/media/MediaLibrary'
import Upload from '@/components/admin/media/upload/Upload'
import { ImageType } from '@/lib/type'
import React, { SetStateAction, useEffect, useState } from 'react'
import { LuX } from 'react-icons/lu'

type Props = {
  setIsSelectMedia: React.Dispatch<SetStateAction<boolean>>
  setImage: React.Dispatch<SetStateAction<ImageType | undefined>>
}

const MediaSelect = ({ setIsSelectMedia, setImage }: Props) => {
  const [tabActive, setTabActive] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<ImageType | undefined>(undefined)

  const tabs = [
    {
      id: 0, title: "Upload Media", content: <Upload className={`w-full h-[60vh]`} setIsLoading={setIsLoading} />
    },
    {
      id: 1, title: "Library Media", content:
        <div className='w-full h-full p-4 flex gap-2'>
          <MediaLibrary isLoading={isLoading} setIsLoading={setIsLoading} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </div>
    },
  ]

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true)
    }
  }, [tabActive])

  const handleOnSelect = () => {
    if (selectedImage) setImage(selectedImage)
    setIsSelectMedia(false)
  }

  return (
    <div className='fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center bg-inherit'>
      <div className={`relative w-10/12 bg-gray-200 p-4 flex-col border border-gray-400 rounded-sm`}>
        {
          setIsSelectMedia &&
          <LuX
            className='absolute right-4 top-4 cursor-pointer'
            onClick={() => { setIsSelectMedia(false) }} />
        }
        <h1>Media</h1>
        <div className='flex'>
          {tabs.map(tab =>
            <button
              key={tab.id}
              className={`${tabActive === tab.id ? "bg-gray-600 text-gray-300" : ""} border border-gray-400 px-2`}
              onClick={() => setTabActive(tab.id)}
            >{tab.title}</button>)}
        </div>
        <div className='border border-gray-400 h-full w-full'>
          {
            tabs[tabActive].content
          }
        </div>
        {
          <div className='flex justify-end m-2'>
            <button className='bg-blue-700 text-gray-200 rounded-md px-2 py-1'
              onClick={handleOnSelect}
            >Select</button>
          </div>
        }
      </div>
    </div>
  )
}

export default MediaSelect