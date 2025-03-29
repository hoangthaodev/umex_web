'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import React, { useState } from 'react'

const page = () => {
  const {
    contactIconStyle,
    contactIconSize,
    contactLocation,
    contactLocationLabel,
    contactEmail,
    contactEmailLabel,
    contactOpenhours,
    contactOpenhoursDetails,
    contactPhone,
    setContactIconStyle,
    setContactIconSize,
    setContactLocation,
    setContactLocationLabel,
    setContactEmail,
    setContactEmailLabel,
    setContactOpenhours,
    setContactOpenhoursDetails,
    setContactPhone,
  } = useTheme()

  return (
    <div>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Contact", link: "/ux-admin/theme/header/contact" }
      ]} />
      <div className='p-2 flex flex-col gap-2'>
        <h3>Icon Style</h3>
        <div className='grid grid-cols-2'>
          <label
            onClick={() => { setContactIconStyle(1) }}
            className={`${contactIconStyle === 1 ? "bg-blue-400 text-gray-100" : ""} text-center py-1`}>Icons Left</label>
          <label
            onClick={() => { setContactIconStyle(2) }}
            className={`${contactIconStyle === 2 ? "bg-blue-400 text-gray-100" : ""} text-center py-1`}>Icons Only</label>
        </div>
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h3>Icon Size</h3>
        <input
          className='px-2 py-1 border rounded-xs'
          type="number" value={contactIconSize} onChange={(e) => { setContactIconSize(parseInt(e.target.value)) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h3>Location</h3>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactLocation} onChange={(e) => { setContactLocation(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h3>Location label</h3>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactLocationLabel} onChange={(e) => { setContactLocationLabel(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h3>E-mail</h3>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactEmail} onChange={(e) => { setContactEmail(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h3>E-mail label</h3>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactEmailLabel} onChange={(e) => { setContactEmailLabel(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h3>Open Hours</h3>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactOpenhours} onChange={(e) => { setContactOpenhours(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h3>Open Hours - Details</h3>
        <textarea
          className='px-2 py-1 h-22 border rounded-xs'
          value={contactOpenhoursDetails} onChange={(e) => { setContactOpenhoursDetails(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h3>Phone</h3>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactPhone} onChange={(e) => { setContactPhone(e.target.value) }} />
      </div>
    </div>
  )
}

export default page