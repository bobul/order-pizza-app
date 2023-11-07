import { Skeleton } from "@/components/ui/skeleton";

export default function PickingLayoutSkeleton() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-8 justify-center items-center p-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 md:w-[500px] w-72" />
      </div>
      <div className="flex flex-col md:flex-row p-6 justify-center gap-16">
        <div className="w-80 h-72 space-y-2">
          <Skeleton className="w-4/5 h-12" />
          <Skeleton className="w-4/5 h-6" />
          <Skeleton className="w-3/5 h-3/5 rounded-sm" />
          <div className="w-full flex items-center justify-between p-1">
            <div className="flex gap-3 items-center">
              <Skeleton className="h-6 w-6 rounded-full"/>
              <Skeleton className="h-4 w-[150px]" />
            </div>
            <Skeleton className="rounded-xl h-10 w-20 px-4 py-2"/>
          </div>
        </div>
        <div className="w-80 h-72 space-y-2">
          <Skeleton className="w-4/5 h-12" />
          <Skeleton className="w-4/5 h-6" />
          <Skeleton className="w-3/5 h-3/5 rounded-sm" />
          <div className="w-full flex items-center justify-between p-1">
            <div className="flex gap-3 items-center">
              <Skeleton className="h-6 w-6 rounded-full"/>
              <Skeleton className="h-4 w-[150px]" />
            </div>
            <Skeleton className="rounded-xl h-10 w-20 px-4 py-2"/>
          </div>
        </div>
      </div>
    </main>
  )
}