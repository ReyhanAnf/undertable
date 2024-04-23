import { SkeletonCard } from '@/components/utils/skeletoncard';
import CardUpdatePosts from '@/components/utils/posts/cardupdate_post';
import { Suspense } from "react"
import { get_onepost } from '@/lib/GET/get_posts';
import { cookies } from 'next/headers';

export default async function Page({ params }: { params: { post: string } }) {
  const opost = await get_onepost(params.post.toString());
  const cookie = cookies();
  const auth = cookie.get("statusAuth")?.value;
  const message = cookie.get("messageAuth")?.value;
  return (
    <div>
      <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
        <div className='w-full m-0 lg:w-[60%] lg:scale-75 flex flex-1 justify-center items-center'>
          <Suspense fallback={<SkeletonCard />}>
            <CardUpdatePosts post={opost} auth={auth} message={message} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
