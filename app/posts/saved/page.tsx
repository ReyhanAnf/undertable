import { Suspense } from "react";
import MyPosts from "@/components/utils/posts/mypost";
import { SkeletonCard } from "@/components/utils/skeletoncard";

export default function Page() {
  return (
    <div>
      <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
        <div className='w-full m-0 lg:w-[60%] lg:scale-75'>
          Post saya
          <Suspense fallback={<SkeletonCard />}>
            <MyPosts />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
