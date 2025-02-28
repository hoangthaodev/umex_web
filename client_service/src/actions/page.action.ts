"use server";
import { cookies } from "next/headers";

export const getAllPage = async (limit: number, offset: number) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages?limit=${limit}&offset=${offset}`,
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
      console.log("fail getAllPage::", dataParse);
      return null;
    }

    return dataParse.data.pages;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export const getPageById = async (pageId: number) => {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages/id/${pageId}`,
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
      console.log("fail GetPageById::", dataParse);
      return null;
    }

    return dataParse.data.page;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export async function updatePage(
  page_id: number,
  page_title: string,
  page_slug: string,
  page_content: string,
  page_description: string,
  page_status: number,
  page_publish_year: number,
  page_publish_month: number,
  page_publish_day: number,
  page_image: number,
  user_id: number,
  type_id: number,
  temp_id: number
) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify({
      page_id,
      page_title,
      page_slug,
      page_content,
      page_description,
      page_status,
      page_publish_year,
      page_publish_month,
      page_publish_day,
      page_image,
      user_id,
      type_id,
      temp_id,
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
        },
        body: body,
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));

    if (dataParse.code !== 2000) {
      console.log("fail updatePage::", dataParse);
      return null;
    }

    return dataParse.data;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function getPageByType(
  type: number,
  limit: number,
  offset: number
) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages/type/${type}?limit=${limit}&offset=${offset}`,
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
      console.log("fail getPageByType::", dataParse);
      return null;
    }
    return dataParse.data.pages;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function getPageByTypeNStatus(
  typeId: number,
  status: number,
  limit: number,
  offset: number
) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages/typenstatus/?type=${typeId}&status=${status}&limit=${limit}&offset=${offset}`,
      {
        method: "GET",
        headers: {
          Authorization: access_token,
        },
      }
    );

    const data = await res.json();
    console.log("data::", data);
    const dataParse = JSON.parse(JSON.stringify(data));

    if (dataParse.code !== 2000) {
      console.log("fail getPageByTypeNStatus::", dataParse);
      return null;
    }
    return dataParse.data.pages;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function countPageByType(typeId: number) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages/count/type/${typeId}`,
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
      console.log("fail countPageByType::", dataParse);
      return null;
    }
    return dataParse.data.result;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function countPageByTypeNStatus(typeId: number, status: number) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages/count/typenstatus/?type=${typeId}&status=${status}`,
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
      console.log("fail countPageByTypeNStatus::", dataParse);
      return null;
    }
    return dataParse.data.result;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
