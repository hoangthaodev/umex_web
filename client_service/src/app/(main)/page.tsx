'use server'

import { getConfigByKey } from '@/action/config.action'
import { getPageById, getPageByTypeDESC } from '@/action/page.action'
import exportToHtml from '@/components/editor/exportToHtml'
import { HomepageType, PageType } from '@/lib/type'
import React from 'react'

const MainPage = async () => {
  const homePage = JSON.parse((await getConfigByKey("homepage"))?.config_value || '') as HomepageType
  if (homePage.homepageDisplay === 1) {
    const page = await getPageByTypeDESC(1, 1, 0) as PageType[]
    const content = await exportToHtml(page[0].page_content)
    return (
      <div dangerouslySetInnerHTML={{ __html: content }} />
    )
  } else {
    const page = await getPageById(homePage.homepagePage) as PageType
    const content = await exportToHtml(page.page_content)
    return (
      <div dangerouslySetInnerHTML={{ __html: content }} />
    )
  }
}

export default MainPage