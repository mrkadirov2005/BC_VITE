"use client"
import React from 'react'
import { single_VIP_SCOPE } from '../../api/center_request';

    export default function VIPPage({ data }: single_VIP_SCOPE) {
        const v=data[0]
        return (
          <div className='VIP_page w-full min-h-screen bg-gray-800 flex items-center justify-center p-4'>
            <div className='w-full max-w-4xl bg-white rounded-lg shadow-lg p-8'>
              <h1 className='text-3xl font-bold text-gray-900 mb-6'>VIP User Details</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <p className='text-lg font-semibold text-gray-700'>First Name:</p>
                  <p className='text-xl text-gray-900'>{v.firstname}</p>
                </div>
                <div>
                  <p className='text-lg font-semibold text-gray-700'>Last Name:</p>
                  <p className='text-xl text-gray-900'>{v.lastname}</p>
                </div>
                <div>
                  <p className='text-lg font-semibold text-gray-700'>Username:</p>
                  <p className='text-xl text-gray-900'>{v.username}</p>
                </div>
                <div>
                  <p className='text-lg font-semibold text-gray-700'>Age:</p>
                  <p className='text-xl text-gray-900'>{v.age}</p>
                </div>
                <div>
                  <p className='text-lg font-semibold text-gray-700'>Email:</p>
                  <p className='text-xl text-gray-900'>{v.email}</p>
                </div>
                <div>
                  <p className='text-lg font-semibold text-gray-700'>Phone Number:</p>
                  <p className='text-xl text-gray-900'>{v.phone_number}</p>
                </div>
                <div>
                  <p className='text-lg font-semibold text-gray-700'>Address:</p>
                  <p className='text-xl text-gray-900'>{v.address}</p>
                </div>
                <div>
                  <p className='text-lg font-semibold text-gray-700'>Center ID:</p>
                  <p className='text-xl text-gray-900'>{v.center_id}</p>
                </div>
                <div className='col-span-1 md:col-span-2'>
                  <p className='text-lg font-semibold text-gray-700'>Logged In:</p>
                  <p className='text-xl text-gray-900'>{v.loggedIn ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }
