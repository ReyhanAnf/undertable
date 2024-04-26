import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { get_authprofile } from "@/lib/GET/get_users";
import { Suspense, use } from "react";
import { Bio } from "./bio";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import MyPosts from "../../posts/mypost";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertSignOut } from "../../auth/alert-signout";
import MyMenfess from "../../menfess/mymenfess";
import { get_myposts } from "@/lib/GET/get_posts";
import { get_mymenfess } from "@/lib/GET/get_menfess";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function MyProfile({ user }: any) {
  const mydata = use(get_authprofile());
  const mypost = use(get_myposts(user));
  const mymenfess = use(get_mymenfess(user));

  let kontak = mydata.kontak ? `${mydata.kontak}`.split(" ") : "";



  let lstars = 0;
  mypost.map((mp: { likes: string | any[]; }) => {
    lstars += mp.likes.length
  });
  mymenfess.map((mm: { likes: string | any[]; }) => {
    lstars += mm.likes.length
  })

  return (
    <div className="w-full bg-fixed bg-gradient-to-t from-slate-900/50 from-30% via-emerald-950 via-70% to-emerald-600 ">
      <Card className="flex gap-4 flex-col sm:flex-row p-4 py-8">
        <CardHeader className="header-prof flex flex-col gap-5 py-4 pt-10 px-3 justify-start items-center             bg-slate-500 bg-opacity-10 backdrop-blur-sm rounded-md w-full h-auto sm:w-1/4 sm:h-screen">
          <div className="flex flex-row justify-between w-full  px-1">
            <Button variant={"default"} size={"xs"} className="bg-emerald-400" >{mydata.nis.is_teacher ? (mydata.nis.username == "710092" ? "Pembuat" : "Teacher") : "Student"}</Button>
            <Button variant={"default"} size={"xs"} className="bg-emerald-400" >{mydata.angkatan}</Button>
          </div>
          <Image
            src="/profile_default.gif"
            className="w-20 h-20 rounded-md" alt={"pd"} width={10} height={10} />
          <div className="flex flex-col justify-start items-center text-center">
            <div className="font-bold">{mydata.nis.fullname}</div>
            <div className="text-xs font-thin">{mydata.nis.shortname}</div>
            <div className="text-xs font-thin"><small>{mydata.nis.username}</small></div>
          </div>
          <div className="flex flex-row justify-between w-full  px-1">
            <Button variant={"outline"} size={"xs"} className="border-emerald-400 border-opacity-50" >{mydata.jenis_kelamin}</Button>
            <Button variant={"ghost"} size={"xs"}  >{mypost.length} Posts</Button>
            <Button variant={"ghost"} size={"xs"}  >{lstars} Stars</Button>
            <Button variant={"outline"} size={"xs"} className="border-emerald-400 border-opacity-50" >{mydata.kelas} {mydata.jurusan} {mydata.subjurusan}</Button>
          </div>
          <Separator />
          <Bio text={mydata.bio} />
          <Separator />
          <div className="flex flex-row justify-evenly items-center w-full py-5">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant={"link"} >
                  <Image
                    src="/instagram.svg"
                    className="rounded-md"
                    width={32} height={32} alt={"ig"} />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="z-40">
                <Link href={'#'} >
                  @{kontak[0]}
                </Link>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant={"link"} >
                  <Image
                    src="/birth.svg"
                    className=" rounded-md"
                    width={32} height={32} alt={"hbd"} />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="z-40">
                <Link href={'#'} >
                  Lahir {mydata.ttl}
                </Link>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant={"link"} >
                  <Image
                    src="/spotify.svg"
                    className=" rounded-md"
                    width={32} height={32} alt={"spt"} />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="z-40">
                <Link href={'#'} >
                  {kontak[1]}
                </Link>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex flex-row justify-between w-full  px-1">
            <AlertSignOut />
            <Link className={buttonVariants({ variant: "default" })} href={'/profile/me/edit'}>Edit</Link>

          </div>
        </CardHeader>
        <CardContent className="main-prof bg-slate-500 bg-opacity-10 backdrop-blur-sm rounded-md w-full sm:h-screen sm:overflow-y-scroll sm:w-3/4 mt-3 p-2">
          <Tabs defaultValue="posts" className="w-full">
            <TabsList>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="menfess">Menfess</TabsTrigger>
            </TabsList>
            <TabsContent value="posts" className="w-full">
              <Suspense fallback={<Skeleton />} >
                <MyPosts user={user} mypost={mypost} />
              </Suspense>
            </TabsContent>
            <TabsContent value="menfess">
              <Suspense fallback={<Skeleton />} >
                <MyMenfess user={user} mymenfess={mymenfess} />
              </Suspense>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}