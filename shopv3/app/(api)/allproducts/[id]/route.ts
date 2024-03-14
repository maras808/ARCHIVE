import clientPromise from '@/mongo/dbconnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
 
export async function GET(
  request: Request,
  {params}: {
    params: {id}
  }
) {
  const client = await clientPromise;
  const db = client.db("funky-deals-temp");
  const objectid = new ObjectId(params.id)
   const res = await db.collection("products").find({_id: objectid}).toArray()
  return NextResponse.json({ res });
}