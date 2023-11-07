import { Skeleton } from "@/components/ui/skeleton";

export default function PizzaCardsSkeleton() {
  const numberOfDivs = 10;

  const renderSkeletonDivs = () => {
    const skeletonDivs = [];
    for (let i = 0; i < numberOfDivs; i++) {
      skeletonDivs.push(
        <div key={i} className="h-fit w-60 p-2 flex flex-col space-y-4">
          <Skeleton className="self-center h-[180px] w-[180px] rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="w-32 h-6" />
            <Skeleton className="w-48 h-4" />
          </div>
          <div className="flex w-full justify-between items-center">
            <Skeleton className="w-24 h-6" />
            <Skeleton className="rounded-xl h-10 w-20 px-4 py-2" />
          </div>
        </div>
      );
    }
    return skeletonDivs;
  };

  return (
    <section className="w-full p-6 flex flex-wrap justify-between items-center">
      {renderSkeletonDivs()}
    </section>
  )
}