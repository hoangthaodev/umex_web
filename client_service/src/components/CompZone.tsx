'use client'
import CompItem from '@/components/CompItem';
import React from 'react'

type Props = {
  className?: string;
  compItems: string[];
}

const CompZone = ({ className, compItems }: Props) => {

  return (
    <div className={className}>
      {
        compItems.map((i, index) =>
          <CompItem key={index} compItem={i} />
        )
      }
    </div>
  )
}

export default CompZone