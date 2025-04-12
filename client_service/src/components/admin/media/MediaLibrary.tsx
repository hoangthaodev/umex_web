'use client'

import { deleteImage, getAllImage, updateImage } from '@/action/image.action'
import { deleteFileS3 } from '@/action/s3.action'
import DivDoc from '@/components/DivDoc'
import { ImageType } from '@/lib/type'
import Image from 'next/image'
import React, { SetStateAction, useEffect, useState } from 'react'
import { LuLoaderCircle } from 'react-icons/lu'
import { toast } from 'sonner'

type Props = {
  isLoading: boolean,
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
  selectedImage: ImageType | undefined
  setSelectedImage: React.Dispatch<SetStateAction<ImageType | undefined>>
}

const MediaLibrary = ({ isLoading, setIsLoading, selectedImage, setSelectedImage }: Props) => {
  const [listImages, setListImages] = useState<ImageType[]>([])
  const [alt, setAlt] = useState("")
  const [title, setTitle] = useState("")
  const [caption, setCaption] = useState("")

  useEffect(() => {
    if (!isLoading) return
    getAllImage().then(data => {
      if (data) setListImages(data)
      setIsLoading(false)
    })
  }, [isLoading])

  useEffect(() => {
    if (!selectedImage) return
    setAlt(selectedImage.image_alt || "")
    setTitle(selectedImage.image_title || "")
    setCaption(selectedImage.image_caption || "")
  }, [selectedImage])

  const handleSaveChange = async () => {
    if (!selectedImage) return

    const image: ImageType = {
      image_id: selectedImage.image_id,
      image_url: selectedImage.image_url,
      image_title: title,
      image_alt: alt,
      image_caption: caption
    }

    const res = await updateImage(image)
    if (!res) {
      toast.error('Save change failed!')
    }

    setIsLoading(true)
  }

  const handleDelete = async () => {
    if (!selectedImage) return

    const s3res = await deleteFileS3(selectedImage.image_url)
    if (!s3res) return

    const res = await deleteImage(selectedImage.image_id!)
    if (!res) {
      toast.error('Delete failed!')
    }

    setIsLoading(true)
  }

  return (
    <div className='flex border w-full'>
      <div className={`grow p-2 flex flex-wrap content-start gap-2 overflow-auto h-[60vh]`}>
        {
          isLoading &&
          (
            <div
              className={`flex flex-col gap-2 items-center h-24 p-2 border`}
            >
              Loading...
              <LuLoaderCircle className='animate-spin' />
            </div>
          )
        }
        {
          listImages && listImages.map(image => (
            <div id={image.image_id!.toString()} key={image.image_id}
              className={`w-24 h-24 p-2 ${selectedImage?.image_id === image.image_id ? "border-2 border-blue-700" : "border"}`}
              onClick={() => {
                setSelectedImage(image)
              }}
            >
              <Image
                src={image.image_url}
                alt={image.image_alt || ""}
                width={100}
                height={100}
                className='w-full h-full'
              />
            </div>
          ))
        }
      </div>

      <DivDoc />

      <div className={`w-1/4 p-2 flex flex-col gap-2`}>
        <div className='flex justify-center'>
          <div className={`w-32 h-32 border p-2`}>
            {selectedImage &&
              <Image
                src={selectedImage.image_url}
                alt={selectedImage.image_alt || ""}
                width={100}
                height={100}
                className='w-full h-full'
              />
            }
          </div>
        </div>

        <div className={`flex gap-1 text-xs justify-end`}>
          <button className='text-blue-700 italic underline cursor-pointer'
            onClick={handleSaveChange}
          >Save change</button>
          <DivDoc />
          <button className='text-blue-700 italic underline cursor-pointer'
            onClick={handleDelete}
          >Delete</button>
        </div>

        <div className='grid grid-cols-4 grid-rows-3 gap-2'>
          <label className='col-span-1 xl:col-span-1'>ALT</label>
          <input type='text' value={alt}
            onChange={(e) => { setAlt(e.target.value) }}
            className='col-span-full xl:col-span-3 px-2 border bg-gray-300 rounded-sm'
            disabled={selectedImage ? false : true}
          />

          <label className='col-span-full xl:col-span-1'>Title</label>
          <input type='text' value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            className='col-span-full xl:col-span-3 px-2 border bg-gray-300 rounded-sm'
            disabled={selectedImage ? false : true}
          />

          <label className='col-span-full xl:col-span-1'>Caption</label>
          <input type='text' value={caption}
            onChange={(e) => { setCaption(e.target.value) }}
            className='col-span-full xl:col-span-3 px-2 border bg-gray-300 rounded-sm'
            disabled={selectedImage ? false : true}
          />
        </div>
      </div>
    </div>
  )
}

export default MediaLibrary