import { fetchRestaurants } from "@/lib/data";
import RestaurantCard from "@/components/ui/shared/restaurant-card";
import Image from "next/image";
import Link from "next/link";

export default async function PickingLayout() {
  const restaurants = await fetchRestaurants();
  return (
    <main className="flex flex-col justify-center items-center">
    <div className="flex flex-col gap-8 justify-center items-center p-4">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={80}
        />
      </Link>
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