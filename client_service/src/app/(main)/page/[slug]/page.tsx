'use server'

import { getPageBySlug } from '@/action/page.action'
import exportToHtml from '@/components/editor/exportToHtml'
import { PageType } from '@/lib/type'
import React from 'react'

type Props = {
  params: Promise<{ slug: string }>
}

const page = async ({ params }: Props) => {
  const pageSlug = (await params).slug
  const page = await getPageBySlug(pageSlug)
  if (!page) return null
  const content = await exportToHtml(page.page_content)
  return (
    <div>
      <h3>{page.page_title}</h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default page