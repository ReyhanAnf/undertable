import SearchPage from "@/components/utils/navbar/search-page"
import get_users from "@/lib/GET/get_users"
import { use } from "react"

export default function Page() {
  const users = use(get_users());
  return (
    <div className="w-full h-screen flex-1 justify-start items-center py-14 px-4">
      <SearchPage users={users} />
    </div>
  )
}