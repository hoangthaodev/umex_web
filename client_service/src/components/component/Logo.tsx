'use server'

import { getConfigByKey } from '@/action/config.action'
import { getImageById } from '@/action/image.action'
import { useTheme } from '@/app/themeContext'
import { ImageType, SiteIdentifyType } from '@/lib/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = async () => {
  let logoImage: ImageType | undefined = undefined;
  let title: string = '';
  let description: string = '';
  let isDisplayBelowLogo: boolean = false;
  let logoContainerWidth: number = 0;
  let logoMaxWidth: number | undefined = undefined;
  let logoPadding: number = 0;
  let logoLink: string = '';

  // const { logo, title, description, isDisplayBelowLogo, logoContainerWidth, logoMaxWidth, logoPadding, logoLink } = useTheme()
  // const [logoImage, setLogoImage] = useState<ImageType | undefined>(undefined)

  // useEffect(() => {
  //   if (logo > 0) getImageById(logo).then(data => {
  //     if (data) {
  //       setLogoImage(data)
  //     }
  //   })
  // }, [logo])

  const siteiden = await getConfigByKey('header_siteidentify')
  if (siteiden) {
    const siteidenParse = JSON.parse(siteiden.config_value || '') as SiteIdentifyType;
    if (siteidenParse.logo) {
      const image = await getImageById(siteidenParse.logo)
      if (image) {
        logoImage = image
      }
    }
    title = siteidenParse.title
    description = siteidenParse.description
    isDisplayBelowLogo = siteidenParse.isDisplayBelowLogo
    logoContainerWidth = siteidenParse.logoContainerWidth
    logoMaxWidth = siteidenParse.logoMaxWidth
    logoPadding = siteidenParse.logoPadding
    logoLink = siteidenParse.logoLink
  }

  const style = {
    width: logoContainerWidth,
    maxWidth: logoMaxWidth ? logoMaxWidth : undefined,
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
            alt={logoImage.image_alt || ""}
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

export default Logo