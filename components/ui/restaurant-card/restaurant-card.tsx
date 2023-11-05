import { getRestaurants } from "@/lib/actions";
import { Restaurant } from "@/lib/definitions";

export default async function RestaurantCard() {
  const restaurants: Restaurant[] = await getRestaurants();

  return (
    <div>
      {restaurants.map((restaurant) => (
        <h1 key={restaurant.id}>{restaurant.name}</h1>
      ))}
    </div>
  );
}