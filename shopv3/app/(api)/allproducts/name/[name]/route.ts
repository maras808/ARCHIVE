import clientPromise from '@/mongo/dbconnect';
import { NextResponse } from 'next/server';
 
export async function GET(
  request: Request,
  {params}: {
    params: {name}
  }
) {
  const client = await clientPromise;
  const db = client.db("funky-deals-temp");
   const res = await db.collection("products").find({productname: {$regex: params.name}}).toArray()
  return NextResponse.json({ res });
}