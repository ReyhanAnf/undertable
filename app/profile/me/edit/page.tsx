import EditProfile from "@/components/utils/profile/me/editprofile";
import { SkeletonCard } from "@/components/utils/skeletoncard";
import { get_authprofile } from "@/lib/GET/get_users";
import { Suspense, use } from "react";


export default function Page() {
  const profile = use(get_authprofile());

  return (
    <Suspense fallback={<SkeletonCard />} >
      <EditProfile profile={profile} />
    </Suspense>
  )
}