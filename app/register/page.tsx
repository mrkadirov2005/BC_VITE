// src/app/register/page.tsx
"use client"
import Link from 'next/link';
import React from 'react';


export default function RegisterPage() {
  
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4'>
      <div className='bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full'>
        <h1 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center'>
          Welcome! Please Choose an Option
        </h1>
        <div className="flex flex-col space-y-4">
          <Link href="/register/sign_up">
              {/* Optional: Add an icon */}
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" 
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" 
                      strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Sign Up
          </Link>
          <Link href="/register/sign_in">
              {/* Optional: Add an icon */}
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" 
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" 
                      strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
              </svg>
              Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}
