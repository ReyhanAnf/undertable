import { getSessionData } from "@/app/getSession";
import MyProfile from "@/components/utils/profile/me/myprofile";
import { SkeletonCard } from "@/components/utils/skeletoncard";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const sess = getSessionData();
  const user = sess["user"]
  if (!user) {
    redirect("/")
  }
  return (
    <div className="w-full">
      <Suspense fallback={<SkeletonCard />} >
        <MyProfile user={user} />
      </Suspense>
    </div>
  )
}