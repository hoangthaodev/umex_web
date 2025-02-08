'use client'
import { getAllComponent } from '@/actions/component.action'
import { ComponentType } from '@/lib/types'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

type ComponentContextType = {
  componentAll: ComponentType[],
  setComponentAll: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  component0: ComponentType[],
  setComponent0: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  component1: ComponentType[],
  setComponent1: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  component2: ComponentType[],
  setComponent2: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  component3: ComponentType[],
  setComponent3: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  component4: ComponentType[],
  setComponent4: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  component5: ComponentType[],
  setComponent5: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  component6: ComponentType[],
  setComponent6: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  component7: ComponentType[],
  setComponent7: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  component8: ComponentType[],
  setComponent8: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  component9: ComponentType[],
  setComponent9: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  componentChange: ComponentType[],
  setComponentChange: React.Dispatch<React.SetStateAction<ComponentType[]>>
  handleDragStart: (e: React.DragEvent) => void,
  handleDragOver: (e: React.DragEvent) => void,
  handleDrop: (e: React.DragEvent) => void
}

const ComponentContext = createContext<ComponentContextType | undefined>(undefined)

type ComponentProviderType = {
  children: ReactNode
}

export const ComponentProvider = ({ children }: ComponentProviderType) => {
  const [componentAll, setComponentAll] = useState<ComponentType[]>([])
  const [component0, setComponent0] = useState<ComponentType[]>([])
  const [component1, setComponent1] = useState<ComponentType[]>([])
  const [component2, setComponent2] = useState<ComponentType[]>([])
  const [component3, setComponent3] = useState<ComponentType[]>([])
  const [component4, setComponent4] = useState<ComponentType[]>([])
  const [component5, setComponent5] = useState<ComponentType[]>([])
  const [component6, setComponent6] = useState<ComponentType[]>([])
  const [component7, setComponent7] = useState<ComponentType[]>([])
  const [component8, setComponent8] = useState<ComponentType[]>([])
  const [component9, setComponent9] = useState<ComponentType[]>([])
  const [componentChange, setComponentChange] = useState<ComponentType[]>([])

  useEffect(() => {
    const getData = async () => {
      const res = await getAllComponent()
      setComponentAll(res.components)
    }
    getData()
  }, [])

  useEffect(() => {
    if (componentAll && componentAll.length > 0) {
      setComponent0(componentAll.filter((item: any) => item.comp_position === 0 || item.comp_position === undefined).sort((a, b) => (a?.comp_index || 0) - (b?.comp_index || 0)))
      setComponent1(componentAll.filter((item: any) => item.comp_position === 1).sort((a, b) => (a?.comp_index || 0) - (b?.comp_index || 0)))
      setComponent2(componentAll.filter((item: any) => item.comp_position === 2).sort((a, b) => (a?.comp_index || 0) - (b?.comp_index || 0)))
      setComponent3(componentAll.filter((item: any) => item.comp_position === 3).sort((a, b) => (a?.comp_index || 0) - (b?.comp_index || 0)))
      setComponent4(componentAll.filter((item: any) => item.comp_position === 4).sort((a, b) => (a?.comp_index || 0) - (b?.comp_index || 0)))
      setComponent5(componentAll.filter((item: any) => item.comp_position === 5).sort((a, b) => (a?.comp_index || 0) - (b?.comp_index || 0)))
      setComponent6(componentAll.filter((item: any) => item.comp_position === 6).sort((a, b) => (a?.comp_index || 0) - (b?.comp_index || 0)))
      setComponent7(componentAll.filter((item: any) => item.comp_position === 7).sort((a, b) => (a?.comp_index || 0) - (b?.comp_index || 0)))
      setComponent8(componentAll.filter((item: any) => item.comp_position === 8).sort((a, b) => (a?.comp_index || 0) - (b?.comp_index || 0)))
      setComponent9(componentAll.filter((item: any) => item.comp_position === 9).sort((a, b) => (a?.comp_index || 0) - (b?.comp_index || 0)))

      setComponentChange([...componentAll])
    }
  }, [componentAll])

  var compTemp: ComponentType[]
  componentAll ? compTemp = [...componentAll] : compTemp = []
  var itemId: number
  var itemNew: ComponentType | undefined

  const handleDragStart = (e: React.DragEvent) => {
    itemId = Number(e.currentTarget.id)
    itemNew = compTemp.find((item) => item.comp_id === itemId)
    const parent = e.currentTarget.parentElement?.id
    var component: ComponentType[] = []
    if (itemNew) {
      switch (parent) {
        case "component0":
          component = [...component0]
          itemNew.comp_index = component.findIndex((item) => item.comp_id === itemId)
          break
        case "component1":
          component = [...component1]
          itemNew.comp_index = component.findIndex((item) => item.comp_id === itemId)
          break
        case "component2":
          component = [...component2]
          itemNew.comp_index = component.findIndex((item) => item.comp_id === itemId)
          break
        case "component3":
          component = [...component3]
          itemNew.comp_index = component.findIndex((item) => item.comp_id === itemId)
          break
        case "component4":
          component = [...component4]
          itemNew.comp_index = component.findIndex((item) => item.comp_id === itemId)
          break
        case "component5":
          component = [...component5]
          itemNew.comp_index = component.findIndex((item) => item.comp_id === itemId)
          break
        case "component6":
          component = [...component6]
          itemNew.comp_index = component.findIndex((item) => item.comp_id === itemId)
          break
        case "component7":
          component = [...component7]
          itemNew.comp_index = component.findIndex((item) => item.comp_id === itemId)
          break
        case "component8":
          component = [...component8]
          itemNew.comp_index = component.findIndex((item) => item.comp_id === itemId)
          break
        case "component9":
          component = [...component9]
          itemNew.comp_index = component.findIndex((item) => item.comp_id === itemId)
          break
      }
      component.forEach((item, index) => {
        if (item && (item.comp_index || index) > (itemNew?.comp_index || 0)) {
          const itemChange = compTemp.find((comp) => comp.comp_id === item.comp_id)
          itemChange!.comp_index = (item.comp_index || index) - 1
        }
      })
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()

    const dropZone = e.currentTarget
    const dropZoneId = dropZone.id
    var afterId: number | null = null

    const listChild = e.currentTarget.children
    Array.from(listChild).forEach(child => {
      const childRect = child.getBoundingClientRect()
      const mouseX = e.clientX

      if (mouseX > childRect.left + childRect.width / 2) {
        afterId = Number(child.id)
      }
    })

    var component: ComponentType[] = []
    var changeIndex: number = 0
    var changeId: number = 0

    if (itemNew) {
      switch (dropZoneId) {
        case "component0":
          component = [...component0]
          itemNew.comp_position = 0

          if (dropZone.childElementCount === 0 || afterId === null) {
            itemNew.comp_index = 0
          } else {
            const afterItem = compTemp.find(item => item.comp_id === afterId)
            changeIndex = (afterItem?.comp_index || 0) + 1
            changeId = itemNew.comp_id || 0

            itemNew.comp_index = changeIndex
          }
          break
        case "component1":
          component = [...component1]
          itemNew.comp_position = 1

          if (dropZone.childElementCount === 0 || afterId === null) {
            itemNew.comp_index = 0
          } else {
            const afterItem = compTemp.find(item => item.comp_id === afterId)
            changeIndex = (afterItem?.comp_index || 0) + 1
            changeId = itemNew.comp_id || 0

            itemNew.comp_index = changeIndex
          }
          break
        case "component2":
          component = [...component2]
          itemNew.comp_position = 2

          if (dropZone.childElementCount === 0 || afterId === null) {
            itemNew.comp_index = 0
          } else {
            const afterItem = compTemp.find(item => item.comp_id === afterId)
            changeIndex = (afterItem?.comp_index || 0) + 1
            changeId = itemNew.comp_id || 0

            itemNew.comp_index = changeIndex
          }
          break
        case "component3":
          component = [...component3]
          itemNew.comp_position = 3

          if (dropZone.childElementCount === 0 || afterId === null) {
            itemNew.comp_index = 0
          } else {
            const afterItem = compTemp.find(item => item.comp_id === afterId)
            changeIndex = (afterItem?.comp_index || 0) + 1
            changeId = itemNew.comp_id || 0

            itemNew.comp_index = changeIndex
          }
          break
        case "component4":
          component = [...component4]
          itemNew.comp_position = 4

          if (dropZone.childElementCount === 0 || afterId === null) {
            itemNew.comp_index = 0
          } else {
            const afterItem = compTemp.find(item => item.comp_id === afterId)
            changeIndex = (afterItem?.comp_index || 0) + 1
            changeId = itemNew.comp_id || 0

            itemNew.comp_index = changeIndex
          }
          break
        case "component5":
          component = [...component5]
          itemNew.comp_position = 5

          if (dropZone.childElementCount === 0 || afterId === null) {
            itemNew.comp_index = 0
          } else {
            const afterItem = compTemp.find(item => item.comp_id === afterId)
            changeIndex = (afterItem?.comp_index || 0) + 1
            changeId = itemNew.comp_id || 0

            itemNew.comp_index = changeIndex
          }
          break
        case "component6":
          component = [...component6]
          itemNew.comp_position = 6

          if (dropZone.childElementCount === 0 || afterId === null) {
            itemNew.comp_index = 0
          } else {
            const afterItem = compTemp.find(item => item.comp_id === afterId)
            changeIndex = (afterItem?.comp_index || 0) + 1
            changeId = itemNew.comp_id || 0

            itemNew.comp_index = changeIndex
          }
          break
        case "component7":
          component = [...component7]
          itemNew.comp_position = 7

          if (dropZone.childElementCount === 0 || afterId === null) {
            itemNew.comp_index = 0
          } else {
            const afterItem = compTemp.find(item => item.comp_id === afterId)
            changeIndex = (afterItem?.comp_index || 0) + 1
            changeId = itemNew.comp_id || 0

            itemNew.comp_index = changeIndex
          }
          break
        case "component8":
          component = [...component8]
          itemNew.comp_position = 8

          if (dropZone.childElementCount === 0 || afterId === null) {
            itemNew.comp_index = 0
          } else {
            const afterItem = compTemp.find(item => item.comp_id === afterId)
            changeIndex = (afterItem?.comp_index || 0) + 1
            changeId = itemNew.comp_id || 0

            itemNew.comp_index = changeIndex
          }
          break
        case "component9":
          component = [...component9]
          itemNew.comp_position = 9

          if (dropZone.childElementCount === 0 || afterId === null) {
            itemNew.comp_index = 0
          } else {
            const afterItem = compTemp.find(item => item.comp_id === afterId)
            changeIndex = (afterItem?.comp_index || 0) + 1
            changeId = itemNew.comp_id || 0

            itemNew.comp_index = changeIndex
          }
          break
      }
    }
    for (var i = 0; i < component.length; i++) {
      component.forEach((item) => {
        if (item.comp_index === changeIndex && item.comp_id !== changeId) {
          const itemChange = compTemp.find(comp => comp.comp_id === item.comp_id)
          itemChange!.comp_index = changeIndex + 1
          changeIndex++
          changeId = item.comp_id || 0
        }
      })
    }

    setComponentAll(compTemp)

  }


  return (
    <ComponentContext.Provider value={{
      componentAll, setComponentAll, component0, setComponent0, component1, setComponent1, component2, setComponent2, component3, setComponent3, component4, setComponent4, component5, setComponent5, component6, setComponent6, component7, setComponent7, component8, setComponent8, component9, setComponent9, componentChange, setComponentChange
      , handleDragStart, handleDragOver, handleDrop
    }}>
      {children}
    </ComponentContext.Provider>
  )
}

export const useComponent = () => {
  const context = React.useContext(ComponentContext)
  if (!context) {
    throw new Error('useComponent must be used within a ComponentProvider')
  }
  return context
}