'use server';

import { cookies } from "next/headers";



export default async function signout_user() {
  const cookie =cookies();
  // Jika ada histori user maka cek apakah akses token user tersebut valid
  // jika valid maka jalankan fungsi refresh token dan sajikan lagi data nya
  // Jika tidak valid maka cek apakah refresh token juga masih valid
  //Jika Valid maka jalankan refresh token supaya bisa dapatkan akses token lagi
  //Jika tidak maka kembalika ke halaman login
  // Jika tidak ada maka login
  if (cookie.has('session')) {
    
    cookie.delete('session');
    cookie.delete('re-session');
    cookie.set('messageAuth','signout user');
    cookie.set('statusAuth','no');

  } else {
    // login
    cookie.set('messageAuth','nothing user')
  }

  return "success logout";
}
