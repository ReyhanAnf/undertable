import MyProfile from "@/components/utils/profile/me/myprofile";
import { SkeletonCard } from "@/components/utils/skeletoncard";
import { getCookie } from "cookies-next";

import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function Page() {

  if (!getCookie("userToken")) {
    redirect("/")
  }
  return (
    <div className="w-full">
      <Suspense fallback={<SkeletonCard />} >
        <MyProfile user={getCookie("userToken")} />
      </Suspense>
    </div>
  )
}