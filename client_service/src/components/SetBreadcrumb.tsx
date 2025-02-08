'use client'

import { useBreadcrumb } from "@/app/ux-admin/(admin)/theme/BreadcrumbContext";
import { BreadcrumbType } from "@/lib/types";
import { useEffect } from "react";

export function SetBreadcrumb({ breadcrumb }: { breadcrumb: BreadcrumbType[] }) {
  const { setBreadcrumb } = useBreadcrumb()
  useEffect(() => {
    setBreadcrumb(breadcrumb)
  }, [])
  return null;
}