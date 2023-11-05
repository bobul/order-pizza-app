'use server';
import { Restaurant } from "@/lib/definitions";

export async function getRestaurants(): Promise<Restaurant[]> {
  const response = await fetch("https://private-anon-ad7431d586-pizzaapp.apiary-mock.com/restaurants/");
  if (!response.ok) {
    throw new Error('Failed to fetch restaurants. Try again!');
  }
  return await response.json() as Promise<Restaurant[]>;
};