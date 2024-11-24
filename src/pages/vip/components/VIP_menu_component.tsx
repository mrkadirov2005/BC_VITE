"use client"
import {  Button } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

// Delete the cookie
Cookies.remove('super_admin_token');

export default function VIP_menu_component() {
  const router=useRouter()
  const handleLogOut=()=>{
      Cookies.remove("super_admin_token")
      router.push("/verify_super_admin")
      window.location.reload()
  
  }
  return (
    <section className='menu w-1/5  flex h-screen  top-6  left-0 flex-col items-center bg-blue-600 text-white border-r border-gray-300'>
    {/* Profile Section */}
    <div className='w-full flex flex-col items-center py-6'>
      <div className='w-12 h-12 rounded-full bg-gray-800 mb-4'></div>
      <h1 className='uppercase text-lg font-semibold'>{}</h1>
    </div>
    <Button variant='contained' color='secondary' className='p-2' onClick={()=>handleLogOut()}>log out</Button>
    {/* Button Group */}
    
      
      <Link href={"/vip"} className='btn-primary w-32 mb-3 py-2 rounded-lg text-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800'>
        Home
      </Link>
      
      <Link href={"/vip/teachers"} className='btn-primary w-32 mb-3 py-2 rounded-lg text-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800'>
        Teachers
      </Link>
      <Link href={"/vip/groups"} className='btn-primary w-32 mb-3 py-2 rounded-lg text-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800'>
        Groups
      </Link>
      <Link href={"/vip/students"} className='btn-primary w-32 mb-3 py-2 rounded-lg text-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800'>
        Students
      </Link>
      <Link href={"/vip/reports"} className='btn-primary w-32 mb-3 py-2 rounded-lg text-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800'>
        Requests
      </Link>
      <Link href={"/vip/requests"} className='btn-primary w-32 mb-3 py-2 rounded-lg text-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800'>
        Reports
      </Link>
    
  </section>
  );
}
