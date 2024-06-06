import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import refreshToken from '@/lib/POST/Auth/refresh_token';

export function getSessionData() {
  const encryptedSessionData = cookies().get('session')?.value
  const data = encryptedSessionData ? JSON.parse(JSON.stringify(jwtDecode(encryptedSessionData))) : null;
  if(encryptedSessionData){
    data["access"] = encryptedSessionData;
  }
  refreshToken();
  const raw = {
    token_type: undefined,
    exp: undefined,
    iat: undefined,
    jti: undefined,
    user_username: undefined,
    user: undefined,
    access: undefined
  }
  return data ? data : raw;
}