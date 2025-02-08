'use server'
import MainLayout from "@/app/(main)/layout";
import HomePage from "@/app/(main)/page";

export default async function Home() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}
