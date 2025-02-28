"use server";

import {
  S3Client,
  ListObjectsCommand,
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

export const getAlbumsS3 = async () => {
  const command = new ListObjectsCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Prefix: "umex",
  });

  try {
    const response = await s3Client.send(command);
    return response.Contents?.map((file) => file.Key);
  } catch (error) {
    console.log("Error listing objects in bucket:", error);
    return [];
  }
};

export const uploadImageToS3 = async (buffer: Buffer, filename: string) => {
  const s3Name = `umex/${Date.now()}_${filename}`;
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
    return "";
  }
};

export const deleteImageS3 = async (url: string) => {
  if (url !== "") {
    const key = url.split("/").pop();

    const command = new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `umex/${key}`,
    });

    try {
      await s3Client.send(command);
      return { code: 2000 };
    } catch (error) {
      console.log("Error sending to s3", error);
      return { code: 5000 };
    }
  }
};
