'use client'

import { getImageById } from '@/action/image.action'
import { useTheme } from '@/app/themeContext'
import { ImageType } from '@/lib/type'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const PreviewLogoMob = () => {
  const { logo, title, description, isDisplayBelowLogo, logoContainerWidth, logoMaxWidth, logoPadding, logoLink } = useTheme()
  const [logoImage, setLogoImage] = useState<ImageType | undefined>(undefined)

  useEffect(() => {
    if (logo > 0) getImageById(logo).then(data => {
      if (data) {
        setLogoImage(data)
      }
    })
  }, [logo])

  const style = {
    width: logoContainerWidth,
    maxWidth: logoMaxWidth ? `${logoMaxWidth}px` : undefined,
    padding: logoPadding,
  }
  return (
    <div
      className='relative'
      style={style}>
      {logoImage && (
        <Link href={logoLink ? logoLink : process.env.NEXT_PUBLIC_BASE_URL || "/"}>
          <Image
            title={title + ' - ' + description}
            alt={logoImage.image_alt || ''}
            src={logoImage.image_url}
            width={100}
            height={100}
            className='w-full h-full'
          />
        </Link>
      )
      }
      {
        isDisplayBelowLogo && (
          <p className='absolute -bottom-6 italic text-xs'>{description}</p>
        )
      }
    </div>
  )
}

export default PreviewLogoMob