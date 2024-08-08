/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import AWS from "aws-sdk"

export const uploadFile = (file: any, fileName: string) => {
  AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESSKEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRETKEY,
  })

  const myBucket = new AWS.S3({
    params: { Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET },
    region: process.env.NEXT_PUBLIC_AWS_REGION,
  })

  const params = {
    ACL: "public-read",
    Body: file,
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET as string,
    Key: process.env.NEXT_PUBLIC_AWS_S3_DEFAULT_FOLDER + "/" + fileName,
    ContentType: file.type,
  }

  myBucket
    .putObject(params)
    .on("httpUploadProgress", evt => {
      console.log(evt)
    })
    .send(err => {
      if (err) console.log(err)
    })
}
