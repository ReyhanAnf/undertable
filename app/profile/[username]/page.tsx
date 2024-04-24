import Profile from "@/components/utils/profile/profile";
import get_users from "@/lib/GET/get_users";

export async function generateStaticParams() {
  const users = await get_users();

  return users.map((user: { username: string; }) => ({
    username: user.username,
  }))
}


export default function Page({ params }: any) {
  const { username } = params;
  return (
    <div className="w-full">
      <Profile username={username} />
    </div>
  )
}