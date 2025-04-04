'use client'

import { createNewPage, updatePage } from '@/action/page.action'
import { createNewPagecategory, deletePagecategory, getPagecategoryByPage } from '@/action/pagecategory.action'
import { createNewPagetag, deletePagetag, getPagetagByPage } from '@/action/pagetag.action'
import { getUserFromCookie } from '@/action/user.action'
import Categories from '@/components/admin/page/Categories'
import FeaturedImage from '@/components/admin/page/FeaturedImage'
import Publish from '@/components/admin/page/Publish'
import Tags from '@/components/admin/page/Tags'
import Template from '@/components/admin/page/Template'
import TitleSlug from '@/components/admin/page/TitleSlug'
import RTEditor from '@/components/editor/RTEditor'
import { PageCategoryType, PageTagType, PageType } from '@/lib/type'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

type Props = {
  page?: PageType
  typeId: number
}

const PageForm = ({ page, typeId }: Props) => {
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

  const [firstMount, setFirstMount] = useState(true)
  const [listenChange, setListenChange] = useState(false)

  useEffect(() => {
    if (!firstMount) setListenChange(true)
  }, [firstMount])

  if (typeof typeId === "string") {
    typeId = parseInt(typeId)
  }

  useEffect(() => {
    if (!listenChange) return
    setIsChanged(true)
  }, [title, slug, content, description, status, publishYear, publishMonth, publishDay, imageId, tempId, selectedCategory, selectedTags])

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      if (page) {
        const pagecategory = await getPagecategoryByPage(page.page_id!)
        if (pagecategory) {
          setSelectedCategory(pagecategory.map(i => i.category_id))
          setOldSelectedCategory(pagecategory)
        }

        const pagetag = await getPagetagByPage(page.page_id!)
        if (pagetag) {
          setSelectedTags(pagetag.map(i => i.tag_id))
          setOldSelectedTags(pagetag)
        }
      }

      const user = await getUserFromCookie()
      if (user) {
        setUserId(user.user_id!)
      }

      setFirstMount(false)
    }

    fetchData()
  }, [])

  const handleMoveToTrash = async () => {
    if (!page) return;
    const newPage: PageType = {
      page_id: page.page_id,
      page_title: title,
      page_slug: slug,
      page_content: content,
      page_description: description,
      page_status: 4,
      page_publish_year: publishYear,
      page_publish_month: publishMonth,
      page_publish_day: publishDay,
      page_feature_image: imageId,
      user_id: userId,
      type_id: typeId,
      template_id: tempId,
    }
    await updatePage(newPage)
    toast.success("Move to Trash Successfully!")
    router.back()
  }

  const handleSave = async () => {
    setIsSaving(true)
    const newPage: PageType = {
      page_id: page?.page_id,
      page_title: title,
      page_slug: slug,
      page_content: content,
      page_description: description,
      page_status: status,
      page_publish_year: publishYear,
      page_publish_month: publishMonth,
      page_publish_day: publishDay,
      page_feature_image: imageId,
      user_id: userId,
      type_id: typeId,
      template_id: tempId,
    }
    let pageId: number
    if (!page) {
      const data = await createNewPage(newPage)
      if (data) {
        pageId = data.page_id!
      }
    } else {
      await updatePage(newPage)
      pageId = page.page_id!
    }
    // luu pagecategory
    const oldCategory = oldSelectedCategory.map(i => i.category_id)
    if (oldCategory !== selectedCategory) {
      oldSelectedCategory.forEach(i => {
        const inNew = selectedCategory.includes(i.category_id)
        if (!inNew) {
          deletePagecategory(i.pagecategory_id!)
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
          deletePagetag(i.pagetag_id!)
        }
      })
      selectedTags.forEach(i => {
        const hadOld = oldTag.includes(i)
        if (!hadOld) {
          createNewPagetag(pageId, i, `${pageId}-${i}`)
        }
      })
    }

    toast.success("Save Successfully!")
    setIsSaving(false)
    setIsChanged(false)
    router.refresh()
  }

  return (
    <div className='w-full flex flex-col md:flex-row gap-4'>
      <div className='md:w-[60%] flex flex-col gap-4'>
        <TitleSlug typeId={typeId} title={title} setTitle={setTitle} slug={slug} setSlug={setSlug} />
        <RTEditor className='h-[70vh] border rounded-xs' label='Content' value={content} setValue={setContent} />
        <RTEditor className='h-[50vh] border rounded-xs' label='Description' value={description} setValue={setDescription} />
      </div>
      <div className='md:w-[40%] flex flex-col gap-2'>
        <Publish isSaving={isSaving} isChanged={isChanged} page={page} status={status} setStatus={setStatus} publishYear={publishYear} setPublishYear={setPublishYear} publishMonth={publishMonth} setPublishMonth={setPublishMonth} publishDay={publishDay} setPublishDay={setPublishDay} handleMoveToTrash={handleMoveToTrash} handleSave={handleSave} />
        {
          typeId !== 1 && (
            <Categories typeId={typeId} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          )
        }
        <FeaturedImage imageId={imageId} setImageId={setImageId} />
        <Template selectedTemp={tempId} setSelectedTemp={setTempId} />
        {
          typeId !== 1 && typeId !== 3 && (
            <Tags typeId={typeId} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
          )
        }
      </div>
    </div>
  )
}

export default PageForm