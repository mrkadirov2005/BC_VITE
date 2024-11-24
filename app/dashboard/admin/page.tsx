import React from 'react';
import ButtonGroup from "@mui/material/ButtonGroup";
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <main className='w-full h-full flex items-center justify-center bg-gray-100'>
      {/* Sidebar */}
      <section className='menu w-1/5 h-screen flex flex-col items-center bg-blue-600 text-white border-r border-gray-300'>
        {/* Profile Section */}
        <div className='w-full flex flex-col items-center py-6'>
          <div className='w-12 h-12 rounded-full bg-gray-800 mb-4'></div>
          <h1 className='uppercase text-lg font-semibold'>Dynamically Rendered Name</h1>
        </div>

        {/* Button Group */}
        <ButtonGroup 
          variant='outlined' 
          aria-label='Basic button group' 
          className='flex flex-col items-center w-full'
        >
          <Link href={"admin/teachers"} className='btn-primary w-32 mb-3 py-2 rounded-lg text-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800'>
            Teachers
          </Link>
          <Link href={"admin/students"} className='btn-primary w-32 mb-3 py-2 rounded-lg text-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800'>
            Students
          </Link>
          <Link href={"admin/requests"} className='btn-primary w-32 mb-3 py-2 rounded-lg text-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800'>
            Requests
          </Link>
          <Link href={"admin/reports"} className='btn-primary w-32 mb-3 py-2 rounded-lg text-center bg-purple-700 hover:bg-purple-600 active:bg-purple-800'>
            Reports
          </Link>
        </ButtonGroup>
      </section>

      {/* Main Content */}
      <section className='menu w-4/5 h-screen p-8 bg-white'>
        <h1 className="vip_dashboard text-3xl mb-6 font-bold text-gray-700">
          Welcome to the dashboard, MR__Name
        </h1>

        {/* Data part */}
        <div className='content bg-gray-50 p-6 rounded-lg shadow-lg'>
          {/* Replace this with the dynamic data */}
          <p className='text-lg text-gray-600'>Dashboard content goes here...</p>
        </div>
      </section>
    </main>
  );
}
