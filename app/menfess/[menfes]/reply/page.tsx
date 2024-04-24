// import AnyMainPost from "@/components/utils/posts/cardpost_one";
import CardUploadRemenfess from "@/components/utils/menfess/cardupload_remenfess";
import CardAnyMenfess from "@/components/utils/menfess/card_onemenfess";

export default function Page({ params }: { params: { menfes: string } }) {
  return (
    <main className="min-h-screen py-14" suppressHydrationWarning>
      <div className="sm:flex sm:flex-1 justify-center items-center">
        <CardAnyMenfess id={params.menfes} />
      </div>
      <CardUploadRemenfess menfessid={params.menfes} />
    </main>
  );
}
