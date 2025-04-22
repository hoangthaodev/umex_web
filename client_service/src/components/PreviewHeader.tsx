'use client'

import { useTheme } from '@/app/themeContext'
import PreviewCompZone from '@/components/PreviewCompZone'
import { ComponentType } from '@/lib/type'
import React, { useEffect, useState } from 'react'

const PreviewHeader = () => {
  // const { isMobile, topbarEnable, component1, component2, component3, component4, component5, component6, component7, component8, component9,
  //   componentMob1, componentMob2, componentMob3, componentMob4, componentMob5
  // } = useTheme()

  const [isMobile, setIsMobile] = useState(true)
  const [topbarEnable, setTopbarEnable] = useState(true)
  const [component1, setComponent1] = useState<ComponentType[]>([])
  const [component2, setComponent2] = useState<ComponentType[]>([])
  const [component3, setComponent3] = useState<ComponentType[]>([])
  const [component4, setComponent4] = useState<ComponentType[]>([])
  const [component5, setComponent5] = useState<ComponentType[]>([])
  const [component6, setComponent6] = useState<ComponentType[]>([])
  const [component7, setComponent7] = useState<ComponentType[]>([])
  const [component8, setComponent8] = useState<ComponentType[]>([])
  const [component9, setComponent9] = useState<ComponentType[]>([])
  const [componentMob1, setComponentMob1] = useState<ComponentType[]>([])
  const [componentMob2, setComponentMob2] = useState<ComponentType[]>([])
  const [componentMob3, setComponentMob3] = useState<ComponentType[]>([])
  const [componentMob4, setComponentMob4] = useState<ComponentType[]>([])
  const [componentMob5, setComponentMob5] = useState<ComponentType[]>([])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      setIsMobile(event.data.isMobile)
      setTopbarEnable(event.data.topbarEnable)
      setComponent1(event.data.component1)
      setComponent2(event.data.component2)
      setComponent3(event.data.component3)
      setComponent4(event.data.component4)
      setComponent5(event.data.component5)
      setComponent6(event.data.component6)
      setComponent7(event.data.component7)
      setComponent8(event.data.component8)
      setComponent9(event.data.component9)
      setComponentMob1(event.data.componentMob1)
      setComponentMob2(event.data.componentMob2)
      setComponentMob3(event.data.componentMob3)
      setComponentMob4(event.data.componentMob4)
      setComponentMob5(event.data.componentMob5)
    }
    window.addEventListener('message', handleMessage)
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  const comp1Items = component1.map(i => i.component_map)
  const comp2Items = component2.map(i => i.component_map)
  const comp3Items = component3.map(i => i.component_map)
  const comp4Items = component4.map(i => i.component_map)
  const comp5Items = component5.map(i => i.component_map)
  const comp6Items = component6.map(i => i.component_map)
  const comp7Items = component7.map(i => i.component_map)
  const comp8Items = component8.map(i => i.component_map)
  const comp9Items = component9.map(i => i.component_map)
  const compMob1Items = componentMob1.map(i => i.component_map)
  const compMob2Items = componentMob2.map(i => i.component_map)
  const compMob3Items = componentMob3.map(i => i.component_map)
  const compMob4Items = componentMob4.map(i => i.component_map)
  const compMob5Items = componentMob5.map(i => i.component_map)

  if (isMobile) {
    return (
      <div>
        {
          topbarEnable &&
          <div id='top-bar' className='flex items-center gap-2'>
            <PreviewCompZone compItems={compMob1Items}
              className='flex flex-wrap grow gap-2 items-center justify-center p-2 '
            />
          </div>
        }
        <div id='header-main' className='flex items-center gap-2'>
          <PreviewCompZone compItems={compMob2Items}
            className='flex flex-wrap grow gap-2 items-center justify-start p-2 '
          />
          <PreviewCompZone compItems={compMob3Items}
            className='flex flex-wrap grow gap-2 items-center justify-center p-2 '
          />
          <PreviewCompZone compItems={compMob4Items}
            className='flex flex-wrap grow gap-2 items-center justify-end p-2 '
          />
        </div>
        <div id='header-bottom' className='flex items-center gap-2'>
          <PreviewCompZone compItems={compMob5Items}
            className='flex flex-wrap grow gap-2 items-center justify-center p-2 '
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      {
        topbarEnable &&
        <div id='top-bar' className='flex items-center gap-2'>
          <PreviewCompZone compItems={comp1Items}
            className='flex flex-wrap grow gap-2 items-center justify-start p-2 '
          />
          <PreviewCompZone compItems={comp2Items}
            className='flex flex-wrap grow gap-2 items-center justify-center p-2 '
          />
          <PreviewCompZone compItems={comp3Items}
            className='flex flex-wrap grow gap-2 items-center justify-end p-2 '
          />
        </div>
      }
      <div id='header-main' className='flex items-center gap-2'>
        <PreviewCompZone compItems={comp4Items}
          className='flex flex-wrap grow gap-2 items-center justify-start p-2 '
        />
        <PreviewCompZone compItems={comp5Items}
          className='flex flex-wrap grow gap-2 items-center justify-center p-2 '
        />
        <PreviewCompZone compItems={comp6Items}
          className='flex flex-wrap grow gap-2 items-center justify-end p-2 '
        />
      </div>
      <div id='header-bottom' className='flex items-center gap-2'>
        <PreviewCompZone compItems={comp7Items}
          className='flex flex-wrap grow gap-2 items-center justify-start p-2 '
        />
        <PreviewCompZone compItems={comp8Items}
          className='flex flex-wrap grow gap-2 items-center justify-center p-2 '
        />
        <PreviewCompZone compItems={comp9Items}
          className='flex flex-wrap grow gap-2 items-center justify-end p-2 '
        />
      </div>
    </div>
  )
}

export default PreviewHeader