import { ChangeTheme } from "./changetheme";
import SearchIcon from "../../ui/searchicon";
import { SheetMenu } from "./sheetmenu";
import Link from "next/link";


export default function MainNavbar() {
  return (
    <nav className="fixed w-full z-50 h-12 text-base bg-slate-100 dark:bg-slate-900 dark:bg-opacity-10 bg-opacity-10 backdrop-blur-md border-b-[1px] border-slate-100 dark:border-slate-900 flex flex-row flex-nowrap justify-between items-center px-2 py-3">
      <nav className="flex flex-row items-center justify-start w-1/2">
        <Link className="w-2/5 mr-5" href={'/'}>UnderTable</Link>
        <div className="flex flex-row gap-2 text-sm font-thin dark:text-slate-300 text-slate-700">
        </div>
      </nav>
      <nav className="flex flex-row justify-end gap-2 w-1/2 text-sm items-center">
        <div className="flex flex-row gap-2 ">

          <Link href={'/search'} >
            <SearchIcon />
          </Link>
          <ChangeTheme />
          <div>
          </div>
        </div>
        <SheetMenu />
      </nav>
    </nav>
  )
}