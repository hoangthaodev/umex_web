"use server";

import { cookies } from "next/headers";
import { toast } from "react-toastify";

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

    return dataParse.components;
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

    return dataParse.data.components;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function updateComponent(
  componentId: number,
  componentName: string,
  position: number,
  index: number,
  map: string
) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify({
      component_name: componentName,
      component_position: position,
      component_index: index,
      component_map: map,
    });
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/components/${componentId}`,
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
      return null;
    }
    return dataParse.data;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
