'use server'

import { getConfigByKey } from '@/action/config.action'
import Header from '@/components/Header'
import { LayoutType } from '@/lib/type'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const MainLayout = async ({ children }: Props) => {

  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default MainLayout