"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ButtonLoading } from "@/components/ui/loading-button"

import { Card, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import upload_replies from "@/lib/POST/Posts/upload_replies"




const FormSchema = z.object({
  content: z
    .string()
    .min(2, {
      message: "Bio must be at least 2 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 160 characters.",
    })
})



const initialState = {
  messages: ""
}





export default function CardUploadReplies({ answerid, setvReply }: any) {
  const rout = useRouter()



  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      content: ""
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    upload_replies([data, answerid]);
    form.reset()

    const a = setInterval(() => {
      rout.back()
      rout.forward()
      rout.refresh()
      clearInterval(a)
    }, 1000)


    toast({
      title: "Reply...",
      description: (
        <ButtonLoading />
      ),
    })


  }

  return (
    <Card className=" z-50 items-center  w-full h-screen fixed top-0 left-0 bg-transparent bg-opacity-5 animate-in animate-pulse transition-all duration-500">
      <div className="h-1/2 bg-transparent w-full cursor-pointer" onClick={() => { setvReply(false) }}></div>
      <div className="bg-slate-100 dark:bg-gray-900 rounded-md h-1/2 w-full p-3 gap-3 flex flex-col justify-start border-2">
        <CardTitle>
          Posting replies
        </CardTitle>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-2 space-y-6 bg-slate-200 dark:bg-gray-800" id="frep">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your reaction</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about your thinks"
                      className="resize-none"

                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" onClick={() => { setvReply(false) }}>Submit</Button>
          </form>
        </Form>
      </div>
    </Card>
  )
}
