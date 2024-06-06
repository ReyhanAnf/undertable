import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";


export default function ShouldSign() {
  return (
    <Card className="w-[650px] flex flex-1 justify-center items-center">
      <CardHeader className="w-1/2">
        <CardTitle>You Should Sign In</CardTitle>
        <CardDescription>Go to page Sign In!</CardDescription>
      </CardHeader>
      <CardContent className="text-xs text-gray-500 text-center items-center py-3">
        Sign in or Register to can access all features!
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link className={buttonVariants({ variant: "outline" })} href={'/auth/signin'}>Sign In</Link>
      </CardFooter>
    </Card>
  )
}