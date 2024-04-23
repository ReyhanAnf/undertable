// import AnyMainPost from "@/components/utils/posts/cardpost_one";
import CardUploadRemenfess from "@/components/utils/menfess/cardupload_remenfess";
import CardAnyMenfess from "@/components/utils/menfess/card_onemenfess";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const params = useSearchParams()
  return (
    <main className="min-h-screen py-14" suppressHydrationWarning>
      <div className="sm:flex sm:flex-1 justify-center items-center">
        <CardAnyMenfess id={params.get("menfes")} />
      </div>
      <CardUploadRemenfess menfessid={params.get("menfes")} />
    </main>
  );
}
