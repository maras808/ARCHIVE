import clientPromise from '@/mongo/dbconnect';
import { NextResponse } from 'next/server';
 
export async function GET(productid) {
  const client = await clientPromise;
  const db = client.db("funky-deals-temp");
   const res = await db.collection("products").find({}).toArray()

  return NextResponse.json({ res });
}