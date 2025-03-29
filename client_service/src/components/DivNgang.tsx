'use client'

import React from 'react'

type Props = {
  className?: string
}

const DivNgang = ({ className }: Props) => {
  return (
    <div className={`${className ? className : ""} border-b`} />
  )
}

export default DivNgang