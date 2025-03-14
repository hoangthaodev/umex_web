"use server";
import { ImageType } from "@/lib/types";
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

    return dataParse.data.images;
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
      return undefined;
    }

    const image: ImageType = dataParse.data.image;
    return image;
  } catch (error) {
    console.log("error::", error);
    return undefined;
  }
}

export async function updateImage(
  id: number,
  url: string,
  alt: string,
  title: string,
  caption: string
) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/images/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: access_token,
        },
        body: JSON.stringify({
          imgage_url: url,
          image_title: title,
          image_alt: alt,
          image_caption: caption,
        }),
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));

    if (dataParse.code !== 2000) {
      console.log("fail updateImage::", dataParse);
      return null;
    }

    return dataParse.data;
  } catch (error) {
    console.log("error::", error);
    return null;
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
      return null;
    }

    return dataParse.data;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function createNewImage(url: string) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/images`,
      {
        method: "POST",
        headers: {
          Authorization: access_token,
        },
        body: JSON.stringify({
          image_url: url,
          image_alt: " ",
          image_title: " ",
          image_caption: " ",
        }),
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));

    if (dataParse.code !== 2000) {
      console.log("fail createImage::", dataParse);
      return null;
    }

    return dataParse.data.image;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
