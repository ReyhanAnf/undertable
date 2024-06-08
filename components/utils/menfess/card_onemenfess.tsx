
import Link from "next/link";
import { use } from "react";
import Image from "next/image";
import { get_onemenfess } from "@/lib/GET/get_menfess";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ReMenfess from "./card_remenfess";
import { AlertDeleteMenfess } from "./alert_deletemenfess";
import { StaredButtonMenfess } from "@/components/ui/stared-button-menfess";
import { getSessionData } from "@/app/getSession";

export default function CardAnyMenfess({ id }: any) {

  let menfess = use(get_onemenfess(id));
  const sess = getSessionData();
  const userA = sess["user"];

  return (
    <div className="sm:max-w-[450px] w-full px-2">
      <Card className="sm:max-w-[500px] w-full my-3 mx-auto z-10 bg-opacity-50 shadow-sm shadow-cyan-600" id={`menfess-${menfess.menfess_id}`} key={`menfess-${menfess.menfess_id}`}>
        {menfess.receiver && menfess.receiver.username == userA ?
          (
            <CardHeader className="flex flex-row items-center justify-between -mt-4 -mb-4">
              <Link className="answer-view rounded-md px-1 flex items-center"
                href={'/menfess'}
              >
                <Image
                  className="rounded-full fill-slate-400"
                  src="/back.svg"
                  alt="back button"
                  width={20}
                  height={20}
                />
              </Link>
              <CardDescription>
                Menfess for you
              </CardDescription>

              <AlertDeleteMenfess menfessId={menfess.menfess_id} />
            </CardHeader>
          )
          : (
            <CardHeader className="flex flex-row items-center justify-between -mt-4 -mb-4">
              <Link className="answer-view rounded-md px-1 flex items-center"
                href={'/menfess'}
              >
                <Image
                  className="rounded-full fill-slate-400"
                  src="/back.svg"
                  alt="back button"
                  width={20}
                  height={20}
                />
              </Link>
              <CardDescription>
                Menfess
              </CardDescription>
            </CardHeader>
          )
        }
        <Separator />
        <CardHeader className="flex gap-3 justify-between">
          <div className="flex gap-5 items-center">
            <div className="p-2 border rounded-xl border-cyan-500 bg-slate-800 bg-opacity-25 m-1 flex items-center text-center">{menfess.emote}</div>
            <small className="text-xs leading-none text-slate-500 font-thin">to</small>
            <div className="w-full flex flex-row gap-1 p-2 ml-1 items-center  border rounded-xl border-slate-700 bg-slate-800 bg-opacity-25 m-1 text-sm">
              <div className="flex flex-col px-2 items-center">
                <Image src="/receipent.svg" width={25} height={25} alt={"receipent"} />
              </div>
              {menfess.receiver ? (
                <div className="flex flex-col px-2 items-start">
                  <h5 className="text-small font-medium leading-none text-default-600">{menfess.receiver.fullname}</h5>
                  <small className="text-small font-thin text-gray-400">{menfess.receiver_class}</small>
                </div>
              ) : (
                <div className="flex flex-col px-2 items-start">
                  <small className="text-small font-thin text-slate-400">{menfess.receiver_class}</small>
                </div>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="w-[95%] p-2 bg-slate-700 mx-auto border-gray-600 rounded-lg bg-opacity-15 py-3">
          <Link className="contain-content "
            href={'/menfess/' + menfess.menfess_id}
          >
            <div>
              <div className="whitespace-pre-line text-sm dark:text-slate-200 font-thin text-slate-900">{menfess.content}</div>
            </div>
          </Link>
        </CardContent>
        <div className="flex flex-row justify-between px-3 my-1">
          <div className="text-slate-500 p-3 gap-1 text-xs flex flex-row items-center bg-cyan-700 bg-opacity-5 rounded-md">
            <Image src="/sender.svg" width={25} height={25} alt={"sender"} /> <span className="font-semibold">{menfess.sender}</span>
          </div>
          <div className="text-slate-500 p-3 gap-1 text-xs flex flex-row items-center bg-cyan-700 bg-opacity-5 rounded-md">
            <Image src="/song.svg" width={25} height={25} alt={"song"} /> <span className="font-semibold">{menfess.song}</span>
          </div>
        </div>


        <CardFooter className="flex flex-row items-end justify-between mx-2">
          <div className="text-xs text-slate-600 h-6 py-1 justify-start">{menfess.menfess_at}</div>
          <div className="flex flex-row mt-6 justify-end rounded-none bg-transparent">
            <div className="flex flex-row items-center justify-end">
              <span className="text-xs mr-2">{menfess.likes.length}</span>
              <StaredButtonMenfess menfessid={menfess.menfess_id} userA={userA} realLike={menfess.likes} />
            </div>
            <div className="flex flex-row items-center justify-end">
              <span className="text-xs">{menfess.menfess.length}</span>
              <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
                href={menfess.menfess_id + "/reply"}
              >
                <Image
                  className="rounded-full fill-slate-400 shadow-xl"
                  src="/answer.svg"
                  alt="answer button"
                  width={25}
                  height={25}
                />
              </Link>
            </div>

          </div>

        </CardFooter>
        <Separator />

        {menfess.menfess ? (
          <div>
            <ReMenfess menfessId={menfess.menfess_id} />
          </div>
        ) : ""}
      </Card>
    </div>
  )
}
