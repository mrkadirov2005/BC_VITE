"use client";
import React, { useEffect, useState } from 'react';
import { delete_group, getGroups, GROUP_INTERFACE, GROUP_INTERFACE_SAMPLE } from '../api/center_request';
import { FaTrash } from 'react-icons/fa';
import { Button } from '@mui/material';
import SuperAdminAddGroupComp from './add_group/ADD_GROUP_COMP';

export default function SuperAdminGroupsPage() {
  const [page, setPage] = useState<number>(0); // 0: view groups, 1: add group
  const [status, setStatus] = useState<number>(1); // 0: loading, 1: loaded
  const [GroupsData, setGroupsData] = useState<GROUP_INTERFACE[]>(GROUP_INTERFACE_SAMPLE);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    getGroups({ setMessage, setStatus, setGroupsData });
  }, []);

  const handleDeleteGroup = (_id: string) => {
    try {
      delete_group(_id, setMessage);
      getGroups({ setMessage, setStatus, setGroupsData });
    } catch (error) {
      setMessage(`${error}`);
    }
  };

  const RenderGroups = () => {
    return (
      <div className="overflow-x-auto w-full bg-white shadow-md rounded-lg mt-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-indigo-100">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="px-4 py-3 border">Index</th>
              <th className="px-4 py-3 border">Name</th>
              <th className="px-4 py-3 border">Center</th>
              <th className="px-4 py-3 border">Teacher</th>
              <th className="px-4 py-3 border">Members</th>
              <th className="px-4 py-3 border">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {GroupsData.length > 0 ? (
              GroupsData.map((group, index) => (
                <tr key={index} className="text-sm text-gray-700 hover:bg-gray-100 transition duration-150">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{group.name}</td>
                  <td className="px-4 py-2 border">{group.center_id}</td>
                  <td className="px-4 py-2 border">{group.teacher_id}</td>
                  <td className="px-4 py-2 border">{group.members}</td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      onClick={() => handleDeleteGroup(group._id)}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
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
      <header className="w-full text-center bg-gradient-to-r from-green-600 to-teal-600 text-white py-5 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold">Welcome to Groups Page!</h1>
      </header>

      {/* Subheading */}
      <h2 className="w-full text-center text-xl font-medium text-green-600 py-3 mt-4 bg-green-50 rounded-lg shadow-md">
        Manage Groups Easily
      </h2>

      {/* Add Group Button */}
      <div className="w-full flex justify-center my-6">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setPage(page === 1 ? 0 : 1)}
          className="text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300"
        >
          {page !== 1 ? "Add Group" : "Close X"}
        </Button>
      </div>

      {/* Loading Spinner */}
      {status === 0 ? (
        <div className="w-full text-center bg-orange-400 text-white py-3 rounded-lg">
          Loading...
        </div>
      ) : (
        <>
          {/* Render Groups Table */}
          {page === 0 && <RenderGroups />}

          {/* Add Group Form */}
          {page === 1 && (
            <SuperAdminAddGroupComp  />
          )}

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
