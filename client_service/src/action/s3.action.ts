"use server";

import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import mime from "mime-types";

const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_BUCKET_SECRET_KEY!,
  },
});

const uploadFileToS3 = async (buffer: Buffer, filename: string) => {
  const s3Name = `${process.env.AWS_SITE_BUCKET}/${Date.now()}_${filename}`;
  const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${s3Name}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: s3Name,
    Body: buffer,
    ContentType: mime.lookup(filename).toString(),
  });

  try {
    await s3Client.send(command);
    return fileUrl;
  } catch (error) {
    console.log("Error sending to s3", error);
    return null;
  }
};

export const deleteFileS3 = async (url: string) => {
  if (url !== "") {
    const key = url.split("/").pop();

    const command = new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${process.env.AWS_SITE_BUCKET}/${key}`,
    });

    try {
      await s3Client.send(command);
      return true;
    } catch (error) {
      console.log("Error sending to s3", error);
      return false;
    }
  }
};

export const uploadS3 = async ({ file }: { file: File }) => {
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name;

    const fileUrl = await uploadFileToS3(buffer, fileName);
    return fileUrl;
  } catch (error) {
    console.log("error::", error);
    return null;
  }
};
