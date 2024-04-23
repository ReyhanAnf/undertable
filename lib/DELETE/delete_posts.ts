'use server';
import axios from "axios";
import { BASE_URL } from "../url";
import { cookies } from "next/headers";

export default async function deletePost(postId: string) {
  const cookie = cookies();
  const access = cookie.get("accessToken");

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
   
  
  const res = await axios.delete(`${BASE_URL}/posts/${postId}/`, auth)
  .then((response)=>{
    console.log("delete-post", response.status);
  })
  .catch((error)=>{
    console.log("error ::: ", error);
  });

  return res;
}


export async function deleteAnswerPost(answerId: string) {
  const cookie = cookies();
  const access = cookie.get("accessToken");

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
   
  
  const res = await axios.delete(`${BASE_URL}/answers/${answerId}/`, auth)
  .then((response)=>{
    console.log("delete-menfess", response.status);
  })
  .catch((error)=>{
    console.log("error ::: ", error);
  });

  return res;
}
export async function deleteReplyAnswer(replyId: string) {
  const cookie = cookies();
  const access = cookie.get("accessToken");

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
   
  
  const res = await axios.delete(`${BASE_URL}/replies/${replyId}/`, auth)
  .then((response)=>{
    console.log("delete-reply-post", response.status);
  })
  .catch((error)=>{
    console.log("error ::: ", error);
  });

  return res;
}


