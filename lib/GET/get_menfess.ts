import { BASE_URL } from "../url";


export default async function get_menfess () {
  const res = await fetch(`${BASE_URL}/menfess/?ordering=-content&ordering=-post_at`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts;
}

export async function get_mymenfess (username : any) {
  const res = await fetch(`${BASE_URL}/menfess/?receiver=${username}`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts;
}

export async function get_onemenfess (id: string) {
  const res = await fetch(`${BASE_URL}/menfess/${id}/`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts;
}

export async function get_replymenfess (menfessId: string) {
  const res = await fetch(`${BASE_URL}/menfess-reply/?menfess=${menfessId}`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts;
}