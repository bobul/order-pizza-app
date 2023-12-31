'use client';

import Image from "next/image";
import Link from "next/link";
import CartButton from "@/components/ui/shared/cart-button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CartItems from "@/components/ui/cart-items";
import { useParams } from "next/navigation";

export default function Navbar() {
  const params = useParams();
  const { id } = params;
    return (
        <nav className="h-16 bg-orange-500 flex justify-around items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={120}
              height={80}
              className="hidden md:block"
            />
          </Link>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={80}
              height={40}
              className="block md:hidden"
            />
          </Link>
            <div className="flex  justify-around md:w-1/4 w-1/2">
              <Link href={`/restaurants/${id}/book`}>
                <p className="text-base font-bold text-gray-50">Book</p>
              </Link>
              <Link href={`/restaurants/${id}/about`}>
                <p className="text-base font-bold text-gray-50">About</p>
              </Link>
              <Link href={`/restaurants/${id}/events`}>
                <p className="text-base font-bold text-gray-50">Events</p>
              </Link>
            </div>
          <Dialog>
            <DialogTrigger>
              <CartButton />
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-auto p-4">
              <CartItems />
            </DialogContent>
          </Dialog>
        </nav>
    )
}