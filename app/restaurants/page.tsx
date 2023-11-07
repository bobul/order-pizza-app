import { Suspense } from "react";
import PickingLayout from "@/components/ui/picking-layout";
import PickingLayoutSkeleton from "@/components/ui/picking-layout-skeleton";

export default function Page() {
  return (
    <Suspense fallback={<PickingLayoutSkeleton />}>
      <PickingLayout />
    </Suspense>
  );
}