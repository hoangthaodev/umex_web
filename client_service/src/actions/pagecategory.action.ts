"use server";

import { PageCategoryType } from "@/lib/types";
import { cookies } from "next/headers";

export const getPagecategoryByPage = async (pageId: number) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pagecategories/page/${pageId}`,
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
      console.log("fail GetPageCategoryByPage::", dataParse);
      return null;
    }
    return dataParse.data.pagecategories;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export async function deletePagecategory(pageCategoryId: number) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pagecategories/${pageCategoryId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: access_token,
        },
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail DeletePagecategory::", dataParse);
      return null;
    }
    return dataParse.data;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function createNewPagecategory(
  pageId: number,
  categoryId: number,
  pagecategorySlug: string
) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify({
      page_id: pageId,
      category_id: categoryId,
      pagecategory_slug: pagecategorySlug,
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pagecategories`,
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
      console.log("fail CreateNewPagecategory::", dataParse);
      return null;
    }
    return dataParse.data.pagecategory;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
