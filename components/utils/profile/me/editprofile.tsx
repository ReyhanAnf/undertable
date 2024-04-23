'use client'

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { toast } from "@/components/ui/use-toast";
import { ButtonLoading } from "@/components/ui/loading-button";
import update_profile from "@/lib/UPDATE/update_profile";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { kelas, jurusan, subjurusan } from "@/lib/kelas";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";


let initialState = {
  message: '',
}

export default function EditProfile(Props: any) {
  let prevdata = Props?.profile;
  let kontak = prevdata.kontak ? `${prevdata.kontak}`.split(" ") : "";

  let rout = useRouter()

  const [state, formAction] = useFormState(update_profile, initialState);

  function send() {
    const a = setInterval(() => {
      toast({
        title: "Post",
        description: state?.message,
      })
      rout.back()
      rout.refresh()
      clearInterval(a)
    }, 1000)

    toast({
      title: "Saving...",
      description: (
        <ButtonLoading />
      )
    })
  }

  return (
    <div className="w-full bg-fixed bg-gradient-to-t from-slate-900/50 from-30% via-emerald-950 via-70% to-emerald-600 py-4">
      <Card>
        <CardHeader className="header-prof flex flex-1 gap-5 py-4 pt-10 px-3 justify-center items-center             bg-slate-500 bg-opacity-10 backdrop-blur-sm rounded-md w-full h-auto ">
          <form action={formAction}>
            <CardContent>
              <div className="grid w-full items-center gap-4">

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="bio">bio</Label>
                  <Textarea id="bio" placeholder="your thinks..." name="bio" defaultValue={prevdata.bio} />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="kontak">Username Instagram</Label>
                  <Input type="text" id="kontak" name="kontak" placeholder="@..." defaultValue={kontak[0] ? kontak[0] : ""} />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="spt">Link Spotify</Label>
                  <Input type="text" id="spt" name="spt" placeholder="@..." defaultValue={kontak[1] ? kontak[1] : ""} />
                </div>

                <Select name="jenis_kelamin" defaultValue={prevdata.jenis_kelamin ? prevdata.jenis_kelamin : ""}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      <SelectItem key="Laki-laki" value="Laki-laki">Male</SelectItem>
                      <SelectItem key="Perempuan" value="Perempuan">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="alamat">Address</Label>
                  <Textarea id="alamat" placeholder="your address..." name="alamat" defaultValue={prevdata.alamat ? prevdata.alamat : ""} />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="angkatan">Angkatan</Label>
                  <Input type="number" id="angkatan" name="angkatan" defaultValue={prevdata.angkatan ? prevdata.angkatan : 1} />
                </div>

                <Select name="kelas" defaultValue={prevdata.kelas ? prevdata.kelas : ""}>
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

                <Select name="jurusan" defaultValue={prevdata.jurusan ? prevdata.jurusan : ""}>
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

                <Select name="subjurusan" defaultValue={prevdata.subjurusan ? prevdata.subjurusan : ""}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Subclass" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Subjurusan</SelectLabel>
                      {subjurusan.map((suj) => (
                        <SelectItem key={suj.label} value={suj.value}>{suj.label}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Label htmlFor="ttl-asal">Tanggal Lahir</Label>
                <Input id="ttl-asal" type="date" name="ttl" defaultValue={prevdata.ttl ? prevdata.ttl : ""} />





              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link className={buttonVariants({ variant: "outline" })} href={'/'}>Cancel</Link>
              <Button onClick={send} >Save</Button>
            </CardFooter>
          </form>
        </CardHeader>
      </Card>
    </div>
  )
}