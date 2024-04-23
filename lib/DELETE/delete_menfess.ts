'use server';
import axios from "axios";
import { BASE_URL } from "../url";
import { cookies } from "next/headers";

export default async function deleteMenfess(menfessId: string) {
  const cookie = cookies();
  const access = cookie.get("accessToken");

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
   
  
  const res = await axios.delete(`${BASE_URL}/menfess/${menfessId}/`, auth)
  .then((response)=>{
    console.log("delete-menfess", response.status);
  })
  .catch((error)=>{
    console.log("error ::: ", error);
  });

  return res;
}

export async function deleteReplyMenfess(replyId: string) {
  const cookie = cookies();
  const access = cookie.get("accessToken");

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
   
  
  const res = await axios.delete(`${BASE_URL}/menfess-reply/${replyId}/`, auth)
  .then((response)=>{
    console.log("delete-reply-menfess", response.status);
  })
  .catch((error)=>{
    console.log("error ::: ", error);
  });

  return res;
}