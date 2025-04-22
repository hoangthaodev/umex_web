'use client'

import { getImageById } from '@/action/image.action'
import { getPageById, getPageByTypeDESC } from '@/action/page.action'
import { useTheme } from '@/app/themeContext'
import exportToHtml from '@/components/editor/exportToHtml'
import { ImageType, PageType } from '@/lib/type'
import React, { useEffect, useRef, useState } from 'react'

const ShowArea = () => {
  const { homepageDisplay, homepagePage } = useTheme()
  const [homePage, setHomePage] = useState<PageType | undefined>(undefined)
  const [pageContent, setPageContent] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      if (homepageDisplay === 1) {
        const page = await getPageByTypeDESC(1, 1, 0) as PageType[]
        setHomePage(page[0])
      } else {
        const page = await getPageById(homepagePage) as PageType
        setHomePage(page)
      }
    }
    fetchData()
  }, [homepageDisplay, homepagePage])

  useEffect(() => {
    if (!homePage) return
    const fetchData = async () => {
      const content = await exportToHtml(homePage.page_content)
      setPageContent(content)
    }
    fetchData()
  }, [homePage])

  const {
    themeMode, layoutMode, dropShadow, siteWidth, containerWidth, backgroundsColor, backgroundImage, backgroundRepeat, contentBackground,
    fontBase, fontBaseWeight, fontBaseSize, fontHeadline, fontHeadlineWeight, fontNavigation, fontNavigationWeight,
    primaryColor, secondaryColor, successColor, alertColor, baseColor, headlineColor, linkColor, linkColorHover, backdropColor, drawerWidth,
    isMobile, topbarEnable, component1, component2, component3, component4, component5, component6, component7, component8, component9,
    componentMob1, componentMob2, componentMob3, componentMob4, componentMob5
  } = useTheme()
  const [bgImage, setBgImage] = useState<ImageType | undefined>(undefined)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', themeMode === 1)
  }, [themeMode])

  useEffect(() => {
    if (backgroundImage === 0) return
    const fetchData = async () => {
      const image = await getImageById(backgroundImage)
      if (image) {
        setBgImage(image)
      }
    }
    fetchData()
  }, [backgroundImage])

  const [iframeData, setIframeData] = useState({
    pageContent, layoutMode, dropShadow, siteWidth, containerWidth, backgroundsColor, backgroundRepeat, contentBackground,
    fontBase, fontBaseWeight, fontBaseSize, fontHeadline, fontHeadlineWeight, fontNavigation, fontNavigationWeight,
    primaryColor, secondaryColor, successColor, alertColor, baseColor, headlineColor, linkColor, linkColorHover, backdropColor, drawerWidth, bgImage,
    isMobile, topbarEnable, component1, component2, component3, component4, component5, component6, component7, component8, component9,
    componentMob1, componentMob2, componentMob3, componentMob4, componentMob5
  })

  useEffect(() => {
    setIframeData({
      pageContent, layoutMode, dropShadow, siteWidth, containerWidth, backgroundsColor, backgroundRepeat, contentBackground,
      fontBase, fontBaseWeight, fontBaseSize, fontHeadline, fontHeadlineWeight, fontNavigation, fontNavigationWeight,
      primaryColor, secondaryColor, successColor, alertColor, baseColor, headlineColor, linkColor, linkColorHover, backdropColor, drawerWidth, bgImage,
      isMobile, topbarEnable, component1, component2, component3, component4, component5, component6, component7, component8, component9,
      componentMob1, componentMob2, componentMob3, componentMob4, componentMob5
    })
  }, [
    pageContent, layoutMode, dropShadow, siteWidth, containerWidth, backgroundsColor, backgroundRepeat, contentBackground,
    fontBase, fontBaseWeight, fontBaseSize, fontHeadline, fontHeadlineWeight, fontNavigation, fontNavigationWeight,
    primaryColor, secondaryColor, successColor, alertColor, baseColor, headlineColor, linkColor, linkColorHover, backdropColor, drawerWidth, bgImage,
    isMobile, topbarEnable, component1, component2, component3, component4, component5, component6, component7, component8, component9,
    componentMob1, componentMob2, componentMob3, componentMob4, componentMob5
  ])
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage(iframeData, '*');
  }, [iframeData]);

  return (
    <iframe ref={iframeRef}
      src="/preview" className='w-full h-full' />
  )
}

export default ShowArea