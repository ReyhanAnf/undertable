
import UploadButton from "@/components/ui/upload-button";
import CardPostMain from "@/components/utils/posts/cardpost_main";
import { SkeletonCard } from "@/components/utils/skeletoncard";
import { Suspense } from "react";

export default function Home() {

  return (
    <main className="min-h-screen py-14">
      <div className="sm:flex sm:flex-1 justify-center items-center">
        <Suspense fallback={<SkeletonCard />} >
          <CardPostMain />
        </Suspense>
        <div className="fixed bottom-10 sm:left-1/2 right-4">
          <UploadButton href={"/posts/upload"} size="sm" />
        </div>
      </div>
    </main>
  );
}
