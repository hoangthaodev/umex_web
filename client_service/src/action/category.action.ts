"use server";

import { CategoryType } from "@/lib/type";
import { cookies } from "next/headers";

export const getCategoryByType = async (typeId: number) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/categories/type/${typeId}`,
      {
        method: "GET",
        headers: {
          Authorization: access_token,
        },
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail GetCategoryByType::", dataParse);
      return null;
    }
    return dataParse.data.categories as CategoryType[];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createNewCategory = async (newCategory: CategoryType) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify(newCategory);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/categories`,
      {
        method: "POST",
        headers: {
          Authorization: access_token,
          "Content-Type": "application/json",
        },
        body: body,
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail CreateNewCategory::", dataParse);
      return null;
    }
    return dataParse.data.category as CategoryType;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function getCategoryByTypeNParent(
  typeId: number,
  parentId: number
) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/categories/typenparent/?type=${typeId}&parent=${parentId}`,
      {
        method: "GET",
        headers: {
          Authorization: access_token,
        },
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail GetCategoryByTypeNParent::", dataParse);
      return null;
    }
    return dataParse.data.categories as CategoryType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function getCategoryByManyId(listId: number[]) {
  if (listId.length <= 0) return;
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_SERVER_URL
      }/admin/categories/ids/?ids=${listId.join(",")}`,
      {
        method: "GET",
        headers: {
          Authorization: access_token,
        },
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail GetCategoryByManyId::", dataParse);
      return null;
    }
    return dataParse.data.categories as CategoryType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function getCategoryById(categoryId: number) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/categories/${categoryId}`,
      {
        method: "GET",
        headers: {
          Authorization: access_token,
        },
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail GetCategoryById::", dataParse);
      return null;
    }
    return dataParse.data.category as CategoryType;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function getAllCategory() {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/categories`,
      {
        method: "GET",
        headers: {
          Authorization: access_token,
        },
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail getAllCategory::", dataParse);
      return null;
    }
    return dataParse.data.categories as CategoryType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
