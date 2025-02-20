'use client'
import { componentMap } from '@/lib/componentMap'
import React from 'react'

type Props = {
  compItem: string
}

const CompItem = ({ compItem }: Props) => {
  const Component = componentMap[compItem]
  return <Component />
}

export default CompItem