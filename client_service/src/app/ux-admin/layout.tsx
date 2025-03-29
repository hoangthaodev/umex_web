'use client'

import { checkAuth } from '@/action/checkStatus.action'
import Navbar from '@/components/admin/Navbar'
import Sidebar from '@/components/admin/Sidebar'
import React, { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    checkAuth().then((loginStatus) => {
      setLoginStatus(loginStatus)
    })
  }, [])

  if (!loginStatus) {
    return (
      <div>
        {children}
      </div>
    )
  }

  return (
    <div className='flex flex-col h-full'>
      <Navbar className='h-10' />
      <div className={`h-[calc(100%-40px)] flex`}>
        <Sidebar />
        <div className='grow overflow-y-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout