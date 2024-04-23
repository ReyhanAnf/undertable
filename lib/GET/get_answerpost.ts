import { BASE_URL } from "../url";


export default async function get_answerpost (postId: string) {
  const res = await fetch(`${BASE_URL}/answers/?post=${postId}`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    }
  })
  const answerpost = await res.json()
  return answerpost;
}

