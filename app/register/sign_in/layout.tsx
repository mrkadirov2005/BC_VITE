// src/app/register/layout.tsx


import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata:Metadata={
title:"sign in",
description:"sign in page"
}


export default function SignInlayOut({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col">
        <Link href={"/register"}>register</Link>
        <Link href={"/register/sign_in"}>sign in options</Link>

    {children}
    </div>
  );
}
