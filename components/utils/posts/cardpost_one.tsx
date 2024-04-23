import { use, Suspense } from "react";

import { get_onepost } from "@/lib/GET/get_posts";
import { SkeletonCard } from "../skeletoncard";
import { CardPost } from "@/components/ui/cardonepost";
import { cookies } from "next/headers";

export default function AnyMainPost({ idpost }: any) {
  const post = use(get_onepost(idpost));
  const cookie = cookies();
  const userA = cookie.get('userToken')?.value;
  return (
    <Suspense fallback={<SkeletonCard />}>
      <CardPost wAnswer={true} post={post} auth={userA} />
    </Suspense>
  )
}
