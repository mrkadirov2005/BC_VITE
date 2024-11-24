"use client"
import React  from 'react'
import SuperAdminMenu from './Super_admin_Menu_component';
import { useParams } from 'next/navigation';

export default function SuperADminDashboard({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const params=useParams()

    console.log("window location",params)
  return (
    <main className='w-full h-fit bg-green-800 flex'>
  <SuperAdminMenu   />
    <div className='w-full'>{children}</div>
    </main>
  )
}
