"use client"
import React, { useState } from 'react';
import { getGroups, GROUP_INTERFACE, GROUP_INTERFACE_SAMPLE,add_student} from '../../api/center_request';
import Link from 'next/link';

export default function AddStudentForm() {
  const [groupsData,setGroupsData]=useState<GROUP_INTERFACE[]>(GROUP_INTERFACE_SAMPLE)
  const [message,setMessage]=useState<string>("")
  const [status,setStatus]=useState<number>(0)
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    address:"",
    email: '',
    password: '',
    phone_number: '',
    group_id: '',
    subjects: '', // Comma-separated input
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  // function to get groups
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Submit the form data to your backend here
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Student</h1>
      <Link className='bg-red-800 py-1 px-4' href={"/super_admin"}>X</Link>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* First Name */}
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
          {/* Address */}
          <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="number"
            name="phone_number"
            id="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Group ID */}
        <div>
          <label htmlFor="group_id" className="block text-sm font-medium text-gray-700">
            Group ID
          </label>
          <select
            name="group_id"
            id="group_id"
            value={formData.group_id}
            onClick={()=>getGroups({setGroupsData,setMessage,setStatus})}
            onChange={(e)=>setFormData({...formData,group_id:e.target.value})}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="null">{status==0 || !groupsData?"loading":"-- Select one of the options below--"}</option>
            {status==1?groupsData.map((group,index)=><option value={group._id}>{group.name} {group.center_id}</option>):""}
          </select>
        </div>

        {/* Subjects */}
        <div>
          <label htmlFor="subjects" className="block text-sm font-medium text-gray-700">
            Subjects (comma-separated)
          </label>
          <input
            type="text"
            name="subjects"
            id="subjects"
            value={formData.subjects}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={()=>add_student(formData,setMessage)}
        >
          Add Student
        </button>
      </form>
      <h2>{message}</h2>
    </div>
  );
}
