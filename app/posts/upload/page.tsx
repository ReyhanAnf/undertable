import CardUploadPosts from "@/components/utils/posts/cardupload_posts";
import { Suspense } from "react";
import { cookies } from "next/headers";

export default async function Page() {
  const auth = cookies().get("statusAuth")?.value;
  const message = cookies().get("messageAuth")?.value;
  return (
    <div>
      <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
        <div className='w-full m-0 lg:w-[60%] lg:scale-75 flex flex-1 justify-center items-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <CardUploadPosts auth={auth} message={message} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
