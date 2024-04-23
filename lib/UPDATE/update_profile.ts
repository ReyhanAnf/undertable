'use server';
import axios from "axios";
import { BASE_URL } from "../url";
import { cookies } from "next/headers";

export default async function update_profile(prevState: any, formData: FormData) {
  const cookie = cookies();
  const user = cookie.get('userToken')?.value;
  const access = cookie.get("accessToken");
  const ttl = JSON.stringify(formData.get("ttl"));
  const date = new Date(ttl);
  const req = {
    "bio": formData.get("bio"),
    "kelas": formData.get("kelas"),
    "jurusan": formData.get("jurusan"),
    "subjurusan": formData.get("subjurusan"),
    "jenis_kelamin": formData.get("jenis_kelamin"),
    "alamat": formData.get("alamat"),
    "angkatan": formData.get("angkatan"),
    "kontak": `${formData.get("kontak")}` + " " +`${formData.get("spt")}`,
    "ttl": formData.get("ttl")
};

console.log(req)

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
   
  
  const res = await axios.patch(`${BASE_URL}/profiles/${user}/`, req, auth)
  .then((response)=>{
    return {
      message : 'Saved!'
    }
  })
  .catch((error)=>{
    console.log(error)
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
