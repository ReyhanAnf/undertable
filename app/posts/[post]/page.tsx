import AnyMainPost from "@/components/utils/posts/cardpost_one";

export default function Home({ params }: { params: { post: string } }) {
  return (
    <main className="min-h-screen py-14" suppressHydrationWarning>
      <div className="sm:flex sm:flex-1 justify-center items-center">
        <AnyMainPost idpost={params.post.toString()} />
      </div>
    </main>
  );
}
