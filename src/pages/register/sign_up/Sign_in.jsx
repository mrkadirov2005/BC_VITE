import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

const Sign_in = () => {
  return (
      <section className="flex items-center justify-center flex-col h-screen w-full bg-green-700">
        {/* Heading */}
        <h1 className="font-bold text-3xl text-white p-4 mb-8 drop-shadow-lg">
          Choose Your Registration Option:
        </h1>
        
        {/* Buttons Container */}
        <div className="w-4/5 max-w-md flex items-center justify-between">
          <Link
            to="/register/sign_up/vip"
            className="w-auto px-8 py-3 text-lg text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-md hover:shadow-lg hover:bg-orange-600 transition-all duration-300"
          >
            VIP
          </Link>
          
          <Link
            to="/register/sign_up/admin"
            className="w-auto px-8 py-3 text-lg text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-md hover:shadow-lg hover:bg-pink-600 transition-all duration-300"
          >
            Admin
          </Link>
        </div>
      </section>
  );
}

export default Sign_in;
