'use server'

import LogoutButton from '@/components/admin/LogoutButton'
import MenuButton from '@/components/admin/MenuButton'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import { LuHouse, LuUserCog } from 'react-icons/lu'

const Navbar = async () => {
  const userCookie = (await cookies()).get("user")
  const user = JSON.parse(userCookie?.value || '{}')

  return (
    <div className='flex justify-between sticky z-10 top-0 bg-gray-600'>
      <div className='flex gap-2'>
        <MenuButton className='p-2 text-gray-200 hover:text-blue-500' />
        <Link href={"/"}>
          <button className='flex p-2 gap-2 items-center text-gray-200 hover:text-blue-600'>
            <LuHouse />
            <span className={`hidden md:block`}>Home</span>
          </button>
        </Link>
      </div>
      <div className='relative'>
        <button className='flex gap-2 p-2 items-center peer text-gray-200 hover:text-blue-600'>
          <h2 className='hidden md:block'>Hi, <span className='uppercase font-semibold'>{user.user_name}</span></h2>
          <LuUserCog />
        </button>
        <ul className='absolute whitespace-nowrap right-2 text-gray-200 bg-gray-600 hidden peer-hover:flex hover:flex flex-col gap-2 px-4 py-2'>
          <li className='font-semibold text-center'>{user.user_name}</li>
          <li className='hover:text-blue-600'><Link href={"#"}>Chinh sua thong tin</Link></li>
          <li><LogoutButton className='w-full hover:text-blue-600' /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar