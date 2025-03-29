'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import { IconsMap } from '@/lib/iconsMap'
import React from 'react'
import { FaHeart } from 'react-icons/fa6'

const page = () => {
  const {
    iconStyle,
    facebook,
    instagram,
    tiktok,
    xTwitter,
    email,
    phone,
    pinterest,
    rss,
    linkedIn,
    youtube,
    flickr,
    icon500px,
    telegram,
    twitch,
    discord,
    setIconStyle,
    setFacebook,
    setInstagram,
    setTikTok,
    setXTwitter,
    setEmail,
    setPhone,
    setPinterest,
    setRss,
    setLinkedIn,
    setYouTube,
    setFlickr,
    setIcon500px,
    setTelegram,
    setTwitch,
    setDiscord,
  } = useTheme()

  const handleValue = (id: number) => {
    switch (id) {
      case 1: return facebook
      case 2: return instagram
      case 3: return tiktok
      case 4: return xTwitter
      case 5: return email
      case 6: return phone
      case 7: return pinterest
      case 8: return rss
      case 9: return linkedIn
      case 10: return youtube
      case 11: return flickr
      case 12: return icon500px
      case 13: return telegram
      case 14: return twitch
      case 15: return discord
      default: return ""
    }
  }

  const handleChangeValue = (id: number, value: string) => {
    switch (id) {
      case 1: return setFacebook(value)
      case 2: return setInstagram(value)
      case 3: return setTikTok(value)
      case 4: return setXTwitter(value)
      case 5: return setEmail(value)
      case 6: return setPhone(value)
      case 7: return setPinterest(value)
      case 8: return setRss(value)
      case 9: return setLinkedIn(value)
      case 10: return setYouTube(value)
      case 11: return setFlickr(value)
      case 12: return setIcon500px(value)
      case 13: return setTelegram(value)
      case 14: return setTwitch(value)
      case 15: return setDiscord(value)
      default: return
    }
  }

  return (
    <div>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Follow Icons", link: "/ux-admin/theme/header/followicons" },
      ]} />
      <div className='p-2 flex flex-col gap-2'>
        <h3>Icons Style</h3>
        <div className='text-blue-500 flex flex-wrap gap-1 justify-center'>
          <label
            onClick={() => { setIconStyle(1) }}
            className={`${iconStyle === 1 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm`}>
            <label className={`${iconStyle === 1 ? "text-blue-500 border-blue-500" : "hover:text-blue-500 hover:border-blue-500 border-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <FaHeart size={20} />
            </label>
          </label>

          <label
            onClick={() => { setIconStyle(2) }}
            className={`${iconStyle === 2 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm`}>
            <label className={`${iconStyle === 2 ? "text-blue-500 border-blue-500" : "hover:text-blue-500 hover:border-blue-500 border-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border border-blue-400 hover:border-blue-500 rounded-full'><FaHeart size={20} /></label>
            </label>
          </label>

          <label
            onClick={() => { setIconStyle(3) }}
            className={`${iconStyle === 3 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm`}>
            <label className={`${iconStyle === 3 ? "text-blue-500 border-blue-500" : "hover:text-blue-500 hover:border-blue-500 border-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border bg-blue-500 hover:bg-blue-600 rounded-full text-gray-100'><FaHeart size={20} /></label>
            </label>
          </label>

          <label
            onClick={() => { setIconStyle(4) }}
            className={`${iconStyle === 4 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm`}>
            <label className={`${iconStyle === 4 ? "text-blue-500 border-blue-500" : "hover:text-blue-500 hover:border-blue-500 border-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border border-blue-400 hover:border-blue-500 rounded-sm'><FaHeart size={20} /></label>
            </label>
          </label>

          <label
            onClick={() => { setIconStyle(5) }}
            className={`${iconStyle === 5 ? "border border-blue-500" : ""} p-1 w-20 h-14 rounded-sm`}>
            <label className={`${iconStyle === 5 ? "text-blue-500 border-blue-500" : "hover:text-blue-500 hover:border-blue-500 border-blue-400"} w-full h-full border rounded-sm flex items-center justify-center`}>
              <label className='p-2 border bg-blue-500 hover:bg-blue-600 rounded-sm text-gray-100'><FaHeart size={20} /></label>
            </label>
          </label>

        </div>
      </div>
      {
        Object.entries(IconsMap).map(([key, val], index) => {
          return (
            <div key={index} className='p-2 flex flex-col'>
              <h3>{val}</h3>
              <input
                className='border rounded-xs px-2 py-1'
                type="text" value={handleValue(parseInt(key))} onChange={(e) => { handleChangeValue(parseInt(key), e.target.value) }} />
            </div>
          )
        })
      }
    </div>
  )
}

export default page