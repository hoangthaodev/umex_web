'use client'

import { getCategoryByType } from '@/action/category.action'
import AddNewCategory from '@/components/admin/page/categories/AddNewCategory'
import ListTableCategory from '@/components/admin/page/categories/ListTableCategory'
import { CategoryType } from '@/lib/type'
import React, { useEffect, useRef } from 'react'

type Props = {
  params: Promise<{ type: number }>
}

const page = ({ params }: Props) => {
  const [firstMount, setFirstMount] = React.useState<boolean>(true)
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [categoryList, setCategoryList] = React.useState<CategoryType[]>([])
  const typeId = useRef<number>(null)

  if (typeId.current && typeof typeId.current !== 'number') {
    typeId.current = parseInt(typeId.current)
  }

  useEffect(() => {
    const fetchData = async () => {
      typeId.current = (await params).type
      const category = await getCategoryByType(typeId.current)
      if (category) {
        setCategoryList(category)
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
        const category = await getCategoryByType(typeId.current)
        if (!category) return
        setCategoryList(category)
        setIsLoading(false)
      }
      fetchData()
    }
  }, [isLoading])


  if (isLoading) return <div>Loading...</div>

  return (
    <div className='flex flex-col sm:flex-row gap-4 p-4'>
      <AddNewCategory className='sm:w-1/3' typeId={typeId.current} setIsLoading={setIsLoading} categoryList={categoryList} />
      <ListTableCategory className='sm:grow' categoryList={categoryList} isLoading={isLoading} />
    </div>
  )
}

export default page