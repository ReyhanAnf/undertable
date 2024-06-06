'use server'

import { cookies } from "next/headers";
import { BASE_URL } from "../../url";
import axios from "axios";
import {  handleLogin, handleLogout } from "@/app/actions";
import { jwtDecode } from "jwt-decode";


export default async function refreshToken() {
  const encryptRefreshToken = cookies().get('re-session')?.value
  const data = encryptRefreshToken ? JSON.parse(JSON.stringify(jwtDecode(encryptRefreshToken))) : null;
  

  // Jika ada histori user maka cek apakah akses token user tersebut valid
  // jika valid maka jalankan fungsi refresh token dan sajikan lagi data nya
  // Jika tidak valid maka cek apakah refresh token juga masih valid
  //Jika Valid maka jalankan refresh token supaya bisa dapatkan akses token lagi
  //Jika tidak maka kembalika ke halaman login
  // Jika tidak ada maka login
    if (data) {
      const exp = Number(data['exp']);
      let now = new Date().getTime() / 1000;
      if (now >= exp) {
        //jika expired
        // refresh token
        const req = {
          'refresh': encryptRefreshToken,
        };
        
        await axios.post(`${BASE_URL}/token/refresh/`, req)
        .then((response)=>{
          const data = response.data;
      
          handleLogin(data.access, data.refresh)
          console.log('token di refresh');
  
          return true
  
        }).catch((err)=>{
          handleLogout()
          console.log('token tidak valid! silahkan login', err, Date.now());
          return false
        })
  
  
      } else {
        // jika tidak expired / valid
        // sajikan data
        console.log('token akses masih aman sampai', exp)
        return true
      }
      
    } else {
      // login
      
      console.log('kamu pengguna anonim')
      return false
    }

}
