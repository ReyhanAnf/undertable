'use server';
import { BASE_URL } from "../../url";
import { cookies } from "next/headers";
import axios from "axios";
import { handleLogin, handleLogout } from "@/app/actions";



export default async function auth_signin(prevState: any, formData: FormData) {
  const cookie = cookies();
  const req = {
    'username': formData.get('username'),
    'password': formData.get('password'),
  };


  const res = await axios.post(`${BASE_URL}/token/`, req)
  .then((response)=>{
    const data = response.data;
    // const datatoken = JSON.parse(JSON.stringify(jwtDecode(data.access)));
    handleLogin(data.access, data.refresh)
  })
  .catch((error)=>{
    handleLogout()
    cookie.set('statusAuth', "no");
    cookie.set('messageAuth','Username atau Kata sandi salah');
  });
  

 



  return {
    message : cookie.get('messageAuth')?.value,
  }
}


// export async function authenticate(username: any, password: any) {
//   const req = {
//     'username': username,
//     'password': password,
//   };


//   const res = await axios.post(`${BASE_URL}/token/`, req)
//   .then((response)=>{
//     const data = response.data;
//     const datatoken = JSON.parse(JSON.stringify(jwtDecode(data.access)));

//     return {"token": data, "data" : datatoken}
    
//   })
//   .catch((error)=>{
//     return error
//   });
  

 



//   return res
// }
