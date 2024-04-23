import Link from "next/link";
import { buttonVariants } from "./button";
import Image from "next/image";



export default function UploadButton({ href, size }: any) {

  return (
    <Link className={`${buttonVariants({ variant: "outline", size: size })} p-4 border-slate-600 dark:border-slate-500 shadow-sm backdrop-blur-sm`} href={href}>
      <Image
        src={"/up-dark.svg"}
        alt="Upload"
        width={25}
        height={25}
      />
    </Link>
  )
}