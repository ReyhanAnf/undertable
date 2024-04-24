import { cookies } from "next/headers";

export default async function get_cookie(name: string){
  return {
    data : cookies().get(name)
  }
}