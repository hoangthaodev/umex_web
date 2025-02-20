'use client'
import DraggableItem from '@/components/DraggableItem';
import { ComponentType } from '@/lib/types';
import { useDroppable } from '@dnd-kit/core';
import { horizontalListSortingStrategy, rectSortingStrategy, rectSwappingStrategy, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import React from 'react'

type Props = {
  className?: string;
  zoneId: string;
  items: ComponentType[];
}

const Zone = ({ className, zoneId, items }: Props) => {
  const { setNodeRef } = useDroppable({
    id: zoneId
  })

  return (
    <SortableContext items={items.map((i) => i.component_id)} strategy={rectSortingStrategy}>
      <div
        id={zoneId}
        ref={setNodeRef}
        className={className}>
        {items.map((item, index) => (
          <DraggableItem key={index} item={item} />
        ))}
      </div>
    </SortableContext>
  )
}

export default Zone