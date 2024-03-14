import prisma from "@/src/lib/prisma/exportclient";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "0");
  const limit = parseInt(searchParams.get("limit") || "10");

  const data = await prisma.post.findMany({
    skip: page * limit,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(data);
}
