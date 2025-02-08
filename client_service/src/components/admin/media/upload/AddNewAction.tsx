'use client'
import React, { SetStateAction } from 'react'

type Props = {
  setUpload: React.Dispatch<SetStateAction<boolean>>
}

const AddNewAction = ({ setUpload }: Props) => {
  return (
    <div className='flex gap-2'>
      <h1>Media Library</h1>
      <button
        className='border border-blue-400 px-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm text-blue-700'
        onClick={() => setUpload((prev) => !prev)}>Add new media file</button>
    </div>
  )
}

export default AddNewAction