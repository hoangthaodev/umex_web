'use client'
import { useComponent } from '@/app/ComponentContext'
import { useTheme } from '@/app/ThemeContext'
import CompZone from '@/components/CompZone'
import React from 'react'

type Props = {}

const DeskHeader = (props: Props) => {
  const { component1, component2, component3, component4, component5, component6, component7, component8, component9 } = useComponent()
  const comp1Items = component1.map((i) => i.component_map)
  const comp2Items = component2.map((i) => i.component_map)
  const comp3Items = component3.map((i) => i.component_map)
  const comp4Items = component4.map((i) => i.component_map)
  const comp5Items = component5.map((i) => i.component_map)
  const comp6Items = component6.map((i) => i.component_map)
  const comp7Items = component7.map((i) => i.component_map)
  const comp8Items = component8.map((i) => i.component_map)
  const comp9Items = component9.map((i) => i.component_map)
  const { topbarEnable } = useTheme()

  return (
    <div>
      {
        topbarEnable &&
        <div id='top-bar' className='flex gap-2'>
          <CompZone compItems={comp1Items}
            className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 '
          />
          <CompZone compItems={comp2Items}
            className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 '
          />
          <CompZone compItems={comp3Items}
            className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 '
          />
        </div>
      }
      <div id='header-main' className='flex gap-2'>
        <CompZone compItems={comp4Items}
          className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 '
        />
        <CompZone compItems={comp5Items}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 '
        />
        <CompZone compItems={comp6Items}
          className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 '
        />
      </div>
      <div id='header-bottom' className='flex gap-2'>
        <CompZone compItems={comp7Items}
          className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 '
        />
        <CompZone compItems={comp8Items}
          className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 '
        />
        <CompZone compItems={comp9Items}
          className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 '
        />
      </div>
    </div>
  )
}

export default DeskHeader