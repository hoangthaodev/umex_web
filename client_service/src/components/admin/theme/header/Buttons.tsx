'use client'
import { getConfigByKey, updateConfigByKey } from '@/actions/config.action'
import Button from '@/components/admin/theme/Button'
import { SetBreadcrumb } from '@/components/SetBreadcrumb'
import { ConfigType } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Buttons = () => {
  const [button1Text, setButton1Text] = useState("")
  const [button1Link, setButton1Link] = useState("")
  const [button1Case, setButton1Case] = useState("0")
  const [button1Color, setButton1Color] = useState("0")
  const [button1Style, setButton1Style] = useState("0")
  const [button1Target, setButton1Target] = useState("0")
  const [button1Rel, setButton1Rel] = useState("")
  const [button1Radius, setButton1Radius] = useState(0)
  const [button1Icon, setButton1Icon] = useState("None")
  const [button1Size, setButton1Size] = useState("2")

  const [button2Text, setButton2Text] = useState("")
  const [button2Link, setButton2Link] = useState("")
  const [button2Case, setButton2Case] = useState("0")
  const [button2Color, setButton2Color] = useState("0")
  const [button2Style, setButton2Style] = useState("0")
  const [button2Target, setButton2Target] = useState("0")
  const [button2Rel, setButton2Rel] = useState("")
  const [button2Radius, setButton2Radius] = useState(0)
  const [button2Icon, setButton2Icon] = useState("None")
  const [button2Size, setButton2Size] = useState("2")

  useEffect(() => {
    const setData = async () => {
      const res: ConfigType = await getConfigByKey("header_buttons")
      const data = JSON.parse(res.config_value)
      setButton1Text(data.button1Text)
      setButton1Link(data.button1Link)
      setButton1Case(data.button1Case)
      setButton1Color(data.button1Color)
      setButton1Style(data.button1Style)
      setButton1Target(data.button1Target)
      setButton1Rel(data.button1Rel)
      setButton1Radius(data.button1Radius)
      setButton1Icon(data.button1Icon)
      setButton1Size(data.button1Size)

      setButton2Text(data.button2Text)
      setButton2Link(data.button2Link)
      setButton2Case(data.button2Case)
      setButton2Color(data.button2Color)
      setButton2Style(data.button2Style)
      setButton2Target(data.button2Target)
      setButton2Rel(data.button2Rel)
      setButton2Radius(data.button2Radius)
      setButton2Icon(data.button2Icon)
      setButton2Size(data.button2Size)
    }
    setData()
  }, [])

  const handleSaveChange = async () => {
    const data = JSON.stringify({
      button1Case,
      button1Color,
      button1Icon,
      button1Link,
      button1Radius,
      button1Rel,
      button1Size,
      button1Style,
      button1Text,
      button1Target,
      button2Case,
      button2Color,
      button2Icon,
      button2Link,
      button2Radius,
      button2Rel,
      button2Size,
      button2Style,
      button2Text,
      button2Target,
    })
    await updateConfigByKey("header_buttons", data)

    toast.success("Save Change Successfully!")
  }

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
      <div className='px-2'>
        <button className='float-right bg-blue-700 text-gray-200 hover:bg-blue-800 text-sm py-1 px-2 rounded-md'
          onClick={handleSaveChange}
        >Save Change</button>
      </div>
    </div>
  )
}

export default Buttons