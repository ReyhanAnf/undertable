import { Suspense } from "react";

import { SkeletonCard } from "../skeletoncard";
import CardAnswerMain from "@/components/ui/cardanswerpost";

export default function MainCardAnswer({ idpost }: any) {
  return (
    <Suspense fallback={<SkeletonCard />}>
      <CardAnswerMain idpost={idpost} />
    </Suspense>
  )
}
