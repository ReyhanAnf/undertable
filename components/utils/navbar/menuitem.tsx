"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

const menus = [
  {
    title: "Posts",
    link: "/posts",
    description: "",
  },
  {
    title: "Menfess",
    link: "/menfess",
    description: "",
  },
  {
    title: "Learn",
    link: "/learn",
    description: "",
  },
]

export function MenuItem({ user }: any) {
  return (
    <ScrollArea className="h-full w-full rounded-md">
      {user == "None" ? (
        <Link className={buttonVariants({ variant: "outline" })} href={'/auth/signin'}>Sign In</Link>
      ) : (
        <Link className={buttonVariants({ variant: "outline" })} href={'/profile/me'}>My Profile ~ {user}</Link>
      )}
      <div className="p-4">
        {menus.map((menu) => (
          <div key={menu.title}>
            <Link className="text-sm"
              href={menu.link}>
              {menu.title}
            </Link>
            <Separator className="my-2" />
          </div>
        )
        )}

      </div>
    </ScrollArea>
  )
}
