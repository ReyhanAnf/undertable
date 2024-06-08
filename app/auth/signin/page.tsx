import { getSessionData } from "@/app/getSession";
import { FormSignIn } from "@/components/utils/auth/form-signin";

export default function Page() {
  const sess = getSessionData();
  const user = sess["user"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <FormSignIn user={user} />
      </div>
    </main>
  )
}
