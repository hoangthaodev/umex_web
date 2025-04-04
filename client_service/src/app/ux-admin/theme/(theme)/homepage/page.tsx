'use client'

import { getPageByTypeNStatus } from '@/action/page.action'
import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import SelectOption from '@/components/admin/theme/theme/SelectOption'
import React, { useEffect, useState } from 'react'

const page = () => {
  const {
    homepageDisplay,
    homepagePage,
    setHomepageDisplay,
    setHomepagePage,
  } = useTheme()

  const [firstMount, setFirstMount] = useState(true)
  const [pageList, setPageList] = useState<{ id: number, name: string }[]>([{ id: 0, name: "--Select--" }])

  useEffect(() => {
    const fetchData = async () => {
      const pages = await getPageByTypeNStatus(1, 1, 1000, 0)
      if (!pages) return
      const listData = pages.map(i => {
        return { id: i.page_id!, name: i.page_title.length > 45 ? i.page_title.slice(0, 45) + "..." : i.page_title }
      })
      setPageList([...pageList, ...listData])
      setFirstMount(false)
    }
    fetchData()
  }, [])

  const homepageDisplayList = [
    { id: 1, name: "Your latest post" },
    { id: 2, name: "A static page" },
  ]

  if (firstMount) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className='py-4 flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Homepage Settings", link: "/ux-admin/theme/homepage" }
      ]} />
      <div className='flex flex-col gap-2 p-2'>
        <h4>Your homepage displays</h4>
        <div className='flex flex-col gap-2'>
          {
            homepageDisplayList.map((item, index) => (
              <div key={index} className='flex gap-2 items-center'>
                <input
                  className='w-4 h-4'
                  type="radio" checked={item.id === homepageDisplay} onChange={() => { setHomepageDisplay(item.id) }} />
                <label onClick={() => { setHomepageDisplay(item.id) }}>{item.name}</label>
              </div>
            ))
          }
        </div>
      </div>
      {
        homepageDisplay === 2 && (
          <div className='flex flex-col gap-2 p-2'>
            <h4>Homepage</h4>
            <SelectOption arrayOption={pageList} value={homepagePage} setValue={setHomepagePage} />
          </div>
        )
      }
    </div>
  )
}

export default page