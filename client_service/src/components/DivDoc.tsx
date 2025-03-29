'use client'

import React from 'react'

type Props = {
  className?: string
}

const DivDoc = ({ className }: Props) => {
  return (
    <div className={`${className ? className : ""} border-l`} />
  )
}

export default DivDoc