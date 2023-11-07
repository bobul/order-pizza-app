'use client';

import { useParams } from "next/navigation";
import Link from "next/link";
import { CalendarIcon, HomeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Page() {
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
          Events
        </h1>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-0 gap-4 w-full justify-around">
        <div className="md:w-1/3 w-10/12 p-4 bg-orange-300 rounded-xl">
          <h1 className="text-orange-500 md:text-2xl text-l font-bold mb-4">
            Explore our culture
          </h1>
          <p className="text-gray-50 mb-2">
            Dodo Pizza has a plethora of events throughout every year!
          </p>
          <p className="text-gray-50 mb-2">
            Our is known for its vibrant
            and engaging event calendar that offers something for everyone throughout the year.
            From grand opening celebrations of new Dodo Pizza locations to special promotions and discounts,
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            there's always a reason to join in the fun. Additionally, they often host pizza-making workshops
            where customers can learn the art of crafting their own delicious pizzas, and charity events that give
            back to the community. For sports enthusiasts, Dodo Pizza sometimes sponsors local sports tournaments
            or even hosts viewing parties for major sporting events, creating a lively atmosphere for fans to enjoy.
            With so many events to choose from, Dodo Pizza keeps its customers entertained and engaged all year long.
          </p>
        </div>
        <div className="flex flex-col md:w-1/3 w-10/12 space-y-4">
          <div className="flex flex-col bg-orange-300 w-full p-2 rounded-xl">
            <div className="w-full flex p-1 justify-between h-fit">
              <h1 className="text-orange-500 md:text-base text-sm font-bold">
                Night at Pirita
              </h1>
              <div className="flex justify-center items-center space-x-2">
                <CalendarIcon className="text-orange-500" />
                <p className="text-sm text-orange-500">
                  30th November, 2023
                </p>
              </div>
              <Badge className="md:h-6 h-4 p-2 md:px-2.5 md:py-0.5">
                Upcoming
              </Badge>
            </div>
            <p className="text-gray-50 mb-2">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Join our team at Birthday's celebration near the Pirita. Enjoy special 50% off pizza offers
              and have a great time with fun people. We look forward to seeing you there!
            </p>
          </div>
          <div className="flex flex-col bg-orange-300 w-full p-2 rounded-xl">
            <div className="w-full flex p-1 justify-between h-fit">
              <h1 className="text-orange-500 md:text-base text-sm font-bold">
                Winter Music Festival
              </h1>
              <div className="flex justify-center items-center space-x-2">
                <CalendarIcon className="text-orange-500" />
                <p className="text-sm text-orange-500">
                  18th December, 2023
                </p>
              </div>
              <Badge className="md:h-6 h-4 p-2 md:px-2.5 md:py-0.5">
                Upcoming
              </Badge>
            </div>
            <p className="text-gray-50 mb-2">
              Get ready for an unforgettable night of music and fun at our Summer Music Festival.
              Join us for live performances from top artists,
              {/* eslint-disable-next-line react/no-unescaped-entities */}
                delicious food, and a great atmosphere. Don't miss out on the winter's hottest event!
            </p>
          </div>
          <div className="flex flex-col bg-orange-300 w-full p-2 rounded-xl">
            <div className="w-full flex p-1 justify-between h-fit">
              <h1 className="text-orange-500 md:text-base text-sm font-bold">
                Charity Run for a Cause
              </h1>
              <div className="flex justify-center items-center space-x-2">
                <CalendarIcon className="text-orange-500" />
                <p className="text-sm text-orange-500">
                  8th March, 2024
                </p>
              </div>
              <Badge className="md:h-6 h-4 p-2 md:px-2.5 md:py-0.5">
                Upcoming
              </Badge>
            </div>
            <p className="text-gray-50 mb-2">
              Lace up your running shoes and join us for a charity run to support a worthy cause.
              {/* eslint-disable-next-line react/no-unescaped-entities */}
               Run or walk, it doesn't matter!
              Every step counts toward making a positive impact. Sign up now to be a part of this meaningful event.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}