'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  className?: string
  link: string
  content: any
}

const LinkButton = ({ className, link, content }: Props) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(link)}
      className={className}
    >
      {content}
    </button>
  )
}

export default LinkButton