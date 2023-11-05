import { fetchRestaurantById } from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const restaurant = await fetchRestaurantById(id);
  return <h1>Welcome to {restaurant.name}</h1>
}