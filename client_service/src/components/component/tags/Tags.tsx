'use client'
import { createNewTag, getTagByManyId, getTagBySlug, getTagByType } from '@/actions/tag.action'
import Autocomplete from '@/components/component/tags/Autocomplete'
import { Item } from '@/components/DraggableItem'
import { TagType } from '@/lib/types'
import React, { ChangeEvent, SetStateAction, useEffect, useState } from 'react'
import { FaX } from 'react-icons/fa6'
import slugify from 'slugify'

type Props = {
  typeId: number
  selectedTags: number[]
  setSelectedTags: React.Dispatch<SetStateAction<number[]>>
}

const Tags = ({ typeId, selectedTags, setSelectedTags }: Props) => {
  const [tags, setTags] = useState<TagType[]>([])
  // const [selectedTagsT, setSelectedTagsT] = useState<TagType[]>([])

  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<TagType[]>([]);

  useEffect(() => {
    if (inputValue.trim() !== "") {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [inputValue])

  useEffect(() => {
    getTagByType(typeId).then((data: TagType[]) => {
      data && setTags(data)
    })
  }, [])

  // useEffect(() => {
  //   getTagByManyId(selectedTags).then(data => {
  //     const dataParse: TagType[] = JSON.parse(JSON.stringify(data))
  //     setSelectedTagsT(dataParse)
  //   })

  // }, [selectedTags])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Lọc danh sách gợi ý
    const lastValue = value.split(',').pop()?.trim() || ""
    const filtered = tags.filter((item) =>
      item.tag_name.toLowerCase().includes(lastValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  // Xử lý khi người dùng chọn một gợi ý
  const handleSuggestionClick = (suggestion: string) => {
    const values = inputValue.split(',').map((v) => v.trim()); // Tách các giá trị hiện tại
    values[values.length - 1] = suggestion; // Thay thế giá trị cuối cùng bằng gợi ý đã chọn
    const newValue = values.join(', '); // Kết hợp lại thành chuỗi, phân tách bằng dấu phẩy

    setInputValue(newValue);
    setFilteredSuggestions([]);
    setIsExpanded(false);
  };

  const AddTag = (name: string, slug: string, description: string, typeId: number) => {
    var tagId: number | undefined
    createNewTag(name, slug, description, typeId)
    getTagByType(typeId).then((data: TagType[]) => {
      setTags(data)
    })
    getTagBySlug(slug).then((data: TagType) => {
      if (data) {
        setSelectedTags([...selectedTags, data.tag_id])
        tagId = data.tag_id
      }
    })

    return tagId
  }

  const handleAddTags = () => {
    const values = inputValue.split(',').filter((i) => i.trim() !== "").map((v) => v.trim());
    if (!values || values.length <= 0) return setInputValue('');
    let newSelected = [...selectedTags]
    values.forEach((i) => {
      const hadTag = tags.find(t => t.tag_name.toLowerCase() === i.toLowerCase())
      var tagId: number | undefined
      if (hadTag) {
        tagId = hadTag.tag_id
      } else {
        tagId = AddTag(i, slugify(i, { lower: true, locale: "vi" }), "", typeId)
      }
      if (tagId) {
        newSelected.push(tagId)
      }
    })
    setSelectedTags(newSelected);
    setInputValue('');
  }

  const handleRemoveSelectedTag = (value: number) => {
    const newSelected = selectedTags.filter((item) => item !== value);
    setSelectedTags(newSelected);
  }

  return (
    <div className='flex flex-col border border-gray-400'>
      <h3 className='px-2 bg-gray-300'>Tags</h3>
      <div className='p-2 flex flex-col gap-2'>
        <div className='flex gap-1 flex-col'>
          <div className='flex gap-1'>
            <input
              className='border border-gray-400 rounded-sm px-2 w-[80%]'
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              autoComplete="off"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={isExpanded}
              aria-owns="suggestions-list"
              aria-describedby="input-description"
            />
            <label className='border border-blue-600 text-blue-600 rounded-sm px-2 py-1'
              onClick={handleAddTags}
            >Add</label>
          </div>

          {/* Danh sách gợi ý */}
          {isExpanded && filteredSuggestions.length > 0 && (
            <ul
              className='visible bg-gray-100 border border-blue-500 h-52 overflow-y-auto'
              id="suggestions-list" role="listbox">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  className='px-2 py-1 hover:bg-blue-500 hover:text-gray-100'
                  key={index}
                  role="option"
                  onClick={() => handleSuggestionClick(suggestion.tag_name)}
                  style={{ cursor: 'pointer' }}
                >
                  {suggestion.tag_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <span className='italic text-gray-600'>Separate tags with commas.</span>

        {/* Hiển thị các giá trị đã chọn */}
        <div>
          <ul className='flex flex-wrap gap-3'>
            {selectedTags.map((value, index) => (
              <li key={index} className='flex gap-1 items-center'>
                <FaX
                  onClick={() => { handleRemoveSelectedTag(value) }}
                  className='bg-blue-600 text-gray-100 hover:bg-red-600 rounded-full p-1' />
                {tags.find(i => i.tag_id === value)?.tag_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Tags