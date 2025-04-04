'use client'

import { getAllComponent } from '@/action/component.action'
import MenuItem from '@/components/admin/theme/theme/header/MenuItem'
import { ComponentType, ListMenuElementType } from '@/lib/type'
import React, { SetStateAction, useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

type Props = {
  className?: string
  listMenu: string
  setListMenu: React.Dispatch<SetStateAction<string>>
}

const MenuElements = ({ className, listMenu, setListMenu }: Props) => {
  const [listAllComponent, setListAllComponent] = useState<ComponentType[]>([])
  const [listAllElement, setListAllElement] = useState<{ id: number, status: number, name: string }[]>([])
  const [firstMount, setFirstMount] = useState(true)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const listAllComponent = await getAllComponent()
      if (!listAllComponent) return
      const listComponent = listAllComponent.filter(i => i.component_id !== 1 && i.component_id !== 26)
      setListAllComponent(listComponent)
      setFirstMount(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (firstMount) return
    setIsReady(true)
  }, [firstMount])

  useEffect(() => {
    const listElement: { id: number, status: number, name: string }[] = []

    const listMenuParse = JSON.parse(listMenu) as ListMenuElementType[]
    if (!Array.isArray(listMenuParse)) return
    listMenuParse.forEach(item => {
      const component = listAllComponent.find(i => i.component_id === item.componentId)
      if (component) {
        const componentItem = { id: component.component_id!, status: item.status, name: component.component_name }
        listElement.push(componentItem)
      }
    })

    listAllComponent.forEach(item => {
      const menu = listMenuParse.find(i => i.componentId === item.component_id)
      if (!menu) {
        listElement.push({ id: item.component_id!, status: 2, name: item.component_name })
      }
    })

    setListAllElement(listElement)

  }, [listAllComponent])

  useEffect(() => {
    if (!isReady) return
    const newListMenu: ListMenuElementType[] = listAllElement.map(i => {
      return { componentId: i.id, status: i.status }
    })
    const stringListMenu = JSON.stringify(newListMenu)
    if (stringListMenu === listMenu) return
    setListMenu(stringListMenu)
  }, [listAllElement])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`${className} flex flex-col gap-2`}>
        {
          listAllElement.map((item, index) => (
            <MenuItem key={index} item={item} index={index} listAllElement={listAllElement} setListAllElement={setListAllElement} />
          ))
        }
      </div>
    </DndProvider>
  )
}

export default MenuElements