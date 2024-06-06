
import { Skeleton } from "@/components/ui/skeleton";
import UploadButton from "@/components/ui/upload-button";
import CardPostMain from "@/components/utils/posts/cardpost_main";
import { Suspense } from "react";
import { getSessionData } from "./getSession";

export default function Home() {
  const sessionData = getSessionData();
  return (
    <main className="min-h-screen py-14">
      <div className="sm:flex sm:flex-1 justify-center items-center">
        <Suspense fallback={<Skeleton />} >
          <CardPostMain />
        </Suspense>
        <div className="fixed bottom-10 sm:left-1/2 right-4">
          <UploadButton href={"/posts/upload"} size="sm" />
        </div>
      </div>

    </main>
  );
}



