'use client'
import CompItem from '@/components/CompItem';
import DraggableItem from '@/components/DraggableItem';
import { CompItems, ComponentType } from '@/lib/types';
import React from 'react'

type Props = {
  className?: string;
  compItems: CompItems;
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