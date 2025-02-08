"use server";
import { uploadImageToS3 } from "@/actions/s3Action";
import React from "react";

type Props = {
  file: File;
};

const uploadS3 = async ({ file }: Props) => {
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name;

    const fileUrl = await uploadImageToS3(buffer, fileName);
    return fileUrl;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};

export default uploadS3;
