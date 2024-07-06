'use server'
 
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { redirect } from 'next/navigation';


export async function handleLogin(sessionToken: any, refreshToken : any) {
  // const encrypt = require("jwt-encode");
  // const secret = "secret";
  const encryptedSessionToken = sessionToken ;//encrypt(sessionData, secret); // Encrypt your session data
  const exp = sessionToken ? JSON.parse(JSON.stringify(jwtDecode(sessionToken))).exp / 1000 : 0;
  const refreshexp = refreshToken ? JSON.parse(JSON.stringify(jwtDecode(refreshToken))).exp / 1000 : 0;
  cookies().set('session', encryptedSessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: exp ,//30 * 1 * 1 * 1, // One week
    path: '/',
  })
  cookies().set('re-session', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: refreshexp , //30 * 1 * 1 * 1, // One week
    path: '/',
  })
  // Redirect or handle the response after setting the cookie
  redirect("/")
}

export async function handleLogout() {
  cookies().delete("session")
  // Redirect or handle the response after setting the cookie
  redirect("/")
}
