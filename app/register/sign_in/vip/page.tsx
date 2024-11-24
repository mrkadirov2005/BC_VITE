"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const VIPLoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [message,setMessage]=useState<string>("")
  const [token,setToken]=useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
  

    if (!formData.username || !formData.password) {
      setError('Please enter both phone number and password.');
      setIsSubmitting(false);
      return;
    }
    // request backend
    try {
      const response=await fetch("http://localhost:7000/verify_vip",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      const jsonifiedRes=await response.json()
      setMessage(jsonifiedRes.message)
      if(Object.keys(jsonifiedRes).includes("token")){
        console.log("token is coming here")
        setIsSubmitting(false)
        setSuccess(true)
        setToken(jsonifiedRes.token)
      }
    } catch (error) {
      setIsSubmitting(false)
        setSuccess(false)
        setError(`${error}`)
    }

    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 p-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">VIP Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Phone Number */}
          <div>
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="tel"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-600 text-sm">{error}</div>}

          {/* Success Message */}
          {success && <div className="text-green-600 text-sm">Login successful!</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging In...' : 'Login'}
          </button>
        </form>
    <span>  {message}</span>
    <br />
{   success?   <Link className='bg-green-500 px-3 py-1' href={`/vip?token=${token}?username=${formData.username}?password=${formData.password}`}>Continue</Link>:""}
      </div>
    </div>
  );
};

export default VIPLoginPage;
