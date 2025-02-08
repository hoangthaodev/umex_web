'use client'
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type SidebarContextType = {
  isShowSidebar: boolean,
  setShowSidebar: Dispatch<SetStateAction<boolean>>
}
const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

type SidebarProviderType = {
  children: React.ReactNode,
}
export function SidebarProvider({ children }: SidebarProviderType) {
  const [isShowSidebar, setShowSidebar] = useState(false)

  return (
    <SidebarContext.Provider value={{
      isShowSidebar,
      setShowSidebar
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context;
}

