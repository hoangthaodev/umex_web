"use server";

import { PageType } from "@/lib/type";
import { cookies } from "next/headers";

export const getPageASC = async (limit: number, offset: number) => {
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

    return dataParse.data.pages as PageType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export const getPageById = async (pageId: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/page/id/${pageId}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail GetPageById::", dataParse);
      return null;
    }
    return dataParse.data.page as PageType;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export async function updatePage(newPage: PageType) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify(newPage);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages/${newPage.page_id}`,
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
      return false;
    }

    return true;
  } catch (error) {
    console.log("error::", error);
    return false;
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
    return dataParse.data.pages as PageType[];
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
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail getPageByTypeNStatus::", dataParse);
      return null;
    }
    return dataParse.data.pages as PageType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function createNewPage(newPage: PageType) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const body = JSON.stringify(newPage);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages`,
      {
        method: "POST",
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
      console.log("fail createNewPage::", dataParse);
      return null;
    }
    return dataParse.data.page as PageType;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function getPageByManyId(listId: number[]) {
  if (listId.length <= 0) return;
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/page/ids/?ids=${listId.join(",")}`,
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
      console.log("fail getPageByManyId::", dataParse);
      return null;
    }
    return dataParse.data.pages as PageType[];
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
    return dataParse.data.result as number;
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
    return dataParse.data.result as number;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function getPageByTypeDESC(
  type: number,
  limit: number,
  offset: number
) {
  try {
    const access_token = (await cookies()).get("access_token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/pages/desc/?type=${type}&limit=${limit}&offset=${offset}`,
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
      console.log("Fail to getPageDESC::", dataParse);
      return null;
    }
    return dataParse.data.pages as PageType[];
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}

export async function getPageBySlug(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/page/slug/${slug}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    const dataParse = JSON.parse(JSON.stringify(data));
    if (dataParse.code !== 2000) {
      console.log("fail to getPageBySlug::", dataParse);
      return null;
    }
    return dataParse.data.page as PageType;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
}
