'use server';
import axios from "axios";
import { BASE_URL } from "@/lib/url";
import { cookies } from "next/headers";

export default async function like_post(idpost: any, liked: any) {
  const cookie = cookies();
  const access = cookie.get("accessToken");
  const req = {
    'post_id': idpost,
    'likes': liked
  };

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
   
  
  const res = await axios.patch(`${BASE_URL}/posts-likes/${idpost}/`, req, auth)
  .then((response)=>{
    console.log("like-post", response.status);
  })
  .catch((error)=>{
    console.log("error ::: ", error);
  });

  // const resu = await axios.patch(`${BASE_URL}/users/${user?.value}/`, requ, auth)
  // .then((response)=>{
  //   const data = response.data;
    
  //   console.log(data);
  // })
  // .catch((error)=>{
  //   console.log("erorrrrrrr", error);
  // });
  return res;
}
