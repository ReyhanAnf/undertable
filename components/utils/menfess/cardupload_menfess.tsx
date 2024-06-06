'use client'
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useFormState } from 'react-dom';
import { toast } from "@/components/ui/use-toast"
import { ButtonLoading } from "@/components/ui/loading-button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"


import { kelas, jurusan, subjurusan } from "@/lib/kelas"
import upload_menfess from "@/lib/POST/Menfess/upload_menfess"
import ShouldSign from "../shouldsign"

let initialState = {
  message: '',
}




export default function CardUploadMenfess(Props: any) {
  const [anon, setAnon] = useState(false);
  const [kls, setKls] = useState("-");
  const [jr, setJr] = useState("");
  const [sj, setSj] = useState("");

  const action = (prevState: any, formData: FormData) => {
    formData.append("receiver_class", `${kls} ${jr} ${sj}`)
    upload_menfess(formData);
    return {
      message: Props.message
    }
  }

  const [state, formAction] = useFormState(action, initialState);

  let rout = useRouter();

  function send() {
    const a = setInterval(() => {
      toast({
        title: "Sent!",
        description: state?.message,
      })
      rout.replace('/menfess')
      rout.refresh()
      clearInterval(a)
    }, 1000)

    toast({
      title: "Sending...",
      description: (
        <ButtonLoading />
      )
    })
  }

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Menfess</CardTitle>
          <CardDescription>Send to your crush.</CardDescription>
          <CardDescription className="text-xs text-orange-300">{state?.message}</CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <Select name="receiver">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a receipent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Kelas</SelectLabel>
                    {Props.users.map((c: { username: any; fullname: any }) => (
                      <SelectItem key={c.username} value={c.username}>{c.fullname}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="flex items-center space-x-2">
                <Checkbox id="anony" name="anony" checked={anon} onCheckedChange={() => setAnon(!anon)} />
                <label
                  htmlFor="anony"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Anony
                </label>
              </div>
              {anon ? (
                <div className="flex flex-col space-y-1.5 text-red-400 cursor-not-allowed">
                  <Label htmlFor="sender">Sender</Label>
                  <Input
                    id="sender"
                    key='sender'
                    type="text"
                    name="sender"
                    placeholder="anony!"
                    className="text-gray-500 cursor-not-allowed"
                    disabled
                  />
                </div>
              ) : (
                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="sender" >Sender</Label>
                  <Input
                    id="sender"
                    key='sender'
                    type="text"
                    name="sender"
                    placeholder="your name, username, class study, clue or anony!"
                    className="text-gray-500"
                  />
                </div>
              )}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="content">content</Label>
                <Textarea id="content" placeholder="your thinks..." name="content" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="emote">emote</Label>
                <Input
                  key='emote'
                  type="text"
                  name="emote"
                  placeholder="1 emote.."
                  className="text-gray-500"
                  maxLength={2}
                  defaultValue="✌️"
                />
              </div>
              <Label htmlFor="kelas">Receiver</Label>
              <div className="text-xs text-orange-400 font-medium">
                Pilih minimal tingkatan kelas penerima
              </div>
              <Select onValueChange={(e) => { setKls(e) }}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Kelas</SelectLabel>
                    {kelas.map((kls) => (
                      <SelectItem key={kls.description} value={kls.value}>{kls.label}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e) => { setJr(e) }}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Jurusan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Jurusan</SelectLabel>
                    {jurusan.map((jur) => (
                      <SelectItem key={jur.description} value={jur.value}>{jur.label}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e) => { setSj(e) }}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Subclass" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>subjurusan</SelectLabel>
                    {subjurusan.map((sj) => (
                      <SelectItem key={sj.label} value={sj.value}>{sj.label}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="song">song</Label>
                <Input
                  key='song'
                  type="text"
                  name="song"
                  placeholder="song.."
                  className="text-gray-500"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link className={buttonVariants({ variant: "outline" })} href={'/'}>Cancel</Link>
            <Button onClick={send} >Posting</Button>
          </CardFooter>
        </form>
      </Card>

    </>
  )
}
