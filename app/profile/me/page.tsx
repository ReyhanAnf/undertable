import MyProfile from "@/components/utils/profile/me/myprofile";
import { SkeletonCard } from "@/components/utils/skeletoncard";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const cookie = cookies();

  if (!cookie.get("userToken")?.value) {
    redirect("/")
  }
  return (
    <div className="w-full">
      <Suspense fallback={<SkeletonCard />} >
        <MyProfile user={cookie.get("userToken")?.value} />
      </Suspense>
    </div>
  )
}