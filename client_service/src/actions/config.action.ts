"use server";
import { ConfigType } from "@/lib/types";
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

    return dataParse.data.configs;
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

    return dataParse.data.config;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function updateConfigByKey(
  key: string,
  value: string,
  style?: string
) {
  try {
    const config: ConfigType = await getConfigByKey(key);
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify({
      config_key: config.config_key,
      config_value: value,
      config_style: style ? style : config.config_style,
    });
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/configs/${config.config_id}`,
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
      return null;
    }

    return dataParse.data;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
