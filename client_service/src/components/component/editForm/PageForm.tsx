'use client'
import { createNewPage, updatePage } from '@/actions/page.action'
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
  typeId: number
}

const PageForm = ({ typeId, page }: Props) => {
  const [title, setTitle] = useState<string>(page ? page.page_title : "")
  const [slug, setSlug] = useState<string>(page ? page.page_slug : "")
  const [content, setContent] = useState<string>(page ? page.page_content : "[]")
  const [description, setDescription] = useState<string>(page ? page.page_description : "[]")
  const [status, setStatus] = useState<number>(page ? page.page_status : 1)
  const today = new Date()
  const [publishYear, setPublishYear] = useState<number>(page ? page.page_publish_year : today.getFullYear())
  const [publishMonth, setPublishMonth] = useState<number>(page ? page.page_publish_month : today.getMonth() + 1)
  const [publishDay, setPublishDay] = useState<number>(page ? page.page_publish_day : today.getDate())
  const [imageId, setImageId] = useState<number>(page ? (page.page_feature_image || 0) : 0)
  const [tempId, setTempId] = useState<number>(page ? page.template_id : 1)
  const [userId, setUserId] = useState<number>(page ? page.user_id : 0)
  const [seletedCategory, setSeletedCategory] = useState<CategoryType[]>([])
  const [selectedTags, setSelectedTags] = useState<TagType[]>([])
  const [isChanged, setIsChanged] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setIsChanged(true)
  }, [title, slug, content, description, status, publishYear, publishMonth, publishDay, imageId, tempId, seletedCategory, selectedTags])

  const router = useRouter()

  useEffect(() => {
    if (page) {
      getCategoryByPage(page.page_id).then(data => {
        data && setSeletedCategory(data)
      })
      getTagByPage(page.page_id).then(data => {
        data && setSelectedTags(data)
      })
    }

    getUserFromCookie().then(data => {
      data && setUserId(data.user_id)
    })
  }, [])

  const handleMoveToTrash = async () => {
    if (!page) return;
    await updatePage(page.page_id, title, slug, content, description, 4, publishYear, publishMonth, publishDay, imageId, userId, typeId, tempId)
    toast.success("Move to Trash Successfully!")
    router.back()
  }

  const handleSave = async () => {
    setIsSaving(true)
    if (!page) {
      await createNewPage(title, slug, content, description, status, publishYear, publishMonth, publishDay, imageId, userId, typeId, tempId)
    } else {
      await updatePage(page.page_id, title, slug, content, description, status, publishYear, publishMonth, publishDay, imageId, userId, typeId, tempId)
    }

    // luu pagecategory
    console.log("selected category:: ", seletedCategory);
    // luu pagetag
    console.log("selected tags:: ", selectedTags);

    toast.success("Move to Trash Successfully!")
    setIsSaving(false)
    setIsChanged(false)
  }

  return (
    <div className='w-full flex flex-wrap gap-4'>
      <div className='w-[60%] grow flex flex-col gap-4'>
        <TitleSlug typeId={typeId} title={title} setTitle={setTitle} slug={slug} setSlug={setSlug} />
        <PlateEditor className='h-[70vh]' label='Content' content={content} setContent={setContent} />
        <PlateEditor className='h-[50vh]' label='Description' content={description} setContent={setDescription} />
      </div>
      <div className='flex flex-col grow gap-2'>
        <Publish isSaving={isSaving} isChanged={isChanged} setIsChanged={setIsChanged} page={page} status={status} setStatus={setStatus} publishYear={publishYear} setPublishYear={setPublishYear} publishMonth={publishMonth} setPublishMonth={setPublishMonth} publishDay={publishDay} setPublishDay={setPublishDay} handleMoveToTrash={handleMoveToTrash} handleSave={handleSave} />
        <Categories typeId={typeId} selectedCategory={seletedCategory} setSelectedCategory={setSeletedCategory} />
        <FeaturedImage imageId={imageId} setImageId={setImageId} />
        <Template selectedTemp={tempId} setSelectedTemp={setTempId} />
        <Tags typeId={typeId} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </div>
    </div>
  )
}

export default PageForm