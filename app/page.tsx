import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const mediaImages = [
 {
    src: "/media/fox.png",
    alt: "fox-media",
  },
  {
    src: "/media/washington.png",
    alt: "washington-media",
  },
  {
    src: "/media/wusa.png",
    alt: "wusa-media",
  },
  {
    src: "/media/yelp.png",
    alt: "yelp-media",
  },
];

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center p-4">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={80}
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-around items-center p-6">
        <div className="h-20 flex flex-col justify-center items-center md:block md:h-52 w-fit p-4">
          <h1 className="font-bold text-2xl md:text-5xl mb-1 text-orange-400">Made by Napoletans.</h1>
          <h1 className="font-bold text-2xl md:text-5xl md:mb-3 mb-2 text-gray-50">Loved by all.</h1>
          <Button className="bg-orange-400 hover:bg-gray-50 rounded-xl hover:text-orange-400 text-base h-8 px-3 md:h-9 md:px-4">
            Choose the Restaurant
            <ArrowRight className="md:w-6 md:h-8 ml-1 w-5 h-10"/>
          </Button>
        </div>
        <Image
          src="/pizza.png"
          width={400}
          height={325}
          className="hidden md:block"
          alt="Pizza Peperoni (desktop version)"
          priority
        />
        <Image
          src="/pizza.png"
          width={240}
          height={185}
          className="block md:hidden"
          alt="Pizza Peperoni (mobile version)"
          priority
        />
      </div>
      <div className="w-full md:h-20 h-12 absolute left-0 bottom-0 bg-orange-500 flex justify-center items-center gap-6">
        {mediaImages.map((mediaImage, index) => (
          <Image
            key={index}
            src={mediaImage.src}
            width={100}
            height={80}
            className="hidden md:block"
            alt={mediaImage.alt}  />
        ))}
        {mediaImages.map((mediaImage, index) => (
          <Image
            key={index}
            src={mediaImage.src}
            width={60}
            height={40}
            className="block md:hidden"
            alt={mediaImage.alt}  />
        ))}
      </div>
    </main>
  );
};
