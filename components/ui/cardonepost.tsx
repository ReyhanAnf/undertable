'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { Separator } from "../ui/separator";
import Link from "next/link";
import CardAnswerMain from "./cardanswerpost";
import { AlertDeletePost } from "../utils/posts/alert_deletepost";
import { StaredButton } from "./stared-button";
import Image from "next/image";


export function CardPost({ wAnswer, post, auth }: any) {

  return (
    <Card className="sm:max-w-[450px] w-full" suppressHydrationWarning>
      {post.author.username == auth ? (
        <CardHeader className="flex flex-row justify-between">
          <Link className="answer-view cursor-pointer rounded-md px-1 mx-1 flex items-center"
            href={'/'}
          >
            <Image
              className="rounded-full fill-slate-400"
              src="/back.svg"
              alt="back button"
              width={26}
              height={26}
            />
          </Link>
          <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
            href={`/posts/${post.post_id}/edit`}
          >
            <Image
              className="rounded-full hover:scale-75 transition-all duration-100"
              src="/edit.svg"
              alt="back button"
              width={35}
              height={35}
            />
          </Link>
          <AlertDeletePost postid={post.post_id} />
        </CardHeader>
      )
        :
        wAnswer ? (
          <Link className="answer-view cursor-pointer rounded-md px-1 mx-1 flex items-center"
            href={'/'}
          >
            <Image
              className="rounded-full fill-slate-400 cursor-pointer"
              src="/back.svg"
              alt="back button"
              width={26}
              height={26}
            />
          </Link>
        ) : ""
      }
      <Card className="sm:max-w-[600px] w-full my-1 bg-opacity-50 -z-10" >
        <CardHeader className="flex gap-3 justify-between">
          <div className="flex gap-5">
            <Avatar>
              <AvatarImage src="/profile_default.gif" alt={post.author.username} className="scale-75" />
              <AvatarFallback>RN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 items-start justify-center">
              <CardTitle>{post.author.fullname}</CardTitle>
              <CardDescription>{post.author.username}</CardDescription>
            </div>
          </div>
          {/* <SaveButton /> */}
        </CardHeader>
        <Separator />
        <CardContent className="p-1">
          <Link className="contain-content text-white"
            href={'/posts/edrwefew'}
          >
            <div>
              <div className="whitespace-pre-line dark:text-white text-slate-900 py-4">{post.content}</div>
            </div>
          </Link>

          <div className={post.image ? "" : "flex flex-row justify-between"}>
            <div className="text-xs text-slate-600 h-6 py-1">{post.post_at}</div>
            {post.image ? (
              <Card
                className="border-none my-2"
              >
                <Link href={post.image}>
                  <Image
                    alt="Woman listing to music"
                    className="object-cover rounded-lg"
                    height={200}
                    width={200}
                    src={post.image}
                  />
                </Link>
                <CardFooter className="relative bottom-10 backdrop-blur-md justify-end z-10 bg-white/30 border-white/30 border-1 overflow-hidden py-1 mx-1  rounded-xl  w-[calc(100%_-_8px)] shadow-sm">
                  <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
                    href={'/posts/' + post.post_id}
                  >
                    <Image
                      className="rounded-full fill-slate-400"
                      src="/view-light.svg"
                      alt="view button"
                      width={25}
                      height={25}
                    />
                  </Link>
                  <StaredButton idpost={post.post_id} userA={auth} realLike={post.likes} />
                  <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
                    href={'/posts/' + post.post_id + "/answer"}
                  >
                    <Image
                      className="rounded-full fill-slate-400 shadow-xl"
                      src="/answer.svg"
                      alt="answer button"
                      width={26}
                      height={26}
                    />
                  </Link>
                </CardFooter>
              </Card>

            )
              : (
                <div className="flex flex-row justify-end rounded-none bg-transparent">
                  <StaredButton idpost={post.post_id} userA={auth} realLike={post.likes} />
                  <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
                    href={'/posts/' + post.post_id + "/answer"}
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
              )}
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="flex justify-between">
          <div className="answer-meta text-sm my-1 flex justify-between">
            <div className="p-1 border rounded-xl border-slate-500 bg-cyan-800 bg-opacity-25 m-1">{post.tags}</div>
          </div>
          <div className="flex gap-1">
            <p className="text-xs">{post.answers.length}</p>
            <p className="text-xs">Comments</p>
          </div>
          <div className="flex gap-1">
            <p className="text-xs">{post.likes.length}</p>
            <p className="text-xs">Stars</p>
          </div>
        </CardFooter>

        {wAnswer ? (
          <div>
            <CardAnswerMain answers={post.answers} auth={auth} />
          </div>
        ) : ""}
      </Card>
    </Card>
  )
}