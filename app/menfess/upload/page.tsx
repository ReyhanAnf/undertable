import CardUploadMenfess from "@/components/utils/menfess/cardupload_menfess";
import get_users from "@/lib/GET/get_users";
import { use } from "react";
import { cookies } from "next/headers";

export default function Page() {
  const auth = cookies().get("statusAuth")?.value;
  const message = cookies().get("messageAuth")?.value;
  const users = use(get_users());


  return (
    <div>
      <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
        <div className='w-full m-0 lg:w-[60%] lg:scale-75 flex flex-1 justify-center items-center'>
          <CardUploadMenfess auth={auth} users={users} message={message} />
        </div>
      </div>
    </div>
  )
}
