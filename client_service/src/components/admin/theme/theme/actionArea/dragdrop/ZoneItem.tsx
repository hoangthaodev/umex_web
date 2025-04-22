'use client'

import { ComponentType } from '@/lib/type'
import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

type Props = {
  comp: ComponentType
  handleChange: (zoneId: number, itemId: number, dragIndex: number, dropIndex: number) => void
}

const ZoneItem = ({ comp, handleChange }: Props) => {
  const mergeRef = useRef<HTMLDivElement>(null)

  const [, dragRef] = useDrag({
    type: "component",
    item: { id: comp.component_id!, index: comp.component_index, zone: comp.component_position || 0 }
  })

  const [, dropRef] = useDrop({
    accept: "component",
    hover(item: { id: number, index: number, zone: number }, monitor) {
      const dragIndex = item.index
      const dropIndex = comp.component_index
      if (dragIndex === dropIndex) return
      if (!mergeRef.current) return

      handleChange(item.zone, item.id, dragIndex, dropIndex)
      item.index = dropIndex
    }
  })

  dragRef(dropRef(mergeRef))

  return (
    <div
      ref={mergeRef}
      className='px-2 bg-gray-100 text-sm flex items-center text-gray-800 rounded-xs cursor-grab transition-transform duration-300'>
      {comp.component_name}
    </div>
  )
}

export default ZoneItem