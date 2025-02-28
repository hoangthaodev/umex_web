'use client'

import { useMedia } from '@/app/ux-admin/MediaContext'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { LuLoaderCircle } from 'react-icons/lu'

type Props = {
  className?: string
}

const ListMedia = ({ className }: Props) => {
  const [selected, setSelected] = useState<Number | undefined>(undefined)
  const { imageSelected, setImageSelected, isLoading, listImages } = useMedia()

  useEffect(() => {
    imageSelected && setSelected(imageSelected.image_id)
  }, [listImages])

  return (
    <div className={`overflow-auto h-[60vh]`}>
      <div className={`${className} flex flex-wrap gap-2`}>
        {
          isLoading &&
          (
            <div
              className={`flex flex-col gap-2 items-center h-24 p-2 border border-gray-400`}
            >
              UpLoading...
              <LuLoaderCircle className='animate-spin' />
            </div>
          )
        }
        {
          listImages && listImages.map(image => (
            <div id={image.image_id.toString()} key={image.image_id}
              className={`w-24 h-24 p-2 ${selected === image.image_id ? "border-2 border-blue-700" : "border border-gray-400"}`}
              onClick={() => {
                setSelected(image.image_id)
                setImageSelected(image)
              }}
            >
              <Image
                src={image.image_url}
                alt={image.image_alt}
                width={100}
                height={100}
                className='w-full h-full'
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ListMedia