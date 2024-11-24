"use client"
import useOnlineStatus from '../../../utilities/isOnline';
import { parseCookies } from 'nookies';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
export default function AdminDashboard() {
  const router=useRouter();


  const isOnline=useOnlineStatus()
  const cookies=parseCookies();

const token=cookies.super_admin_token
console.log("token is",token)




  return   isOnline || typeof token=="undefined"
  ?router.push("/verify_super_admin"):<Button onClick={()=>router.push("/super_admin/centers")}>Continue Browsing</Button>;
}