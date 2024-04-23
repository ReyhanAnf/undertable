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
import upload_answers from "@/lib/POST/Posts/upload_answer"
import { useRouter } from "next/navigation"




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





export default function CardUploadAnswers({ postid }: any) {
  const rout = useRouter()



  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      content: ""
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    upload_answers([data, postid]);
    const timer = setTimeout(() => {
      rout.push('/posts/' + postid)
    }, 3000)


    toast({
      title: "Answer...",
      description: (
        <ButtonLoading />
      ),
    })
    return () => clearTimeout(timer)
  }

  return (
    <Card className="flex flex-col justify-center items-center p-3 w-full gap-3  fixed bottom-0 backdrop-blur-md animate-in animate-pulse transition-all duration-500">
      <CardTitle>
        Posting Answers
      </CardTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>You Thinks</FormLabel>
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Card>
  )
}
