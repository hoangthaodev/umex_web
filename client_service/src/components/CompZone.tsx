import { componentMap } from '@/lib/componentMap';
import React from 'react'

type Props = {
  className?: string;
  compItems: string[];
}

const CompZone = ({ className, compItems }: Props) => {
  return (
    <div className={className}>
      {
        compItems.map((i, index) => {
          const Component = componentMap[i]
          return <Component key={index} />
        })
      }
    </div>
  )
}

export default CompZone