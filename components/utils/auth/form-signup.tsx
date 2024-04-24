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
import auth_signup from "@/lib/POST/Auth/auth_signup"
import { toast } from "@/components/ui/use-toast"
import { ButtonLoading } from "@/components/ui/loading-button"
import { useRouter } from "next/navigation"

let initialState = {
  message: '',
}

export function FormSignUp(Props: any) {
  const [state, formAction] = useFormState(auth_signup, initialState);
  const rout = useRouter();
  return (
    <>
      {Props.registerStatus == "yes" ? (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign Up Success</CardTitle>
            <CardDescription>great!</CardDescription>
          </CardHeader>
          <CardContent>
            {state?.message}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link className={buttonVariants({ variant: "outline" })} href={'/'}>Home</Link>
            <Link className={buttonVariants({ variant: "outline" })} href={'/auth/signin'}>Sign In</Link>
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Register to access more features.</CardDescription>
            <CardDescription className="text-xs text-orange-400 dark:text-orange-400">{state?.message}</CardDescription>
          </CardHeader>
          <form action={formAction}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input type="text" id="username" placeholder="Student Identity Number (NIS/NISN)" name="username" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="fullname">fullname</Label>
                  <Input type="text" id="fullname" placeholder="fullname" name="fullname" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="shortname">shortname</Label>
                  <Input type="text" id="shortname" placeholder="shortname" name="shortname" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" name="password" placeholder="Your Password" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="re_password">password again</Label>
                  <Input type="password" id="re_password" name="re_password" placeholder="Your same password" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link className={buttonVariants({ variant: "outline" })} href={'/'}>Cancel</Link>
              <Button onClick={() => {
                const a = setInterval(() => {
                  toast({
                    title: "Register",
                    description: state?.message,
                  })
                  rout.replace('/auth/signin')
                  rout.refresh()
                  clearInterval(a)
                }, 1000)

                toast({
                  title: "Registering...",
                  description: (
                    <ButtonLoading text={"on process.."} />
                  )
                })
              }} >Sign Up</Button>
            </CardFooter>
          </form>
        </Card>
      )}
    </>
  )
}
