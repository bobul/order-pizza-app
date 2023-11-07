'use client';

import { useParams } from "next/navigation";
import { ArrowRight, HomeIcon } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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
          About Us
        </h1>
      </div>
      <div className="w-full p-4 flex justify-around">
        <div className="md:w-1/3 w-1/2 flex flex-col space-y-4">
          <Accordion type="single" collapsible className="bg-orange-300 w-full p-2 rounded-xl">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-gray-50">Company</AccordionTrigger>
              <AccordionContent className="text-orange-100">
                Dodo Pizza is an Estonian pizza delivery franchise founded in 2012 by Markus Linnak.
                As of July 2023, the company has 841 pizzerias in USA and 90 in 17 other countries
                (Kazakhstan, Tajikistan, United Kingdom, Germany, Nigeria,
                Vietnam, China, Estonia, Lithuania, Romania, Slovenia, Belarus,
                Uzbekistan, Kyrgyzstan and UAE).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="text-gray-50">Operation</AccordionTrigger>
              <AccordionContent className="text-orange-100">
                Dodo Pizza uses a cloud-based system known as Dodo IS
                that collects and processes operations data, reports real-time business analytics, and helps kitchen
                and delivery staff to be more efficient by allowing for more informed decision-making.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger className="text-gray-50">Industry</AccordionTrigger>
              <AccordionContent className="text-orange-100">
                Food delivery, franchising, restaurants.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="w-full rounded-xl bg-orange-300 p-4">
            <h1 className="text-orange-500 md:text-2xl text-l font-bold mb-4">
              We are hiring
            </h1>
            <p className="text-sm text-gray-50 mb-2">
              Since 2011, we have opened 979 pizzerias in 18 countries around the world.
              Be part of the success story of Dodo Pizza - join our team.
            </p>
            <Link href="https://cv.dodopizza.ee/tallinn">
              <Button className="h-5 px-4 md:text-base text-sm md:h-7 md:px-5">
                Join
                <ArrowRight className="md:w-4 md:h-6 w-3 h-5"/>
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-orange-500 md:text-2xl text-l font-bold mb-4">
            Delivery and payment terms
          </h1>
          <h2 className="text-orange-500 md:text-xl text-base mb-4">
            60 MINUTES OR PIZZA FOR FREE
          </h2>
          <p className="text-sm text-gray-50 mb-2">
            If we do not have time to deliver any products, except for souvenirs and sauces,
            within 60 minutes, the courier will give you a certificate for a large pizza.
          </p>
          <h2 className="text-orange-500 md:text-xl text-base mb-2">
            10.00€
          </h2>
          <p className="text-sm text-gray-50 mb-2">
            Minimum delivery order price excluding Other category of products is
          </p>
          <h2 className="text-orange-500 md:text-xl text-base mb-2">
            100.00 €
          </h2>
          <p className="text-sm text-gray-50 mb-2">
            Maximum order value for payment by cash
          </p>
          <p className="text-sm text-gray-50 mb-2">
            Product images may differ from ordered products.
          </p>
        </div>
      </div>
    </>
  )
}