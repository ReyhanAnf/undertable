import AnyMainPost from "@/components/utils/posts/cardpost_one";
import get_posts from "@/lib/GET/get_posts";

export async function generateStaticParams() {
  const posts = await get_posts();

  return posts.map((post: { post_id: string; }) => ({
    post: post.post_id,
  }))
}


export default function Page({ params }: any) {
  const { post } = params;
  console.log(post)
  return (
    <main className="min-h-screen py-14" suppressHydrationWarning>
      <div className="sm:flex sm:flex-1 justify-center items-center">
        <AnyMainPost idpost={post} />
      </div>
    </main>
  );
}
