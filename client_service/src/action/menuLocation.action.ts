"use server";

import { MenuLocationType } from "@/lib/type";
import { cookies } from "next/headers";

export async function getAllMenuLocation() {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/menu_locations`,
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
      console.log("fail getAllMenuLocation::", dataParse);
      return null;
    }
    return dataParse.data.locations as MenuLocationType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function updateMenuLocation(newMenuLocation: MenuLocationType) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify(newMenuLocation);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/menu_locations/${newMenuLocation.location_id}`,
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
      console.log("fail updateMenuLocation::", dataParse);
      return false;
    }
    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
  }
}

export async function getMenuLocationByMenu(menuId: number) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/menu_locations/menu/${menuId}`,
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
      console.log("fail getMenuLocationByMenu::", dataParse);
      return null;
    }
    return dataParse.data.locations as MenuLocationType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
