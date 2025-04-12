'use server'

import { getAllComponent } from '@/action/component.action'
import { getConfigByKey } from '@/action/config.action'
import CompZone from '@/components/CompZone'
import { ComponentType, TopbarType } from '@/lib/type'
import React from 'react'

const Header = async () => {
  let component1: ComponentType[] = []
  let component2: ComponentType[] = []
  let component3: ComponentType[] = []
  let component4: ComponentType[] = []
  let component5: ComponentType[] = []
  let component6: ComponentType[] = []
  let component7: ComponentType[] = []
  let component8: ComponentType[] = []
  let component9: ComponentType[] = []

  const comps = await getAllComponent()
  if (comps) {
    component1 = comps.filter(i => i.component_position === 1).sort((a, b) => b.component_index - a.component_index)
    component2 = comps.filter(i => i.component_position === 2).sort((a, b) => b.component_index - a.component_index)
    component3 = comps.filter(i => i.component_position === 3).sort((a, b) => b.component_index - a.component_index)
    component4 = comps.filter(i => i.component_position === 4).sort((a, b) => b.component_index - a.component_index)
    component5 = comps.filter(i => i.component_position === 5).sort((a, b) => b.component_index - a.component_index)
    component6 = comps.filter(i => i.component_position === 6).sort((a, b) => b.component_index - a.component_index)
    component7 = comps.filter(i => i.component_position === 7).sort((a, b) => b.component_index - a.component_index)
    component8 = comps.filter(i => i.component_position === 8).sort((a, b) => b.component_index - a.component_index)
    component9 = comps.filter(i => i.component_position === 9).sort((a, b) => b.component_index - a.component_index)
  }

  const comp1Items = component1.map((i) => i.component_map)
  const comp2Items = component2.map((i) => i.component_map)
  const comp3Items = component3.map((i) => i.component_map)
  const comp4Items = component4.map((i) => i.component_map)
  const comp5Items = component5.map((i) => i.component_map)
  const comp6Items = component6.map((i) => i.component_map)
  const comp7Items = component7.map((i) => i.component_map)
  const comp8Items = component8.map((i) => i.component_map)
  const comp9Items = component9.map((i) => i.component_map)

  let topbarEnable: boolean = false
  const topbar = await getConfigByKey('header_topbar')
  if (topbar) {
    const topbarParse = JSON.parse(topbar.config_value || '') as TopbarType
    topbarEnable = topbarParse.topbarEnable
  }

  return (
    <div>
      {
        topbarEnable &&
        <div id='top-bar' className='flex items-center gap-2'>
          <CompZone compItems={comp1Items}
            className='flex flex-wrap grow gap-2 justify-start p-2 '
          />
          <CompZone compItems={comp2Items}
            className='flex flex-wrap grow gap-2 justify-center p-2 '
          />
          <CompZone compItems={comp3Items}
            className='flex flex-wrap grow gap-2 justify-end p-2 '
          />
        </div>
      }
      <div id='header-main' className='flex items-center gap-2'>
        <CompZone compItems={comp4Items}
          className='flex flex-wrap grow gap-2 justify-start p-2 '
        />
        <CompZone compItems={comp5Items}
          className='flex flex-wrap grow gap-2 justify-center p-2 '
        />
        <CompZone compItems={comp6Items}
          className='flex flex-wrap grow gap-2 justify-end p-2 '
        />
      </div>
      <div id='header-bottom' className='flex items-center gap-2'>
        <CompZone compItems={comp7Items}
          className='flex flex-wrap grow gap-2 justify-start p-2 '
        />
        <CompZone compItems={comp8Items}
          className='flex flex-wrap grow gap-2 justify-center p-2 '
        />
        <CompZone compItems={comp9Items}
          className='flex flex-wrap grow gap-2 justify-end p-2 '
        />
      </div>
    </div>
  )
}

export default Header