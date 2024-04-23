"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { ButtonLoading } from "@/components/ui/loading-button"
import { toast } from "@/components/ui/use-toast"
import deleteMenfess from "@/lib/DELETE/delete_menfess"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function AlertDeleteMenfess({ menfessId }: any) {
  let rout = useRouter()
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="text-red-500 hover:bg-red-500 hover:text-slate-200 transition-all duration-300">
          <Image
            className="rounded-full shadow-xl"
            src="/delete.svg"
            alt="delete button"
            width={22}
            height={22}
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure to delete this?</AlertDialogTitle>
          <AlertDialogDescription>
            You can not recover it!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => {
            deleteMenfess(menfessId);
            toast({
              title: "Delete Post",
              description: <ButtonLoading text="Deleting.." />,
            })
            let a = setInterval(() => {
              rout.replace('/menfess')
              rout.refresh()
              clearInterval(a)
            }, 2000)
          }} className="bg-red-500 text-slate-200 hover:bg-red-400">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
