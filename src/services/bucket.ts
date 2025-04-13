// @ts-nocheck

import { S3, PutObjectCommand } from "@aws-sdk/client-s3";
import { useEffect } from "react";

const s3Client = new S3({
  forcePathStyle: false,
  endpoint: process.env.REACT_APP_BUCKET_ENDPOINT,
  region: process.env.REACT_APP_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_BUCKET_ACCESS_KEY,
    secretAccessKey: process.env.RECT_APP_BUCKET_SECRETE_ACCESS_KEY,
  },
});

const version = "v1";

async function uploadFileToSpaces(key, body, format) {
  const bucketParams = {
    ACL: process.env.REACT_APP_BUCKET_ACL,
    Bucket: process.env.REACT_APP_BUCKET_NAME,
    Key: `karasuno-nest/${key}.${format}`,
    Body: body,
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    console.log(
      `Successfully uploaded object: ${bucketParams.Bucket}/${bucketParams.Key}`
    );

    return data;
  } catch (err) {
    console.log("Error", err);
  }
}

export async function fetchData() {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/victorheringer/karasuno-nest/refs/heads/main/board.json`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
