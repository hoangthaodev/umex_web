'use client'

import { useTheme } from '@/app/themeContext'
import React, { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa6'

type Props = {
  buttonShape: number
  position: number
  showMobile: boolean
}

const BTT = ({ buttonShape, position, showMobile }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const { isMobile } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  if (isMobile && !showMobile) return null

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 bottom-6 ${position === 1 ? 'left-6' : 'right-6'} 
        ${buttonShape === 1 ? 'rounded-full' : 'rounded-sm'} 
      border border-gray-500 p-3 text-gray-500 hover:bg-gray-500 hover:text-gray-100 cursor-pointer`}>
      <FaChevronUp />
    </button>
  )
}

export default BTT