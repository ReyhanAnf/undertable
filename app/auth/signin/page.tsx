import { FormSignIn } from "@/components/utils/auth/form-signin";
import Cookies from "js-cookie";

export default function Page() {
  const stat = Cookies.get("statusAuth");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <FormSignIn statauth={stat} />
      </div>
    </main>
  )
}
