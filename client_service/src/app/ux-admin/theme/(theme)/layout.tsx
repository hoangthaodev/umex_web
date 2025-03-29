'use client'

import { BreadcrumbProvider } from '@/app/ux-admin/theme/(theme)/BreadcrumbContext'
import Breadcrumb from '@/components/admin/theme/theme/Breadcrumb'
import DivNgang from '@/components/DivNgang'
import React, { ReactNode, useState } from 'react'
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6'

type Props = {
  children: ReactNode
}

const ThemeLayout = ({ children }: Props) => {
  const [isShowSidebar, setIsShowSidebar] = useState(true)

  const handleHideSidebar = () => {
    setIsShowSidebar(false)
  }
  const handleShowSidebar = () => {
    setIsShowSidebar(true)
  }

  return (
    <BreadcrumbProvider>
      <div className='relative flex w-full h-[calc(100vh-2.5rem)]'>
        <div className={`${isShowSidebar ? "" : "hidden"} w-full h-full sm:w-80 border-r text-sm flex flex-col`}>
          <Breadcrumb />
          <DivNgang />
          <div className='overflow-y-auto'>
            {children}
          </div>
          <div className='grow' />
          <DivNgang className='hidden sm:block' />
          <div className='hidden sm:flex items-center px-2 py-4 gap-2 text-blue-600'>
            <FaCircleChevronLeft size={22} className='cursor-pointer'
              onClick={handleHideSidebar} />
            <label
              onClick={handleHideSidebar}
              className='cursor-pointer'>Hide Controls</label>
          </div>
        </div>
        {
          !isShowSidebar && (
            <div className='absolute bottom-4 left-4 text-blue-600'>
              <FaCircleChevronRight size={22} className='cursor-pointer'
                onClick={handleShowSidebar} />
            </div>
          )
        }
        <div className='hidden sm:flex grow flex-col justify-between overflow-hidden'>
          <div className='overflow-y-auto '>
            {/* <ShowArea /> */}
          </div>
          <div>
            {/* <ActionArea /> */}
          </div>
        </div>
      </div>
    </BreadcrumbProvider>
  )
}

export default ThemeLayout