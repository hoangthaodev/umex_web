'use server'

import MainLayout from "@/app/(main)/layout";
import MainPage from "@/app/(main)/page";
import React from "react";

export default async function Home() {
  return (
    <MainLayout>
      <MainPage />
    </MainLayout>
  );
}
