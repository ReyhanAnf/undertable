'use server';
import axios from "axios";
import { BASE_URL } from "@/lib/url";
import { getSessionData } from "@/app/getSession";

export default async function like_post(idpost: any, liked: any) {
  const sess = getSessionData();
  const access = sess["access"];
  const req = {
    'post_id': idpost,
    'likes': liked
  };

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access ,
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
