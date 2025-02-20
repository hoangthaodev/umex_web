"use server";
import { cookies } from "next/headers";

export const GetAllPage = async (limit: number, offset: number) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages?limit=${limit}&offset=${offset}`,
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
      console.log("fail getAllPage::", dataParse);
      return null;
    }

    return dataParse.data.pages;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export const GetPageById = async (pageId: number) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages/${pageId}`,
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
      console.log("fail GetPageById::", dataParse);
      return null;
    }

    return dataParse.data.page;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};
