'use client'

import { useTheme } from '@/app/themeContext'
import { SetBreadcrumb } from '@/components/admin/SetBreadcrumb'
import Button from '@/components/admin/theme/theme/header/Button'
import React from 'react'

const page = () => {
  const {
    button1Text,
    button1Link,
    button1Case,
    button1Color,
    button1Style,
    button1Target,
    button1Rel,
    button1Radius,
    button1Icon,
    button1Size,
    button2Text,
    button2Link,
    button2Case,
    button2Color,
    button2Style,
    button2Target,
    button2Rel,
    button2Radius,
    button2Icon,
    button2Size,
    setButton1Text,
    setButton1Link,
    setButton1Case,
    setButton1Color,
    setButton1Style,
    setButton1Target,
    setButton1Rel,
    setButton1Radius,
    setButton1Icon,
    setButton1Size,
    setButton2Text,
    setButton2Link,
    setButton2Case,
    setButton2Color,
    setButton2Style,
    setButton2Target,
    setButton2Rel,
    setButton2Radius,
    setButton2Icon,
    setButton2Size,
  } = useTheme()

  return (
    <div className='flex flex-col gap-4'>
      <SetBreadcrumb breadcrumb={[
        { name: "Customizing", link: "/ux-admin/theme" },
        { name: "Header", link: "/ux-admin/theme/header" },
        { name: "Buttons", link: "/ux-admin/theme/header/buttons" },
      ]} />
      <div className='flex flex-col gap-4'>
        <Button buttonLabel='Button 1' buttonCase={button1Case} setButtonCase={setButton1Case} buttonColor={button1Color} setButtonColor={setButton1Color}
          buttonIcon={button1Icon} setButtonIcon={setButton1Icon} buttonLink={button1Link} setButtonLink={setButton1Link}
          buttonRadius={button1Radius} setButtonRadius={setButton1Radius} buttonRel={button1Rel} setButtonRel={setButton1Rel}
          buttonSize={button1Size} setButtonSize={setButton1Size} buttonStyle={button1Style} setButtonStyle={setButton1Style}
          buttonTarget={button1Target} setButtonTarget={setButton1Target} buttonText={button1Text} setButtonText={setButton1Text} />
        <Button buttonLabel='Button 2' buttonCase={button2Case} setButtonCase={setButton2Case} buttonColor={button2Color} setButtonColor={setButton2Color}
          buttonIcon={button2Icon} setButtonIcon={setButton2Icon} buttonLink={button2Link} setButtonLink={setButton2Link}
          buttonRadius={button2Radius} setButtonRadius={setButton2Radius} buttonRel={button2Rel} setButtonRel={setButton2Rel}
          buttonSize={button2Size} setButtonSize={setButton2Size} buttonStyle={button2Style} setButtonStyle={setButton2Style}
          buttonTarget={button2Target} setButtonTarget={setButton2Target} buttonText={button2Text} setButtonText={setButton2Text} />
      </div>

    </div>
  )
}

export default page