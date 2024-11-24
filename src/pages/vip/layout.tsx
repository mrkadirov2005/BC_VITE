import React from 'react'
import StoreProvider from '../storeProvider';
import VIP_menu_component from "./components/VIP_menu_component"
import { useParams } from 'next/navigation';
export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
  return (
    <StoreProvider >
        <div  className='flex w-screen h-screen'>
        <VIP_menu_component></VIP_menu_component>
    <div className='w-full'>{children}</div>
    </div>
    </StoreProvider>
  )
}
