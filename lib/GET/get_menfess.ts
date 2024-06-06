
import { BASE_URL } from "../url";


export default async function get_menfess () {
  const res = await fetch(`${BASE_URL}/menfess/?ordering=-content&ordering=-post_at`, {
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts;
}

export async function get_mymenfess (username : any) {
  const res = await fetch(`${BASE_URL}/menfess/?receiver=${username}`, {
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts;
}

export async function get_onemenfess (id: string) {
  const res = await fetch(`${BASE_URL}/menfess/${id}/`, {
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts;
}

export async function get_replymenfess (menfessId: string) {
  const res = await fetch(`${BASE_URL}/menfess-reply/?menfess=${menfessId}`, {
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts;
}