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
  if (!request.body) {
    return NextResponse.error();
  }

  const fileName = request.headers.get("File-Name");

  if (!fileName) {
    return NextResponse.error();
  }

  const dirPath = path.join(process.cwd(), "uploads");

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const writableStream = fs.createWriteStream(path.join(dirPath, fileName));

  //@ts-expect-error
  Readable.fromWeb(request.body).pipe(writableStream);

  return NextResponse.json({ message: "File uploaded successfully!" });
}
