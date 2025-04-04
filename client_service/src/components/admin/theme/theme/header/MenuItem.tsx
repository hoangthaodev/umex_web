'use client'

import { moveArray } from '@/lib/utils'
import React, { SetStateAction, useCallback, useRef } from 'react'
import { useDrag, useDrop, XYCoord } from 'react-dnd'
import { FaBars, FaEye, FaEyeSlash } from 'react-icons/fa6'

type Props = {
  item: { id: number, status: number, name: string },
  index: number,
  listAllElement: { id: number, status: number, name: string }[],
  setListAllElement: React.Dispatch<SetStateAction<{ id: number, status: number, name: string }[]>>
}

const MenuItem = ({ item, index, listAllElement, setListAllElement }: Props) => {
  const dragDropRef = useRef<HTMLDivElement>(null)

  const handleSelect = useCallback((itemId: number) => {
    const newElement = [...listAllElement]
    const findItem = newElement.find(i => i.id === itemId)
    if (!findItem) return
    findItem.status = findItem.status === 1 ? 2 : 1
    setListAllElement(newElement)
  }, [listAllElement])

  const [, dragRef] = useDrag({
    type: 'element',
    item: { id: item.id, index: index },
  })

  const [, dropRef] = useDrop({
    accept: 'element',
    hover(item: { id: number, index: number }, monitor) {
      if (!monitor.isOver()) return
      if (!dragDropRef.current) return
      const dragIndex = item.index
      const dropIndex = index
      if (dragIndex === dropIndex) return
      const dropRect = dragDropRef.current.getBoundingClientRect()
      const clientOffset = monitor.getClientOffset() as XYCoord
      const relativeY = clientOffset.y - dropRect.top
      const dropRectMiddle = dropRect.height / 2
      if (dragIndex < dropIndex && relativeY < dropRectMiddle) return
      if (dragIndex > dropIndex && relativeY > dropRectMiddle) return

      const newArray = moveArray(listAllElement, dragIndex, dropIndex)
      setListAllElement(newArray)
      item.index = dropIndex
    },
  })

  dragRef(dropRef(dragDropRef))

  return (
    <div className='relative'>
      <div
        ref={dragDropRef}
        className={`px-2 py-1 bg-blue-400 rounded-xs text-gray-200 flex gap-2 items-center group
      ${item.status === 1 ? "bg-blue-500 text-gray-100" : ""}`}>
        <div
          onClick={() => { handleSelect(item.id) }}
          className='relative'>
          {
            item.status !== 1 ? (
              <>
                <div className='absolute inset-0 border opacity-0 border-gray-100 rounded-full group-hover:animate-[ripple_2s_ease-in-out_infinite]' />
                <FaEyeSlash />
              </>
            ) : (
              <FaEye />
            )
          }
        </div>
        <label >{item.name}</label>
        <div className='grow' />
        <div>
          <FaBars />
        </div>
      </div>
    </div>
  )
}

export default MenuItem