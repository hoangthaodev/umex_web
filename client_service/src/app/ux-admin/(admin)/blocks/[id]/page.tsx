'use server'
import { GetPageById } from '@/actions/page.action'
import PageEdit from '@/components/component/page_edit/PageEdit'
import { PageType } from '@/lib/types'
import React from 'react'

type Props = {
  params: Promise<{ id: string }>
}

const page = async ({ params }: Props) => {
  const pageId = (await params).id
  const page: PageType = await GetPageById(Number(pageId))
  return (
    <PageEdit page={page} />
  )
}

export default page