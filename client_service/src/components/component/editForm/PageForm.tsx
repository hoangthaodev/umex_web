'use client'
import { updatePage } from '@/actions/page.action'
import { getCategoryByPage } from '@/actions/pagecategory.action'
import { getTagByPage } from '@/actions/pagetag.action'
import { getUserFromCookie } from '@/actions/user.action'
import Categories from '@/components/component/categories/Categories'
import FeaturedImage from '@/components/component/featuredImage/FeaturedImage'
import Publish from '@/components/component/publish/Publish'
import Tags from '@/components/component/tags/Tags'
import Template from '@/components/component/template/Template'
import TitleSlug from '@/components/component/titleslug/TitleSlug'
import { PlateEditor } from '@/components/editor/plate-editor'
import { CategoryType, PageType, TagType } from '@/lib/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type Props = {
  page?: PageType
}

const PageForm = ({ page }: Props) => {
  const typeId = 1
  const [title, setTitle] = useState<string>("")
  const [slug, setSlug] = useState<string>("")
  const [content, setContent] = useState<string>("[]")
  const [description, setDescription] = useState<string>("[]")
  const [status, setStatus] = useState<number>(1)
  const today = new Date()
  const [publishYear, setPublishYear] = useState<number>(today.getFullYear())
  const [publishMonth, setPublishMonth] = useState<number>(today.getMonth() + 1)
  const [publishDay, setPublishDay] = useState<number>(today.getDate())
  const [imageId, setImageId] = useState<number>(0)
  const [userId, setUserId] = useState<number>(0)
  const [tempId, setTempId] = useState<number>(1)
  const [seletedCategory, setSeletedCategory] = useState<CategoryType[]>([])
  const [selectedTags, setSelectedTags] = useState<TagType[]>([])

  const router = useRouter()

  useEffect(() => {
    if (!page) return
    setTitle(page.page_title)
    setSlug(page.page_slug)
    setContent(page.page_content)
    setDescription(page.page_description)
    setStatus(page.page_status || 1)
    setPublishYear(page.page_publish_year)
    setPublishMonth(page.page_publish_month)
    setPublishDay(page.page_publish_day)
    setImageId(page.page_image || 0)
    setUserId(page.user_id)
    setTempId(page.temp_id || 1)
    getCategoryByPage(page.page_id).then(data => {
      setSeletedCategory(data)
    })
    getTagByPage(page.page_id).then(data => {
      setSelectedTags(data)
    })
    const data = async () => {
      const user = await getUserFromCookie()
      setUserId(user.user_id)
    }
    data()
  }, [])

  const handleMoveToTrash = async () => {
    if (!page) return;
    await updatePage(page.page_id, title, slug, content, description, 4, publishYear, publishMonth, publishDay, imageId, userId, typeId, tempId)
    toast.success("Move to Trash Successfully!")
    router.back()
  }

  const handleSave = () => {
    // console.log("trash::", trash);
  }

  return (
    <div className='w-full h-full flex flex-wrap gap-4'>
      <div className='w-[60%] grow flex flex-col gap-4'>
        <TitleSlug typeId={typeId} title={title} setTitle={setTitle} slug={slug} setSlug={setSlug} />
        <PlateEditor className='h-[70vh]' label='Content' content={content} setContent={setContent} />
        <PlateEditor className='h-[50vh]' label='Description' content={description} setContent={setDescription} />
      </div>
      <div className='flex flex-col grow gap-2'>
        <Publish page={page} status={status} setStatus={setStatus} publishYear={publishYear} setPublishYear={setPublishYear} publishMonth={publishMonth} setPublishMonth={setPublishMonth} publishDay={publishDay} setPublishDay={setPublishDay} handleMoveToTrash={handleMoveToTrash} handleSave={handleSave} />
        <Categories typeId={typeId} selectedCategory={seletedCategory} setSelectedCategory={setSeletedCategory} />
        <FeaturedImage imageId={imageId} setImageId={setImageId} />
        <Template selectedTemp={tempId} setSelectedTemp={setTempId} />
        <Tags typeId={typeId} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </div>
    </div>
  )
}

export default PageForm