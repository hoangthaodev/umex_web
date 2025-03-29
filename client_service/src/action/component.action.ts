"use server";

import { ComponentType } from "@/lib/type";
import { cookies } from "next/headers";

export async function getComponentByPosition(position: number) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/component/position/${position}`,
      {
        method: "GET",
      }
    );
    const data = await result.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail getComByPos::", dataParse);
      return null;
    }

    return dataParse.components as ComponentType[];
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
}

export async function getAllComponent() {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/component`,
      {
        method: "GET",
      }
    );
    const data = await result.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail getAllCom::", dataParse);
      return null;
    }

    return dataParse.data.components as ComponentType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function updateComponent(newComponent: ComponentType) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify(newComponent);
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/components/${newComponent.component_id}`,
      {
        method: "PUT",
        headers: {
          Authorization: access_token,
          "Content-Type": "application/json",
        },
        body: body,
      }
    );
    const data = await result.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail updateComponent::", dataParse);
      return false;
    }
    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
  }
}
