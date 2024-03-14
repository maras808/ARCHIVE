import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { Readable } from "stream";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  type configType = {
    fileName: string | null;
    fileDir: string;
  };

  const config: configType = {
    fileName: request.headers.get("File-Name"),
    fileDir: "uploads",
  };

  if (!config.fileName) {
    throw new Error("No file name header");
  }

  if (!request.body) {
    throw new Error("No payload");
  }

  if (!fs.existsSync(config.fileDir)) {
    fs.mkdirSync(config.fileDir, { recursive: true });
  }

  const writableStream = fs.createWriteStream(
    path.join(
      process.cwd(),
      config.fileDir,
      `${Date.now()} - ${config.fileName}`
    )
  );

  // const reader: ReadableStreamDefaultReader<Uint8Array> =
  //   request.body.getReader();

  // let doneReading = false;

  // while (!doneReading) {
  //   const { done, value } = await reader.read();
  //   doneReading = done;

  //   if (value) {
  //     writableStream.write(value);
  //   }
  // }

  //@ts-expect-error
  Readable.fromWeb(request.body).pipe(writableStream);

  //writableStream.end();

  return NextResponse.json({ message: "File uploaded successfully!" });
}

// const reader: ReadableStreamDefaultReader<Uint8Array> =
//   request.body.getReader();

// let doneReading = false;

// while (!doneReading) {
//   const { done, value } = await reader.read();
//   doneReading = done;

//   if (value) {
//     writableStream.write(value);
//   }
// }

//writableStream.end();
