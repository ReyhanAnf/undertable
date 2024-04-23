'use server';
import axios from "axios";
import { REG_URL } from "../../url";
import { cookies } from "next/headers";

export default async function registerUser(prevState: any, formData: FormData) {
  const cookie = cookies();
  const req = {
    'username': formData.get('username'),
    'fullname': formData.get('fullname'),
    'shortname': formData.get('shortname'),
    'password': formData.get('password'),
    're_password': formData.get('re_password'),
  };
  
  const res = await axios.post(`${REG_URL}`, req)
  .then((response)=>{
    cookie.set('registerStatus', `yes`);
    cookie.set('messageAuth', "sukses");
  })
  .catch((error)=>{
    cookie.set('registerStatus',`no`);
  });
  

  return {
    message : cookie.get('messageAuth')?.value
  }
}
