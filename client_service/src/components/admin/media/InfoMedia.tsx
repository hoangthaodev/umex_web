'use client'

import { deleteImage, updateImage } from '@/actions/image.action'
import { deleteImageS3 } from '@/actions/s3Action'
import { useMedia } from '@/app/ux-admin/(admin)/media/MediaContext'
import DivDoc from '@/components/DivDoc'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {
  className?: string
}

const InfoMedia = ({ className }: Props) => {
  const { imageSelected, setIsLoading } = useMedia()
  const [alt, setAlt] = useState("")
  const [title, setTitle] = useState("")
  const [caption, setCaption] = useState("")

  useEffect(() => {
    setAlt(imageSelected?.image_alt || "")
    setTitle(imageSelected?.image_title || "")
    setCaption(imageSelected?.img_caption || "")
  }, [imageSelected])

  const handleSaveChange = async () => {
    setIsLoading(true)

    const res = await updateImage(
      imageSelected?.image_id || 0,
      imageSelected?.image_url || "/",
      alt,
      title,
      caption
    )
    if (res && res.code === 2000) {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    setIsLoading(true)

    const s3res = await deleteImageS3(imageSelected?.image_url || "")

    if (s3res?.code === 2000) {
      const res = await deleteImage(
        imageSelected?.image_id || 0
      )

      if (res) {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className={`${className} flex flex-col gap-2`}>
      <div className='flex justify-center'>
        <div className={`w-32 h-32 border border-gray-400 p-2`}>
          {imageSelected &&
            <Image
              src={imageSelected.image_url}
              alt={imageSelected.image_alt}
              width={100}
              height={100}
              className='w-full h-full'
            />
          }
        </div>
      </div>

      <div className={`${imageSelected ? "flex" : "hidden"} gap-1 text-xs justify-end`}>
        <button className='text-blue-700 italic underline'
          onClick={handleSaveChange}
        >Save change</button>
        <DivDoc />
        <button className='text-blue-700 italic underline'
          onClick={handleDelete}
        >Delete</button>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex flex-col lg:flex-row gap-2 justify-between'>
          <label>ALT</label>
          <input type='text' value={alt}
            onChange={(e) => { setAlt(e.target.value) }}
            className='px-2 border border-gray-400 rounded-sm'
            disabled={imageSelected ? false : true}
          />
        </div>

        <div className='flex flex-col lg:flex-row gap-2 justify-between'>
          <label>Title</label>
          <input type='text' value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            className='px-2 border border-gray-400 rounded-sm'
            disabled={imageSelected ? false : true}
          />
        </div>

        <div className='flex flex-col lg:flex-row gap-2 justify-between'>
          <label>Caption</label>
          <input type='text' value={caption}
            onChange={(e) => { setCaption(e.target.value) }}
            className='px-2 border border-gray-400 rounded-sm'
            disabled={imageSelected ? false : true}
          />
        </div>
      </div>
    </div>
  )
}

export default InfoMedia