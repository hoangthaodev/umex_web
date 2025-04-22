'use client'

import { getAllMenu } from '@/action/menu.action'
import AddMenuItems from '@/components/admin/theme/menus/edit/AddMenuItems'
import MenuStructure from '@/components/admin/theme/menus/edit/MenuStructure'
import { MenuType } from '@/lib/type'
import React, { useEffect, useState } from 'react'

const EditMenus = () => {
  const [isNew, setIsNew] = useState<boolean>(true)
  const [selectedMenu, setSelectedMenu] = useState<MenuType | undefined>(undefined)
  const [valueSO, setValueSO] = useState(0)
  const [menuValue, setMenuValue] = useState<string>("[]")
  const [allMenu, setAllMenu] = useState<MenuType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const menus = await getAllMenu()
      if (menus) {
        setAllMenu(menus)
        if (menus.length <= 0) {
          setIsNew(true)
        } else {
          setIsNew(false)
          setSelectedMenu(menus[0])
          setValueSO(menus[0].menu_id!)
        }
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (selectedMenu) {
      setMenuValue(selectedMenu.menu_value)
      setValueSO(selectedMenu.menu_id!)
    } else {
      setMenuValue("[]")
    }
  }, [selectedMenu])

  return (
    <div className='pt-4'>
      <div className='border border-gray-400 p-2'>
        {
          allMenu.length > 1 ? (
            <div className='flex gap-2 items-center'>
              <span>Select a menu to edit: </span>
              <select
                value={valueSO}
                onChange={(e) => {
                  setValueSO(parseInt(e.target.value))
                }}
                className='border border-gray-400 rounded-sm px-2 py-1'
              >
                {
                  allMenu.map(menu => (
                    <option key={menu.menu_id} value={menu.menu_id}>{menu.menu_name}</option>
                  ))
                }
              </select>
              <button
                className='text-blue-600 border border-blue-600 px-2 py-1 rounded-sm'
                onClick={() => {
                  const selected = allMenu.find(i => i.menu_id === valueSO)
                  if (selected) {
                    setIsNew(false)
                    setSelectedMenu(selected)
                  }
                }}>Select</button>
            </div>
          ) : (
            <span>Change menu in below, </span>
          )
        }
        <span>or </span>
        <span className='cursor-pointer text-blue-600 underline'
          onClick={() => { setIsNew(true) }}
        >create a new menu</span>
        <span>. Do not forget to save your changes!</span>
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='flex flex-col gap-2 md:w-1/4 min-w-[300px]'>
          <h2>Add menu items</h2>
          <div className='border border-gray-400'>
            <AddMenuItems menuValue={menuValue} setMenuValue={setMenuValue} isNew={isNew} />
          </div>
        </div>
        <div className='flex flex-col gap-2 grow'>
          <h2>Menu Structure</h2>
          <div className='border border-gray-400'>
            <MenuStructure menuValue={menuValue} setMenuValue={setMenuValue} isNew={isNew} setIsNew={setIsNew} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} allMenu={allMenu} setAllMenu={setAllMenu} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditMenus