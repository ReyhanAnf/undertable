import { Button } from "./button";
import Image from "next/image";

export default function SearchIcon() {

  return (
    <Button variant="ghost" size="icon">
      <Image src="/search.svg" alt="Search" width={15} height={15} className="h-[0.9rem] w-[0.9rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Image src="/darksearch.svg" alt="Search" width={15} height={15} className="absolute h-[0.9rem] w-[0.9rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}