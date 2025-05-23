"use server";

import { TagType } from "@/lib/type";
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
    return dataParse.data.tags as TagType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export const createNewTag = async (newTag: TagType) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify(newTag);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/tags`,
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
      console.log("fail CreateNewTag::", dataParse);
      return null;
    }
    return dataParse.data.tag as TagType;
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
    return dataParse.data.tag as TagType;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export async function getTagByManyId(listId: number[]) {
  if (listId.length <= 0) return;
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/tags/ids/?ids=${listId.join(
        ","
      )}`,
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
      console.log("fail GetTagByManyId::", dataParse);
      return null;
    }
    return dataParse.data.tags as TagType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function getTagById(tagId: number) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/tags/id/${tagId}`,
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
      console.log("fail GetTagById::", dataParse);
      return null;
    }
    return dataParse.data.tag as TagType;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function updateTag(newTag: TagType) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify(newTag);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/tags/${newTag.tag_id}`,
      {
        method: "PUT",
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
      console.log("fail UpdateTag::", dataParse);
      return null;
    }
    return dataParse.data;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function deleteTag(tagId: number) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/tags/${tagId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: access_token,
        },
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));

    if (data.code !== 2000) {
      console.log("fail DeleteTag::", dataParse);
      return null;
    }
    return dataParse.data;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
