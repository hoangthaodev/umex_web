'use client'

import { getConfigByKey, updateConfig } from '@/action/config.action'
import AttributeContent from '@/components/admin/theme/widgets/AttributeContent'
import DivNgang from '@/components/DivNgang'
import { ConfigType, WidgetPageType, WidgetValueType } from '@/lib/type'
import React, { useEffect, useState } from 'react'
import { FaCaretDown, FaCaretUp, FaCheck } from 'react-icons/fa6'
import { toast } from 'sonner'

type ItemType = {
  label: string
  child: WidgetValueType[]
  saveConfig: (value: WidgetValueType[]) => void
}
const Item = ({ label, child, saveConfig }: ItemType) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<WidgetValueType[]>(child)

  useEffect(() => {
    setValue(child)
  }, [child])

  return (
    <div className='border p-2 rounded-xs cursor-pointer select-none flex flex-col gap-2'>
      <div
        onClick={() => { setIsOpen(!isOpen) }}
        className='flex justify-between items-center group'>
        <h4>{label}        </h4>
        {
          isOpen ? <FaCaretUp className='text-gray-400 group-hover:text-gray-800' /> : <FaCaretDown className='text-gray-400 group-hover:text-gray-800' />
        }
      </div>
      {
        isOpen && value && (
          <div>
            {
              value.length > 0 ? (
                <div className='bg-gray-200 flex flex-col gap-2'>
                  {
                    value.map((item, index) => (
                      <ItemChild
                        key={index}
                        label={item.component}
                        value={value}
                        setValue={setValue}
                        attribute={item.attribute}
                        index={index}
                        saveConfig={saveConfig}
                      />
                    ))
                  }
                </div>
              ) : (
                <div className='p-2 text-gray-500'>No widgets added</div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

type ItemChildType = {
  label: string
  value: WidgetValueType[]
  setValue: React.Dispatch<React.SetStateAction<WidgetValueType[]>>
  attribute: {}
  index: number
  saveConfig: (value: WidgetValueType[]) => void
}
const ItemChild = ({ label, value, setValue, attribute, index, saveConfig }: ItemChildType) => {
  const [isOpen, setIsOpen] = useState(false)
  const [attributeData, setAttributeData] = useState<{}>(attribute)
  const attributeTitle = JSON.parse(JSON.stringify(attributeData)).title as string;

  const handleDelete = () => {
    const newChild = value?.filter((_, i) => i !== index)
    if (newChild) {
      saveConfig(newChild)
      setValue(newChild)
    }
  }

  const handleSave = () => {
    const newChild = value?.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          attribute: attributeData,
        }
      }
      return item
    })
    if (newChild) {
      saveConfig(newChild);
      setValue(newChild)
    }
  }

  return (
    <div className='border p-2 rounded-xs cursor-pointer select-none flex flex-col gap-2'>
      <div
        onClick={() => { setIsOpen(!isOpen) }}
        className='flex justify-between items-center group'>
        <h4>{label}
          {
            attributeTitle !== '' && (
              <span className='text-gray-500 text-sm'>
                : {attributeTitle}
              </span>
            )
          }
        </h4>
        {
          isOpen ? <FaCaretUp className='text-gray-400 group-hover:text-gray-800' /> : <FaCaretDown className='text-gray-400 group-hover:text-gray-800' />
        }
      </div>
      {
        isOpen && attribute && (
          <div className='flex flex-col gap-2'>
            <DivNgang />
            <AttributeContent component={label} attribute={attribute} setAttribute={setAttributeData} />
            <div className='flex justify-between gap-2'>
              <button onClick={handleDelete}
                className='text-red-600 hover:text-red-700 underline'
              >Delete</button>
              <button
                onClick={handleSave}
                className='px-2 py-1 bg-blue-600 hover:bg-blue-700 text-gray-100 rounded-xs'>Save</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

type AvailableItemType = {
  label: string
  attribute: {}
  onAddWidget: (widget: number, component: string, attribute: {}) => void
}
const AvailableItem = ({ label, attribute, onAddWidget }: AvailableItemType) => {
  const [isOpen, setIsOpen] = useState(true)
  const [selected, setSelected] = useState(1)
  return (
    <>
      <div className='select-none flex flex-col gap-2'>
        <div
          onClick={() => { setIsOpen(!isOpen) }}
          className='border p-2 rounded-xs cursor-pointer flex justify-between items-center group'>
          <h4>{label}</h4>
          {
            isOpen ? <FaCaretUp className='text-gray-400 group-hover:text-gray-800' /> : <FaCaretDown className='text-gray-400 group-hover:text-gray-800' />
          }
        </div>
      </div>
      {
        isOpen && (
          <div className='flex flex-col gap-2'>
            <ul className='border'>
              <li
                onClick={() => { setSelected(1) }}
                className={`${selected === 1 ? 'bg-blue-500 text-gray-100' : ''} p-2 flex items-center gap-2 cursor-pointer select-none`}>
                {selected === 1 && <FaCheck />}
                <label>Left Sidebar</label>
              </li>
              <li
                onClick={() => { setSelected(2) }}
                className={`${selected === 2 ? 'bg-blue-500 text-gray-100' : ''} border-t p-2 flex items-center gap-2 cursor-pointer select-none`}>
                {selected === 2 && <FaCheck />}
                Right Sidebar
              </li>
              <li
                onClick={() => { setSelected(3) }}
                className={`${selected === 3 ? 'bg-blue-500 text-gray-100' : ''} border-t p-2 flex items-center gap-2 cursor-pointer select-none`}>
                {selected === 3 && <FaCheck />}
                <label>Footer 1</label>
              </li>
              <li
                onClick={() => { setSelected(4) }}
                className={`${selected === 4 ? 'bg-blue-500 text-gray-100' : ''} border-t p-2 flex items-center gap-2 cursor-pointer select-none`}>
                {selected === 4 && <FaCheck />}
                <label>Footer 2</label>
              </li>
            </ul>
            <div className='flex justify-between gap-2'>
              <button
                onClick={() => { setIsOpen(false) }}
                className='border border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700 px-2 py-1 rounded-xs'>Cancel</button>
              <button
                onClick={() => { onAddWidget(selected, label, attribute) }}
                className='bg-blue-600 text-gray-100 hover:bg-blue-700 px-2 py-1 rounded-xs'>Add Widget</button>
            </div>
          </div>
        )
      }
    </>
  )
}

const page = () => {
  const [leftSidebar, setLeftSidebar] = useState<ConfigType | undefined>(undefined)
  const [rightSidebar, setRightSidebar] = useState<ConfigType | undefined>(undefined)
  const [footer1, setFooter1] = useState<ConfigType | undefined>(undefined)
  const [footer2, setFooter2] = useState<ConfigType | undefined>(undefined)
  const [leftSidebarValue, setLeftSidebarValue] = useState<WidgetValueType[]>(JSON.parse(leftSidebar?.config_value || '[]'))
  const [rightSidebarValue, setRightSidebarValue] = useState<WidgetValueType[]>(JSON.parse(rightSidebar?.config_value || '[]'))
  const [footer1Value, setFooter1Value] = useState<WidgetValueType[]>(JSON.parse(footer1?.config_value || '[]'))
  const [footer2Value, setFooter2Value] = useState<WidgetValueType[]>(JSON.parse(footer2?.config_value || '[]'))

  useEffect(() => {
    const fetchData = async () => {
      const widgetLeftSidebar = await getConfigByKey('widget_leftsidebar')
      if (widgetLeftSidebar) {
        setLeftSidebar(widgetLeftSidebar)
        setLeftSidebarValue(JSON.parse(widgetLeftSidebar.config_value || '[]'))
      }
      const widgetRightSidebar = await getConfigByKey('widget_rightsidebar')
      if (widgetRightSidebar) {
        setRightSidebar(widgetRightSidebar)
        setRightSidebarValue(JSON.parse(widgetRightSidebar.config_value || '[]'))
      }
      const widgetFooter1 = await getConfigByKey('widget_footer1')
      if (widgetFooter1) {
        setFooter1(widgetFooter1)
        setFooter1Value(JSON.parse(widgetFooter1.config_value || '[]'))
      }
      const widgetFooter2 = await getConfigByKey('widget_footer2')
      if (widgetFooter2) {
        setFooter2(widgetFooter2)
        setFooter2Value(JSON.parse(widgetFooter2.config_value || '[]'))
      }
    }
    fetchData()
  }, [])

  const handleAddWidget = (widget: number, component: string, attribute: {}) => {
    const newWidget: WidgetValueType = {
      component: component,
      attribute: attribute,
    }
    switch (widget) {
      case 1:
        const newLeftSidebarValue = [...leftSidebarValue, newWidget]
        setLeftSidebarValue(newLeftSidebarValue)
        handleSaveLeftSidebar(newLeftSidebarValue)
        break
      case 2:
        const newRightSidebarValue = [...rightSidebarValue, newWidget]
        setRightSidebarValue(newRightSidebarValue)
        handleSaveRightSidebar(newRightSidebarValue)
        break
      case 3:
        const newFooter1 = [...footer1Value, newWidget]
        setFooter1Value(newFooter1)
        handleSaveFooter1(newFooter1)
        break
      case 4:
        const newFooter2 = [...footer2Value, newWidget]
        setFooter2Value(newFooter2)
        handleSaveFooter2(newFooter2)
        break
      default:
        break
    }
  }

  const handleSaveLeftSidebar = async (value: WidgetValueType[]) => {
    if (!leftSidebar) return
    const newLeftSidebar: ConfigType = {
      config_id: leftSidebar.config_id!,
      config_key: leftSidebar.config_key,
      config_value: JSON.stringify(value),
      config_style: leftSidebar.config_style,
    }
    await updateConfig(newLeftSidebar)

    toast.success('updated successfully')
  }

  const handleSaveRightSidebar = async (value: WidgetValueType[]) => {
    if (!rightSidebar) return
    const newRightSidebar: ConfigType = {
      config_id: rightSidebar.config_id!,
      config_key: rightSidebar.config_key,
      config_value: JSON.stringify(value),
      config_style: rightSidebar.config_style,
    }
    await updateConfig(newRightSidebar)

    toast.success('updated successfully')
  }

  const handleSaveFooter1 = async (value: WidgetValueType[]) => {
    if (!footer1) return
    const newFooter1: ConfigType = {
      config_id: footer1.config_id!,
      config_key: footer1.config_key,
      config_value: JSON.stringify(value),
      config_style: footer1.config_style,
    }
    await updateConfig(newFooter1)

    toast.success('updated successfully')
  }

  const handleSaveFooter2 = async (value: WidgetValueType[]) => {
    if (!footer2) return
    const newFooter2: ConfigType = {
      config_id: footer2.config_id!,
      config_key: footer2.config_key,
      config_value: JSON.stringify(value),
      config_style: footer2.config_style,
    }
    await updateConfig(newFooter2)
    toast.success('updated successfully')
  }

  const pageAttribute: WidgetPageType = {
    title: '',
    sortby: 1,
    exclude: [],
  }

  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex gap-2 items-center'>
        <h1 className='capitalize'>Widgets</h1>
      </div>
      <div className='flex gap-4'>
        <div className='w-1/2 flex flex-col gap-2'>
          <h3>Available Widgets</h3>
          <p className='text-gray-500'>To activate a widget drag it to a sidebar or click on it. To deactivate a widget and delete its settings, drag it back.</p>
          <div className='w-full md:max-w-1/2 flex flex-col md:flex-wrap gap-2'>
            <AvailableItem label='Pages' attribute={pageAttribute} onAddWidget={handleAddWidget} />
          </div>
        </div>
        <div className='grow flex flex-col md:flex-row gap-2'>
          <div className='w-full md:max-w-1/2 flex flex-col gap-2'>
            <Item
              label='Left Sidebar'
              child={leftSidebarValue}
              saveConfig={handleSaveLeftSidebar}
            />
            <Item
              label='Right Sidebar'
              child={rightSidebarValue}
              saveConfig={handleSaveRightSidebar}
            />
          </div>
          <div className='w-full md:max-w-1/2 flex flex-col gap-2'>
            <Item
              label='Footer 1'
              child={footer1Value}
              saveConfig={handleSaveFooter1}
            />
            <Item
              label='Footer 2'
              child={footer2Value}
              saveConfig={handleSaveFooter2}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page