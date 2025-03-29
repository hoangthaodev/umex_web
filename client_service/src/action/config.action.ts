"use server";

import { ConfigType } from "@/lib/type";
import { cookies } from "next/headers";

export async function getAllConfig() {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/config`, {
      method: "GET",
    });
    const data = await result.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail getAllConfig::", dataParse);
      return null;
    }

    return dataParse.data.configs as ConfigType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function getConfigByKey(key: string) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/config/key/${key}`,
      {
        method: "GET",
      }
    );
    const data = await result.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail getConfigByKey::", dataParse);
      return null;
    }

    return dataParse.data.config as ConfigType;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function updateConfig(newConfig: ConfigType) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify(newConfig);
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/configs/${newConfig.config_id}`,
      {
        method: "PUT",
        headers: {
          Authorization: access_token,
        },
        body: body,
      }
    );
    const data = await result.json();
    const dataParse = JSON.parse(JSON.stringify(data));

    if (dataParse.code !== 2000) {
      console.log("fail updateConfigByKey::", dataParse);
      return false;
    }

    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
  }
}
