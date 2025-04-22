'use client'

import { BreadcrumbProvider } from '@/app/ux-admin/theme/(theme)/BreadcrumbContext'
import ActionArea from '@/components/admin/theme/theme/actionArea/ActionArea'
import Breadcrumb from '@/components/admin/theme/theme/Breadcrumb'
import ShowArea from '@/components/admin/theme/theme/showArea/ShowArea'
import DivNgang from '@/components/DivNgang'
import { useRouter } from 'next/navigation'
import React, { ReactNode, useEffect, useState } from 'react'
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6'

type Props = {
  children: ReactNode
}

const ThemeLayout = ({ children }: Props) => {
  const [isShowSidebar, setIsShowSidebar] = useState(true)
  const [isHeader, setIsHeader] = useState(false)
  const [firstMount, setFirstMount] = useState(true)
  const router = useRouter()

  useEffect(() => {
    setIsHeader(window.location.pathname.startsWith('/ux-admin/theme/header'))
    setFirstMount(false)
  }, [])


  useEffect(() => {
    if (firstMount) return
    if (isHeader) return
    router.back()
  }, [isHeader])

  const handleHideSidebar = () => {
    setIsShowSidebar(false)
    setIsHeader(false)
  }
  const handleShowSidebar = () => {
    setIsShowSidebar(true)
    setIsHeader(window.location.pathname.startsWith('/ux-admin/theme/header'))
  }

  if (firstMount) {
    return (
      <div>Loading...</div>
    )
  }

  let size = document.documentElement.clientWidth

  return (
    <BreadcrumbProvider>
      <div className='relative flex flex-col sm:flex-row w-full h-[calc(100vh-2.5rem)]'>
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
          <div className='sm:hidden'>
            {
              isHeader && <ActionArea setIsHeader={setIsHeader} />
            }
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
        <div className='flex grow h-full flex-col justify-between overflow-hidden'>
          <div className='hidden sm:block grow overflow-y-auto '>
            <ShowArea />
          </div>
          <div>
            {
              isHeader && <ActionArea setIsHeader={setIsHeader} />
            }
          </div>
        </div>
      </div>
    </BreadcrumbProvider>
  )
}

export default ThemeLayout