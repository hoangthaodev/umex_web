'use client'

import { logout } from '@/actions/user.action'
import { useRouter } from 'next/navigation'
import React from 'react'

const LogoutButton = ({ className }: { className?: string }) => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await logout()
      const data = JSON.parse(res)

      if (data.code !== 2000) {
        alert("something went wrong")
      }

      router.push("/ux-admin/login")

    } catch (error) {
      console.log("error::", error);
    }

  }

  return (
    <button onClick={handleLogout} className={className}>
      Logout
    </button>
  )
}

export default LogoutButton