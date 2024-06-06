'use server';
import axios from "axios";
import { BASE_URL } from "../../url";
import { getSessionData } from "@/app/getSession";

export default async function upload_answers(formData: any) {
  const sess = getSessionData();
  const user = sess["user"];
  const access = sess["access"];
  const req = {
    'post': formData[1],
    'content': formData[0].content,
    'user': user
  };
  const headers = {
    'headers': {
      'Authorization': 'Bearer ' + access,
    }
  }

  console.log(req);
  
  const res = await axios.post(`${BASE_URL}/answers/`, req, headers)
  .then((response)=>{
    // cookie.set('uploadStatus', response.status.toString());
    return response
  })
  .catch((error)=>{
    return error
  });
  

  return {
    message : ""
  }
}
