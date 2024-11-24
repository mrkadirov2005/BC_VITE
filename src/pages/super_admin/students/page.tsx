"use client";
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { delete_student, getAllStudents, STUDENT_INCOMING_INTERFACE, STUDENTS_INCOMING_SAMPLE } from '../api/center_request';
import Link from 'next/link';
import { FaTrash } from 'react-icons/fa';

export default function SuperAdminStudentsPage() {
  const [students, setStudentsData] = useState<STUDENT_INCOMING_INTERFACE[]>(STUDENTS_INCOMING_SAMPLE);
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<number>(0);
  const [search, setSearch] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredStudents = students.filter(student =>
    student.firstname.toLowerCase().includes(search.toLowerCase()) ||
    student.lastname.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase())
  );

  // Function to delete a student
  const handleDeleteStudent = async (_id: string) => {
    try {
      await delete_student(_id, setMessage);
      getAllStudents({ setMessage, setStatus, setStudentsData });
    } catch (error) {
      setMessage(`${error}`);
    }
  };

  useEffect(() => {
    getAllStudents({ setMessage, setStatus, setStudentsData });
  }, []);

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <header className="w-full text-center bg-gradient-to-r from-blue-500 to-teal-500 text-white py-5 shadow-lg rounded-lg mb-6">
        <h1 className="text-3xl font-bold">Students Management</h1>
      </header>

      {/* Add Student Button */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/super_admin/students/add_student">
          <Button variant="contained" color="primary" className="text-white shadow-md">
            Add Student
          </Button>
        </Link>

        {/* Search Bar */}
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search for students..."
          className="border rounded-lg p-2 w-80 shadow-sm"
        />
      </div>

      {/* Students Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-100 text-gray-700 text-left font-semibold">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Username</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Logged In</th>
              <th className="py-3 px-4">Group ID</th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.length > 0 ? (
              filteredStudents.map(student => (
                <tr key={student._id} className="hover:bg-gray-100">
                  <td className="py-3 px-4">{`${student.firstname} ${student.lastname}`}</td>
                  <td className="py-3 px-4">{student.username}</td>
                  <td className="py-3 px-4">{student.email}</td>
                  <td className="py-3 px-4">{student.phone_number}</td>
                  <td className="py-3 px-4">{"rank"}</td>
                  <td className="py-3 px-4">{student.loggedIn ? 'Yes' : 'No'}</td>
                  <td className="py-3 px-4">{student.group_id}</td>
                  <td className="py-3 px-4 text-red-500 text-center">
                    <button
                      onClick={() => handleDeleteStudent(student._id)}
                      className="hover:text-red-700 transition-colors duration-200"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Message Notification */}
      {message && (
        <div className={`w-full bg-${message ? 'green' : 'red'}-400 text-white text-center py-2 mt-6 rounded-lg shadow-md`}>
          {message}
        </div>
      )}
    </section>
  );
}
