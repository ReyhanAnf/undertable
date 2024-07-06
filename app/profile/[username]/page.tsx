import Profile from "@/components/utils/profile/profile";
import get_users from "@/lib/GET/get_users";



export default function Page({ params }: { params: { username: string } }) {
  const username = params.username;
  return (
    <div className="w-full">
      <Profile username={username} />
    </div>
  )
}