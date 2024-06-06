'use server';

import axios from "axios";

import { BASE_URL } from "../../url";
import { cookies } from "next/headers";
import { getSessionData } from "@/app/getSession";

export default async function upload_answers(formData: any) {
  const cookie = cookies();
  const sess = getSessionData();
  const user = sess["user"];
  const access = sess["access"];
  const req = {
    'menfess': formData[1],
    'content': formData[0].content,
    'user': user
  };

  const headers = {
    'headers': {
      'Authorization': 'Bearer ' + access,
    }
  }

  console.log(req);
  
  const res = await axios.post(`${BASE_URL}/menfess-reply/upload/`, req, headers)
  .then((response)=>{
    cookie.set('uploadStatus', response.status.toString());
    cookie.set('messageAuth', response.data.toString());
  })
  .catch((error)=>{
    cookie.set('uploadStatus',`4xx gagal`);
  });
  

  return {
    message : cookie.get('messageAuth')?.value
  }
}
