import AnyMainPost from "@/components/utils/posts/cardpost_one";
import CardUploadAnswers from "@/components/utils/posts/cardupload_answers";

export default function Home({ params }: { params: { post: string } }) {
  return (
    <main className="min-h-screen py-14" suppressHydrationWarning>
      <div className="sm:flex sm:flex-1 justify-center items-center">
        <AnyMainPost idpost={params.post.toString()} />
      </div>
      <CardUploadAnswers postid={params.post.toString()} />
    </main>
  );
}
