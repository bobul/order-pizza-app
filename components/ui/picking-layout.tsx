import { fetchRestaurants } from "@/lib/data";
import RestaurantCard from "@/components/ui/shared/restaurant-card";
import Image from "next/image";

export default async function PickingLayout() {
  const restaurants = await fetchRestaurants();
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-neutral-100 to-orange-300">
    <div className="flex flex-col gap-8 justify-center items-center p-4">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={80}
      />
      <h1 className="text-orange-500 md:text-3xl text-xl text-center font-bold">
        Choose the Restaurant either from Estonia or Germany
      </h1>
    </div>
    <div className="flex flex-col md:flex-row p-6 justify-center gap-8">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
      ))}
    </div>
    </main>
  );
}