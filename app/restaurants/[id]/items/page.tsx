import { fetchMenuItemsByRestaurantId } from "@/lib/data";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const restaurantId = params.id;
  const menuItems = await fetchMenuItemsByRestaurantId(restaurantId);

  return (
    <div>
      {menuItems.map(
        (menuItem) => (
          <div key={menuItem.id} className="flex flex-col w-72 h-fit p-5">
            <h1>{menuItem.name}</h1>
            <Image src={menuItem.pizza_image_url} alt={menuItem.name} width={190} height={190} />
            <p>{menuItem.topping.join(' ')}</p>
          </div>
        )
      )}
    </div>
  );
}