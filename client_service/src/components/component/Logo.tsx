
import { getConfigByKey } from '@/actions/config.action'
import Image from 'next/image'
import React from 'react'

async function Logo() {
  const logoUrl = await getConfigByKey("logo_url")
  return (
    <div>
      <Image
        alt='Logo image'
        src={logoUrl}
        width={100}
        height={100}
      />
    </div>
  )
}

export default Logo