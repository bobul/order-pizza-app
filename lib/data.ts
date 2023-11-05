import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Restaurant, MenuItem } from "@/lib/definitions";

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

export async function fetchRestaurantById (id: string){
  noStore();

  try {
    const data = await sql<Restaurant>`
    SELECT * FROM restaurants
    WHERE id = ${id}
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch restaurant ${id} data.`);
  }
}

export async function fetchMenuItemsByRestaurantId (restaurantId: string) {
  noStore();

  try {
    const data = await sql<MenuItem>`
    SELECT * from menu
    WHERE restaurantId = ${restaurantId}
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch menu items from restaurant ${restaurantId} data.`);
  }
}