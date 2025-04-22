'use client'

import { useTheme } from '@/app/themeContext'
import DeskActionList from '@/components/admin/theme/theme/actionArea/DeskActionList'
import IdleList from '@/components/admin/theme/theme/actionArea/IdleList'
import MobActionList from '@/components/admin/theme/theme/actionArea/MobActionList'
import React, { SetStateAction } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { LuX } from 'react-icons/lu'

type Props = {
  setIsHeader: React.Dispatch<SetStateAction<boolean>>
}

const ActionArea = ({ setIsHeader }: Props) => {
  const { isMobile, setIsMobile,
    componentAll,
    component0,
    component1,
    component2,
    component3,
    component4,
    component5,
    component6,
    component7,
    component8,
    component9,
    componentMob1,
    componentMob2,
    componentMob3,
    componentMob4,
    componentMob5,
    setComponentAll,
  } = useTheme()

  const handleChange = (zoneId: number, itemId: number, dragIndex: number, dropIndex: number) => {
    const newAllComponent = [...componentAll]
    const zone = newAllComponent.filter(i => (i.component_position ? i.component_position : 0) === zoneId)
    if (!zone) {
      const item = newAllComponent.find(i => i.component_id === itemId)
      if (!item) return
      item.component_position = zoneId
      item.component_index = 1
      setComponentAll(newAllComponent)
      return
    }
    const item = zone.find(i => i.component_id === itemId)
    if (!item) {
      const newItem = newAllComponent.find(i => i.component_id === itemId)
      if (!newItem) return
      newItem.component_position = zoneId
      newItem.component_index = zone.length + 1
      setComponentAll(newAllComponent)
      return
    }
    if (dragIndex < dropIndex) {
      const middleArray = zone.filter(i => (i.component_index > dragIndex) && (i.component_index <= dropIndex))
      middleArray.map(i => {
        i.component_index -= 1
      })
    }
    if (dragIndex > dropIndex) {
      const middleArray = zone.filter(i => (i.component_index >= dropIndex) && (i.component_index < dragIndex))
      middleArray.map(i => {
        i.component_index += 1
      })
    }
    item.component_index = dropIndex
    setComponentAll(newAllComponent)
  }

  return (
    <div className='flex flex-col border border-gray-400'>
      <div className='flex justify-between items-center p-2'>
        <h4>Header Builder</h4>
        <div className='flex gap-2 text-sm'>
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
      <DndProvider backend={HTML5Backend}>
        <div className='bg-gray-700 text-gray-200 flex flex-col'>
          <div className='flex flex-col gap-2 m-2'>
            {
              isMobile ? <MobActionList compMob1={componentMob1} compMob2={componentMob2} compMob3={componentMob3} compMob4={componentMob4} compMob5={componentMob5} handleChange={handleChange} />
                : <DeskActionList comp1={component1} comp2={component2} comp3={component3} comp4={component4} comp5={component5} comp6={component6} comp7={component7} comp8={component8} comp9={component9} handleChange={handleChange} />
            }
          </div>
          <div className='border-b border-gray-500' />
          <div className='m-2'>
            <IdleList list={component0} handleChange={handleChange} />
          </div>
        </div>
      </DndProvider>
    </div>
  )
}

export default ActionArea