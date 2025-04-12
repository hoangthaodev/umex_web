'use client'

import { getCategoryByType } from '@/action/category.action'
import { getTagByType } from '@/action/tag.action'
import AddNewCategory from '@/components/admin/page/categories/AddNewCategory'
import ListTableCategory from '@/components/admin/page/categories/ListTableCategory'
import AddNewTag from '@/components/admin/page/tags/AddNewTag'
import ListTableTag from '@/components/admin/page/tags/ListTableTag'
import { CategoryType, TagType } from '@/lib/type'
import React, { useEffect, useRef } from 'react'

type Props = {
  params: Promise<{ type: number }>
}

const page = ({ params }: Props) => {
  const [firstMount, setFirstMount] = React.useState<boolean>(true)
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [tagList, setTagList] = React.useState<TagType[]>([])
  const typeId = useRef<number>(null)

  if (typeId.current && typeof typeId.current !== 'number') {
    typeId.current = parseInt(typeId.current)
  }

  useEffect(() => {
    const fetchData = async () => {
      typeId.current = (await params).type
      const tag = await getTagByType(typeId.current)
      if (tag) {
        setTagList(tag)
      }
      setFirstMount(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (firstMount) return
    setIsLoading(false)
  }, [firstMount])

  useEffect(() => {
    if (isLoading) {
      const fetchData = async () => {
        if (!typeId.current) return
        const tag = await getTagByType(typeId.current)
        if (!tag) return
        setTagList(tag)
        setIsLoading(false)
      }
      fetchData()
    }
  }, [isLoading])


  if (isLoading) return <div>Loading...</div>

  return (
    <div className='flex flex-col sm:flex-row gap-4 p-4'>
      <AddNewTag className='sm:w-1/3' typeId={typeId.current} setIsLoading={setIsLoading} />
      <ListTableTag className='sm:grow' tagList={tagList} />
    </div>
  )
}

export default page