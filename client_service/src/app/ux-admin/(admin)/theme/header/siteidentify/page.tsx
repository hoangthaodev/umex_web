import { getAllConfig } from '@/actions/config.action'
import SiteIdentify from '@/components/admin/theme/header/SiteIdentify'
import { ConfigType } from '@/lib/types'
import React from 'react'

const SiteIdentifyPage = async () => {
  const allConfig: ConfigType[] = await getAllConfig()
  return (
    <SiteIdentify allConfig={allConfig} />
  )
}

export default SiteIdentifyPage