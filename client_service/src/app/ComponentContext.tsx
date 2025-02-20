'use client'
import { getAllComponent } from '@/actions/component.action'
import { listComponent } from '@/lib/componentMap'
import { ComponentType } from '@/lib/types'
import { DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core'
import React, { createContext, ReactNode, useEffect, useRef, useState } from 'react'

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
  modComponent1: ComponentType[],
  setModComponent1: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  modComponent2: ComponentType[],
  setModComponent2: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  modComponent3: ComponentType[],
  setModComponent3: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  modComponent4: ComponentType[],
  setModComponent4: React.Dispatch<React.SetStateAction<ComponentType[]>>,
  modComponent5: ComponentType[],
  setModComponent5: React.Dispatch<React.SetStateAction<ComponentType[]>>
  handleDragOver: (event: DragOverEvent) => void,
  handleDragStart: (event: DragStartEvent) => void,
  activeItem: ComponentType | undefined,
  handleDragEnd: (event: DragEndEvent) => void,
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
  const [modComponent1, setModComponent1] = useState<ComponentType[]>([])
  const [modComponent2, setModComponent2] = useState<ComponentType[]>([])
  const [modComponent3, setModComponent3] = useState<ComponentType[]>([])
  const [modComponent4, setModComponent4] = useState<ComponentType[]>([])
  const [modComponent5, setModComponent5] = useState<ComponentType[]>([])

  useEffect(() => {
    const getData = async () => {
      const res = await getAllComponent()
      const allComponent: ComponentType[] = res
      setComponentAll(allComponent)
      setComponent0(allComponent.filter((item) => item.component_position === 0 || item.component_position === undefined).sort((a, b) => a?.component_index - b?.component_index))
      setComponent1(allComponent.filter((item) => item.component_position === 1).sort((a, b) => a?.component_index - b?.component_index))
      setComponent2(allComponent.filter((item) => item.component_position === 2).sort((a, b) => a?.component_index - b?.component_index))
      setComponent3(allComponent.filter((item) => item.component_position === 3).sort((a, b) => a?.component_index - b?.component_index))
      setComponent4(allComponent.filter((item) => item.component_position === 4).sort((a, b) => a?.component_index - b?.component_index))
      setComponent5(allComponent.filter((item) => item.component_position === 5).sort((a, b) => a?.component_index - b?.component_index))
      setComponent6(allComponent.filter((item) => item.component_position === 6).sort((a, b) => a?.component_index - b?.component_index))
      setComponent7(allComponent.filter((item) => item.component_position === 7).sort((a, b) => a?.component_index - b?.component_index))
      setComponent8(allComponent.filter((item) => item.component_position === 8).sort((a, b) => a?.component_index - b?.component_index))
      setComponent9(allComponent.filter((item) => item.component_position === 9).sort((a, b) => a?.component_index - b?.component_index))
      setModComponent1(allComponent.filter((item) => item.component_position === 10).sort((a, b) => a?.component_index - b?.component_index))
      setModComponent2(allComponent.filter((item) => item.component_position === 11).sort((a, b) => a?.component_index - b?.component_index))
      setModComponent3(allComponent.filter((item) => item.component_position === 12).sort((a, b) => a?.component_index - b?.component_index))
      setModComponent4(allComponent.filter((item) => item.component_position === 13).sort((a, b) => a?.component_index - b?.component_index))
      setModComponent5(allComponent.filter((item) => item.component_position === 14).sort((a, b) => a?.component_index - b?.component_index))
    }
    getData()
  }, [])

  const component0Ref = useRef(component0)
  const component1Ref = useRef(component1)
  const component2Ref = useRef(component2)
  const component3Ref = useRef(component3)
  const component4Ref = useRef(component4)
  const component5Ref = useRef(component5)
  const component6Ref = useRef(component6)
  const component7Ref = useRef(component7)
  const component8Ref = useRef(component8)
  const component9Ref = useRef(component9)
  const modComponent1Ref = useRef(modComponent1)
  const modComponent2Ref = useRef(modComponent2)
  const modComponent3Ref = useRef(modComponent3)
  const modComponent4Ref = useRef(modComponent4)
  const modComponent5Ref = useRef(modComponent5)

  useEffect(() => {
    component0Ref.current = component0
  }, [component0])
  useEffect(() => {
    component1Ref.current = component1
  }, [component1])
  useEffect(() => {
    component2Ref.current = component2
  }, [component2])
  useEffect(() => {
    component3Ref.current = component3
  }, [component3])
  useEffect(() => {
    component4Ref.current = component4
  }, [component4])
  useEffect(() => {
    component5Ref.current = component5
  }, [component5])
  useEffect(() => {
    component6Ref.current = component6
  }, [component6])
  useEffect(() => {
    component7Ref.current = component7
  }, [component7])
  useEffect(() => {
    component8Ref.current = component8
  }, [component8])
  useEffect(() => {
    component9Ref.current = component9
  }, [component9])
  useEffect(() => {
    modComponent1Ref.current = modComponent1
  }, [modComponent1])
  useEffect(() => {
    modComponent2Ref.current = modComponent2
  }, [modComponent2])
  useEffect(() => {
    modComponent3Ref.current = modComponent3
  }, [modComponent3])
  useEffect(() => {
    modComponent4Ref.current = modComponent4
  }, [modComponent4])
  useEffect(() => {
    modComponent5Ref.current = modComponent5
  }, [modComponent5])

  const idToComponent = (id: number) => {
    switch (id) {
      case 0: return component0Ref.current
      case 1: return component1Ref.current
      case 2: return component2Ref.current
      case 3: return component3Ref.current
      case 4: return component4Ref.current
      case 5: return component5Ref.current
      case 6: return component6Ref.current
      case 7: return component7Ref.current
      case 8: return component8Ref.current
      case 9: return component9Ref.current
      case 10: return modComponent1Ref.current
      case 11: return modComponent2Ref.current
      case 12: return modComponent3Ref.current
      case 13: return modComponent4Ref.current
      case 14: return modComponent5Ref.current
      default: return []
    }
  }

  const idToSetComponent = (id: number, items: ComponentType[]) => {
    switch (id) {
      case 0: setComponent0(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 1: setComponent1(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 2: setComponent2(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 3: setComponent3(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 4: setComponent4(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 5: setComponent5(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 6: setComponent6(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 7: setComponent7(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 8: setComponent8(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 9: setComponent9(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 10: setModComponent1(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 11: setModComponent2(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 12: setModComponent3(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 13: setModComponent4(items.sort((a, b) => a.component_index - b.component_index)); break;
      case 14: setModComponent5(items.sort((a, b) => a.component_index - b.component_index)); break;
      default: break;
    }
  }

  const nameToComponent = (name: string) => {
    switch (name) {
      case "Comp0": return component0Ref.current
      case "Comp1": return component1Ref.current
      case "Comp2": return component2Ref.current
      case "Comp3": return component3Ref.current
      case "Comp4": return component4Ref.current
      case "Comp5": return component5Ref.current
      case "Comp6": return component6Ref.current
      case "Comp7": return component7Ref.current
      case "Comp8": return component8Ref.current
      case "Comp9": return component9Ref.current
      case "ModComp1": return modComponent1Ref.current
      case "ModComp2": return modComponent2Ref.current
      case "ModComp3": return modComponent3Ref.current
      case "ModComp4": return modComponent4Ref.current
      case "ModComp5": return modComponent5Ref.current
      default: return []
    }
  }

  const [activeItem, setActiveItem] = useState<ComponentType | undefined>(undefined)

  const findContainer = (id: string) => {
    const item = componentAll.find((i) => i.component_id === Number(id))
    if (item) {
      return item.component_position || 0
    }

    const container = Object.keys(listComponent).find((key) => listComponent[Number(key)].includes(id))
    return Number(container)
  }

  const arrayMove = (compId: number, activeIndex: number, overIndex: number) => {
    if (!activeItem) return
    const comp = idToComponent(compId)
    const newArray = [...comp]

    if (activeIndex < overIndex) {
      newArray.filter((i) => i.component_index > activeIndex && i.component_index <= overIndex).map((i) => i.component_index = i.component_index - 1)
    } else {
      newArray.filter((i) => i.component_index >= overIndex && i.component_index < activeIndex).map((i) => i.component_index = i.component_index + 1)
    }
    const item = newArray.find((i) => i.component_id === activeItem.component_id)
    if (!item) return
    item.component_index = overIndex

    idToSetComponent(compId, newArray)
  }

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    if (!active) return
    setActiveItem(componentAll.find((i) => i.component_id === active.id))
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event
    if (!active || !over) return
    if (!activeItem) return

    const activeContainer = findContainer(active.id.toString())
    const overContainer = findContainer(over.id.toString())

    if (activeContainer === overContainer) return

    // them vao component
    const activeComponent = idToComponent(activeContainer)
    const overComponent = idToComponent(overContainer)

    activeItem.component_index = overComponent.length + 1
    activeItem.component_position = overContainer

    const newActiveComponent = activeComponent.filter((i) => i.component_id !== activeItem?.component_id)
    const newOverComponent = [
      ...overComponent,
      activeItem
    ]

    idToSetComponent(activeContainer, newActiveComponent)
    idToSetComponent(overContainer, newOverComponent)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!active || !over) return
    if (!activeItem) return

    const activeContainer = findContainer(active.id.toString())
    const overContainer = findContainer(over.id.toString())

    if (activeContainer !== overContainer) return

    // them vao component
    const newComponent = [...idToComponent(activeContainer)]

    const activeIndex = newComponent.find((i) => i.component_id === active.id)?.component_index || 1
    const overIndex = newComponent.find((i) => i.component_id === over.id)?.component_index || 1

    arrayMove(activeContainer, activeIndex, overIndex)
  }

  return (
    <ComponentContext.Provider value={{
      componentAll, setComponentAll, component0, setComponent0, component1, setComponent1, component2, setComponent2, component3, setComponent3, component4, setComponent4, component5, setComponent5, component6, setComponent6, component7, setComponent7, component8, setComponent8, component9, setComponent9
      , modComponent1, setModComponent1, modComponent2, setModComponent2, modComponent3, setModComponent3, modComponent4, setModComponent4, modComponent5, setModComponent5
      , handleDragOver, handleDragStart, activeItem, handleDragEnd
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