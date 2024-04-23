import { use } from "react";
import get_users from "./GET/get_users";


export async function datachoices(){
  let getingData = await get_users();
  
  let changedata: { label: any; value: any; }[] = [];
  getingData.map((data: { fullname: any; username: any; }) => {
    let obj = {
      label: data.fullname,
      value: data.username
    }

    changedata.push(obj);
  })
  
  return changedata;
}

export let datachoice = datachoices();



export const data_class = {
  'X 1': 'X 1',
  'X 2': 'X 2',
  'X 3': 'X 3',
  'X 4': 'X 4',
  'X 5': 'X 5',
  'X 6': 'X 6',
  'X 7': 'X 7',
  'X 8': 'X 8',
  'X 9': 'X 9',
  'X 10': 'X 10',
  'X 11': 'X 11',
  'X 12': 'X 12',
  'XI IPA 1': 'XI IPA 1',
  'XI IPA 2': 'XI IPA 2',
  'XI IPA 3': 'XI IPA 3',
  'XI IPA 4': 'XI IPA 4',
  'XI IPA 5': 'XI IPA 5',
  'XI IPA 6': 'XI IPA 6',
  'XI IPA 7': 'XI IPA 7',
  'XII IPA 1': 'XII IPA 1',
  'XII IPA 2': 'XII IPA 2',
  'XII IPA 3': 'XII IPA 3',
  'XII IPA 4': 'XII IPA 4',
  'XII IPA 5': 'XII IPA 5',
  'XII IPA 6': 'XII IPA 6',
  'XII IPA 7': 'XII IPA 7',
  'XI IPS 1': 'XI IPS 1',
  'XI IPS 2': 'XI IPS 2',
  'XI IPS 3': 'XI IPS 3',
  'XI IPS 4': 'XI IPS 4',
  'XI IPS 5': 'XI IPS 5',
  'XI IPS 6': 'XI IPS 6',
  'XI IPS 7': 'XI IPS 7',
  'XII IPS 1': 'XII IPS 1',
  'XII IPS 2': 'XII IPS 2',
  'XII IPS 3': 'XII IPS 3',
  'XII IPS 4': 'XII IPS 4',
  'XII IPS 5': 'XII IPS 5',
  'XII IPS 6': 'XII IPS 6',
  'XII IPS 7': 'XII IPS 7',
}