'use server';
import axios from "axios";
import { BASE_URL } from "../../url";
import { cookies } from "next/headers";


export default async function upload_menfess(formData: FormData) {
  const cookie = cookies();
  const user = cookie.get("userToken")?.value;
  const access = cookie.get("accessToken");
  
  let anon = formData.get("anony") == "on" ? true : false;
  let sender = anon ? "anony" : formData.get("sender");
  const req = {
    "sender": sender,
    "receiver_class": formData.get("receiver_class"),
    "content": formData.get("content"),
    "emote": formData.get("emote"),
    "song": formData.get("song"),
    "anony": anon ? "yes" : "no" ,
    "receiver": formData.get("receiver"),
    "likes": []
}


  const headers = {
    'headers': {
      'Authorization': `Bearer ${access?.value}`,
    }
  }

  await axios.postForm(`${BASE_URL}/menfess/upload/`, req, headers)
  .then((response)=>{
    cookie.set('messageAuth','Sent!');
    // console.log("upload-post : ", response.status);
  })
  .catch((error)=>{
    cookie.set('messageAuth','Posting Gagal!');

    console.log("error ::: ", error);

  });


  
  return {
    message : cookie.get('messageAuth')?.value
  }
}
