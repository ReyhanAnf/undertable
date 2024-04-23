"use server"

import { cookies } from "next/headers";


export default async function get_cookie(name: string){
  const cookie = cookies();

  return cookie.get(name);
}