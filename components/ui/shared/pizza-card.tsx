'use client';

import {MenuItem} from "@/lib/definitions";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader, DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { useCartStore } from "@/store/cart";

interface IPizzaCardProps {
    pizza: MenuItem
}
export default function PizzaCard({pizza}: IPizzaCardProps) {
    const {add: handleAddToCart} = useCartStore();
    return (
        <div className={"h-fit w-72 p-2 flex flex-col"}>
            <Image
                    src={pizza.pizza_image_url}
                    alt={pizza.name}
                    width={180}
                    height={180}
                    className="self-center"
            />
            <div className="flex flex-col gap-2">
                <h1 className="text-orange-500 text-xl">
                    {pizza.name}
                </h1>
                <p className="text-sm text-gray-500">
                    {pizza.topping.map((toppingItem => `${toppingItem} `))}
                </p>
            </div>
            <div className="flex w-full justify-between items-center">
                <h1 className="text-orange-400 font-bold text-2xl">
                    {pizza.price}€
                </h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            Select
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="flex flex-col md:flex-row justify-center md:justify-around p-4">
                        <Image
                            src={pizza.pizza_image_url}
                            alt={pizza.name}
                            width={180}
                            height={180}
                            className="self-center"
                        />
                        <div className="flex flex-col justify-between">
                            <DialogHeader>
                                <DialogTitle>{pizza.name}</DialogTitle>
                                <DialogDescription>
                                    {pizza.topping.map((toppingItem => `${toppingItem} `))}
                                </DialogDescription>
                            </DialogHeader>
                            <Button
                              className="w-10/12 self-center md:self-start m-4"
                              onClick={() => handleAddToCart(pizza)}
                            >
                                Add to cart for {pizza.price}€
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}