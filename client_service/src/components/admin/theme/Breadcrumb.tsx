'use client'
import { useBreadcrumb } from '@/app/ux-admin/(admin)/theme/BreadcrumbContext'
import { BreadcrumbType } from '@/lib/types'
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
  const backlink = lastOtherBr ? lastOtherBr.link : ""

  const hideButton = backlink === ""

  const router = useRouter()

  return (
    <div className='flex items-center mb-2 border-b border-gray-400'>
      <button onClick={() => {
        router.push(backlink)
      }}
        className={`${hideButton ? "hidden" : "flex"} text-blue-700 w-6 h-12 items-center justify-center border-l-2 hover:border-blue-700`}>
        <LuChevronLeft />
      </button>
      <div className='px-2'>
        <ol className='flex text-gray-700'>
          {
            hideButton ? <li>You are customizing</li> : null
          }
          {
            otherBr &&
            otherBr.map((br, index) => {
              return (
                <li key={index}
                  className='breadcrumb_li'
                >
                  {br.name}
                </li>
              )
            })
          }

        </ol>
        {
          lastBr &&
          (
            <div>{lastBr.name}</div>
          )
        }
      </div>
    </div>
  )
}

export default Breadcrumb