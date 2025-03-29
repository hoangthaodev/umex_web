import DivNgang from '@/components/DivNgang'
import { PlateEditor } from '@/components/editor/plate-editor'
import React, { SetStateAction } from 'react'

type Props = {
  className?: string
  value: string
  setValue: React.Dispatch<SetStateAction<string>>
  label?: string
}

const RTEditor = ({ className, value, setValue, label }: Props) => {
  return (
    <div className={`${className ? className : ""} flex flex-col`} data-registry="plate">
      {
        label && (
          <>
            <h3 className='px-2 bg-gray-300'>{label}</h3>
            <DivNgang />
          </>
        )
      }
      <PlateEditor value={value} setValue={setValue} />

    </div>
  )
}

export default RTEditor