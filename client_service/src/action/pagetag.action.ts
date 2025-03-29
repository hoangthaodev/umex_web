"use server";

import { PageTagType } from "@/lib/type";
import { cookies } from "next/headers";

export const getPagetagByPage = async (pageId: number) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pagetags/page/${pageId}`,
      {
        method: "GET",
        headers: {
          Authorization: access_token,
        },
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));

    if (data.code !== 2000) {
      console.log("fail getTagByPage::", dataParse);
      return null;
    }

    return dataParse.data.pagetags as PageTagType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export async function deletePagetag(pagetagId: number) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/tags/${pagetagId}`,
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
      console.log("fail deleteTag::", dataParse);
      return false;
    }
    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
  }
}

export async function createNewPagetag(
  pageId: number,
  tagId: number,
  slug: string
) {
  try {
    const accessToken = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify({
      page_id: pageId,
      tag_id: tagId,
      pagetag_slug: slug,
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pagetags`,
      {
        method: "POST",
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
        body: body,
      }
    );

    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail CreateNewTag::", dataParse);
      return null;
    }
    return dataParse.data.pagetag as PageTagType;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
