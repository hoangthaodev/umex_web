'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import SelectInList from '@/components/admin/theme/theme/SelectInList'
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

  const contactIconStyleList = [
    { id: 1, name: "Icons Left" },
    { id: 2, name: "Icons Only" },
  ]

  return (
    <div>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Contact", link: "/ux-admin/theme/header/contact" }
      ]} />
      <div className='p-2 flex flex-col gap-2'>
        <h4>Icon Style</h4>
        <SelectInList arrayList={contactIconStyleList} selected={contactIconStyle} setSelected={setContactIconStyle} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h4>Icon Size</h4>
        <input
          className='px-2 py-1 border rounded-xs'
          type="number" value={contactIconSize} onChange={(e) => { setContactIconSize(parseInt(e.target.value)) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h4>Location</h4>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactLocation} onChange={(e) => { setContactLocation(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h4>Location label</h4>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactLocationLabel} onChange={(e) => { setContactLocationLabel(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h4>E-mail</h4>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactEmail} onChange={(e) => { setContactEmail(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h4>E-mail label</h4>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactEmailLabel} onChange={(e) => { setContactEmailLabel(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h4>Open Hours</h4>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactOpenhours} onChange={(e) => { setContactOpenhours(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h4>Open Hours - Details</h4>
        <textarea
          className='px-2 py-1 h-22 border rounded-xs'
          value={contactOpenhoursDetails} onChange={(e) => { setContactOpenhoursDetails(e.target.value) }} />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <h4>Phone</h4>
        <input
          className='px-2 py-1 border rounded-xs'
          type="text" value={contactPhone} onChange={(e) => { setContactPhone(e.target.value) }} />
      </div>
    </div>
  )
}

export default page