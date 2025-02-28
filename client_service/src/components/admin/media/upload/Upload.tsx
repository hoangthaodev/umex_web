'use client'
import { createNewImage } from '@/actions/image.action'
import uploadS3 from '@/app/hooks/uploadS3'
import { useMedia } from '@/app/ux-admin/MediaContext'
import React, { useRef, useState } from 'react'

type Props = {
  isUpload: boolean
  className?: string
}

const Upload = ({ isUpload, className }: Props) => {
  const { setIsLoading } = useMedia()
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()

    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()

    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()

    setIsDragging(false)

    const files = e.dataTransfer.files

    if (files && files.length > 0) {
      setIsLoading(true)

      Array.from(files).forEach(async (file) => {
        const fileUrl = await uploadS3({ file })
        if (fileUrl) {
          await createNewImage(fileUrl)
          setIsLoading(false)
        } else {
          alert('Upload failed')
        }
      })
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (files && files.length > 0) {
      setIsLoading(true)

      Array.from(files).forEach(async (file) => {
        const fileUrl = await uploadS3({ file })
        if (fileUrl) {
          await createNewImage(fileUrl)
          setIsLoading(false)
        } else {
          alert('Upload failed')
        }
      })
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div className={`${isDragging ? "bg-gray-500 border-blue-400" : ""} absolute w-full h-full justify-center items-center flex text-gray-100`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
      >{isDragging && <>Drop files to upload</>}</div>
      <div
        className={`${isUpload ? "flex" : "hidden"} flex-col gap-2 items-center justify-center border-2 p-4 border-gray-400 border-dashed w-full h-full`}
      >
        <label>Drop files to upload</label>
        <label className='text-sm'>or</label>
        <input ref={fileInputRef} type='file' multiple accept='image/*' hidden
          onChange={handleOnChange}
        />
        <button onClick={() => fileInputRef.current?.click()}
          className={`${isDragging ? "-z-10" : "z-0"} bg-gray-200 hover:bg-gray-300 border border-blue-400 text-blue-700 px-4 py-2 rounded-md`}
        >Select files</button>

      </div>
    </div>
  )
}

export default Upload