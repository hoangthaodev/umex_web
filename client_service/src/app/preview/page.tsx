'use client'

import React, { useEffect, useState } from 'react'

const PreviewPage = () => {
  const [pageContent, setPageContent] = useState<string>('')

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      setPageContent(event.data.pageContent)
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);


  return (
    <div dangerouslySetInnerHTML={{ __html: pageContent }} />
  )
}

export default PreviewPage