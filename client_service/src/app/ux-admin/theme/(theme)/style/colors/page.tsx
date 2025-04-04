'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import SelectColor from '@/components/admin/theme/theme/SelectColor'
import DivNgang from '@/components/DivNgang'
import React from 'react'

const page = () => {
  const { primaryColor, secondaryColor, successColor, alertColor, baseColor, headlineColor, linkColor, linkColorHover,
    setPrimaryColor, setSecondaryColor, setSuccessColor, setAlertColor, setBaseColor, setHeadlineColor, setLinkColor, setLinkColorHover
  } = useTheme()

  return (
    <div className='flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Style", link: "/ux-admin/theme/style" },
        { name: "Colors", link: "/ux-admin/theme/style/colors" },
      ]} />

      <div>
        <h3 className='bg-gray-600 px-2 py-1 font-semibold text-gray-50'>Main Colors</h3>
        <div className='flex flex-col gap-4 p-2'>
          <div>
            <div>
              <h4>Primary Color</h4>
              <p className='text-xs text-gray-500 italic'>Change primary color.</p>
            </div>
            <div>
              <SelectColor color={primaryColor} setColor={setPrimaryColor} />
            </div>
          </div>
          <DivNgang />
          <div>
            <div>
              <h4>Secondary Color</h4>
              <p className='text-xs text-gray-500 italic'>Change secondary color.</p>
            </div>
            <div>
              <SelectColor color={secondaryColor} setColor={setSecondaryColor} />
            </div>
          </div>
          <DivNgang />
          <div>
            <div>
              <h4>Success Color</h4>
              <p className='text-xs text-gray-500 italic'>Change the success color. Used for global success messages.</p>
            </div>
            <div>
              <SelectColor color={successColor} setColor={setSuccessColor} />
            </div>
          </div>
          <DivNgang />
          <div>
            <div>
              <h4>Alert Color</h4>
              <p className='text-xs text-gray-500 italic'>Change the alert color. Used for global error messages etc.</p>
            </div>
            <div>
              <SelectColor color={alertColor} setColor={setAlertColor} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className='bg-gray-600 px-2 py-1 font-semibold text-gray-50'>Type</h3>
        <div className='flex flex-col gap-4 p-2'>
          <div>
            <div>
              <h4>Base Color</h4>
              <p className='text-xs text-gray-500 italic'>Used for all nomal texts.</p>
            </div>
            <div>
              <SelectColor color={baseColor} setColor={setBaseColor} />
            </div>
          </div>
          <DivNgang />
          <div>
            <div>
              <h4>Headline Color</h4>
              <p className='text-xs text-gray-500 italic'>Used for all headlines on white backgrounds. (H1, H2, H3 etc.)</p>
            </div>
            <div>
              <SelectColor color={headlineColor} setColor={setHeadlineColor} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className='bg-gray-600 px-2 py-1 font-semibold text-gray-50'>Links</h3>
        <div className='flex flex-col gap-4 p-2'>
          <div>
            <div>
              <h3>Link Colors</h3>
            </div>
            <div>
              <SelectColor color={linkColor} setColor={setLinkColor} />
            </div>
          </div>
          <DivNgang />
          <div>
            <div>
              <h3>Link Colors :hover</h3>
            </div>
            <div>
              <SelectColor color={linkColorHover} setColor={setLinkColorHover} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page