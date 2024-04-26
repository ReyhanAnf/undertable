import { Button } from "@/components/ui/button";
import { MenuItem } from "./menuitem";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { MyAvatar } from "../../ui/myavatar";
import Image from "next/image";
import { cookies } from "next/headers";

export function SheetMenu() {
  const userA = cookies().get("userToken")?.value;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          {userA ? (
            <MyAvatar key={userA} className="scale-75" />
          ) : (
            <Image src="/profile_anon.gif" width={20} height={20} alt="Sign In" className=" rounded-md" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle><Link href={"/"}>UnderTable</Link></SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <MenuItem user={userA ? userA : "None"} />
      </SheetContent>
    </Sheet>
  )
}
