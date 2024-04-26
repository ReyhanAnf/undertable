'use client'

import { Button } from "@/components/ui/button";
import { getSession, useSession } from "next-auth/react";
import React, { useState } from "react"

export default function ClientSideRoot(): any {

  const { data: session } = useSession();

  const [shown, setShown] = useState<boolean>(false);
  const clickHandler = (): void => {
    setShown(!shown)
  }

  console.log("session", session)
  return (
    <div className="grid grid-cols-2 text-white p-4 pt-20">
      <div>
        <h1 className="leading-loose text-[15rem] font-extrabold text-accent">
          Hi {session?.user?.name}!
        </h1>
      </div>
      <div>
        <p>Protected Client Page</p>
        <Button variant={"outline"} onClick={clickHandler} >Togglr</Button>
        {shown ?
          <pre>{JSON.stringify(session, null, 2)}</pre> : null
        }
      </div>
    </div>
  )
}