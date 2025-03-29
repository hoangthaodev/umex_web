"use server";

import { ImageType } from "@/lib/type";
import { cookies } from "next/headers";

export async function getAllImage() {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/images`,
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
      console.log("fail getAllImage::", dataParse);
      return null;
    }

    return dataParse.data.images as ImageType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function getImageById(id: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/image/${id}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail getImageById::", dataParse);
      return null;
    }

    return dataParse.data.image as ImageType;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function updateImage(image: ImageType) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify(image);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/images/${image.image_id}`,
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
      console.log("fail updateImage::", dataParse);
      return false;
    }

    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
  }
}

export async function deleteImage(id: number) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/images/${id}`,
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
      console.log("fail deleteImage::", dataParse);
      return false;
    }

    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
  }
}

export async function createNewImage(url: string) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify({
      image_url: url,
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/images`,
      {
        method: "POST",
        headers: {
          Authorization: access_token,
        },
        body: body,
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));

    if (dataParse.code !== 2000) {
      console.log("fail createImage::", dataParse);
      return null;
    }

    return dataParse.data.image as ImageType;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
