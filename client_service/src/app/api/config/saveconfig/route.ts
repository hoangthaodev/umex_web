// import { uploadImageToS3 } from "@/actions/uploadS3";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();
//     const site_name = formData.get("site_name");
//     const description = formData.get("description");
//     var faviconUrl: string | unknown;
//     var logoUrl: string | unknown;

//     const faviconFile = formData.get("favicon_file");
//     if (faviconFile && faviconFile instanceof File) {
//       const buffer = Buffer.from(await faviconFile.arrayBuffer());
//       faviconUrl = await uploadImageToS3(buffer, faviconFile.name);
//     }

//     const logoFile = formData.get("logo_file");
//     if (logoFile && logoFile instanceof File) {
//       const buffer = Buffer.from(await logoFile.arrayBuffer());
//       logoUrl = await uploadImageToS3(buffer, logoFile.name);
//     }

//     await fetch("http://localhost:9000/v1/config/save", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         site_name,
//         description,
//         favicon_url: faviconUrl,
//         logo_url: logoUrl,
//       }),
//     });

//     return NextResponse.json("Successfully!");
//   } catch (error) {
//     return NextResponse.json(error);
//   }
// }
