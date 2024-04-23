'use client'

import { useState } from "react";
import { Button } from "./button";
import { Card, CardContent, CardTitle } from "./card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardUploadReplies from "../utils/posts/cardupload_replies";
import { useRouter } from "next/navigation";
import { AlertDeleteReply } from "../utils/posts/alert_deletereply";
import { AlertDeleteAnswer } from "../utils/posts/alert_deleteanswer";
import Image from "next/image";


export default function CardAnswerMain({ answers, auth }: any) {
  const rout = useRouter();
  const [vreply, setvReply] = useState(false)
  const [aswid, setAswid] = useState("")

  return (
    <div className="p-2">
      <div className={vreply ? "opacity-100 transition-all duration-500" : "opacity-0 hidden transition-all duration-500"}>
        <CardUploadReplies answerid={aswid} setvReply={setvReply} />
      </div>
      {answers.length > 0 ? (
        <h4>Answers</h4>
      ) : (
        <div className="w-full px-3 py-5 flex flex-1 justify-center self-center text-center">Belum Ada Balasan</div>
      )}
      {answers.map((answer: {
        answer_id: any;
        content: any; user: {
          username: any; fullname: any; shortname: any;
        }; at: any; replies: {
          reply_id: any; user: { shortname: any; username: any; }; at: any; content: any;
        }[];
      }) => (
        <Card key={answer.answer_id} data-key={answer.answer_id} id={answer.answer_id} className="m-1">

          <div className="contain-answer rounded-sm p-4 mb-3 flex justify-between">
            <div className="credible-answer w-3/8 rounded-sm">
            </div>
            <div className="answer-content w-full rounded-md py-2 px-3 mb-1">
              <CardContent>
                <p className=" dark:text-slate-300 text-gray-600 mb-1 text-left">
                  {answer.content}
                </p>
              </CardContent>
              <CardTitle className="metainfo text-sm p-1 mt-3 flex justify-between items-center text-slate-700 dark:text-gray-400">
                <div className="who flex items-center">
                  <div className="ans-photo m-1"></div>
                  <div className="ans-name text-sm">by {" "}
                    <span className=" ">
                      {answer.user.shortname}
                      <span className=" text-xs ml-1">
                        - {answer.user.username}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="time">{answer.at}</div>
              </CardTitle>
              <div className="reply-stats flex justify-between border-t-2 border-gray-600 dark:text-slate-400 text-gray-500 py-2 text-sm">
                <button className="answer-up rounded-md px-1 mx-1 flex items-center">
                  <Image
                    className="rounded-full fill-slate-400"
                    src="/up-dark.svg"
                    alt="answer button"
                    width={22}
                    height={22}
                  />
                </button>
                {answer.user.username == auth ? (
                  <div>
                    <AlertDeleteAnswer answerid={answer.answer_id} />
                  </div>
                ) : ""}
                <div className="flex mt-1 items-center">
                  <Button className="answer-view rounded-md text-xs px-2" variant="default" onClick={() => { setvReply(!vreply); setAswid(answer.answer_id); rout.push("#" + answer.answer_id) }}>
                    reply
                  </Button>
                </div>
              </div>
              <div>
                <Accordion type="single" collapsible className="rounded-md px-2 py-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Lihat {answer.replies.length} Balasan</AccordionTrigger>
                    {answer.replies.map((reply) => (
                      <AccordionContent key={reply.reply_id} data-key={reply.reply_id} className="reply-contains p-2 rounded-md border-[1px] border-slate-300 dark:border-slate-700 " >
                        <div className="reply-name text-xs ">{reply.user.shortname}~{reply.user.username} • {reply.at}</div>
                        <div className="reply-content text-sm">
                          <div className="reply-content text-sm text-gray-600 dark:text-slate-400 py-2 flex justify-between items-center">
                            <div className="reply-context text-sm">{reply.content}</div>
                            <AlertDeleteReply replyid={reply.reply_id} />
                          </div>
                        </div>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}