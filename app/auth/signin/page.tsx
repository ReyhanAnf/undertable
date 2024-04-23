import { FormSignIn } from "@/components/utils/auth/form-signin";
import { cookies } from "next/headers";

export default function Page() {
  const statauth = cookies().get('userToken')?.value;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <FormSignIn statauth={statauth} />
      </div>
    </main>
  )
}
