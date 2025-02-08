'use client'
import { useComponent } from '@/app/ComponentContext';
import { ChangeEvent, ComponentType, Dispatch, SetStateAction } from 'react';

const IdleList = () => {
  const { component0, setComponent0, handleDragStart, handleDragOver, handleDrop } = useComponent()

  return (
    <div
      id="component0"
      className='relative flex gap-2 justify-start p-2 min-h-8 bg-gray-900 hover:border border-blue-500 group'
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <button className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'>Not in use</button>
      {
        component0 &&
        component0.map((item: any) => (
          <label
            id={item.comp_id}
            key={item.comp_id}
            className='px-2 bg-gray-100 text-gray-800 rounded-md cursor-pointer'
            draggable={true}
            onDragStart={handleDragStart}
          >
            {item.comp_name}
          </label>
        ))
      }
    </div>
  )
}

export default IdleList