'use server'
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { BASE_URL } from "../../url";
import axios from "axios";


export default async function checkAuth() {
  const cookie = cookies();
  const user = cookie.get("userToken")?.value;
  const exp = Number(cookie.get("expiredToken")?.value);

  // Jika ada histori user maka cek apakah akses token user tersebut valid
  // jika valid maka jalankan fungsi refresh token dan sajikan lagi data nya
  // Jika tidak valid maka cek apakah refresh token juga masih valid
  //Jika Valid maka jalankan refresh token supaya bisa dapatkan akses token lagi
  //Jika tidak maka kembalika ke halaman login
  // Jika tidak ada maka login
  if (user) {
    const refreshToken = cookie.get('refreshToken')?.value;
    let now = new Date().getTime() / 1000;
    if (now >= exp) {
      //jika expired
      // refresh token
      const req = {
        'refresh': refreshToken,
      };
      
      await axios.post(`${BASE_URL}/token/refresh/`, req)
      .then((response)=>{
        const data = response.data;
        const datatoken = JSON.parse(JSON.stringify(jwtDecode(data.access)));
    
        cookie.set('accessToken', data.access);
        cookie.set('refreshToken', data.refresh);
        cookie.set('userToken', datatoken.user);
        cookie.set('expiredToken', datatoken.exp);
        cookie.set('startToken', datatoken.iat);
        // console.log('token di refresh');

        return true

      }).catch((err)=>{
        cookie.delete('accessToken');
        cookie.delete('refreshToken');
        cookie.delete('userToken');
        cookie.delete('expiredToken');
        cookie.delete('startToken');
        // console.log('token tidak valid! silahkan login', err, Date.now());
        return false
      })


    } else {
      // jika tidak expired / valid
      // sajikan data
      // console.log('token akses masih aman sampai', exp)
      return true
    }
    
  } else {
    // login
    // console.log('kamu pengguna anonim')
    return false
  }

}
