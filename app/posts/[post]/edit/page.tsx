import { SkeletonCard } from '@/components/utils/skeletoncard';
import CardUpdatePosts from '@/components/utils/posts/cardupdate_post';
import { Suspense } from "react"
import get_posts, { get_onepost } from '@/lib/GET/get_posts';
import { getCookie } from "cookies-next";

export async function generateStaticParams() {
  const posts = await get_posts();

  return posts.map((post: { post_id: string; }) => ({
    post: post.post_id,
  }))
}

export default async function Page({ params }: any) {
  const { post } = params;
  const opost = await get_onepost(post);
  const auth = getCookie("statusAuth");
  const message = getCookie("messageAuth");
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
