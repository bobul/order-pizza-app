import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Restaurant } from "@/lib/definitions";

export async function fetchRestaurants() {
  noStore();

  try {
    const data = await sql<Restaurant>`SELECT * FROM restaurants`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch restaurants data.');
  }
}