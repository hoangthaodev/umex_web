'use client'
import { useTheme } from '@/app/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  const { logo, title, description, isDisplayBelowLogo, logoContainerWidth, logoMaxWidth, logoPadding, logoLink } = useTheme()
  const style = {
    width: logoContainerWidth,
    maxWidth: logoMaxWidth ? `${logoMaxWidth}px` : undefined,
    padding: logoPadding,
  }
  return (
    <div style={style}>
      {logo && (
        <Link href={logoLink ? logoLink : process.env.NEXT_PUBLIC_BASE_URL || "/"}>
          <Image
            title={title + ' - ' + description}
            alt={logo.image_alt}
            src={logo.image_url}
            width={100}
            height={100}
            className='w-full h-full'
          />
        </Link>
      )
      }
      {
        isDisplayBelowLogo && (
          <p className='italic text-xs mt-2'>{description}</p>
        )
      }
    </div>
  )
}

export default Logo