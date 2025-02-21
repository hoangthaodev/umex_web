'use server'
import { GetPageById } from '@/actions/page.action'
import PageForm from '@/components/component/editForm/PageForm'
import { PageType } from '@/lib/types'
import React from 'react'

type Props = {
  params: Promise<{ id: string }>
}

const page = async ({ params }: Props) => {
  const pageId = (await params).id
  const page: PageType = await GetPageById(Number(pageId))
  return (
    <PageForm page={page} />
  )
}

export default page