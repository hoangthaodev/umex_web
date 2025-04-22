'use client'

import ZoneItem from '@/components/admin/theme/theme/actionArea/dragdrop/ZoneItem'
import { ComponentType } from '@/lib/type'
import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'

type Props = {
  zoneId: string
  className?: string
  items: ComponentType[]
  handleChange: (zoneId: number, itemId: number, dragIndex: number, dropIndex: number) => void
}

const Zone = ({ zoneId, className, items, handleChange }: Props) => {
  const mergeRef = useRef<HTMLDivElement>(null)
  const [, dropRef] = useDrop({
    accept: "component",
    hover(item: { id: number, index: number, zone: number }, monitor) {
      if (!mergeRef.current) return
      const hoverZone = parseInt(mergeRef.current.id)
      if (item.zone === hoverZone) return
      handleChange(parseInt(zoneId), item.id, item.index, 0)
      item.zone = hoverZone
    }
  })

  dropRef(mergeRef)

  return (
    <div
      id={zoneId}
      ref={mergeRef}
      className={className}>
      {
        items.map((i, index) => (
          <ZoneItem key={index} comp={i} handleChange={handleChange} />
        ))
      }
    </div>
  )
}

export default Zone