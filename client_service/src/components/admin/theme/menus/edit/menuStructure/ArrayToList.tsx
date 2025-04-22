'use client'

import ItemMenu from '@/components/admin/theme/menus/edit/menuStructure/ItemMenu'
import { MenuValueType } from '@/lib/type'
import React, { ReactNode, SetStateAction, useEffect, useState } from 'react'

type Props = {
  array: MenuValueType[]
  setArray: React.Dispatch<SetStateAction<string>>
}

const ArrayToList = ({ array, setArray }: Props): ReactNode => {

  const [listArray, setListArray] = useState<MenuValueType[]>(array)

  useEffect(() => {
    setListArray(array)
  }, [array])

  return (
    <ul className='space-y-2 py-4'>
      {
        listArray.map((i, index) => {
          return (
            <ItemMenu array={array} setArray={setArray} key={i.value_id} menuValue={i} index={index} />
          )
        })
      }
    </ul>
  )
}

export default ArrayToList