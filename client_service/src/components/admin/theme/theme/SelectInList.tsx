'use client'

import React, { SetStateAction } from 'react'

type Props = {
  arrayList: { id: number, name: string }[],
  selected: number,
  setSelected: React.Dispatch<SetStateAction<number>>
}

const SelectInList = ({ arrayList, selected, setSelected }: Props) => {
  return (
    <div className={`flex flex-wrap justify-center gap-1`}>
      {
        arrayList.map(i => {
          return (
            <label
              key={i.id}
              onClick={() => { setSelected(i.id) }}
              className={`${selected === i.id ? "bg-blue-500 text-gray-100" : "bg-gray-100"} text-center p-1 grow `}>
              {i.name}
            </label>
          )
        })
      }
    </div>
  )
}

export default SelectInList