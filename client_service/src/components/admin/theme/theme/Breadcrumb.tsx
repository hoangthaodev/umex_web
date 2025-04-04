'use client'

import { useTheme } from '@/app/themeContext'
import { useBreadcrumb } from '@/app/ux-admin/theme/(theme)/BreadcrumbContext'
import { BreadcrumbType } from '@/lib/type'
import { useRouter } from 'next/navigation'
import React from 'react'
import { LuChevronLeft } from 'react-icons/lu'

const Breadcrumb = () => {
  const { breadcrumb } = useBreadcrumb()
  const brLength = breadcrumb.length
  const lastBr = breadcrumb[brLength - 1]
  const otherBr: BreadcrumbType[] = [...breadcrumb].filter(br => br.name !== lastBr.name)
  const otherBrLeng: number = otherBr.length
  const lastOtherBr: BreadcrumbType = otherBr[otherBrLeng - 1]
  const backlink = lastOtherBr ? lastOtherBr.link : "#"

  const hideButton = backlink === "#"

  const router = useRouter()

  const { isChanged, saveTheme } = useTheme()

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <button onClick={() => {
          router.push(backlink)
        }}
          className={`${hideButton ? "hidden" : "flex"} text-blue-700 min-h-14 items-center justify-center cursor-pointer border-l-2 hover:border-blue-700`}>
          <LuChevronLeft size={22} />
        </button>
        <div className='py-2 pl-2'>
          <label className='flex text-gray-700 '>
            {
              hideButton ? <span>You are customizing</span> : null
            }
            {
              otherBr &&
              otherBr.map((br, index) => {
                return (
                  <span key={index}
                    className={`not-last:after:content-['>>']`}>{br.name}</span>
                )
              })
            }

          </label>
          {
            lastBr &&
            (
              <h4 className='w-48 whitespace-nowrap overflow-hidden overflow-ellipsis'>{lastBr.name}</h4>
            )
          }
        </div>
      </div>
      <div className='py-2 pr-2'>
        <button className={`${isChanged ? "bg-blue-700 hover:bg-blue-800 cursor-pointer" : "bg-blue-400 cursor-auto"} text-gray-200 text-sm py-1 px-2 rounded-md`}
          onClick={isChanged ? saveTheme : () => { }}
          disabled={!isChanged}
        >Published</button>
      </div>
    </div>
  )
}

export default Breadcrumb