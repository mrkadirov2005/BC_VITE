// src/app/register/layout.tsx


import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
export const metadata:Metadata={
title:"Registration form",
description:"Only for VIP and Admin"
}

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-white bg-opacity-80 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-semibold text-green-700 hover:text-green-800 transition-colors duration-300"
          >
            Home
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className=" bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8 w-screen">
          {children}
        </div>
      </main>

      {/* Optional Footer */}
      <footer className="bg-white bg-opacity-80 shadow-inner">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
