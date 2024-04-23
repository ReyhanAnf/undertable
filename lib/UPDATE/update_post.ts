'use server';
import axios from "axios";
import { BASE_URL } from "../url";
import { cookies } from "next/headers";

export default async function update_post(prevState: any, formData: FormData) {
  const cookie = cookies();
  const user = cookie.get('userToken');
  const access = cookie.get("accessToken");
  const req = {
    'content': formData.get('content'),
    'tag': formData.get('tag'),
    'author': user?.value,
  };

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
   
  
  const res = await axios.patch(`${BASE_URL}/posts/${formData.get('postid')}/update/`, req, auth)
  .then((response)=>{
    return {
      message : 'Saved!'
    }
  })
  .catch((error)=>{
    return {
      message : 'Update Fail!'
    }
  });

  // const resu = await axios.patch(`${BASE_URL}/users/${user?.value}/`, requ, auth)
  // .then((response)=>{
  //   const data = response.data;
    
  //   console.log(data);
  // })
  // .catch((error)=>{
  //   console.log("erorrrrrrr", error);
  // });
  return {
    message : cookie.get('messageAuth')?.value
  }
}
