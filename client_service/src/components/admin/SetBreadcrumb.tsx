'use client'

import { useBreadcrumb } from "@/app/ux-admin/theme/(theme)/BreadcrumbContext";
import { BreadcrumbType } from "@/lib/type";
import { useEffect } from "react";

export function SetBreadcrumb({ breadcrumb }: { breadcrumb: BreadcrumbType[] }) {
  const { setBreadcrumb } = useBreadcrumb()
  useEffect(() => {
    setBreadcrumb(breadcrumb)
  }, [breadcrumb])
  return null;
}