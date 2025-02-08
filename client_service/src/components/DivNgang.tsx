import React from 'react'

type Props = {
  className?: string
}

const DivNgang = ({ className }: Props) => {
  return (
    <div className={`${className} border-b border-gray-400`} />
  )
}

export default DivNgang