"use server";

import { MenuType } from "@/lib/type";
import { cookies } from "next/headers";

export async function getAllMenu() {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/menus`,
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
      console.log("fail getAllMenu::", dataParse);
      return null;
    }
    return dataParse.data.menus as MenuType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function updateMenu(newMenu: MenuType) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify(newMenu);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/menus/${newMenu.menu_id}`,
      {
        method: "PUT",
        headers: {
          Authorization: access_token,
        },
        body: body,
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail updateMenu::", dataParse);
      return false;
    }
    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
  }
}

export async function createNewMenu(newMenu: MenuType) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify(newMenu);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/menus`,
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
      console.log("fail createNewMenu::", dataParse);
      return null;
    }
    return dataParse.data.menu as MenuType;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function deleteMenu(menuId: number) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/menus/${menuId}`,
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
      console.log("fail deleteMenu::", dataParse);
      return false;
    }
    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
  }
}
