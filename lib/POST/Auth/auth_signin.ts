'use server';
import { BASE_URL } from "../../url";
import { jwtDecode } from 'jwt-decode';
import { cookies } from "next/headers";
import axios from "axios";



export default async function auth_signin(prevState: any, formData: FormData) {
  const cookie = cookies();
  const req = {
    'username': formData.get('username'),
    'password': formData.get('password'),
  };


  const res = await axios.post(`${BASE_URL}/token/`, req)
  .then((response)=>{
    const data = response.data;
    const datatoken = JSON.parse(JSON.stringify(jwtDecode(data.access)));

    cookie.set('accessToken', data.access);
    cookie.set('refreshToken', data.refresh);
    cookie.set('userToken', datatoken.user);
    cookie.set('expiredToken', datatoken.exp);
    cookie.set('startToken', datatoken.iat);
    cookie.set('statusAuth', 'yes');
    cookie.set('messageAuth','Sukses Login');
    
  })
  .catch((error)=>{
    cookie.delete('accessToken');
    cookie.delete('refreshToken');
    cookie.delete('userToken');
    cookie.delete('expiredToken');
    cookie.delete('startToken');
    cookie.set('statusAuth', "no");
    cookie.set('messageAuth','Username atau Kata sandi salah');
  });
  

 



  return {
    message : cookie.get('messageAuth')?.value,
  }
}


export async function authenticate(username: any, password: any) {
  const req = {
    'username': username,
    'password': password,
  };


  const res = await axios.post(`${BASE_URL}/token/`, req)
  .then((response)=>{
    const data = response.data;
    const datatoken = JSON.parse(JSON.stringify(jwtDecode(data.access)));

    return {"token": data, "data" : datatoken}
    
  })
  .catch((error)=>{
    return error
  });
  

 



  return res
}
