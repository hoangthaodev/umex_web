'use client'

import { useMedia } from '@/app/ux-admin/(admin)/media/MediaContext'
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
    imageSelected && setSelected(imageSelected.img_id)
  }, [listImages])

  return (
    <div className='overflow-auto h-[620px]'>
      <div className={`${className} grid grid-cols-3 grid-rows-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2`}>
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
            <div id={image.img_id.toString()} key={image.img_id}
              className={`h-24 p-2 ${selected === image.img_id ? "border-2 border-blue-700" : "border border-gray-400"}`}
              onClick={() => {
                setSelected(image.img_id)
                setImageSelected(image)
              }}
            >
              <Image
                src={image.img_src}
                alt={image.img_alt}
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