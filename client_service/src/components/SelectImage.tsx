'use client'
import { getImageById } from '@/actions/image.action'
import MediaSelect from '@/components/MediaSelect'
import { ImageType } from '@/lib/types'
import Image from 'next/image'
import React, { SetStateAction, useEffect, useRef, useState } from 'react'

type Props = {
  image: number,
  setImage: React.Dispatch<SetStateAction<number>>
}

const SelectImage = ({ image, setImage }: Props) => {
  const [isSelectMedia, setIsSelectMedia] = useState(false)
  const [selectedImage, setSelectedImage] = useState<ImageType | undefined>(undefined)

  const firstMount = useRef(true)

  useEffect(() => {
    if (firstMount.current) return
    setImage(selectedImage?.image_id || 0)
  }, [selectedImage])

  useEffect(() => {
    image > 0 && getImageById(image).then(data => {
      setSelectedImage(data);
    })
    firstMount.current = false;
  }, [])
  return (
    <div>
      <div className='flex flex-col gap-2'>
        {
          selectedImage ?
            (
              <div className='w-32 h-32 border border-gray-400'>
                <Image
                  src={selectedImage.image_url}
                  alt={selectedImage.image_alt}
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
            selectedImage && (
              <button
                onClick={() => { setSelectedImage(undefined) }}
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
          <MediaSelect setIsSelectMedia={setIsSelectMedia} setImage={setSelectedImage} />
        )
      }
    </div>
  )
}

export default SelectImage