'use server';
import axios from "axios";
import { BASE_URL } from "../url";
import { getSessionData } from "@/app/getSession";

export default async function deletePost(postId: string) {
  const sess = getSessionData();
  const access = sess["access"];

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access ,
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
  const sess = getSessionData();
  const access = sess["access"];

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access ,
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
  const sess = getSessionData();
  const access = sess["access"];

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access ,
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


