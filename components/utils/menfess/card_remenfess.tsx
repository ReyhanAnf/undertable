
import { ReactNode, use } from "react";
import { get_replymenfess } from "@/lib/GET/get_menfess";
import { cookies } from "next/headers";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { AlertDeleteMenfessReply } from "./alert_deletemenfessreply";
import Image from "next/image";

export default function ReMenfess({ menfessId }: any) {
  let remenfess = use(get_replymenfess(menfessId));
  const cookie = cookies();
  const userA = cookie.get("userToken")?.value;


  return (
    <div>
      {remenfess.length > 0 ? (
        <h4 className="font-semibold p-2">Replies</h4>
      ) : (
        <div className="w-full px-3 py-5 flex flex-1 justify-center self-center text-center">Belum Ada Balasan</div>
      )}
      {remenfess.map((remenfes: {
        up: ReactNode;
        mreply_id: any; content: string | number | boolean;
        user: any;
        at: string | number | boolean;
      }) => (
        <Card key={remenfes.mreply_id} data-key={remenfes.mreply_id} id={remenfes.mreply_id} className="m-1">

          <div className="contain-remenfes rounded-sm p-4 mb-3 flex justify-between">
            <div className="credible-remenfes w-3/8 rounded-sm">
            </div>
            <div className="remenfes-content w-full rounded-md py-2 px-3 mb-1">
              <CardContent>
                <p className=" dark:text-slate-300 text-gray-600 mb-1 text-left">
                  {remenfes.content}
                </p>
              </CardContent>
              <CardTitle className="metainfo text-sm p-1 mt-3 flex justify-between items-center text-slate-700 dark:text-gray-400">
                <div className="who flex items-center">
                  <div className="ans-photo m-1"></div>
                  <div className="ans-name text-sm">by {" "}
                    <span className=" ">
                      {remenfes.user.shortname}
                      <span className=" text-xs ml-1">
                        - {remenfes.user.username}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="time">{remenfes.at}</div>
              </CardTitle>
              <div className="reply-stats flex justify-between border-t-2 border-gray-600 dark:text-slate-400 text-gray-500 py-2 text-sm">
                <button className="remenfes-up rounded-md px-1 mx-1 flex items-center">
                  <Image
                    className="rounded-full fill-slate-400"
                    src="/up-dark.svg"
                    alt={"remenfes button"}
                    width={22}
                    height={22}
                  />
                </button>
                {remenfes.user.username == userA ? (
                  <div>
                    <AlertDeleteMenfessReply menfessReplyId={remenfes.mreply_id} />
                  </div>
                ) : ""}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}