'use client'

import { useComponent } from '@/app/ComponentContext'
import { useRouter } from 'next/navigation'
import React from 'react'
import { LuSettings } from 'react-icons/lu'

const ActionList = () => {
  const { component1, component2, component3, component4, component5, component6, component7, component8, component9, handleDragStart, handleDragOver, handleDrop } = useComponent()
  const router = useRouter()

  return (
    <>
      <div className='relative flex gap-2 hover:border hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/topbar") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Top Bar</span><LuSettings size={20} /></button>
        <div
          id="component1"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='flex gap-2 justify-start min-w-[20%] p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'>
          {
            component1 &&
            component1.map((item: any, index) => (
              <label
                id={item.comp_id}
                key={index}
                className='px-2 bg-gray-100 text-gray-800 rounded-md cursor-pointer'
                draggable={true}
                onDragStart={handleDragStart}
              >
                {item.comp_name}
              </label>
            ))
          }
        </div>
        <div
          id="component2"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='flex gap-2 grow justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'>
          {
            component2 &&
            component2.map((item: any, index) => (
              <label
                id={item.comp_id}
                key={index}
                className='px-2 bg-gray-100 text-gray-800 rounded-md cursor-pointer'
                draggable={true}
                onDragStart={handleDragStart}
              >
                {item.comp_name}
              </label>
            ))
          }
        </div>
        <div
          id="component3"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='flex gap-2 justify-end min-w-[20%] p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'>
          {
            component3 &&
            component3.map((item: any, index) => (
              <label
                id={item.comp_id}
                key={index}
                className='px-2 bg-gray-100 text-gray-800 rounded-md cursor-pointer'
                draggable={true}
                onDragStart={handleDragStart}
              >
                {item.comp_name}
              </label>
            ))
          }
        </div>
      </div>
      <div className='relative flex gap-2 hover:border hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/headermain") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Header Main</span><LuSettings size={20} /></button>
        <div
          id="component4"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='flex gap-2 justify-start min-w-[20%] p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'>
          {
            component4 &&
            component4.map((item: any, index) => (
              <label
                id={item.comp_id}
                key={index}
                className='px-2 bg-gray-100 text-gray-800 rounded-md cursor-pointer'
                draggable={true}
                onDragStart={handleDragStart}
                onClick={() => {
                  alert(`link to:: /abc/${item.comp_name}`)
                }}
              >
                {item.comp_name}
              </label>
            ))
          }
        </div>
        <div
          id="component5"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='flex gap-2 grow justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'>
          {
            component5 &&
            component5.map((item: any, index) => (
              <label
                id={item.comp_id}
                key={index}
                className='px-2 bg-gray-100 text-gray-800 rounded-md cursor-pointer'
                draggable={true}
                onDragStart={handleDragStart}
              >
                {item.comp_name}
              </label>
            ))
          }
        </div>
        <div
          id="component6"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='flex gap-2 justify-end min-w-[20%] p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'>
          {
            component6 &&
            component6.map((item: any, index) => (
              <label
                id={item.comp_id}
                key={index}
                className='px-2 bg-gray-100 text-gray-800 rounded-md cursor-pointer'
                draggable={true}
                onDragStart={handleDragStart}
              >
                {item.comp_name}
              </label>
            ))
          }
        </div>
      </div>
      <div className='relative flex gap-2 hover:border hover:border-blue-500 group'>
        <button
          onClick={() => { router.push("/ux-admin/theme/header/headerbottom") }}
          className='absolute hidden -top-6 bg-blue-500 text-gray-100 px-1 group-hover:flex items-center gap-1'><span>Header Bottom</span><LuSettings size={20} /></button>
        <div
          id="component7"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='flex gap-2 justify-start min-w-[20%] p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'>
          {
            component7 &&
            component7.map((item: any, index) => (
              <label
                id={item.comp_id}
                key={index}
                className='px-2 bg-gray-100 text-gray-800 rounded-md cursor-pointer'
                draggable={true}
                onDragStart={handleDragStart}
              >
                {item.comp_name}
              </label>
            ))
          }
        </div>
        <div
          id="component8"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='flex gap-2 grow justify-center p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'>
          {
            component8 &&
            component8.map((item: any, index) => (
              <label
                id={item.comp_id}
                key={index}
                className='px-2 bg-gray-100 text-gray-800 rounded-md cursor-pointer'
                draggable={true}
                onDragStart={handleDragStart}
              >
                {item.comp_name}
              </label>
            ))
          }
        </div>
        <div
          id="component9"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='flex gap-2 justify-end min-w-[20%] p-2 min-h-8 bg-gray-900 border border-dashed border-gray-100'>
          {
            component9 &&
            component9.map((item: any, index) => (
              <label
                id={item.comp_id}
                key={index}
                className='px-2 bg-gray-100 text-gray-800 rounded-md cursor-pointer'
                draggable={true}
                onDragStart={handleDragStart}
              >
                {item.comp_name}
              </label>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ActionList