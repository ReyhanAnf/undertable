'use server';
import axios from "axios";
import { BASE_URL } from "../../url";
import { cookies } from "next/headers";
import { getSessionData } from "@/app/getSession";
import { handleLogout } from "@/app/actions";


export default async function upload_posts(formData: FormData) {
  const cookie = cookies();
  const sess = getSessionData();
  const user = sess["user"];
  const access = sess["access"];
  if (user) {
    formData.append('author', user)
  }

  const headers = {
    'headers': {
      'Authorization': `Bearer ${access}`,
    }
  }

  await axios.postForm(`${BASE_URL}/posts/upload/`, formData, headers)
  .then((response)=>{
    cookie.set('messageAuth','Sent!');
    // console.log("upload-post : ", response.status);
  })
  .catch((error)=>{
    cookie.set('messageAuth','Posting Gagal!');
    handleLogout()
    console.log("error ::: ", error);

  });


  
  return {
    message : cookie.get('messageAuth')?.value
  }
}
