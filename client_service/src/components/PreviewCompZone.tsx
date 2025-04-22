'use client'

import { previewComponentMap } from '@/lib/componentMap';
import React from 'react'

type Props = {
  className?: string;
  compItems: string[];
}

const PreviewCompZone = ({ className, compItems }: Props) => {
  return (
    <div className={className}>
      {
        compItems.map((i, index) => {
          const Component = previewComponentMap[i]
          return <Component key={index} />
        })
      }
    </div>
  )
}

export default PreviewCompZone