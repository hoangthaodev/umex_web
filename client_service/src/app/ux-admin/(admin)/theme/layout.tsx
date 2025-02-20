'use server'
import { MediaProvider } from '@/app/ux-admin/(admin)/media/MediaContext'
import { BreadcrumbProvider } from '@/app/ux-admin/(admin)/theme/BreadcrumbContext'
import ActionArea from '@/components/admin/theme/actionArea/ActionArea'
import ShowArea from '@/components/admin/theme/showArea/ShowArea'
import Breadcrumb from '@/components/admin/theme/Breadcrumb'
import React from 'react'


type Props = {
  children: React.ReactNode
}

const SettingLayout = async ({ children }: Props) => {
  return (
    <BreadcrumbProvider>
      <MediaProvider>
        <div className='flex w-full bg-gray-100'>
          <div className='w-full sm:w-80 border-r border-gray-400 text-sm overflow-y-auto pb-10 flex flex-col'>
            <Breadcrumb />
            {children}
          </div>
          <div className='hidden sm:flex w-full flex-col justify-between overflow-hidden'>
            <div className='overflow-y-auto '>
              <ShowArea />
            </div>
            <div>
              <ActionArea />
            </div>
          </div>
        </div>
      </MediaProvider>
    </BreadcrumbProvider>
  )
}

export default SettingLayout