'use client'
import DivNgang from '@/components/DivNgang'
import { statusMap } from '@/lib/pageMap'
import { PageType } from '@/lib/types'
import Link from 'next/link'
import React, { SetStateAction, useState } from 'react'
import { FaMapPin } from 'react-icons/fa'
import { FaCalendarDays } from 'react-icons/fa6'

type Props = {
  page?: PageType
  status: number
  setStatus: React.Dispatch<SetStateAction<number>>
  publishYear: number
  setPublishYear: React.Dispatch<SetStateAction<number>>
  publishMonth: number
  setPublishMonth: React.Dispatch<SetStateAction<number>>
  publishDay: number
  setPublishDay: React.Dispatch<SetStateAction<number>>
  handleMoveToTrash: () => void
  handleSave: () => void
}

const Publish = ({ page, status, setStatus, publishYear, setPublishYear, publishMonth, setPublishMonth, publishDay, setPublishDay, handleMoveToTrash, handleSave }: Props) => {
  const [isEditStatus, setIsEditStatus] = useState(false)
  const [editStatus, setEditStatus] = useState(status)
  const [isEditDate, setIsEditDate] = useState(false)
  const [editYear, setEditYear] = useState(publishYear)
  const [editMonth, setEditMonth] = useState(publishMonth)
  const [editDay, setEditDay] = useState(publishDay)

  return (
    <div className='border border-gray-400 rounded-sm'>
      <h3 className='px-2 bg-gray-300'>Publish</h3>
      <DivNgang />
      <div className='p-2'>
        <div className='flex justify-end'>
          <Link href={"#"} target='_blank'
            className='border border-blue-600 text-blue-600 px-2 rounded-sm'
          >Preview Change</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <FaMapPin />
          <label>Status:</label>
          <label className='font-semibold'>{statusMap[status]}</label>
          {
            !isEditStatus &&
            <label className='text-blue-600 underline'
              onClick={() => { setIsEditStatus(true) }}
            >Edit</label>
          }
        </div>
        {
          isEditStatus &&
          <div className='flex gap-2'>
            <select
              className='border border-gray-400 px-2 rounded-sm'
              value={editStatus}
              onChange={(e) => { setEditStatus(parseInt(e.target.value)) }}
            >
              <option value={1}>Published</option>
              <option value={2}>Pending Review</option>
              <option value={3}>Draft</option>
            </select>
            <div className='flex gap-2'>
              <label className='px-1 border border-blue-600 text-blue-600'
                onClick={() => { setStatus(editStatus); setIsEditStatus(false) }}
              >OK</label>
              <label className='text-blue-600 underline'
                onClick={() => { setIsEditStatus(false) }}
              >Cancel</label>
            </div>
          </div>
        }
        <div className='flex gap-2 items-center'>
          <FaCalendarDays />
          <label>Publised on:</label>
          <label className='font-semibold'>{publishYear + "/" + publishMonth + "/" + publishDay}</label>
          {
            !isEditDate &&
            <label className='text-blue-600 underline'
              onClick={() => { setIsEditDate(true) }}
            >Edit</label>
          }
        </div>
        {
          isEditDate &&
          <div className='flex gap-2'>
            <input
              className='border border-gray-400 rounded-sm w-20 px-2'
              type="number" value={editYear} onChange={(e) => { setEditYear(parseInt(e.target.value)) }} />
            <input min={1} max={12}
              className='border border-gray-400 rounded-sm w-14 px-2'
              type="number" value={editMonth} onChange={(e) => { setEditMonth(parseInt(e.target.value)) }} />
            <input min={1} max={31}
              className='border border-gray-400 rounded-sm w-14 px-2'
              type="number" value={editDay} onChange={(e) => { setEditDay(parseInt(e.target.value)) }} />
            <div className='flex gap-2'>
              <label className='px-1 border border-blue-600 text-blue-600'
                onClick={() => {
                  setPublishYear(editYear)
                  setPublishMonth(editMonth)
                  setPublishDay(editDay)
                  setIsEditDate(false)
                }}
              >OK</label>
              <label className='text-blue-600 underline'
                onClick={() => { setIsEditDate(false) }}
              >Cancel</label>
            </div>
          </div>
        }
      </div>
      <DivNgang />
      <div className='flex justify-between p-2 items-center'>
        <div>
          {
            page && (
              <label className='text-blue-600 underline'
                onClick={handleMoveToTrash}
              >Move to Trash</label>
            )
          }
        </div>
        <button className='bg-blue-600 px-2 py-1 rounded-sm text-gray-100'
          onClick={handleSave}
        >Save</button>
      </div>
    </div>
  )
}

export default Publish