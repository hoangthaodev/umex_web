'use client'

import { getAllCategory } from '@/action/category.action'
import { getAllPage } from '@/action/page.action'
import CategoryEnter from '@/components/admin/theme/menus/edit/category/CategoryEnter'
import CustomLinkEnter from '@/components/admin/theme/menus/edit/customLink/CustomLinkEnter'
import PageEnter from '@/components/admin/theme/menus/edit/page/PageEnter'
import PortfolioEnter from '@/components/admin/theme/menus/edit/portfolio/PortfolioEnter'
import PostEnter from '@/components/admin/theme/menus/edit/post/PostEnter'
import ProductEnter from '@/components/admin/theme/menus/edit/product/ProductEnter'
import DivNgang from '@/components/DivNgang'
import { CategoryType, PageType } from '@/lib/type'
import React, { SetStateAction, useEffect, useState } from 'react'

type Props = {
  isNew: boolean
  menuValue: string
  setMenuValue: React.Dispatch<SetStateAction<string>>
}

const AddMenuItems = ({ isNew, menuValue, setMenuValue }: Props) => {
  const [tabActive, setTabActive] = useState(1)

  const [listPage, setListPage] = useState<PageType[]>([])
  const [listPost, setListPost] = useState<PageType[]>([])
  const [listPostCategory, setListPostCategory] = useState<CategoryType[]>([])
  const [listPortfolio, setListPortfolio] = useState<PageType[]>([])
  const [listProduct, setListProduct] = useState<PageType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const allPage = await getAllPage(1000, 0)
      const activePage = allPage?.filter(i => i.page_status === 1)
      if (!activePage) return
      setListPage(activePage.filter(i => i.type_id === 1))
      setListPost(activePage.filter(i => i.type_id === 2))
      setListPortfolio(activePage.filter(i => i.type_id === 4))
      setListProduct(activePage.filter(i => i.type_id === 5))

      const allCategory = await getAllCategory()
      if (!allCategory) return
      setListPostCategory(allCategory.filter(i => i.type_id === 2))
    }
    fetchData()
  }, [])

  return (
    <div className={`${isNew ? "opacity-50 pointer-events-none" : ""}`}>
      <div>
        <h3
          className={`${tabActive === 1 && "bg-gray-200 dark:bg-gray-700"} hover:bg-gray-200 dark:hover:bg-gray-700 p-2 cursor-pointer`}
          onClick={() => { setTabActive(1) }}
        >Pages</h3>
        <PageEnter listPage={listPage} menuValue={menuValue} setMenuValue={setMenuValue} active={tabActive} className={`${tabActive === 1 ? "block" : "hidden"}`} />
      </div>
      <DivNgang />
      <div>
        <h3
          className={`${tabActive === 2 && "bg-gray-200 dark:bg-gray-700"} hover:bg-gray-200 dark:hover:bg-gray-700 p-2 cursor-pointer`}
          onClick={() => { setTabActive(2) }}
        >Posts</h3>
        <PostEnter listPage={listPost} menuValue={menuValue} setMenuValue={setMenuValue} active={tabActive} className={`${tabActive === 2 ? "block" : "hidden"}`} />
      </div>
      <DivNgang />
      <div>
        <h3
          className={`${tabActive === 7 && "bg-gray-200 dark:bg-gray-700"} hover:bg-gray-200 dark:hover:bg-gray-700 p-2 cursor-pointer`}
          onClick={() => { setTabActive(7) }}
        >Custom Links</h3>
        <CustomLinkEnter menuValue={menuValue} setMenuValue={setMenuValue} active={tabActive} className={`${tabActive === 7 ? "block" : "hidden"}`} />
      </div>
      <DivNgang />
      <div>
        <h3
          className={`${tabActive === 6 && "bg-gray-200 dark:bg-gray-700"} hover:bg-gray-200 dark:hover:bg-gray-700 p-2 cursor-pointer`}
          onClick={() => { setTabActive(6) }}
        >Categories</h3>
        <CategoryEnter listPage={listPostCategory} menuValue={menuValue} setMenuValue={setMenuValue} active={tabActive} className={`${tabActive === 6 ? "block" : "hidden"}`} />
      </div>
      <DivNgang />
      <div>
        <h3
          className={`${tabActive === 4 && "bg-gray-200 dark:bg-gray-700"} hover:bg-gray-200 dark:hover:bg-gray-700 p-2 cursor-pointer`}
          onClick={() => { setTabActive(4) }}
        >Portfolios</h3>
        <PortfolioEnter listPage={listPortfolio} menuValue={menuValue} setMenuValue={setMenuValue} active={tabActive} className={`${tabActive === 4 ? "block" : "hidden"}`} />
      </div>
      <DivNgang />
      <div>
        <h3
          className={`${tabActive === 5 && "bg-gray-200 dark:bg-gray-700"} hover:bg-gray-200 dark:hover:bg-gray-700 p-2 cursor-pointer`}
          onClick={() => { setTabActive(5) }}
        >Products</h3>
        <ProductEnter listPage={listProduct} menuValue={menuValue} setMenuValue={setMenuValue} active={tabActive} className={`${tabActive === 5 ? "block" : "hidden"}`} />
      </div>
    </div>
  )
}

export default AddMenuItems