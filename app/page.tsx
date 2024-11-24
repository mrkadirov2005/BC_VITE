"use client"
import Link from "next/link";
import useOnlineStatus from "../../utilities/isOnline";


export default function Home() {
const isOnline=useOnlineStatus()
  return isOnline? (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-green-700 px-4">
      <div className="max-w-4xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
      
        <div className="md:w-1/2 w-full md:pl-8 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Platform</h1>
          <p className="text-lg text-gray-200 mb-6">
            Join us today and be part of an amazing community. Register now to get started and expore more with us!
          </p>
          <Link href="/register">
              Get Started
          </Link>
        </div>
      </div>
    </div>
  ):"you are offline";
}
