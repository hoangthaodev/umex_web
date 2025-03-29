'use client'

import { getAllPagecategory } from '@/action/pagecategory.action'
import { CategoryType, MenuValueType } from '@/lib/type'
import { arrayAreEqual } from '@/lib/utils'
import React, { SetStateAction, useEffect, useRef, useState } from 'react'

type Props = {
  listPage: CategoryType[]
  active: number
  className?: string
  menuValue: string
  setMenuValue: React.Dispatch<SetStateAction<string>>
}

const ListCategory = ({ categoryList, checkedCategory, setCheckedCategory }: { categoryList: CategoryType[], checkedCategory: number[], setCheckedCategory: React.Dispatch<SetStateAction<number[]>> }) => {
  return (
    <ul>
      {
        categoryList.map((cat, index) => (
          <li key={index}>
            <input
              className='size-4 align-middle mr-2 cursor-pointer'
              type="checkbox" checked={checkedCategory.includes(cat.category_id!)}
              onChange={() => {
                const hadCheck = checkedCategory.includes(cat.category_id!)
                if (hadCheck) {
                  setCheckedCategory(checkedCategory.filter(id => id !== cat.category_id))
                } else {
                  setCheckedCategory([...checkedCategory, cat.category_id!])
                }
              }} />
            <label className='align-middle cursor-pointer'
              onClick={() => {
                const hadCheck = checkedCategory.includes(cat.category_id!)
                if (hadCheck) {
                  setCheckedCategory(checkedCategory.filter(id => id !== cat.category_id))
                } else {
                  setCheckedCategory([...checkedCategory, cat.category_id!])
                }
              }}
            >{cat.category_name}</label>
          </li>
        ))
      }
    </ul>
  )
}

const SearchCategory = ({ categoryList, value, setValue, listSearched, setListSearched, checkedCategory, setCheckedCategory }: { categoryList: CategoryType[], value: string, setValue: React.Dispatch<SetStateAction<string>>, listSearched: CategoryType[], setListSearched: React.Dispatch<SetStateAction<CategoryType[]>>, checkedCategory: number[], setCheckedCategory: React.Dispatch<SetStateAction<number[]>> }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (e.target.value === '') {
      setListSearched([])
      return
    }
    const searchValue = e.target.value.toLowerCase()
    const filtered = categoryList.filter(cat =>
      cat.category_name.toLowerCase().includes(searchValue)
    )
    setListSearched(filtered)
  }

  return (
    <div className='flex flex-col gap-2'>
      <input
        className='border border-gray-400 rounded-sm px-2 py-1'
        type="text" placeholder='Search...' value={value} onChange={handleChange} />
      <ListCategory categoryList={listSearched} checkedCategory={checkedCategory} setCheckedCategory={setCheckedCategory} />
    </div>
  )
}

const CategoryEnter = ({ listPage, className, active, menuValue, setMenuValue }: Props) => {
  const [tabActive, setTabActive] = useState(0)
  const listMostUsed = useRef<CategoryType[]>([])
  const [listSearched, setListSearched] = useState<CategoryType[]>([])
  const [checkedCategory, setCheckedCategory] = useState<number[]>([])
  const [value, setValue] = useState('')

  useEffect(() => {
    const category_count: { item: CategoryType, count: number }[] = []
    getAllPagecategory().then(pcdata => {
      if (!pcdata) return
      listPage.forEach(i => {
        const catlength = pcdata.filter(c => c.category_id === i.category_id).length
        category_count.push({ item: i, count: catlength })
      })
      const most_used = [...category_count].sort((a, b) => b.count - a.count).map(i => i.item)
      listMostUsed.current = most_used.slice(0, 16)
    })
  }, [])

  useEffect(() => {
    if (active !== 6) return setCheckedCategory([])
  }, [active])

  const tabMap: Record<number, CategoryType[]> = {
    0: listMostUsed.current,
    1: listPage,
    2: listSearched,
  }

  const tabs = [
    { id: 0, name: 'Most Used', content: <ListCategory categoryList={listMostUsed.current} checkedCategory={checkedCategory} setCheckedCategory={setCheckedCategory} /> },
    { id: 1, name: 'View All', content: <ListCategory categoryList={listPage} checkedCategory={checkedCategory} setCheckedCategory={setCheckedCategory} /> },
    { id: 2, name: 'Search', content: <SearchCategory categoryList={listPage} value={value} setValue={setValue} listSearched={listSearched} setListSearched={setListSearched} checkedCategory={checkedCategory} setCheckedCategory={setCheckedCategory} /> },
  ]

  const handleAddToMenu = () => {
    const addItem: MenuValueType[] = JSON.parse(menuValue)
    checkedCategory.forEach(i => {
      const item = {
        value_id: addItem.length + 1,
        type: active,
        content: {
          id: i,
          label: listPage.find(a => a.category_id === i)?.category_name || `category ${i}`,
          url: "",
        },
        depth: 0,
      }
      addItem.push(item)
    })
    setMenuValue(JSON.stringify(addItem))
    setCheckedCategory([])
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
      <div className='p-2 border border-gray-300 max-h-[250px] overflow-y-auto'>
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
                    type="checkbox" checked={arrayAreEqual(checkedCategory, tabMap[index].map(i => i.category_id))}
                    onChange={() => {
                      if (arrayAreEqual(checkedCategory, tabMap[index].map(i => i.category_id))) {
                        setCheckedCategory([])
                      } else {
                        setCheckedCategory(tabMap[index].map(i => i.category_id!))
                      }
                    }} />
                  <label className='align-middle cursor-pointer'
                    onClick={() => {
                      if (arrayAreEqual(checkedCategory, tabMap[index].map(i => i.category_id))) {
                        setCheckedCategory([])
                      } else {
                        setCheckedCategory(tabMap[index].map(i => i.category_id!))
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

export default CategoryEnter