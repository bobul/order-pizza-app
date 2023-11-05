import Image from "next/image";
import { Restaurant } from "@/lib/definitions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IRestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({restaurant}: IRestaurantCardProps) {
  return (
    <Card className="w-80 h-fit bg-orange-300 border-none">
      <CardHeader>
        <CardTitle className="text-orange-500">{restaurant.name}</CardTitle>
        <CardDescription className="text-base font-bold text-gray-50">
          {restaurant.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          key={restaurant.id}
          src={restaurant.image_url}
          alt={restaurant.name}
          width={300}
          height={300}
          className="rounded-sm"
        />
      </CardContent>
      <CardFooter>
        <div className="w-full flex items-center justify-between p-1">
          <div className="flex gap-3">
            <MapPin className="text-orange-400"/>
            <p className="text-base font-bold text-gray-50">{restaurant.street}</p>
          </div>
          <Button className="h-5 px-4 md:h-7 md:px-5">
            <ArrowRight className="md:w-4 md:h-6 w-3 h-5"/>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}