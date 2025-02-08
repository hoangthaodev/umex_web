'use client'
import { BreadcrumbType } from "@/lib/types"
import React, { createContext, SetStateAction, useEffect, useState } from "react"

type BreadcrumbContextType = {
  breadcrumb: BreadcrumbType[],
  setBreadcrumb: React.Dispatch<SetStateAction<BreadcrumbType[]>>,
  isHeader: boolean,
  setIsHeader: React.Dispatch<SetStateAction<boolean>>,
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined)

type BreadcrumbProviderType = {
  children: React.ReactNode,
}

export function BreadcrumbProvider({ children }: BreadcrumbProviderType) {
  const [isHeader, setIsHeader] = useState(false)
  const [breadcrumb, setBreadcrumb] = useState<BreadcrumbType[]>([])

  useEffect(() => {
    const headerSet = [...breadcrumb].find(br => br.name === "Header")
    if (headerSet) {
      setIsHeader(true)
    } else {
      setIsHeader(false)
    }
  }, [breadcrumb])

  return (
    <BreadcrumbContext.Provider value={{
      breadcrumb,
      setBreadcrumb,
      isHeader,
      setIsHeader,
    }}>
      {children}
    </BreadcrumbContext.Provider>
  )
}

export const useBreadcrumb = () => {
  const context = React.useContext(BreadcrumbContext)
  if (!context) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider')
  }
  return context
}