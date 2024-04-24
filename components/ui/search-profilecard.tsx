"use client";

import Link from "next/link";
import { Card, CardHeader } from "./card";
import { MyAvatar } from "./myavatar";

export default function CardSearch(Props: any) {
  const user = Props.user;

  return (
    <Card className={user.username == "710092" ? "w-full my-1 border-2 bg-gradient-to-tr from-cyan-200/35 to-emerald-100/35 bg-opacity-15 backdrop-blur-sm" : " w-full my-1 bg-slate-200 bg-opacity-35"}>
      <Link href={`/profile/${user.username}`} className="-p-1">
        <CardHeader className="flex justify-between">
          <div className="flex">
            <MyAvatar key={user.username} className="rounded-md scale-75" />
            <div className="flex flex-col gap-1 items-start justify-center mx-2">
              <h4 className="text-xs font-semibold leading-none text-default-600">{user.fullname}</h4>
              <h5 className="text-xs tracking-tight text-default-400">{user.username}  {user.username == "710092" ? " - © dev" : ""}</h5>
            </div>
          </div>
        </CardHeader>
      </Link>
    </Card>
  );
}
