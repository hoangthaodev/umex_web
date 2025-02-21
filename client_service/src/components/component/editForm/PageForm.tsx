'use client'
import { getImageById } from '@/actions/image.action'
import { GetCategoryByPage } from '@/actions/pagecategory.action'
import { MediaProvider } from '@/app/ux-admin/(admin)/media/MediaContext'
import Categories from '@/components/component/categories/Categories'
import TinyMCE from '@/components/component/editor/TinyMCE'
import FeaturedImage from '@/components/component/featuredImage/FeaturedImage'
import Publish from '@/components/component/publish/Publish'
import Template from '@/components/component/template/Template'
import TitleSlug from '@/components/component/titleslug/TitleSlug'
import { CategoryType, ImageType, PageType } from '@/lib/types'
import React, { useEffect, useState } from 'react'

type Props = {
  page: PageType
}

const PageForm = ({ page }: Props) => {
  const typeId = 1
  const [title, setTitle] = useState(page.page_title)
  const [content, setContent] = useState(page.page_content)
  const [description, setDescription] = useState(page.page_description)
  const [slug, setSlug] = useState(page.page_slug)
  const [seletedCategory, setSeletedCategory] = useState<CategoryType[] | undefined>(undefined)
  const [selectedImage, setSelectedImage] = useState<ImageType | undefined>(undefined)
  const [selectedTemp, setSelectedTemp] = useState(page.temp_id)

  useEffect(() => {
    const data = async () => {
      const cate: CategoryType[] | undefined = await GetCategoryByPage(page.page_id)
      setSeletedCategory(cate)
      if (page.page_image) {
        const img: ImageType | undefined = await getImageById(page.page_image)
        setSelectedImage(img)
      }
    }
    data()
  }, [])

  return (
    <MediaProvider>
      <div className='w-full h-full flex flex-wrap gap-4'>
        <div className='w-[60%] grow flex flex-col gap-4'>
          <TitleSlug typeId={typeId} title={title} setTitle={setTitle} slug={slug} setSlug={setSlug} />
          <TinyMCE label='Content' content={content} setContent={setContent} />
          <TinyMCE label='Description' content={description} setContent={setDescription} />
        </div>
        <div className='flex flex-col grow gap-2'>
          <Publish page={page} />
          <Categories typeId={typeId} selectedCategory={seletedCategory} setSelectedCategory={setSeletedCategory} />
          <FeaturedImage selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
          <Template selectedTemp={selectedTemp} setSelectedTemp={setSelectedTemp} />
        </div>
      </div>
    </MediaProvider>
  )
}

export default PageForm