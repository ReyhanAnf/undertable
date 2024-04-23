'use server';
import axios from "axios";
import { BASE_URL } from "../../url";
import { cookies } from "next/headers";


export default async function upload_posts(formData: FormData) {
  const cookie = cookies();
  const user = cookie.get("userToken")?.value;
  const access = cookie.get("accessToken");
  if (user) {
    formData.append('author', user)
  }

  const headers = {
    'headers': {
      'Authorization': `Bearer ${access?.value}`,
    }
  }

  await axios.postForm(`${BASE_URL}/posts/upload/`, formData, headers)
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
