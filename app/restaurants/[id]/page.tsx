import { fetchRestaurantById } from "@/lib/data";
import PizzaGrid from "@/components/ui/pizza-grid";
import {Suspense} from "react";
import Loader from "@/components/ui/shared/loader";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const restaurant = await fetchRestaurantById(id);
  return (
      <main className="flex flex-col justify-between items-center p-8">
          <h1 className="text-orange-500 md:text-3xl text-xl text-center font-bold">
              Welcome to {restaurant.name}!
          </h1>
          <h1 className="font-bold text-xl mt-2">Pizza Daily Offers</h1>
          <Suspense fallback={<Loader />}>
              <PizzaGrid id={id} />
          </Suspense>
      </main>
  )
}