'use client'

import { getAllMenu } from '@/action/menu.action'
import { getAllMenuLocation, updateMenuLocation } from '@/action/menuLocation.action'
import DivNgang from '@/components/DivNgang'
import { MenuLocationType, MenuType } from '@/lib/type'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const ManageLocations = () => {
  const [changedMenuLocations, setChangedMenuLocations] = useState<MenuLocationType[]>([])
  const [allMenuLocation, setAllMenuLocation] = useState<MenuLocationType[]>([])
  const [allMenu, setAllMenu] = useState<MenuType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const locations = await getAllMenuLocation()
      if (!locations) return
      setAllMenuLocation(locations)
      const menus = await getAllMenu()
      if (!menus) return
      setAllMenu(menus)
    }
    fetchData()
  }, [])

  const handleSave = () => {
    if (changedMenuLocations.length <= 0) return
    changedMenuLocations.map(i => {
      const newMenu: MenuLocationType = {
        location_id: i.location_id,
        location_name: i.location_name,
        menu_id: i.menu_id,
      }
      updateMenuLocation(newMenu).then(data => {
        if (!data) {
          console.log("fail updateMenuLocation::", data);
          toast.error("fail updateMenuLocation")
          return;
        }
      })
    })
    setChangedMenuLocations([])
    toast.success("Update successfully")
  }

  return (
    <div className='pt-4 flex flex-col gap-4'>
      <label>Your theme supports 7 menus. Select which menu appears in each location.</label>
      <div className='border border-gray-400'>
        <div className='flex p-2'>
          <h2 className='w-1/2'>Theme Location</h2>
          <h2 className='w-1/2'>Assigned Menu</h2>
        </div>
        <DivNgang />
        <div className='flex flex-col p-2 gap-2'>
          {allMenuLocation.map((location) => (
            <div key={location.location_id} className='flex'>
              <label className='w-1/2'>{location.location_name}</label>
              <select
                className='w-1/2 border border-gray-400 rounded-sm px-2 py-1'
                value={location.menu_id} onChange={(e) => {
                  const newMenuLocation = [...allMenuLocation].map(i => {
                    if (i.location_id === location.location_id) {
                      i.menu_id = parseInt(e.target.value, 10)
                      const hadChanged = changedMenuLocations.find(loc => loc.location_id === i.location_id)
                      if (hadChanged) {
                        const newChanged = [...changedMenuLocations].map(loc => {
                          if (loc.location_id === hadChanged.location_id) {
                            loc.menu_id = i.menu_id;
                          }
                          return loc;
                        })
                        setChangedMenuLocations(newChanged);
                      } else {
                        setChangedMenuLocations([...changedMenuLocations, i]);
                      }
                    }
                    return i;
                  })
                  setAllMenuLocation(newMenuLocation);
                }}>
                <option value={0}>--Select Menu--</option>
                {allMenu.map((menu) => (
                  <option key={menu.menu_id} value={menu.menu_id}>{menu.menu_name}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          onClick={handleSave}
          className='bg-blue-600 text-gray-100 px-2 py-1 rounded-sm'>Save Changes</button>
      </div>
    </div>
  )
}

export default ManageLocations