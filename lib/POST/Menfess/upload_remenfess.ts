'use server';

import axios from "axios";

import { BASE_URL } from "../../url";
import { cookies } from "next/headers";

export default async function upload_answers(formData: any) {
  const cookie = cookies();
  const user = cookie.get("userToken")?.value;
  const access = cookie.get("accessToken");
  const req = {
    'menfess': formData[1],
    'content': formData[0].content,
    'user': user
  };

  const headers = {
    'headers': {
      'Authorization': 'Bearer ' + access?.value,
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
