'use client'

import { getUserFromCookie } from '@/action/user.action'
import LogoutButton from '@/components/admin/LogoutButton'
import { UserType } from '@/lib/type'
import { House, UserCog2 } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {
  className?: string
}

const Navbar = ({ className }: Props) => {
  const [user, setUser] = useState<UserType | undefined>(undefined)

  useEffect(() => {
    getUserFromCookie().then(data => {
      if (data) setUser(data)
    })
  }, [])

  return (
    <div className={`${className ? className : ""} flex justify-between sticky z-50 top-0 bg-gray-700`}>
      <div className='flex gap-2'>
        <Link href={"/"}>
          <button className='flex p-2 gap-2 items-center text-gray-200 hover:text-blue-600'>
            <House />
            <span className={`hidden md:block`}>Home</span>
          </button>
        </Link>
      </div>
      <div className='relative'>
        <button className='flex gap-2 p-2 items-center peer text-gray-200 hover:text-blue-600'>
          <h2 className='hidden md:block'>Hi, <span className='uppercase font-semibold'>{user?.user_display_name}</span></h2>
          <UserCog2 />
        </button>
        <ul className='absolute whitespace-nowrap right-2 text-gray-200 bg-gray-600 hidden peer-hover:flex hover:flex flex-col gap-2 px-4 py-2'>
          <li className='font-semibold text-center'>{user?.user_display_name}</li>
          <li className='hover:text-blue-600'><Link href={"#"}>Chinh sua thong tin</Link></li>
          <li><LogoutButton className='w-full hover:text-blue-600' /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar