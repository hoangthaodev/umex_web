'use client'
import { countPageByType, countPageByTypeNStatus, getPageByType, getPageByTypeNStatus } from '@/actions/page.action'
import PageTableRow from '@/components/PageTableRow';
import { PageType } from '@/lib/types'
import React, { useEffect, useState } from 'react'

type Props = {
  typeId: number,
  tableId: string,
  author?: boolean;
  thumbnail?: boolean;
  sku?: boolean;
  stock?: boolean;
  price?: boolean;
  categories?: boolean;
  tag?: boolean;
  comment?: boolean;
}

const PageTable = ({ typeId, tableId, author = false, thumbnail = false, sku = false, stock = false, price = false, categories = false, tag = false, comment = false }: Props) => {
  const [dataAll, setDataAll] = useState<PageType[]>([])
  const [publish, setPublish] = useState<PageType[]>([])
  const [pending, setPending] = useState<PageType[]>([])
  const [draft, setDraft] = useState<PageType[]>([])
  const [trash, setTrash] = useState<PageType[]>([])
  const [countAll, setCountAll] = useState(0)
  const [countPublish, setCountPublish] = useState(0)
  const [countPending, setCountPending] = useState(0)
  const [countDraft, setCountDraft] = useState(0)
  const [countTrash, setCountTrash] = useState(0)
  const [dataMap, setDataMap] = useState(dataAll)
  const [tabSelected, setTabSelected] = useState(0)

  useEffect(() => {
    const data = async () => {
      const dataAll: PageType[] = await getPageByType(typeId, 10, 0)
      dataAll && setDataAll(dataAll); setDataMap(dataAll)
      const publish: PageType[] = await getPageByTypeNStatus(typeId, 1, 10, 0)
      publish && setPublish(publish)
      const pending: PageType[] = await getPageByTypeNStatus(typeId, 2, 10, 0)
      pending && setPending(pending)
      const draft: PageType[] = await getPageByTypeNStatus(typeId, 3, 10, 0)
      draft && setDraft(draft)
      const trash: PageType[] = await getPageByTypeNStatus(typeId, 4, 10, 0)
      trash && setTrash(trash)
      const countAll = await countPageByType(typeId)
      countAll && setCountAll(countAll)
      const countPublish = await countPageByTypeNStatus(typeId, 1)
      countPublish && setCountPublish(countPublish)
      const countPending = await countPageByTypeNStatus(typeId, 2)
      countPending && setCountPending(countPending)
      const countDraft = await countPageByTypeNStatus(typeId, 3)
      countDraft && setCountDraft(countDraft)
      const countTrash = await countPageByTypeNStatus(typeId, 4)
      countTrash && setCountTrash(countTrash)
    }
    data()

  }, [])

  useEffect(() => {
    setDataMap(tabSelected === 0 ? dataAll : tabSelected === 1 ? publish : tabSelected === 2 ? pending : tabSelected === 3 ? draft : trash)
  }, [tabSelected])

  return (
    <div className='flex flex-col gap-4'>
      <ul className='flex gap-2'>
        <li>
          <label className={`${tabSelected === 0 ? "text-gray-800 font-semibold" : "text-blue-600"} cursor-pointer`}
            onClick={() => { setTabSelected(0) }}
          >
            All Page
            <span className='text-gray-600'> ({countAll})</span>
          </label>
        </li>
        {
          countPublish > 0 && (
            <li>
              | <label className={`${tabSelected === 1 ? "text-gray-800 font-semibold" : "text-blue-600"} cursor-pointer`}
                onClick={() => { setTabSelected(1) }}
              >
                Publish
                <span className='text-gray-600'> ({countPublish})</span>
              </label>
            </li>
          )
        }
        {
          countPending > 0 && (
            <li>
              | <label className={`${tabSelected === 2 ? "text-gray-800 font-semibold" : "text-blue-600"} cursor-pointer`}
                onClick={() => { setTabSelected(2) }}
              >
                Pending Review
                <span className='text-gray-600'> ({countPending})</span>
              </label>
            </li>
          )
        }
        {
          countDraft > 0 && (
            <li>
              | <label className={`${tabSelected === 3 ? "text-gray-800 font-semibold" : "text-blue-600"} cursor-pointer`}
                onClick={() => { setTabSelected(3) }}
              >
                Draft
                <span className='text-gray-600'> ({countDraft})</span>
              </label>
            </li>
          )
        }
        {
          countTrash > 0 && (
            <li>
              | <label className={`${tabSelected === 4 ? "text-gray-800 font-semibold" : "text-blue-600"} cursor-pointer`}
                onClick={() => { setTabSelected(4) }}
              >
                Trash
                <span className='text-gray-600'> ({countTrash})</span>
              </label>
            </li>
          )
        }
      </ul>
      <table id={tableId} className='w-full h-full border border-gray-300'>
        <thead>
          <tr className='border-b border-gray-300'>
            <th className='w-10'>
              <input type="checkbox" />
            </th>
            <th className='text-left'>Title</th>
            {
              author && <th className='w-20 text-left'>Author</th>
            }
            <th className='w-32 text-left'>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            dataMap && dataMap.map((i, index) => {
              return (
                <PageTableRow typeId={typeId} key={index} item={i} author={author} thumbnail={thumbnail} sku={sku} stock={stock} price={price} categories={categories} tag={tag} comment={comment} />
              )
            })
          }
        </tbody>
      </table>
      <style>
        {`
          #${tableId}>tbody>tr:nth-child(odd){
          background-color: #f6f7f7;
        }
          #${tableId} th,td{
          padding: 5px;
        }
        `}
      </style>
    </div>
  )
}

export default PageTable