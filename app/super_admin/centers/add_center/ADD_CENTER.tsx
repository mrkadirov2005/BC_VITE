"use client";
import React, { useState } from 'react';
import { handleSubmit } from '../../api/center_request';
import { parseCookies } from 'nookies';

export default function AddCenterForm() {
  const [name, setName] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>(""); 
  const [website, setWebsite] = useState<string>(""); 
  const [responseFB, setResponseFB] = useState<string>();
  
const cookies=parseCookies()
  const formData = {
    token: cookies.super_admin_token,
    name,
    contact: {
      phone_num: phoneNum,
      email,
      address,
      website,
    },
  };




  return (
    <section className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Center</h2>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Center Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone_num">
          Phone Number:
        </label>
        <input
          type="number"
          id="phone_num"
          value={phoneNum}
          onChange={(e) => setPhoneNum(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
          Address:
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="website">
          Website:
        </label>
        <input
          type="text"
          id="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        />
      </div>

      <button
        onClick={() => handleSubmit({formData,setResponseFB})}
        type="submit"
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>

      {responseFB && <p className="text-red-500 mt-4 text-center">{responseFB}</p>}
    </section>
  );
}
