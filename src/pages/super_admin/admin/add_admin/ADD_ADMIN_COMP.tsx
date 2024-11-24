"use client"
// components/RegisterForm.tsx

import React, { useEffect, useState } from 'react';
import { Data, getCentersData, getVIPSData, VIP_SCOPE,FormData, handleSubmitAddAdmin, VIP_SCOPE_SAMPLE,SAMPLE_CENTER} from '../../api/center_request';




const SuperAdminAddAdminForm = () => {
    const [message,setMessage]=useState<string>()
    const [status,setStatus]=useState<number>(0)
    const [data,setData]=useState<Data[]>( SAMPLE_CENTER)
    const [vipsData,setVIPsData]=useState<VIP_SCOPE[] >(VIP_SCOPE_SAMPLE);
  
    //get centers data in order to apply auto filled center data
    useEffect(() => {
      getCentersData({setStatus,setData})
    }, [])

    useEffect(() => {
      getVIPSData({setStatus,setVIPsData,setMessage})
    }, [])
    



  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    username: '',
    age: 0,
    email: '',
    address: '',
    password: '',
    phone_number: '',
    center_id: '',
    vip_id: '',
    loggedIn: false,
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  return (
    <div className="flex items-center  justify-center min-h-screen w-full py-2 bg-gray-600 ">
      <div className="w-full max-w-md p-8  space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          User Registration
        </h2>
        <form  className="space-y-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstname"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={(e)=>handleChange(e)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastname"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={(e)=>handleChange(e)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e)=>handleChange(e)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          {/* Age */}
          <div>
            <label
              htmlFor="age"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={(e)=>handleChange(e)}
              min="0"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e)=>handleChange(e)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e)=>handleChange(e)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e)=>handleChange(e)}
              required
              minLength={6}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone_number"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={(e)=>handleChange(e)}
              placeholder="e.g., 1234567890"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          {/* Center ID */}
          <div>
            <label
              htmlFor="center_id"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Center ID <span className="text-red-500">*</span>
            </label>
            <select
  name="center_id"
  value={formData.center_id}
  onChange={handleChange}
  required
  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
>
                <option>{status===0?"Loading":"Select one of below"}</option>
                {status!=0?data?.map(item=><option key={item.UID} value={item.UID}>{item.name}</option>):"loading"}
            </select>
          </div>

          {/* VIP ID */}
          <div>
            <label
              htmlFor="vip_id"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              VIP ID <span className="text-red-500">*</span>
            </label>
            <select
              id="vip_id"
              name="vip_id"
              value={formData.vip_id}
              onChange={(e)=>handleChange(e)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            >
              <option value={"loading"}>Select from list below</option>
              {vipsData?.map(item=><option key={item._id} value={item._id}>{item.firstname} | {item.username} | {item.email}</option>)}
            </select>
          </div>

          {/* Logged In (Optional) */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="loggedIn"
              name="loggedIn"
              checked={formData.loggedIn}
              onChange={(e)=>handleChange(e)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="loggedIn"
              className="ml-2 text-sm text-gray-700"
            >
              Logged In (Optional)
            </label>
          </div>

          {/* Submit Button */}
          <div>
            
          </div>
        </form>
        <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={()=>handleSubmitAddAdmin({formData,setMessage})}
            >
              Register
            </button>
      <span className='w-full text-center ml-auto mr-auto my-1 px-3 py-2'>{message}</span>
      </div>
    </div>
  );
};

export default SuperAdminAddAdminForm;
