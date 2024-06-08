
import UploadButton from "@/components/ui/upload-button";
import CardMenfess from "@/components/utils/menfess/card_menfess";
import { SkeletonCard } from "@/components/utils/skeletoncard";
import { Suspense } from "react";

export default function Home() {

  return (
    <main className="min-h-screen py-14">
      <h1 className="text-center text-lg font-semibold">Menfess</h1>
      <div className="sm:flex sm:flex-1 justify-center items-center">
        <Suspense fallback={<SkeletonCard />} >
          <CardMenfess />
        </Suspense>
        <div className="fixed bottom-10 sm:left-1/2 right-4">
          <UploadButton href={"/menfess/upload"} size="sm" />
        </div>
      </div>
    </main>
  );
}
