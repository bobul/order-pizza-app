'use client';

import { useCartStore } from "@/store/cart";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrashIcon } from "lucide-react";

export default function CartItems() {
  const { cart, remove, add: handleAddToCart, totalPrice, removeAll } = useCartStore();

  if (cart.length === 0)
    return (
      <h1>Your cart is empty!</h1>
    )

  function viewPrice(price: number, amount: number): string {
    return `${(price * amount).toFixed(2)}€`
  }

  return (
    <>
      {cart.map(cartItem => (
      <div key={cartItem.id} className="flex h-32 flex-col justify-between m-2">
        <div className="flex gap-8 w-full">
          <Image
            src={cartItem.pizza_image_url}
            alt={cartItem.name}
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-orange-500 text-base">
              {cartItem.name}
            </h1>
            <p className="text-sm text-gray-500">
              {cartItem.topping.map((cartItem => `${cartItem} `))}
            </p>
          </div>
        </div>
        <Separator />
        <div className="w-full flex justify-between items-center">
          <h1 className="text-orange-500 text-base">
            {viewPrice(cartItem.price, cartItem.count)}
          </h1>
          <div className="w-1/4 h-8 rounded-xl bg-gray-100 flex justify-evenly items-center">
            <span
              className="font-bold text-gray-400 cursor-pointer"
              onClick={() => remove(cartItem.id)}
            >
              -
            </span>
            <span className="text-gray-400">{cartItem.count}</span>
            <span
              className="font-bold text-gray-400 cursor-pointer"
              onClick={() => handleAddToCart(cartItem)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      ))}

        {cart.length === 0 ? <></> : (
          <div className="flex justify-between items-center">
            <p className="text-gray-400">Total: {totalPrice().toFixed(2)}€</p>
            <div className="flex gap-4 items-center">
              <TrashIcon className="cursor-pointer text-gray-400" onClick={() => removeAll()}/>
              <Button>
                Checkout
                <ArrowRight />
              </Button>
            </div>
          </div>
        )}
    </>
  )
}