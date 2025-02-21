'use client'
import { getImageById } from '@/actions/image.action'
import DivNgang from '@/components/DivNgang'
import MediaSelect from '@/components/MediaSelect'
import { ImageType } from '@/lib/types'
import Image from 'next/image'
import React, { SetStateAction, useEffect, useState } from 'react'

type Props = {
  selectedImage: ImageType | undefined
  setSelectedImage: React.Dispatch<SetStateAction<ImageType | undefined>>
}

const FeaturedImage = ({ selectedImage, setSelectedImage }: Props) => {
  const [isSelect, setIsSelect] = useState(false)

  return (
    <div className='flex flex-col border border-gray-400'>
      <h3 className='px-2'>Featured Image</h3>
      <DivNgang />
      <div className='flex justify-center'>
        {
          selectedImage &&
          <div className='w-40 h-40'>
            <Image
              className='w-full h-full'
              src={selectedImage.image_url}
              alt={selectedImage.image_alt}
              width={100}
              height={100}
            />
          </div>
        }
      </div>
      <div className='p-2'>
        {
          selectedImage ? <label className='text-red-600 underline'
            onClick={() => {
              setSelectedImage(undefined)
            }}
          >Remove featured image</label>
            : <label className='text-blue-600 underline'
              onClick={() => {
                setIsSelect(true)
              }}
            >Set featured image</label>
        }
      </div>
      {
        isSelect && <MediaSelect setIsSelectMedia={setIsSelect} setImage={setSelectedImage} />
      }
    </div>
  )
}

export default FeaturedImage