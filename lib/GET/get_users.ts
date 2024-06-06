import { BASE_URL } from "../url";
import { unstable_noStore as noStore } from 'next/cache';
import { getSessionData } from "@/app/getSession";

export default async function get_users () {
  const res = await fetch(`${BASE_URL}/users/`, { cache: 'no-store' })
  const posts = await res.json()
  return posts;
}


export async function get_profiles() {
  const res = await fetch(`${BASE_URL}/profiles/`, { cache: 'no-store' })
  const profiles = await res.json()
  return profiles;
}

export async function get_authprofile() {
  const user = getSessionData()["user"];
  const res = await fetch(`${BASE_URL}/profiles/${user}/`, { cache: 'no-store' })
  const profiles = await res.json()
  return profiles;
}

export async function get_profile(username: any) {
  const res = await fetch(`${BASE_URL}/profiles/${username}/`, { cache: 'no-store' })
  const profile = await res.json()
  return profile;
}


