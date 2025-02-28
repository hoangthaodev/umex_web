import { TagType } from '@/lib/types';
import { ChangeEvent, SetStateAction, useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';

type Props = {
  tags: string[]
  selectedTags: string[]
  setSelectedTags: React.Dispatch<SetStateAction<string[]>>
}

const Autocomplete = ({ tags, selectedTags, setSelectedTags }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (inputValue.trim() !== "") {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [inputValue])

  // Xử lý khi người dùng nhập liệu
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Lọc danh sách gợi ý
    const lastValue = value.split(',').pop()?.trim() || ""
    const filtered = tags.filter((item) =>
      item.toLowerCase().includes(lastValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  // Xử lý khi người dùng chọn một gợi ý
  const handleSuggestionClick = (suggestion: string) => {
    const values = inputValue.split(',').map((v) => v.trim()); // Tách các giá trị hiện tại
    values[values.length - 1] = suggestion; // Thay thế giá trị cuối cùng bằng gợi ý đã chọn
    const newValue = values.join(', '); // Kết hợp lại thành chuỗi, phân tách bằng dấu phẩy

    setInputValue(newValue);
    // setSelectedTags(values.filter((v) => v !== '')); // Cập nhật danh sách giá trị đã chọn
    setFilteredSuggestions([]);
    setIsExpanded(false);
  };

  const handleAddTags = () => {
    const values = inputValue.split(',').filter((i) => i !== "").map((v) => v.trim());
    let newValues = [...selectedTags]
    values.forEach((i) => {
      const filtered = newValues.filter((item) =>
        item.toLowerCase() === i.toLowerCase()
      );
      if (!filtered.length) {
        newValues.push(i)
      }
    })
    setSelectedTags(newValues);
    setInputValue('');
  }

  const handleRemoveSelectedTag = (value: string) => {
    const newValues = selectedTags.filter((item) => item !== value);
    setSelectedTags(newValues);
  }

  return (
    <div className='p-2 flex flex-col gap-2'>
      <div className='flex gap-1 flex-wrap'>
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

        {/* Danh sách gợi ý */}
        {isExpanded && filteredSuggestions.length > 0 && (
          <ul
            className='visible bg-gray-100 border border-blue-500 w-[80%]'
            id="suggestions-list" role="listbox">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                className='px-2 py-1 hover:bg-blue-500 hover:text-gray-100'
                key={index}
                role="option"
                onClick={() => handleSuggestionClick(suggestion)}
                style={{ cursor: 'pointer' }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <span id="input-description">Separate tags with commas.</span>

      {/* Hiển thị các giá trị đã chọn */}
      <div>
        <ul className='flex flex-wrap gap-3'>
          {selectedTags.map((value, index) => (
            <li key={index} className='flex gap-1 items-center'>
              <FaX
                onClick={() => { handleRemoveSelectedTag(value) }}
                className='bg-blue-600 text-gray-100 hover:bg-red-600 rounded-full p-1' />
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Autocomplete;