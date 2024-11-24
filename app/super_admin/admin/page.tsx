"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import SuperAdminAddAdminForm from './add_admin/ADD_ADMIN_COMP';
import { AdminInterface, getAdminsData, handleDeleteAdmin } from '../api/center_request';
import "./styles.css"
import Link from 'next/link';

export default function SuperAdminAdminsPage() {
  const [page, setPage] = useState<number>()
  const [status, setStatus] = useState<number>(0)
  const [adminData, setAdminsData] = useState<AdminInterface[]>([])
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    getAdminsData({ setMessage, setAdminsData, setStatus })
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto p-4 rounded-lg bg-white shadow-lg">
        {/* Header */}
        {page === 0 || !page ? (
          <header className="flex flex-col items-center justify-center w-full py-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-white">Admin Management</h1>
            <p className="text-sm text-gray-100 mt-2">Manage and monitor all admins</p>
          </header>
        ) : page === 1 ? (
          <SuperAdminAddAdminForm />
        ) : null}

        {/* Admin List Section */}
        <div className="flex justify-between items-center my-8">
          <h1 className="text-3xl font-bold text-gray-800">List of Admins</h1>
          <button onClick={() => setPage(1)} className="flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition duration-300">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Admin
          </button>
        </div>

        {/* Admins Table */}
        {status === 0 ? (
          <h1 className="text-center text-xl text-gray-500">Loading...</h1>
        ) : (
          <Suspense fallback={<h1 className="text-center">Loading admins...</h1>}>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
                {/* Table Header */}
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody className="bg-white divide-y divide-gray-200">
                  {status === 1 ? (
                    adminData.map((user) => (
                      <tr id={user._id} className="hover:bg-gray-100 transition duration-200" key={user._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user._id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.firstname} {user.lastname}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.username}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <Link href={`/super_admin/admin/${user._id}`} className="text-indigo-600 hover:text-indigo-900">Details</Link>
                          <button
                            className="text-red-600 hover:text-red-800 ml-4"
                            onClick={() => handleDeleteAdmin({ setMessage, setAdminsData, id: user._id })}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center py-4">No admins found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Suspense>
        )}
        {message && <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">{message}</div>}
      </div>
    </div>
  );
}
