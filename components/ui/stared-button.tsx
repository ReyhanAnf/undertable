'use client'
import like_post from "@/lib/POST/Posts/upload_like";
import { useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function StaredButton({ idpost, userA, realLike }: any) {
  const [isStared, setIsStared] = useState(realLike.includes(userA));
  const likedpost = [userA];
  const rout = useRouter();


  const handleLike = () => {
    if (!userA) {
      alert("Please Login!")
    } else {
      if (realLike.includes(userA) && isStared == true) {
        let index = realLike.indexOf(userA);
        realLike.splice(index, 1);
        like_post(idpost, realLike)
        setIsStared(false);
        rout.refresh()
        rout.refresh()
      } else {
        like_post(idpost, realLike.concat(likedpost));
        setIsStared(true);
        rout.refresh()
        rout.refresh()
      }
    }
  }

  return (
    <Button className="answer-view px-1 mx-1 flex items-center bg-transparent rounded-full"
      onClick={() => handleLike()}
      variant="ghost"
    >
      {isStared ? (
        <Image
          className="rounded-full fill-slate-400 ring-1"
          src="/starf.svg"
          alt="liked button"
          width={21}
          height={21}
        />
      ) : (
        <Image
          className="rounded-full fill-slate-400"
          src="/star-dark.svg"
          alt="like button"
          width={21}
          height={21}
        />
      )}
    </Button>
  )
}