import { Suspense } from "react";
import Loader from "@/components/ui/shared/loader";
import PickingLayout from "@/components/ui/picking-layout";

export default function Page() {
  return (
    <Suspense fallback={<Loader/>}>
      <PickingLayout />
    </Suspense>
  );
}