"use server";

import { cookies } from "next/headers";

export const getTagByType = async (typeId: number) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/tags/type/${typeId}`,
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
      console.log("fail GetTagByType::", dataParse);
      return null;
    }
    return dataParse.data.tags;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export const createNewTag = async (
  name: string,
  slug: string,
  description: string,
  typeId: number
) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/tags`,
      {
        method: "POST",
        headers: {
          Authorization: access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tag_name: name,
          tag_slug: slug,
          tag_description: description,
          type_id: typeId,
        }),
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail CreateNewTag::", dataParse);
      return null;
    }
    return dataParse.data;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export const getTagBySlug = async (slug: string) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/tags/slug/${slug}`,
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
      console.log("fail GetTagBySlug::", dataParse);
      return null;
    }
    return dataParse.data.tag;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};
