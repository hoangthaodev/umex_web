'use client'

import { getAllImage } from "@/actions/image.action"
import { ImageType } from "@/lib/types"
import React, { SetStateAction, useContext, useEffect, useState } from "react"

type MediaContextType = {
  listImages: ImageType[]
  imageSelected: ImageType | undefined,
  setImageSelected: React.Dispatch<SetStateAction<ImageType | undefined>>
  isLoading: boolean,
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
}

const MediaContext = React.createContext<MediaContextType | undefined>(undefined)

type MediaProviderType = {
  children: React.ReactNode,
}

export function MediaProvider({ children }: MediaProviderType) {
  const [imageSelected, setImageSelected] = useState<ImageType | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [listImages, setListImages] = useState<ImageType[]>([])

  useEffect(() => {
    const listImages = async () => {
      const images: ImageType[] = await getAllImage()
      setListImages(images)
    }
    listImages()
  }, [isLoading])

  return (
    <MediaContext.Provider value={{
      listImages, imageSelected, setImageSelected, isLoading, setIsLoading
    }}>
      {children}
    </MediaContext.Provider>
  )
}

export const useMedia = () => {
  const context = useContext(MediaContext)
  if (!context) {
    throw new Error('useMedia must be used within a MediaProvider')
  }
  return context
}