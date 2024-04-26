import { BASE_URL } from "../url";
import { cookies } from "next/headers";

export default async function get_users () {
  const res = await fetch(`${BASE_URL}/users/`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    cache: 'no-cache'
  })
  const posts = await res.json()
  return posts;
}


export async function get_profiles() {
  const res = await fetch(`${BASE_URL}/profiles/`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    cache: 'no-cache'
  })
  const profiles = await res.json()
  return profiles;
}

export async function get_authprofile() {
  const user = cookies().get("userToken")?.value;
  const res = await fetch(`${BASE_URL}/profiles/${user}/`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    cache: 'no-cache'
  })
  const profiles = await res.json()
  return profiles;
}

export async function get_profile(username: any) {
  const res = await fetch(`${BASE_URL}/profiles/${username}/`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    cache: 'no-cache'
  })
  const profile = await res.json()
  return profile;
}


