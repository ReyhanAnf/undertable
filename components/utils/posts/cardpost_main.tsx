import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

import { Separator } from "../../ui/separator";
import { use, Suspense, ReactNode } from "react";
import Link from "next/link";

import get_posts from "@/lib/GET/get_posts";
import { SkeletonCard } from "../skeletoncard";
import { StaredButton } from "@/components/ui/stared-button";
import { cookies } from "next/headers";

import Image from "next/image";


export function CardPost() {
  const postsdata = use(get_posts());
  const userA = cookies().get('userToken')?.value;

  return (
    <div className="sm:max-w-[450px] w-full px-2">
      {postsdata.map((post: {
        content: ReactNode;
        tags: ReactNode;
        image: any;
        post_at: ReactNode; post_id: string; author: any; answers: string | any[]; likes: string | any[];
      }) => (
        <Card className="sm:max-w-[500px] w-full my-3 mx-auto z-10" id={"post-" + post.post_id} key={"post-" + post.post_id}>
          <CardHeader className="flex flex-row gap-3 justify-between">
            <div className="flex gap-5">
              <Avatar>
                <AvatarImage src="/profile_default.gif" alt={post.author} className="scale-75 z-0" />
                <AvatarFallback>RN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1 items-start justify-center">
                <CardTitle >{post.author.fullname}</CardTitle>
                <CardDescription>{post.author.username}</CardDescription>
              </div>

            </div>
            <div className="flex flex-row items-center">
              {/* <div>A</div> */}
              <Link className="contain-content text-white"
                href={'/posts/' + post.post_id}
              >
                <Image
                  className="rounded-full fill-slate-400 "
                  src="/menuv.svg"
                  alt="menuv button"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="p-2">
            <Link className="contain-content text-white"
              href={'/posts/' + post.post_id}
            >
              <div>
                <div className="whitespace-pre-line dark:text-white text-slate-900 py-4">{post.content}</div>
              </div>
            </Link>

            <div className={post.image ? "" : "flex flex-row justify-between"}>
              <div className="text-xs text-slate-600 h-6 py-1">{post.post_at}</div>

              {post.image ? (
                <Card className="relative">
                  <Image
                    alt="Woman listing to music"
                    className="object-contain rounded-lg shadow-inner"
                    height={200}
                    src={post.image}
                  />
                  <CardFooter className="absolute bottom-2 backdrop-blur-md justify-end z-40 bg-slate-500/30 bg-opacity-20 border-white/30 border-1 overflow-hidden py-1 mx-1  rounded-xl  w-[calc(100%_-_8px)] shadow-sm">
                    <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
                      href={'/posts/' + post.post_id}
                    >
                      <Image
                        className="rounded-full fill-slate-400 bg-opacity-50"
                        src="/view-light.svg"
                        alt="view button"
                        width={25}
                        height={25}
                      />
                    </Link>
                    <StaredButton idpost={post.post_id} userA={userA} realLike={post.likes} />
                    <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
                      href={'/posts/' + post.post_id + "/answer"}
                    >
                      <Image
                        className="rounded-full fill-slate-400"
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
                    <StaredButton idpost={post.post_id} userA={userA} realLike={post.likes} />
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
        </Card>
      ))}
    </div>
  )
}


export default function CardPostMain() {

  return (
    <Suspense fallback={<SkeletonCard />}>
      <CardPost />
    </Suspense>
  )
}