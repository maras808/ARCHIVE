import clientPromise from '@/mongo/dbconnect';
import { NextResponse } from 'next/server';
 
export async function GET(
  request: Request,
  {params}: {
    params: {id: string}
  }
) {
  const client = await clientPromise;
  const db = client.db("funky-deals-temp");
   const res = await db.collection('categories').aggregate(
    [
      {
        $unwind: {
          path: '$subcategories',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $unwind: {
          path: '$subcategories.entries',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: 'products',
          localField: 'subcategories.entries.id',
          foreignField: 'category',
          as: 'products'
        }
      },
      {
        $match: {
          'subcategories.entries.name': params.id
        }
      }
    ],
  ).toArray()
  return NextResponse.json({ res });
}