import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
export const metadata:Metadata={
    "title":"Register page",
    "description":"Please register"
}

export default function Register_page() {
  // we have to create reg_page for :
  // vip
  // admin

  return (
    <section className=" flex items-center justify-center flex-col h-screen w-full   ">
       {/* bg-gradient-to-r from-green-400 to-blue-500 */}
      {/* Heading */}
      <h1 className="font-bold text-3xl text-white p-4 mb-8 drop-shadow-lg">
        Choose Your controlled Sing_in Option:
      </h1>
      
      {/* Buttons Container */}
      <div className="w-4/5 max-w-md flex items-center justify-between">
        <Link
          href="/register/sign_in/vip"
          className="btn w-auto px-8 py-3 text-lg text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-md hover:shadow-lg hover:bg-orange-600 transition-all duration-300"
        >
          VIP
        </Link>
        
        <Link
          href="/register/sign_in/admin"
          className="btn w-auto px-8 py-3 text-lg text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-md hover:shadow-lg hover:bg-pink-600 transition-all duration-300"
        >
          Admin
        </Link>
        <Link
          href="/register/sign_in/teacher"
          className="btn w-auto px-8 py-3 text-lg text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-md hover:shadow-lg hover:bg-pink-600 transition-all duration-300"
        >
          Teacher
        </Link>
        <Link
          href="/register/sign_in/student"
          className="btn w-auto px-8 py-3 text-lg text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-md hover:shadow-lg hover:bg-pink-600 transition-all duration-300"
        >
          Student
        </Link>

      </div>
    </section>
  )
}
