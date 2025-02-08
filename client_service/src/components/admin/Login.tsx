'use client'

import { login } from '@/actions/user.action'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

function LoginComponent() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errStr, setErrStr] = useState('')

  const router = useRouter()

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    setErrStr("");
    if (username == '' || password == '') {
      setErrStr("Please fill in all fields")
      return;
    }

    try {
      const res = await login(username, password)
      const data = JSON.parse(res)

      if (data.code && data.code !== 2000) {
        setErrStr(data.message)
      } else {
        router.push("/ux-admin/dashboard")
      }

    } catch (error) {
      console.log("error::", error);
      setErrStr("Error, Login failed");
    }

  }

  return (
    <div className='flex items-center justify-center mt-14'>
      <form
        className='flex flex-col gap-5 p-5 bg-gray-300 rounded-xl'
        onSubmit={handleLogin}
      >
        <div className='font-semibold text-center text-lime-700'>
          <h2>Welcome to UX-Admin</h2>
        </div>
        <label className='text-red-600 text-center'>{errStr}</label>
        <div className='flex gap-3'>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='px-2'
          />
        </div>
        <div className='flex gap-3 justify-between'>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='px-2'
          />
        </div>
        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded-xl'>Login</button>
      </form>
    </div>
  )
}

export default LoginComponent