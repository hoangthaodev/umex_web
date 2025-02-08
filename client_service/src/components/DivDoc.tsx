import React from 'react'

type Props = {
  className?: string
}

const DivDoc = ({ className }: Props) => {
  return (
    <div className={`${className} border-l border-gray-400`} />
  )
}

export default DivDoc