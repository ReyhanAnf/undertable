
import Link from "next/link";
import { use } from "react";
import Image from "next/image";
import { cookies } from "next/headers";
import get_menfess from "@/lib/GET/get_menfess";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { StaredButtonMenfess } from "@/components/ui/stared-button-menfess";

export default function CardMenfess() {

  let dataMenfess = use(get_menfess());
  let cookie = cookies();
  let userA = cookie.get("userToken")?.value;
  let receiversaid = (data: any) => {
    return data.menfess.find((menfes: { user: { username: any; }; }) => { return menfes.user.username == data.receiver.username })
  };

  return (
    <div className="sm:max-w-[450px] w-full px-2">
      {dataMenfess.map((datam: {
        content: any;
        menfess_at: any;
        likes: any;
        menfess: any;
        menfess_id: any;
        song: any;
        emote: any;
        receiver: any;
        receiver_class: any;
        sender: any;
      }) => (
        <Card className="sm:max-w-[500px] w-full my-3 mx-auto z-10 bg-opacity-50 shadow-sm shadow-cyan-600" id={`menfess-${datam.menfess_id}`} key={`menfess-${datam.menfess_id}`}>
          <CardHeader className="flex gap-3 justify-between">
            <div className="flex gap-5 items-center">
              <div className="p-2 border rounded-xl border-cyan-500 bg-slate-800 bg-opacity-25 m-1 flex items-center text-center">{datam.emote}</div>
              <small className="text-xs leading-none text-slate-500 font-thin">to</small>
              <div className="w-full flex flex-row gap-1 p-2 ml-1 items-center rounded-xl bg-slate-600 bg-opacity-5 m-1 text-sm">
                <div className="flex flex-col px-2 items-center">
                  <Image src="/receipent.svg" width={25} height={25} alt={"receipent"} />
                </div>
                {datam.receiver ? (
                  <div className="flex flex-col px-2 items-start">
                    <h5 className="text-small font-medium leading-none text-default-600">{datam.receiver.fullname}</h5>
                    <small className="text-small font-thin text-gray-400">{datam.receiver_class}</small>
                  </div>
                ) : (
                  <div className="flex flex-col px-2 items-start">
                    <small className="text-small font-thin text-slate-400">{datam.receiver_class}</small>
                  </div>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="w-[95%] p-2 bg-slate-700 mx-auto border-gray-600 rounded-lg bg-opacity-15 py-3">
            <Link className="contain-content "
              href={'/menfess/' + datam.menfess_id}
            >
              <div>
                <div className="whitespace-pre-line text-sm dark:text-slate-200 font-thin text-slate-900">{datam.content}</div>
              </div>
            </Link>
          </CardContent>
          <div className="flex flex-row justify-between px-3 my-1">
            <div className="text-slate-500 p-3 gap-1 text-xs flex flex-row items-center bg-cyan-700 bg-opacity-5 rounded-md">
              <Image src="/sender.svg" width={20} height={20} alt={"sender"} /> <span className="font-semibold">{datam.sender}</span>
            </div>
            <div className="text-slate-500 p-3 gap-1 text-xs flex flex-row items-center bg-cyan-700 bg-opacity-5 rounded-md">
              <Image src="/song.svg" width={20} height={20} alt={"song"} /> <span className="font-semibold">{datam.song}</span>
            </div>
          </div>


          <CardFooter className="w-full flex flex-row items-center justify-between">
            <div className="w-1/2 flex flex-row gap-1 p-2 items-center  rounded-xl shadow-sm bg-slate-500 bg-opacity-5 text-xs -ml-3">
              {datam.receiver ? (
                <div className="flex flex-col px-2 items-start">
                  <h5 className="text-small font-medium leading-none text-default-600">{datam.receiver.shortname}</h5>
                  <small className="text-small font-thin text-gray-400">{datam.receiver_class}</small>
                </div>
              ) : (
                <div className="flex flex-col px-2 items-start">
                  <small className="text-small font-thin text-slate-400">{datam.receiver_class}</small>
                </div>
              )}

              <div>
                {receiversaid(datam) ? receiversaid(datam).content : "Belum Dibalas"}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row mt-6 justify-end rounded-none bg-transparent">
                <div className="flex flex-row items-center justify-end">
                  <span className="text-xs mr-2">{datam.likes.length}</span>
                  <StaredButtonMenfess menfessid={datam.menfess_id} userA={userA} realLike={datam.likes} />
                </div>
                <div className="flex flex-row items-center justify-end">
                  <span className="text-xs">{datam.menfess.length}</span>
                  <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
                    href={'/menfess/' + datam.menfess_id + "/reply"}
                  >
                    <Image
                      className="rounded-full fill-slate-400"
                      src="/answer.svg"
                      alt="answer button"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>

              </div>
              <div className="text-xs text-slate-600 h-6 py-1 justify-start">{datam.menfess_at}</div>
            </div>
          </CardFooter>

        </Card>
      ))}
    </div>
  )
}
