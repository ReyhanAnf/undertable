// import AnyMainPost from "@/components/utils/posts/cardpost_one";
import CardUploadRemenfess from "@/components/utils/menfess/cardupload_remenfess";
import CardAnyMenfess from "@/components/utils/menfess/card_onemenfess";
import get_menfess from "@/lib/GET/get_menfess";


export async function generateStaticParams() {
  const menfess = await get_menfess();

  return menfess.map((menfes: { menfess_id: string; }) => ({
    menfes: menfes.menfess_id,
  }))
}


export default function Page({ params }: any) {
  const { menfes } = params
  console.log(menfes)
  return (
    <main className="min-h-screen py-14" suppressHydrationWarning>
      <div className="sm:flex sm:flex-1 justify-center items-center">
        <CardAnyMenfess id={menfes} />
      </div>
      <CardUploadRemenfess menfessid={menfes} />
    </main>
  );
}
