'use client'

import { createNewMenu, deleteMenu, updateMenu } from '@/action/menu.action'
import { getAllMenuLocation, updateMenuLocation } from '@/action/menuLocation.action'
import ArrayToList from '@/components/admin/theme/menus/edit/menuStructure/ArrayToList'
import DivNgang from '@/components/DivNgang'
import { MenuLocationType, MenuType, MenuValueType } from '@/lib/type'
import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import slugify from 'slugify'
import { toast } from 'sonner'
import z from 'zod';

type Props = {
  isNew: boolean
  setIsNew: React.Dispatch<SetStateAction<boolean>>
  selectedMenu: MenuType | undefined
  setSelectedMenu: React.Dispatch<SetStateAction<MenuType | undefined>>
  menuValue: string
  setMenuValue: React.Dispatch<SetStateAction<string>>
  allMenu: MenuType[]
  setAllMenu: React.Dispatch<SetStateAction<MenuType[]>>
}

const MenuStructure = ({ isNew, setIsNew, selectedMenu, setSelectedMenu, menuValue, setMenuValue, allMenu, setAllMenu
}: Props) => {
  const [menuName, setMenuName] = useState(selectedMenu?.menu_name || "")
  const [listValue, setListValue] = useState<MenuValueType[]>(JSON.parse(menuValue))
  const [allMenuLocation, setAllMenuLocation] = useState<MenuLocationType[]>([])
  const [selectedLocation, setSelectedLocation] = useState<number[]>([])
  const prevSelectedMenu = useRef<MenuType>(selectedMenu)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const menuLocations = await getAllMenuLocation()
      if (menuLocations) {
        setAllMenuLocation(menuLocations)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (selectedMenu) {
      setMenuName(selectedMenu.menu_name)
      setListValue(JSON.parse(menuValue))
      const menuPosition = allMenuLocation.filter(i => i.menu_id === selectedMenu.menu_id!).map(i => i.location_id!)
      setSelectedLocation(menuPosition)
    } else {
      setMenuName("")
      setListValue([])
      setSelectedLocation([])
    }
  }, [selectedMenu])

  // useEffect(() => {
  //   if (!isLoading) return
  //   const fetchData = async () => {
  //     const allLocation = await getAllMenuLocation()
  //     if (!allLocation) return
  //     setAllMenuLocation(allLocation)
  //     if (!selectedMenu) {
  //       setMenuName("")
  //       setListValue([])
  //       setSelectedLocation([])
  //     } else {
  //       setMenuName(selectedMenu.menu_name)
  //       setListValue(JSON.parse(menuValue))
  //       const menuPosition = allLocation.filter(i => i.menu_id === selectedMenu.menu_id!).map(i => i.location_id!)
  //       setSelectedLocation(menuPosition)
  //     }

  //     setIsLoading(false)
  //   }
  //   fetchData()
  // }, [isLoading])

  // useEffect(() => {
  //   setIsLoading(true)
  // }, [selectedMenu])

  useEffect(() => {
    if (isNew) {
      prevSelectedMenu.current = selectedMenu
      setSelectedMenu(undefined)
    }
  }, [isNew])

  useEffect(() => {
    setListValue(JSON.parse(menuValue))
  }, [menuValue])

  const handleSaveMenu = () => {
    if (!selectedMenu) return
    const newMenu: MenuType = {
      menu_id: selectedMenu.menu_id!,
      menu_name: menuName,
      menu_value: JSON.stringify(listValue),
      menu_slug: selectedMenu.menu_slug,
    }
    updateMenu(newMenu)

    if (selectedLocation.length <= 0) return
    const prevSelectedLocation = allMenuLocation.filter(i => i.menu_id === selectedMenu.menu_id!)
    // prev xoa nhung cai k co
    prevSelectedLocation.forEach(i => {
      const hadLocation = selectedLocation.includes(i.location_id!)
      if (!hadLocation) {
        const newMenuLocation: MenuLocationType = {
          location_id: i.location_id!,
          location_name: i.location_name,
          menu_id: 0,
        }
        updateMenuLocation(newMenuLocation)
      }
    })
    // them nhung cai moi
    allMenuLocation.forEach(i => {
      const hadLocation = selectedLocation.includes(i.location_id!)
      if (!hadLocation) return
      if (i.menu_id === selectedMenu.menu_id!) return
      const newMenuLocation: MenuLocationType = {
        location_id: i.location_id!,
        location_name: i.location_name,
        menu_id: selectedMenu.menu_id!,
      }
      updateMenuLocation(newMenuLocation)
    })

    setIsLoading(true)

    toast.success("Update successfully")
  }

  const handleCreateMenu = async () => {
    const menuNameValidate = z.string().nonempty()
    if (!menuNameValidate.safeParse(menuName).success) {
      return toast.error("Menu Name is required")
    }
    const newMenu: MenuType = {
      menu_name: menuName,
      menu_value: JSON.stringify([]),
      menu_slug: slugify(menuName, { lower: true, locale: "vi" }),
    }

    const menu = await createNewMenu(newMenu)
    if (!menu) return
    setAllMenu([...allMenu, menu])
    setSelectedMenu(menu)

    allMenuLocation.forEach(i => {
      const hadLocation = selectedLocation.includes(i.location_id!)
      if (!hadLocation) return
      const newMenuLocation: MenuLocationType = {
        location_id: i.location_id!,
        location_name: i.location_name,
        menu_id: menu.menu_id!,
      }
      updateMenuLocation(newMenuLocation)
    })

    setIsNew(false)
    toast.success("Create successfully")
  }

  const handleDeleteMenu = async () => {
    if (!selectedMenu) return
    const delMenu = await deleteMenu(selectedMenu.menu_id!)
    if (!delMenu) {
      toast.error("Delete failed!")
      return
    }
    const newAllMenu = [...allMenu]
    const delMenuIndex = newAllMenu.findIndex(i => i.menu_id === selectedMenu.menu_id!)
    newAllMenu.splice(delMenuIndex, 1)
    if (allMenu.length <= 0) {
      setIsNew(true)
      return
    }
    setAllMenu(newAllMenu)
    const prev = prevSelectedMenu.current ? (prevSelectedMenu.current !== selectedMenu ? prevSelectedMenu.current : allMenu[0]) : allMenu[0]
    setSelectedMenu(prev)

    toast.success("Delete successfully")
  }

  const handleCancel = () => {
    setIsNew(false)
    setSelectedMenu(prevSelectedMenu.current)
  }

  return (
    <div>
      <div className='p-2 flex gap-2 items-center'>
        <label>Menu Name</label>
        <input
          type='text'
          value={menuName}
          onChange={(e) => {
            setMenuName(e.target.value)
          }}
          className='border border-gray-400 rounded-sm px-2 py-1' />
      </div>
      <DivNgang />
      <div className='p-2'>
        <DndProvider backend={HTML5Backend}>
          {
            isNew ? (<label>Give your menu a name, then click Create Menu.</label>)
              : listValue.length <= 0 ? (<label>Add menu items from the column on the left.</label>)
                : (
                  <ArrayToList array={listValue}
                    setArray={setMenuValue}
                  />
                )
          }
        </DndProvider>
      </div>
      <div className='p-2'>
        <DivNgang />
        <div className='flex flex-col gap-2'>
          <h2>Menu Settings</h2>
          <div className='flex gap-2'>
            <label>Display Location</label>
            <ul>
              {
                allMenuLocation.map(location => {
                  return (
                    <li
                      className='flex gap-2'
                      key={location.location_id}>
                      <input type='checkbox' checked={selectedLocation.includes(location.location_id!)} onChange={() => {
                        if (selectedLocation.includes(location.location_id!)) {
                          setSelectedLocation(selectedLocation.filter(i => i !== location.location_id!))
                        } else {
                          setSelectedLocation([...selectedLocation, location.location_id!])
                        }
                      }} />
                      {location.location_name}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          {
            isNew ? (<>
              <label className='underline text-red-600 cursor-pointer'
                onClick={handleCancel}>Cancel</label>
              <label className='text-gray-200 border bg-blue-600 px-2 py-1 rounded-sm'
                onClick={handleCreateMenu}
              >Create Menu</label>
            </>) : (<>
              <label
                onClick={handleDeleteMenu}
                className='underline text-red-600 cursor-pointer'>Delete Menu</label>
              <label
                onClick={handleSaveMenu}
                className='text-gray-200 border bg-blue-600 px-2 py-1 rounded-sm'>Save Menu</label>
            </>)
          }
        </div>
      </div>
    </div>
  )
}

export default MenuStructure