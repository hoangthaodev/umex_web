'use server'
import { MediaProvider } from '@/app/ux-admin/MediaContext'
import { SidebarProvider } from '@/app/ux-admin/(admin)/SidebarContext'
import Footer from '@/components/admin/Footer'
import Navbar from '@/components/admin/Navbar'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'

type AdminLayoutType = {
  children: React.ReactNode,
}
function AdminLayout({ children }: AdminLayoutType) {

  return (
    <SidebarProvider>
      <MediaProvider>
        <div className='flex flex-col h-full'>
          <Navbar />
          <main className='flex h-full relative overflow-auto'>
            <Sidebar />
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </MediaProvider>
    </SidebarProvider>
  )
}

export default AdminLayout