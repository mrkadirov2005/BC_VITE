// src/app/register/layout.tsx


import Link from 'next/link';
import React  from 'react';
import { Metadata } from 'next';
export const metadata:Metadata={
title:"sign up",
description:"sign up page"
}


export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col">
        <Link href={"/register"}>register</Link>
        <Link href={"/register/sign_up"}>Sign up options</Link>
    {children}
    </div>
  );
}
