import {fetchMenuItemsByRestaurantId} from "@/lib/data";
import PizzaCard from "@/components/ui/shared/pizza-card";

interface IPizzaGridProps {
    id: string;
}

export default async function PizzaGrid({id}: IPizzaGridProps) {
    const menuItems = await fetchMenuItemsByRestaurantId(id);
    return (
        <section className="w-4/5 p-6 flex flex-wrap justify-between items-center">
            {menuItems.map(menuItem => <PizzaCard key={menuItem.id} pizza={menuItem} />)}
        </section>
    )
}