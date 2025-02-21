'use client'
import MediaSelect from '@/components/MediaSelect'
import { ImageType } from '@/lib/types'
import Image from 'next/image'
import React, { SetStateAction, useState } from 'react'

type Props = {
  image: ImageType | undefined,
  setImage: React.Dispatch<SetStateAction<ImageType | undefined>>
}

const SelectImage = ({ image, setImage }: Props) => {
  const [isSelectMedia, setIsSelectMedia] = useState(false)
  return (
    <div>
      <div className='flex flex-col gap-2'>
        {
          image ?
            (
              <div className='w-32 h-32 border border-gray-400'>
                <Image
                  src={image.image_url}
                  alt={image.image_alt}
                  width={100}
                  height={100}
                  className='w-full h-full'
                />
              </div>
            ) :
            (
              <div className='w-full p-2 text-center border border-dashed border-gray-400 text-gray-400'>No File Selected</div>
            )
        }
        <div className='flex gap-2'>
          {
            image && (
              <button
                onClick={() => { setImage(undefined) }}
                className='border border-blue-600 text-blue-400 px-2 py-1 rounded-sm text-sm'
              >Remove</button>
            )
          }
          <button
            onClick={() => { setIsSelectMedia(true) }}
            className='border border-blue-600 text-blue-400 px-2 py-1 rounded-sm text-sm'>Select image</button>
        </div>
      </div>
      {
        isSelectMedia && (
          <MediaSelect setIsSelectMedia={setIsSelectMedia} setImage={setImage} />
        )
      }
    </div>
  )
}

export default SelectImage