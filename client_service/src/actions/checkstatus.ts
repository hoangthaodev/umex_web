"use server";
import { cookies } from "next/headers";

export async function checkStatus() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/checkstatus`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));

    if (dataParse.code !== 2000) {
      return false;
    }
    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
  }
}

export async function checkAuth() {
  try {
    const cookie = (await cookies()).get("access_token");
    if (!cookie) {
      return false;
    }
    const access_token = cookie?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/checkauth`,
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
      return false;
    }
    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
  }
}
