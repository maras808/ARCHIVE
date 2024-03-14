import clientPromise from '@/mongo/dbconnect';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const client = await clientPromise;
  const db = client.db("funky-deals-temp");
  const res = await db.collection("categories").find({}).toArray()
  return NextResponse.json({ res });
}