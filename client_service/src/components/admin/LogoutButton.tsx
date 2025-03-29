'use client'

import { logout } from '@/action/user.action'
import React from 'react'

const LogoutButton = ({ className }: { className?: string }) => {

  const handleLogout = async () => {
    try {
      const res = await logout()
      const data = JSON.parse(res)

      if (data.code !== 2000) {
        alert("something went wrong")
      }

      window.location.replace("/ux-admin")

    } catch (error) {
      console.log("error::", error);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className={className}>
      Logout
    </button>
  )
}

export default LogoutButton