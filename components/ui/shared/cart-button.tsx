'use client';

import { ShoppingCartIcon } from "lucide-react";
import { useCartStore } from "@/store/cart";

export default function CartButton() {
  const { count } = useCartStore();

  return (
    <div className="p-2 rounded-md text-slate-700 hover:text-gray-50 relative transition duration-200 ease-in-out cursor-pointer">
      <ShoppingCartIcon className="w-6 h-6" strokeWidth={2} />
      <Label item={count()} />
    </div>
  )
}

const Label: React.FC<{ item: number }> = ({ item }) => {
  if (item === 0) return <></>

  return (
    <span className="absolute top-0 right-0 w-4 h-4 bg-gray-50 text-orange-500 font-semibold text-xs rounded-full grid place-content-center">
      {item}
    </span>
  )
}