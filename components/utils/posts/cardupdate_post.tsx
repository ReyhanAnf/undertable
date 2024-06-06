'use client'
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useFormState } from 'react-dom';
import update_post from "@/lib/UPDATE/update_post"
import { toast } from "@/components/ui/use-toast"
import { ButtonLoading } from "@/components/ui/loading-button"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import Image from "next/image"

let initialState = {
  message: '',
}




export default function CardUpdatePosts(Props: any) {
  let prevdata = Props?.post;
  let rout = useRouter()

  const [state, formAction] = useFormState(update_post, initialState);


  function send() {
    const a = setInterval(() => {
      toast({
        title: "Post",
        description: state?.message,
      })
      rout.back()
      rout.refresh()
      clearInterval(a)
    }, 1000)

    toast({
      title: "Saving...",
      description: (
        <ButtonLoading />
      )
    })
  }

  return (
    <>
      {Props.auth == undefined ? (
        <Card className="w-[650px] ">
          <CardHeader>
            <CardTitle>You Should Sign In</CardTitle>
            <CardDescription>Go to page Sign In!</CardDescription>
          </CardHeader>
          <CardContent>
            {state?.message}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link className={buttonVariants({ variant: "outline" })} href={'/'}>Sign In</Link>
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Posting</CardTitle>
            <CardDescription>Share your homework.</CardDescription>
            <CardDescription className="text-xs text-orange-300">{state?.message}</CardDescription>
          </CardHeader>
          <form action={formAction}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="post id">post_id</Label>
                  <Input type="text" id="postid" name="postid" placeholder="Your post id" defaultValue={prevdata.post_id} readOnly className="cursor-not-allowed" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="content">content</Label>
                  <Textarea id="content" placeholder="your thinks..." name="content" defaultValue={prevdata.content} className="h-40 py-2 px-1 overflow-y-auto resize-y" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="tags">tags</Label>
                  <Input type="tags" id="tags" name="tags" placeholder="Your tags" defaultValue={prevdata.tags} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="image">image</Label>
                  <Input id="image" type="file" name="image" />
                </div>
                {prevdata.image ? (
                  <Image
                    className="rounded-lg fill-slate-400"
                    src={prevdata.image}
                    alt="post image"
                    height={200}
                  />
                ) : ""}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link className={buttonVariants({ variant: "outline" })} href={'/'}>Cancel</Link>
              <Button onClick={send} >Save</Button>
            </CardFooter>
          </form>
        </Card>
      )}

    </>
  )
}
