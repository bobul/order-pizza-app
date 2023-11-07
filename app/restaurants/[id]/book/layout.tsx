'use client';

import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BookLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <div className="flex items-center space-x-2 p-6">
        <Link href={`/restaurants/${id}`}>
          <HomeIcon className="text-orange-500 font-bold" />
        </Link>
        <p className="text-orange-500 md:text-3xl text-xl font-bold"> / </p>
        <h1 className="text-orange-500 md:text-3xl text-xl font-bold underline">
          Book
        </h1>
      </div>
      <div className="w-full flex flex-col text-center justify-center items-center p-6">
        <h1 className="text-orange-500 md:text-3xl text-xl font-bold mb-3">
          You can make a booking any time you want
        </h1>
        <p className="text-orange-500 md:text-base font-bold text-base mb-3">
          We trying our best to provide you with the best service and pizza
        </p>
        {children}
        <div className="w-full md:h-20 h-12 absolute left-0 bottom-0 md:flex justify-center items-center hidden">
          <p className="text-orange-400 text-base underline">
            Dodo Pizza - Made By People
          </p>
        </div>
      </div>
    </>
  )
}