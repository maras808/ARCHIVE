import clientPromise from '@/mongo/dbconnect';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const client = await clientPromise;
  const db = client.db("funky-deals-temp");
  const res = await db.collection('users').aggregate(
    [
      {
        $lookup: {
          from: 'products',
          localField: 'favourites',
          foreignField: '_id',
          as: 'favourites'
        }
      }
    ],
  ).toArray()
  return NextResponse.json({ res });
}