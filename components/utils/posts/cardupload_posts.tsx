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
import upload_posts from "@/lib/POST/Posts/upload_post"
import { toast } from "@/components/ui/use-toast"
import { ButtonLoading } from "@/components/ui/loading-button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useRouter } from "next/navigation"

let initialState = {
  message: '',
}




export default function CardUploadPosts(Props: any) {
  const [image, setImage] = useState<File>()

  const handleChange = (e: any) => {
    setImage(e.target.files[0])
  }

  const action = (prevState: any, formData: FormData) => {
    const req = {
      'content': formData.get("content"),
      'tags': formData.get("tags")
    };
    let data = new FormData();
    if (req.content && req.tags) {
      data.append('content', req.content.toString());
      data.append('tags', req.tags.toString());
    }

    if (image) {
      data.append('image', image);
    }

    upload_posts(data);


    return {
      message: Props.message
    }
  }


  const [state, formAction] = useFormState(action, initialState);
  let rout = useRouter();

  function send() {
    const a = setInterval(() => {
      toast({
        title: "Post",
        description: state?.message,
      })
      rout.replace('/')
      rout.refresh()
      clearInterval(a)
    }, 1000)

    toast({
      title: "Posting...",
      description: (
        <ButtonLoading />
      )
    })
  }

  return (
    <>
      {Props.auth != 'yes' ? (
        <Card className="w-[650px] flex flex-1 justify-center items-center">
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
                  <Label htmlFor="content">content</Label>
                  <Textarea id="content" placeholder="your thinks..." name="content" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="tags">tags</Label>
                  <Input type="text" id="tags" name="tags" placeholder="Your tags" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="image">image</Label>
                  <Input id="image" type="file" name="image" onChange={handleChange} />
                </div>

              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link className={buttonVariants({ variant: "outline" })} href={'/'}>Cancel</Link>
              <Button onClick={send} >Posting</Button>
            </CardFooter>
          </form>
        </Card>
      )}

    </>
  )
}
