"use client";
import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";

export interface Data {
  _id: string;
  UID: string;
  contact: object;
  name: string;
}

export interface ResponseObject {
  statusText: string;
  statusCode: number;
  color: string;
  text: string;
}

export default function AddVipPage() {
  const [data, setData] = useState<Data[]>([]);
  const [status, setStatus] = useState<string>("loading");
  const [responseFB, setResponseFB] = useState<ResponseObject>({
    statusCode: 0,
    statusText: "",
    color: "",
    text: "",
  });

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    age: "",
    email: "",
    password: "",
    address: "",
    phone_number: "",
    center_id: "",
    token: "",
  });

  const getCentersData = async () => {
    try {
      const response = await fetch("http://localhost:7000/super_admin/get_centers", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ token: parseCookies().super_admin_token }),
      });
      const result = await response.json();
      setData(result);
      setStatus("loaded");
      setResponseFB({
        ...responseFB,
        statusCode: 200,
        statusText: "Get Centers data loaded",
      });
    } catch (error) {
      setResponseFB({
        ...responseFB,
        statusText: `get centers error: ${error}`,
        statusCode: 400,
      });
    }
  };

  // Only call getCentersData on initial render (component mount)
   // Empty dependency array means it runs once when the component mounts

  const handleSubmitForm = async () => {
	console.log("req sent")
    formData.token = parseCookies().super_admin_token as string;
    try {
      const response = await fetch("http://localhost:7000/super_admin/add_vip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setResponseFB({
        ...responseFB,
        statusText: result.message,
      });
    } catch (error) {
      setResponseFB({
        ...responseFB,
        statusText: `${error}`,
      });
    }
  };

  return (
    <section className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 h-fit">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Add VIP</h1>
      {/* firstname */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vip_firstname">
          Firstname:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
          type="text"
          id="vip_firstname"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {/* lastname */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vip_lastname">
          Lastname:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
          type="text"
          id="vip_lastname"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {/* username */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vip_username">
          Username:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          type="text"
          id="vip_username"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {/* age */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vip_age">
          Age:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          type="number"
          id="vip_age"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {/* email */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vip_email">
          VIP Email:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          id="vip_email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {/* password */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vip_password">
          VIP Password:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          type="password"
          id="vip_password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {/* address */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vip_address">
          VIP Address:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          type="text"
          id="vip_address"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {/* phone number */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vip_phone_number">
          VIP Phone Number:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
          type="number"
          id="vip_phone_number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {/* center selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="vip_center_ID">
          Select Center:
        </label>
        <select
		onClick={()=>{
			getCentersData();
		}}
          onChange={(e) => setFormData({ ...formData, center_id: e.target.value })}
          id="vip_center_ID"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option>{status === "loading" ? "Loading..." : "Select a Center"}</option>
          {data?.map((item) => (
            <option key={item.UID} value={item.UID}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => handleSubmitForm()}
        className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
      <span className={`text-${responseFB.color}-800`}>{responseFB.statusText}</span>
    </section>
  );
}
