import { use, Suspense } from "react";

import { get_onepost } from "@/lib/GET/get_posts";
import { SkeletonCard } from "../skeletoncard";
import { CardPost } from "@/components/ui/cardonepost";
import { getCookie } from "cookies-next";


export default function AnyMainPost({ idpost }: any) {
  const post = use(get_onepost(idpost));
  const userA = getCookie('userToken');
  return (
    <Suspense fallback={<SkeletonCard />}>
      <CardPost wAnswer={true} post={post} auth={userA} />
    </Suspense>
  )
}
