import { headers } from "next/headers";
import { BASE_URL } from "../url";


export default async function get_answerpost (postId: string) {
  const res = await fetch(`${BASE_URL}/answers/?post=${postId}`, {
    headers: headers(),
  })
  const answerpost = await res.json()
  return answerpost;
}

