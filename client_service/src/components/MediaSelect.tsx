'use client'

import { useMedia } from '@/app/ux-admin/(admin)/media/MediaContext'
import InfoMedia from '@/components/admin/media/InfoMedia'
import ListMedia from '@/components/admin/media/ListMedia'
import Upload from '@/components/admin/media/upload/Upload'
import DivDoc from '@/components/DivDoc'
import { ImageType } from '@/lib/types'
import React, { SetStateAction, useEffect, useState } from 'react'
import { LuX } from 'react-icons/lu'

type Props = {
  setIsSelectMedia: React.Dispatch<SetStateAction<boolean>>
  setImage?: React.Dispatch<SetStateAction<ImageType | undefined>>
  isWhat?: string | undefined
  logo?: React.Dispatch<SetStateAction<ImageType | undefined>>
  favicon?: React.Dispatch<SetStateAction<ImageType | undefined>>
}

const MediaSelect = ({ setIsSelectMedia, isWhat, logo, favicon, setImage }: Props) => {
  const [tabActive, setTabActive] = useState(1)
  const { isLoading, imageSelected } = useMedia()
  const tabs = [
    { id: 0, title: "Upload Media", content: <Upload className='w-full h-[620px]' isUpload={true} /> },
    {
      id: 1, title: "Library Media", content:
        <div className='w-full h-full p-4 flex gap-2'>
          <ListMedia />
          <DivDoc />
          <InfoMedia />
        </div>
    },
  ]

  useEffect(() => {
    if (isLoading) {
      setTabActive(1)
    }
  }, [isLoading])

  const handleOnSelect = () => {
    if (isWhat === "logo") {
      logo && logo(imageSelected)
    } else if (isWhat === "favicon") {
      favicon && favicon(imageSelected)
    }
    setImage && setImage(imageSelected)
    setIsSelectMedia(false)
  }

  return (
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
  )
}

export default MediaSelect