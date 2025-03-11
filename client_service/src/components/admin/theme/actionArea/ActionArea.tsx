'use client'
import { useComponent } from '@/app/ComponentContext'
import { useTheme } from '@/app/ThemeContext'
import { useBreadcrumb } from '@/app/ux-admin/(admin)/theme/(custom)/BreadcrumbContext'
import DeskActionList from '@/components/admin/theme/actionArea/DeskActionList'
import ActionList from '@/components/admin/theme/actionArea/DeskActionList'
import IdleList from '@/components/admin/theme/actionArea/IdleList'
import MobActionList from '@/components/admin/theme/actionArea/MobActionList'
import { Item } from '@/components/DraggableItem'
import { DndContext, DragOverlay, KeyboardSensor, PointerSensor, rectIntersection, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import React from 'react'
import { LuX } from 'react-icons/lu'

type props = {
}
const ActionArea = ({ }: props) => {
  const { isHeader, setIsHeader } = useBreadcrumb()
  const { handleDragOver, handleDragStart, activeItem, handleDragEnd } = useComponent()
  const { isMobile, setIsMobile } = useTheme()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  if (isHeader) {
    return (
      <DndContext sensors={sensors} collisionDetection={rectIntersection} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragOver={handleDragOver} >
        <div className='flex flex-col border border-gray-400'>
          <div className='flex justify-between items-center p-2'>
            <h3>Header Builder</h3>
            <div className='flex gap-2'>
              <button
                onClick={() => { setIsMobile(false) }}
                className={`${isMobile ? "" : "bg-blue-700 text-gray-100"} border border-gray-400 px-2 py-1 rounded-md`}>Desktop</button>
              <button
                onClick={() => { setIsMobile(true) }}
                className={`${isMobile ? "bg-blue-700 text-gray-100" : ""} border border-gray-400 px-2 py-1 rounded-md`}>Mobile/Tablet</button>
            </div>
            <LuX
              className='cursor-pointer'
              onClick={() => { setIsHeader(false) }} />
          </div>
          <div className='bg-gray-700 text-gray-200 flex flex-col'>
            <div className='flex flex-col gap-2 m-2'>
              {
                isMobile ? <MobActionList /> : <DeskActionList />
              }
            </div>
            <div className='border-b border-gray-500' />
            <div className='m-2'>
              <IdleList />
            </div>
          </div>
        </div>
        <DragOverlay className='grab'>{activeItem ? <Item item={activeItem} /> : null}</DragOverlay>
      </DndContext>
    )
  }
  return null
}

export default ActionArea