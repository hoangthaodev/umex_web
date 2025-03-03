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

export async function refreshToken() {
  try {
    const refresh_token = (await cookies()).get("refresh_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/token/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token }),
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail refreshToken::", dataParse);
      return false;
    }

    (await cookies()).set("access_token", dataParse.data.access_token, {
      path: "/",
      maxAge: 60 * 60 * 24, // 1 days
      httpOnly: true,
      sameSite: "strict",
    });

    (await cookies()).set("refresh_token", dataParse.data.refresh_token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
      sameSite: "strict",
    });

    (await cookies()).set("user", JSON.stringify(dataParse.data.user), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
      sameSite: "strict",
    });

    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
  }
}

export async function checkAuth() {
  try {
    const access_cookie = (await cookies()).get("access_token");
    if (!access_cookie) {
      const refresh_cookies = (await cookies()).get("refresh_token");
      if (!refresh_cookies) {
        return false;
      }
      return await refreshToken();
    }
    const access_token = access_cookie?.value || "";
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
