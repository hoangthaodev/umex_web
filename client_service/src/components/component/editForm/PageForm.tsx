'use client'
import { createNewPage, updatePage } from '@/actions/page.action'
import { createNewPagecategory, deletePagecategory, getPagecategoryByPage } from '@/actions/pagecategory.action'
import { createNewPagetag, deletePagetag, getTagByPage } from '@/actions/pagetag.action'
import { getUserFromCookie } from '@/actions/user.action'
import Categories from '@/components/component/categories/Categories'
import FeaturedImage from '@/components/component/featuredImage/FeaturedImage'
import Publish from '@/components/component/publish/Publish'
import Tags from '@/components/component/tags/Tags'
import Template from '@/components/component/template/Template'
import TitleSlug from '@/components/component/titleslug/TitleSlug'
import { PlateEditor } from '@/components/editor/plate-editor'
import { PageCategoryType, PageTagType, PageType } from '@/lib/types'
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
  const [oldSelectedCategory, setOldSelectedCategory] = useState<PageCategoryType[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number[]>([])
  const [oldSelectedTags, setOldSelectedTags] = useState<PageTagType[]>([])
  const [selectedTags, setSelectedTags] = useState<number[]>([])
  const [isChanged, setIsChanged] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const [initialMount, setInitialMount] = useState(true)

  useEffect(() => {
    if (initialMount) setInitialMount(false)
  }, [initialMount])

  if (typeof typeId === "string") {
    typeId = parseInt(typeId, 10)
  }

  useEffect(() => {
    if (initialMount) return
    setIsChanged(true)
  }, [title, slug, content, description, status, publishYear, publishMonth, publishDay, imageId, tempId, selectedCategory, selectedTags])

  const router = useRouter()

  useEffect(() => {
    setInitialMount(true)
    if (page) {
      getPagecategoryByPage(page.page_id).then(data => {
        if (!data) return
        const dataParse: PageCategoryType[] = JSON.parse(JSON.stringify(data))
        setSelectedCategory(dataParse.map(i => i.category_id))
        setOldSelectedCategory(dataParse)
      })
      getTagByPage(page.page_id).then(data => {
        if (!data) return
        const dataParse: PageTagType[] = JSON.parse(JSON.stringify(data))
        setSelectedTags(dataParse.map(i => i.tag_id))
        setOldSelectedTags(dataParse)
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
    var pageId: number
    if (!page) {
      const newPage = await createNewPage(title, slug, content, description, status, publishYear, publishMonth, publishDay, imageId, userId, typeId, tempId)
      pageId = newPage.page_id
    } else {
      await updatePage(page.page_id, title, slug, content, description, status, publishYear, publishMonth, publishDay, imageId, userId, typeId, tempId)
      pageId = page.page_id
    }
    // luu pagecategory
    const oldCategory = oldSelectedCategory.map(i => i.category_id)
    if (oldCategory !== selectedCategory) {
      oldSelectedCategory.forEach(i => {
        const inNew = selectedCategory.includes(i.category_id)
        if (!inNew) {
          deletePagecategory(i.pagecategory_id)
        }
      })
      selectedCategory.forEach(i => {
        const hadOld = oldCategory.includes(i)
        if (!hadOld) {
          createNewPagecategory(pageId, i, `${pageId}-${i}`)
        }
      })
    }

    // luu pagetag
    const oldTag = oldSelectedTags.map(i => i.tag_id)
    if (oldTag !== selectedTags) {
      oldSelectedTags.forEach(i => {
        const inNew = selectedTags.includes(i.tag_id)
        if (!inNew) {
          deletePagetag(i.pagetag_id)
        }
      })
      selectedTags.forEach(i => {
        const hadOld = oldTag.includes(i)
        if (!hadOld) {
          createNewPagetag(pageId, i, `${pageId}-${i}`)
        }
      })
    }

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
        <Categories typeId={typeId} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <FeaturedImage imageId={imageId} setImageId={setImageId} />
        <Template selectedTemp={tempId} setSelectedTemp={setTempId} />
        <Tags typeId={typeId} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </div>
    </div>
  )
}

export default PageForm