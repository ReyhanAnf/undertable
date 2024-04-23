import Profile from "@/components/utils/profile/profile"
export default function Page({ params }: { params: { username: string } }) {

  return (
    <div className="w-full">
      <Profile username={params.username} />
    </div>
  )
}