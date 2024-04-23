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
import deletePost from "@/lib/DELETE/delete_posts"
import { useRouter } from "next/navigation"
import Image from "next/image"


export function AlertDeletePost({ postid }: any) {
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
            deletePost(postid);
            toast({
              title: "Delete Post",
              description: <ButtonLoading text="Deleting.." />,
            })
            let a = setInterval(() => {
              rout.replace('/')
              rout.refresh()
              clearInterval(a)
            }, 2000)
          }} className="bg-red-500 text-slate-200 hover:bg-red-400">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
