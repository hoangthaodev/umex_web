'use client'

import { getCategoryById } from '@/action/category.action'
import { getPageById } from '@/action/page.action'
import { useDebounce } from '@/hooks/use-debounce'
import { menuValueTypeMap, typeSlugMap } from '@/lib/pageMap'
import { MenuValueType } from '@/lib/type'
import { moveArray } from '@/lib/utils'
import Link from 'next/link'
import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import { useDrag, useDrop, XYCoord } from 'react-dnd'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6'

type Props = {
  menuValue: MenuValueType,
  index: number,
  array: MenuValueType[],
  setArray: React.Dispatch<SetStateAction<string>>
}

const ItemMenu = ({ array, setArray, menuValue, index }: Props) => {
  const [openItem, setOpenItem] = useState<number>(0)
  const [menuUrl, setMenuUrl] = useState<string>(menuValue.content.url)
  const [menuLabel, setMenuLabel] = useState<string>(menuValue.content.label)
  const origin = useRef<{ url: string, name: string }>(null)
  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (menuValue.type === 2) {
      getCategoryById(menuValue.content.id).then(data => {
        if (!data) return
        origin.current = { url: data.category_slug, name: data.category_name }
      })
    } else {
      getPageById(menuValue.content.id).then(data => {
        if (!data) return
        origin.current = { url: data.page_slug, name: data.page_title }
      })
    }
  }, [])

  const debounceMenuUrl = useDebounce(menuUrl)
  const debounceMenuLabel = useDebounce(menuLabel)

  useEffect(() => {
    const newArray = [...array]
    newArray[index].content.url = debounceMenuUrl
    setArray(JSON.stringify(newArray))
  }, [debounceMenuUrl])

  useEffect(() => {
    const newArray = [...array]
    newArray[index].content.label = debounceMenuLabel
    setArray(JSON.stringify(newArray))
  }, [debounceMenuLabel])

  const [{ isDragging }, dragRef] = useDrag({
    type: 'menu',
    item: { draggedItem: menuValue, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  })

  const [, dropRef] = useDrop({
    accept: 'menu',
    hover(item: { draggedItem: MenuValueType; index: number }, monitor) {
      if (!monitor.isOver({ shallow: true })) return;
      if (!ref.current) return;

      const dragIndex = item.index
      const dropIndex = index
      if (dragIndex === dropIndex) return

      const zoneRect = ref.current.getBoundingClientRect()
      const clientOffset = monitor.getClientOffset()
      const relativeY = (clientOffset as XYCoord).y - zoneRect.top

      if (dragIndex < dropIndex && relativeY < zoneRect.height * 0.3) return
      if (dragIndex > dropIndex && relativeY > zoneRect.height * 0.7) return
      if (relativeY >= zoneRect.height * 0.2 && relativeY <= zoneRect.height * 0.8) {
        let newArray: MenuValueType[] = [...array]
        if (dragIndex < dropIndex) {
          newArray = moveArray(array, dragIndex, dropIndex) as MenuValueType[]
        } else {
          newArray[dragIndex].depth = menuValue.depth + 1
        }
        setArray(JSON.stringify(newArray))
      } else {
        const newArray = moveArray(array, dragIndex, dropIndex) as MenuValueType[]
        if (relativeY < zoneRect.height * 0.3) {
          newArray[dropIndex].depth = menuValue.depth
        } else if (relativeY > zoneRect.height * 0.7) {
          newArray[dropIndex].depth = 0
        }
        const depthIndexFrom = (dragIndex > dropIndex) ? dragIndex + 1 : ((dragIndex === 0) ? 0 : dragIndex)
        const findIndexTo = newArray.findIndex((i, index) => index > dragIndex && i.depth === 0)
        const depthIndexTo = dragIndex > dropIndex ? ((findIndexTo <= 0) ? newArray.length - 1 : findIndexTo) : findIndexTo - 1
        for (let i = depthIndexFrom; i <= depthIndexTo; i++) {
          if (newArray[i].depth !== 0) newArray[i].depth -= 1
        }
        setArray(JSON.stringify(newArray))
        item.index = dropIndex
      }
    },
  })

  const handleDelete = () => {
    const newArray = array.filter((i) => i.value_id !== menuValue.value_id)
    setArray(JSON.stringify(newArray))
  }

  dragRef(dropRef(ref))

  return (
    <li
      ref={ref}
      className={`w-[400px] select-none cursor-move flex flex-col ${isDragging ? "opacity-50" : ""} 
          transition-all`}
      style={{ marginLeft: menuValue.depth * 20 }}
    >
      <div className='px-2 py-1 border flex gap-2 justify-between border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-gray-200 dark:bg-gray-700'>
        <span>{menuLabel}</span>
        <span className='flex gap-2 items-center'>
          <span className='text-gray-600 dark:text-gray-400'>{menuValueTypeMap[menuValue.type]}</span>
          <label
            onClick={() => { openItem === menuValue.value_id ? setOpenItem(0) : setOpenItem(menuValue.value_id) }}
            className='text-gray-600 dark:text-gray-400 hover:text-inherit! hover:cursor-pointer'>
            {
              openItem === menuValue.value_id ? <FaCaretUp size={18} /> : <FaCaretDown size={18} />
            }
          </label>
        </span>
      </div>
      {
        openItem === menuValue.value_id && (
          <div className='flex flex-col gap-4 px-2 py-1 border border-gray-300 dark:border-gray-600 cursor-default'>
            {
              (menuValue.type === 7) ? (
                <div className='flex flex-col gap-2 text-xs'>
                  <div className='flex flex-col'>
                    <label className='text-gray-700'>URL</label>
                    <input
                      className='px-2 py-1 border rounded-xs'
                      type="text" value={menuUrl} onChange={(e) => { setMenuUrl(e.target.value) }} />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-gray-700'>Label</label>
                    <input
                      className='px-2 py-1 border rounded-xs'
                      type="text" value={menuLabel} onChange={(e) => { setMenuLabel(e.target.value) }} />
                  </div>
                </div>
              )
                : (
                  <div className='flex flex-col gap-2 text-xs'>
                    <div className='flex flex-col'>
                      <label className='text-gray-700'>Label</label>
                      <input
                        className='px-2 py-1 border rounded-xs'
                        type="text" value={menuLabel} onChange={(e) => { setMenuLabel(e.target.value) }} />
                    </div>
                    <div>
                      <label className='text-gray-700'>Origin: </label>
                      <Link
                        className='underline text-blue-600'
                        href={process.env.NEXT_PUBLIC_BASE_URL + "/" + typeSlugMap[menuValue.type] + "/" + origin.current?.url}>{origin.current?.name}</Link>
                    </div>
                  </div>
                )
            }
            <div>
              <label
                onClick={handleDelete}
                className='text-red-600 underline cursor-pointer'>Delete</label>
            </div>
          </div>
        )
      }

    </li>
  )
}

export default ItemMenu