import { FormSignUp } from "@/components/utils/auth/form-signup";
import { getCookie } from "cookies-next";


export default function Page() {
  const registerStatus = getCookie('registerStatus');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <FormSignUp registerStatus={registerStatus} />
      </div>
    </main>
  )
}
