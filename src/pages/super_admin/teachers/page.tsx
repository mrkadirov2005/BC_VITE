"use client";
import React, { useEffect, useState } from 'react';
import { deleteTeacher, getTeachers, IncomingTeachersData } from '../api/center_request';
import { FaTrash } from 'react-icons/fa';
import { Button } from '@mui/material';
import SuperAdminAddTeacherPage from './add_teacher/ADD_TEACHER_COMP';

export default function SuperAdminTeachersPage() {
  const [page, setPage] = useState<number>(0 | 1 | 2);
  const [status, setStatus] = useState<number>(0);
  const [teachersData, setTeachersData] = useState<IncomingTeachersData[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    getTeachers({ setMessage, setStatus, setTeachersData });
  }, []);

  const handleDeleteTeacher = (_id: string) => {
    setStatus(0); // enable loading state
    deleteTeacher({ setMessage, setStatus, setTeachersData, _id });
  };

  const RenderTeachers = () => {
    return (
      <div className="overflow-x-auto w-full bg-white shadow-md rounded-lg mt-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-indigo-100">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="px-4 py-3 border">ID</th>
              <th className="px-4 py-3 border">Firstname</th>
              <th className="px-4 py-3 border">Lastname</th>
              <th className="px-4 py-3 border">Email</th>
              <th className="px-4 py-3 border">Username</th>
              <th className="px-4 py-3 border">Phone Number</th>
              <th className="px-4 py-3 border">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teachersData.length > 0 ? (
              teachersData.map((teacher, index) => (
                <tr key={index} className="text-sm text-gray-700 hover:bg-gray-100 transition duration-150">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{teacher.firstname}</td>
                  <td className="px-4 py-2 border">{teacher.lastname}</td>
                  <td className="px-4 py-2 border">{teacher.email}</td>
                  <td className="px-4 py-2 border">{teacher.username}</td>
                  <td className="px-4 py-2 border">{teacher.phone_number}</td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      onClick={() => handleDeleteTeacher(teacher._id)}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">
                  No data loaded yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <section className="w-full flex flex-col items-center py-8 bg-gray-50">
      {/* Page Title */}
      <header className="w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold">Welcome to Teachers Page!</h1>
      </header>

      {/* Subheading */}
      <h2 className="w-full text-center text-xl font-medium text-blue-600 py-3 mt-4 bg-blue-50 rounded-lg shadow-md">
        Manage the Teachers Efficiently
      </h2>

      {/* Add Teacher Button */}
      <div className="w-full flex justify-center my-6">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setPage(page === 1 ? 0 : 1)}
          className="text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          {page !== 1 ? "Add Teacher" : "Close X"}
        </Button>
      </div>

      {/* Conditional Rendering */}
      {status === 0 ? (
        <div className="w-full text-center bg-orange-400 text-white py-3 rounded-lg">
          Loading...
        </div>
      ) : (
        <>
          {/* Add Teacher Form */}
          {page === 1 && (
            <SuperAdminAddTeacherPage setTeachersData={setTeachersData} setStatus={setStatus} />
          )}

          {/* Teachers Table */}
          <RenderTeachers />

          {/* Message Notification */}
          {message && (
            <div className={`w-full bg-${message ? 'green' : 'red'}-400 text-white text-center py-2 mt-6 rounded-lg shadow-md`}>
              {message}
            </div>
          )}
        </>
      )}
    </section>
  );
}
