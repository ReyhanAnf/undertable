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
import auth_signin from "@/lib/POST/Auth/auth_signin"
import { AlertSignOut } from "./alert-signout"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { ButtonLoading } from "@/components/ui/loading-button"

let initialState = {
  message: '',
}

export function FormSignIn(Props: any) {
  const [state, formAction] = useFormState(auth_signin, initialState);
  const rout = useRouter();
  return (
    <>
      {Props.user != undefined ? (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign In Success</CardTitle>
            <CardDescription>welcome!</CardDescription>
          </CardHeader>
          <CardContent>
            {state?.message}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link className={buttonVariants({ variant: "outline" })} href={'/'}>Home</Link>
            <AlertSignOut />
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Login to access more features.</CardDescription>
            <CardDescription className="text-xs text-orange-300">{state?.message}</CardDescription>
          </CardHeader>
          <form action={formAction}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input type="text" id="username" placeholder="Student Identity Number (NIS/NISN)" name="username" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" name="password" placeholder="Your Password" />
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
              }} >Sign In</Button>
            </CardFooter>
          </form>

          <Card className="flex justify-around items-center m-5 p-2 text-xs">
            <div>Have not a account? </div>
            <Link className={buttonVariants({ variant: "secondary", size: "xs" })} href={'/auth/signup'}>Sign Up</Link>

          </Card>
        </Card>
      )}

    </>
  )
}
