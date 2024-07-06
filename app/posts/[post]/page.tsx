import AnyMainPost from "@/components/utils/posts/cardpost_one";



export default function Page({ params }: { params: { post: string } }) {
  const post = params.post;
  return (
    <main className="min-h-screen py-14" suppressHydrationWarning>
      <div className="sm:flex sm:flex-1 justify-center items-center">
        <AnyMainPost idpost={post} />
      </div>
    </main>
  );
}
