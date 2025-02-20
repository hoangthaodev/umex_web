'use client'
import { ComponentType } from '@/lib/types'
import { useDraggable } from '@dnd-kit/core'
import { rectSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'

type Props = {
  item: ComponentType,
}

export const Item = ({ item }: { item: ComponentType }) => {
  return (
    <div
      id={item.component_id.toString()}
      className={`px-2 bg-gray-100 text-gray-800`}
    >
      {item.component_name}
    </div>
  )
}

const DraggableItem = ({ item }: Props) => {
  const { setNodeRef, attributes, listeners, transform, transition } = useSortable({
    id: item.component_id,
  })

  const style = transform ? {
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: 'grab',
  } : undefined

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <Item item={item} />
    </div>
  )
}

export default DraggableItem