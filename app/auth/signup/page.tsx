import { FormSignUp } from "@/components/utils/auth/form-signup";
import { cookies } from "next/headers";

export default function Page() {
  const registerStatus = cookies().get('registerStatus')?.value;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <FormSignUp registerStatus={registerStatus} />
      </div>
    </main>
  )
}
