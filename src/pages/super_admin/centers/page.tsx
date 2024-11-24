"use client";
import React, { useEffect, useState } from "react";
import AddCenterForm from "./add_center/ADD_CENTER";
import SuperAdminDeleteCenter from "./delete_center/DELETE_CENTER";
import { getCentersData, Data, SAMPLE_CENTER } from "../api/center_request";
import Link from "next/link";
import RedirectPage from "../components/interfaces/navigation";

export default function SuperAdminCentersPage() {
  const [page, setPage] = useState<string>();
  const [status, setStatus] = useState<number>(0);
  const [data, setData] = useState<Data[]>(SAMPLE_CENTER);
  console.log("centers",data)

  // Fetch center datsdsa on component mount
  useEffect(() => {
    getCentersData({setStatus,setData});
  }, []);

  return status===0?<RedirectPage/>:(
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-800 tracking-wide">
        Super Admin Centers Management
      </h1>

      <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-xl">
        {/* Conditional rendering based on the selected page */}
        {page === "add_page" ? (
          <AddCenterForm />
        ) : page === "delete_page" ? (
          <SuperAdminDeleteCenter />
        ) :(
          <section className="w-full h-auto flex flex-col items-center">
            <div className="text-center text-gray-700 font-semibold text-xl mb-6">
              Welcome to the Admin Page. Manage Centers Below.
            </div>
            {/* Buttons for navigation */}
            <div className="flex space-x-6 mb-10">
              <button
                className={`${
                  page === "add_page" ? "bg-red-500" : "bg-blue-600"
                } text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105 duration-300 ease-in-out`}
                onClick={() =>
                  setPage(page === "add_page" ? "home" : "add_page")
                }
              >
                {page === "add_page" ? "Back to Home" : "Add Center"}
              </button>

              <button
                className={`${
                  page === "delete_page" ? "bg-red-500" : "bg-yellow-600"
                } text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-700 transition-transform transform hover:scale-105 duration-300 ease-in-out`}
                onClick={() =>
                  setPage(page === "delete_page" ? "home" : "delete_page")
                }
              >
                {page === "delete_page" ? "Back to Home" : "Delete Center"}
              </button>
            </div>

            {/* Centers list section */}
            <section className="w-full">
              <h1 className="bg-blue-500 text-white py-3 px-4 text-lg font-bold w-full rounded-t-lg shadow-lg mb-4">
                Centers List:
              </h1>
              <div className="space-y-4">
                {data?data.map((item) => (
                  <div
                    key={item.UID}
                  
                    className="p-4 bg-gray-50 hover:bg-gray-200 rounded-lg shadow-md flex justify-between items-center cursor-pointer transition-colors duration-200"
                  >
                    <h2 className="font-bold text-gray-800">
                      Name: {item.name}
                    </h2>
                    <h2 className="font-bold text-gray-800">ID: {item.UID}</h2>
                    <Link href={`/super_admin/centers/${item._id}`} >...</Link>
                  </div>
                )):""}
              </div>
            </section>
          </section>
        )}
      </div>
    </main>
  );
}
