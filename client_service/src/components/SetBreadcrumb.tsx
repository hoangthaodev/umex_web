'use client'

import { useBreadcrumb } from "@/app/ux-admin/(admin)/theme/(custom)/BreadcrumbContext";
import { BreadcrumbType } from "@/lib/types";
import { useEffect } from "react";

export function SetBreadcrumb({ breadcrumb }: { breadcrumb: BreadcrumbType[] }) {
  const { setBreadcrumb } = useBreadcrumb()
  useEffect(() => {
    setBreadcrumb(breadcrumb)
  }, [breadcrumb])
  return null;
}