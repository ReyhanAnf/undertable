import { BASE_URL } from "../url";
import { unstable_noStore as noStore } from 'next/cache';


export default async function get_posts () {
  const res = await fetch(`${BASE_URL}/posts/?ordering=-content&ordering=-post_at`, { cache: 'no-store' });
  const posts = await res.json()
  return posts;
}

export async function get_myposts (author : any) {
  const res = await fetch(`${BASE_URL}/posts/?author=${author}`, { cache: 'no-store' });
  const postsone = await res.json()

  return postsone;
}

export async function get_onepost (postid: string) {
  const res = await fetch(`${BASE_URL}/posts/${postid}`, { cache: 'no-store' });
  const postsone = await res.json()
  return postsone;
}

