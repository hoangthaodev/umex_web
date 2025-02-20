'use client'
import { useComponent } from '@/app/ComponentContext'
import { useTheme } from '@/app/ThemeContext'
import CompZone from '@/components/CompZone'
import React from 'react'

type Props = {}

const MobHeader = (props: Props) => {
  const { modComponent1, modComponent2, modComponent3, modComponent4, modComponent5 } = useComponent()
  const comp1Items = modComponent1.map((i) => i.component_map)
  const comp2Items = modComponent2.map((i) => i.component_map)
  const comp3Items = modComponent3.map((i) => i.component_map)
  const comp4Items = modComponent4.map((i) => i.component_map)
  const comp5Items = modComponent5.map((i) => i.component_map)
  const { topbarEnable } = useTheme()
  return (
    <div>
      <div>
        {
          topbarEnable &&
          <div id='top-bar' className='flex gap-2'>
            <CompZone compItems={comp1Items}
              className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 '
            />
          </div>
        }
        <div id='header-main' className='flex gap-2'>
          <CompZone compItems={comp2Items}
            className='flex flex-wrap grow gap-2 justify-start p-2 min-h-8 '
          />
          <CompZone compItems={comp3Items}
            className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 '
          />
          <CompZone compItems={comp4Items}
            className='flex flex-wrap grow gap-2 justify-end p-2 min-h-8 '
          />
        </div>
        <div id='header-bottom' className='flex gap-2'>
          <CompZone compItems={comp5Items}
            className='flex flex-wrap grow gap-2 justify-center p-2 min-h-8 '
          />
        </div>
      </div>
    </div>
  )
}

export default MobHeader