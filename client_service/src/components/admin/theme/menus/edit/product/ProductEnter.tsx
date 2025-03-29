'use client'

import { MenuValueType, PageType } from '@/lib/type'
import { arrayAreEqual } from '@/lib/utils'
import React, { SetStateAction, useEffect, useState } from 'react'

type Props = {
  listPage: PageType[]
  active: number
  className?: string
  menuValue: string
  setMenuValue: React.Dispatch<SetStateAction<string>>
}

const ListPage = ({ pageList, checkedPage, setCheckedPage }: { pageList: PageType[], checkedPage: number[], setCheckedPage: React.Dispatch<SetStateAction<number[]>> }) => {
  return (
    <ul>
      {
        pageList.map((page, index) => (
          <li key={index}>
            <input
              className='size-4 align-middle mr-2 cursor-pointer'
              type="checkbox" checked={checkedPage.includes(page.page_id!)}
              onChange={() => {
                const hadCheck = checkedPage.includes(page.page_id!)
                if (hadCheck) {
                  setCheckedPage(checkedPage.filter(id => id !== page.page_id))
                } else {
                  setCheckedPage([...checkedPage, page.page_id!])
                }
              }} />
            <label className='align-middle cursor-pointer'
              onClick={() => {
                const hadCheck = checkedPage.includes(page.page_id!)
                if (hadCheck) {
                  setCheckedPage(checkedPage.filter(id => id !== page.page_id))
                } else {
                  setCheckedPage([...checkedPage, page.page_id!])
                }
              }}
            >{page.page_title}</label>
          </li>
        ))
      }
    </ul>
  )
}

const SearchPage = ({ pageList, value, setValue, listSearched, setListSearched, checkedPage, setCheckedPage }: { pageList: PageType[], value: string, setValue: React.Dispatch<SetStateAction<string>>, listSearched: PageType[], setListSearched: React.Dispatch<SetStateAction<PageType[]>>, checkedPage: number[], setCheckedPage: React.Dispatch<SetStateAction<number[]>> }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (e.target.value === '') {
      setListSearched([])
      return
    }
    const searchValue = e.target.value.toLowerCase()
    const filtered = pageList.filter(page =>
      page.page_title.toLowerCase().includes(searchValue)
    )
    setListSearched(filtered)
  }

  return (
    <div className='flex flex-col gap-2'>
      <input
        className='border border-gray-400 rounded-sm px-2 py-1'
        type="text" placeholder='Search...' value={value} onChange={handleChange} />
      <ListPage pageList={listSearched} checkedPage={checkedPage} setCheckedPage={setCheckedPage} />
    </div>
  )
}

const ProductEnter = ({ listPage, className, active, menuValue, setMenuValue }: Props) => {
  const typeId = 5 // product
  const [tabActive, setTabActive] = useState(0)
  const newest = [...listPage].sort((a, b) => b.page_id! - a.page_id!)
  const listNewest = newest.slice(0, 16)
  const [listSearched, setListSearched] = useState<PageType[]>([])
  const [checkedPage, setCheckedPage] = useState<number[]>([])
  const [value, setValue] = useState('')

  useEffect(() => {
    if (active !== 5) return setCheckedPage([])
  }, [active])

  const tabMap: Record<number, PageType[]> = {
    0: listNewest,
    1: listPage,
    2: listSearched,
  }

  const tabs = [
    { id: 0, name: 'Most Recent', content: <ListPage pageList={listNewest} checkedPage={checkedPage} setCheckedPage={setCheckedPage} /> },
    { id: 1, name: 'View All', content: <ListPage pageList={listPage} checkedPage={checkedPage} setCheckedPage={setCheckedPage} /> },
    { id: 2, name: 'Search', content: <SearchPage pageList={listPage} value={value} setValue={setValue} listSearched={listSearched} setListSearched={setListSearched} checkedPage={checkedPage} setCheckedPage={setCheckedPage} /> },
  ]

  const handleAddToMenu = () => {
    const addItem: MenuValueType[] = JSON.parse(menuValue)
    checkedPage.forEach(i => {
      const item = {
        value_id: addItem.length + 1,
        type: active,
        content: {
          id: i,
          label: listPage.find(a => a.page_id === i)?.page_title || `page ${i}`,
          url: "",
        },
        depth: 0,
      }
      addItem.push(item)
    })

    setMenuValue(JSON.stringify(addItem))
    setCheckedPage([])
  }

  return (
    <div className={`${className && className} p-2`}>
      <div className='flex gap-2'>
        {
          tabs.map((tab, index) => (
            <label key={index}
              className={`${tabActive === tab.id ? "border border-gray-300 border-b-0" : "text-blue-600"} px-2`}
              onClick={() => { setTabActive(tab.id) }}>{tab.name}</label>
          ))
        }
      </div>
      <div className='p-2 border border-gray-300 max-h-[250px]'>
        {
          tabs[tabActive].content
        }
      </div>
      {
        tabs.map((item, index) => {
          if (tabs[tabActive] === item && tabMap[index].length > 0) {
            return (
              <div key={index} className='py-4 flex justify-between'>
                <label>
                  <input
                    className='size-4 align-middle mr-2 cursor-pointer'
                    type="checkbox" checked={arrayAreEqual(checkedPage, tabMap[index].map(i => i.page_id))}
                    onChange={() => {
                      if (arrayAreEqual(checkedPage, tabMap[index].map(i => i.page_id))) {
                        setCheckedPage([])
                      } else {
                        setCheckedPage(tabMap[index].map(i => i.page_id!))
                      }
                    }} />
                  <label className='align-middle cursor-pointer'
                    onClick={() => {
                      if (arrayAreEqual(checkedPage, tabMap[index].map(i => i.page_id))) {
                        setCheckedPage([])
                      } else {
                        setCheckedPage(tabMap[index].map(i => i.page_id!))
                      }
                    }}
                  >Select All</label>
                </label>
                <label className='text-blue-600 border border-blue-600 rounded-sm px-2 py-1 cursor-pointer'
                  onClick={handleAddToMenu}
                >Add to Menu</label>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default ProductEnter