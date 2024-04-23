import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function MyAvatar({ className }: any) {
  return (
    <Avatar>
      <AvatarImage src="/profile_default.gif" alt="@212210092" className={className} />
      <AvatarFallback>RN</AvatarFallback>
    </Avatar>
  )
}
