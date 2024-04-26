import { getServerSession } from "next-auth";
import type { NextRequest } from "next/server";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";


export default async function Protected(req: NextRequest): Promise<any> {
  const session = await getServerSession(authOptions);

  const session2 = await getSession();
  console.log("session2", session2?.user)
  console.log("session", session?.user)
  console.log("req", req)
  return (
    <div className="grid grid-cols-2 text-white p-4 pt-20">
      <div>
        {
          session !== null ? (
            <h1 className="leading-loose text-[15rem] font-extrabold text-accent">
              Hi {session?.user?.name}!
            </h1>
          ) : (
            <Link href={'/api/auth/signin'} className="bg-slate-700 rounded-lg p-5">Sign In</Link>
          )
        }
      </div>
    </div>
  )
}