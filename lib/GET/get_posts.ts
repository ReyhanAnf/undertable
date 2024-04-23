import { BASE_URL } from "../url";


export default async function get_posts () {
  const res = await fetch(`${BASE_URL}/posts/?ordering=-content&ordering=-post_at`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    cache: 'no-store'
  })
  const posts = await res.json()
  return posts;
}

export async function get_myposts (author : any) {
  const res = await fetch(`${BASE_URL}/posts/?author=${author}`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    cache: 'no-store'
  })
  const postsone = await res.json()

  return postsone;
}

export async function get_onepost (postid: string) {
  const res = await fetch(`${BASE_URL}/posts/${postid}`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    cache: 'no-store'
  })
  const postsone = await res.json()
  return postsone;
}

