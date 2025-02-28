'use client'
import { getImageById } from '@/actions/image.action'
import DivNgang from '@/components/DivNgang'
import MediaSelect from '@/components/MediaSelect'
import { ImageType } from '@/lib/types'
import Image from 'next/image'
import React, { SetStateAction, useEffect, useState } from 'react'

type Props = {
  imageId: number
  setImageId: React.Dispatch<SetStateAction<number>>
}

const FeaturedImage = ({ imageId, setImageId }: Props) => {
  const [isSelect, setIsSelect] = useState(false)
  const [selectedImage, setSelectedImage] = useState<ImageType | undefined>(undefined)

  useEffect(() => {
    getImageById(imageId).then(res => {
      setSelectedImage(res)
    })
  }, [imageId])

  useEffect(() => {
    if (selectedImage) {
      setImageId(selectedImage.image_id)
    }
  }, [selectedImage])

  return (
    <div className='flex flex-col border border-gray-400'>
      <h3 className='px-2 bg-gray-300'>Featured Image</h3>
      <DivNgang />
      <div className='flex justify-center'>
        {
          selectedImage &&
          <div className='flex flex-col items-center'>
            <div className='w-40 h-40'
              onClick={() => { setIsSelect(true) }}
            >
              <Image
                className='w-full h-full'
                src={selectedImage.image_url}
                alt={selectedImage.image_alt}
                width={100}
                height={100}
              />
            </div>
            <label className='italic text-gray-600'>Click to change other image</label>
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