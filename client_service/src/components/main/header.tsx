'user server'
import { getAllComponent, getComponentByPosition } from '@/actions/component.action';
import { useComponent } from '@/app/ComponentContext'
import Logo from '@/components/component/Logo'
import { ComponentType } from '@/lib/types'
import React from 'react'

const componentMapping: { [key: string]: React.FC } = {
  Logo,
};

const MainHeader = async () => {
  // const { component1, component2, component3, component4, component5, component6, component7, component8, component9 } = useComponent()
  const componentAll: ComponentType[] = await getAllComponent()
  var component1: ComponentType[] = []
  var component2: ComponentType[] = []
  var component3: ComponentType[] = []
  var component4: ComponentType[] = []
  var component5: ComponentType[] = []
  var component6: ComponentType[] = []
  var component7: ComponentType[] = []
  var component8: ComponentType[] = []
  var component9: ComponentType[] = []
  if (componentAll && componentAll.length > 0) {
    component1 = componentAll.filter(item => item.component_position === 1).sort((a, b) => (a.component_index || 0) - (b.component_index || 0))
    component2 = componentAll.filter(item => item.component_position === 2).sort((a, b) => (a.component_index || 0) - (b.component_index || 0))
    component3 = componentAll.filter(item => item.component_position === 3).sort((a, b) => (a.component_index || 0) - (b.component_index || 0))
    component4 = componentAll.filter(item => item.component_position === 4).sort((a, b) => (a.component_index || 0) - (b.component_index || 0))
    component5 = componentAll.filter(item => item.component_position === 5).sort((a, b) => (a.component_index || 0) - (b.component_index || 0))
    component6 = componentAll.filter(item => item.component_position === 6).sort((a, b) => (a.component_index || 0) - (b.component_index || 0))
    component7 = componentAll.filter(item => item.component_position === 7).sort((a, b) => (a.component_index || 0) - (b.component_index || 0))
    component8 = componentAll.filter(item => item.component_position === 8).sort((a, b) => (a.component_index || 0) - (b.component_index || 0))
    component9 = componentAll.filter(item => item.component_position === 9).sort((a, b) => (a.component_index || 0) - (b.component_index || 0))
  }
  return (
    <div>
      <div className='flex gap-2'>
        <div className='flex gap-2 justify-start'>
          {component1 && component1.map((item: ComponentType) => {
            const Component = componentMapping[item.component_name || ""]
            if (!Component) {
              return null
            }
            return <Component key={item.component_id} />
          })}
        </div>
        <div className='flex gap-2 grow justify-center'>
          {component2 && component2.map((item: ComponentType) => {
            const Component = componentMapping[item.component_name || ""]
            if (!Component) {
              return null
            }
            return <Component key={item.component_id} />
          })}
        </div>
        <div className='flex gap-2 justify-end'>
          {component3 && component3.map((item: ComponentType) => {
            const Component = componentMapping[item.component_name || ""]
            if (!Component) {
              return null
            }
            return <Component key={item.component_id} />
          })}
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='flex gap-2 justify-start'>
          {component4 && component4.map((item: ComponentType) => {
            const Component = componentMapping[item.component_name || ""]
            if (!Component) {
              return null
            }
            return <Component key={item.component_id} />
          })}
        </div>
        <div className='flex gap-2 grow justify-center'>
          {component5 && component5.map((item: ComponentType) => {
            const Component = componentMapping[item.component_name || ""]
            if (!Component) {
              return null
            }
            return <Component key={item.component_id} />
          })}
        </div>
        <div className='flex gap-2 justify-end'>
          {component6 && component6.map((item: ComponentType) => {
            const Component = componentMapping[item.component_name || ""]
            if (!Component) {
              return null
            }
            return <Component key={item.component_id} />
          })}
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='flex gap-2 justify-start'>
          {component7 && component7.map((item: ComponentType) => {
            const Component = componentMapping[item.component_name || ""]
            if (!Component) {
              return null
            }
            return <Component key={item.component_id} />
          })}
        </div>
        <div className='flex gap-2 grow justify-center'>
          {component8 && component8.map((item: ComponentType) => {
            const Component = componentMapping[item.component_name || ""]
            if (!Component) {
              return null
            }
            return <Component key={item.component_id} />
          })}
        </div>
        <div className='flex gap-2 justify-end'>
          {component9 && component9.map((item: ComponentType) => {
            const Component = componentMapping[item.component_name || ""]
            if (!Component) {
              return null
            }
            return <Component key={item.component_id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default MainHeader