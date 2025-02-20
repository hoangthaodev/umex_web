"use server";

import { cookies } from "next/headers";

export const GetTypeById = async (typeId: number) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/types/${typeId}`,
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
      console.log("fail GetTypeById::", dataParse);
      return null;
    }
    return dataParse.data.type;
  } catch (error) {
    console.error(error);
    return null;
  }
};
