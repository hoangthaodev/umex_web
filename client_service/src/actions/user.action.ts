"use server";

import { cookies } from "next/headers";

export async function login(username: string, password: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));

    if (dataParse.code !== 2000) {
      console.log("fail login::", dataParse);
      return JSON.stringify({ code: 3001, message: "Login failure" });
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
      maxAge: 60 * 60 * 24, // 1 days
      httpOnly: true,
      sameSite: "strict",
    });

    return JSON.stringify({ code: 2000, message: "Login success" });
  } catch (error) {
    console.log("error::", error);
    return JSON.stringify({ code: 5000, message: "Catched error" });
  }
}

export async function logout() {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/logout`,
      {
        method: "POST",
        headers: {
          Authorization: access_token,
        },
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));

    if (dataParse.code !== 2000) {
      console.log("fail logout::", dataParse);
      return JSON.stringify({ code: 3001, message: "Logout failure" });
    }

    (await cookies()).delete("access_token");
    (await cookies()).delete("refresh_token");
    (await cookies()).delete("user");

    return JSON.stringify({ code: 2000, message: "Logout success" });
  } catch (error) {
    console.log("error::", error);
    return JSON.stringify({ code: 5000, message: "Catched error" });
  }
}
export async function getAllUser() {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(`${process.env.SERVER_URL}/admin/users`, {
      method: "GET",
      headers: {
        Authorization: access_token,
      },
    });
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail getAllUser::", dataParse);
      return null;
    }

    return dataParse.users;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
