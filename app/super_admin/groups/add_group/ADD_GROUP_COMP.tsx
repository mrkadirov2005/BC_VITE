"use client";
import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import { FaHeading } from "react-icons/fa"; 
import { add_group_super_admin, Data, getCentersData, getTeachers, INCOMING_TEACHERS_SAMPLE_DATA, IncomingTeachersData, SAMPLE_CENTER } from "../../api/center_request"; 
 
export default function SuperAdminAddGroupComp() {
    const [centers, setData] = useState<Data[]>(SAMPLE_CENTER);
    const [status, setStatus] = useState<number>(0);
    const [teachers, setTeachersData] = useState<IncomingTeachersData[]>(INCOMING_TEACHERS_SAMPLE_DATA);
    const [message, setMessage] = useState<string>("");

	// Form data state
	const [formData, setFormData] = useState({
		name: "",
		center_id: "",
		teacher_id: "",
		start_date: "",
		end_date: "",
		description: ""
	});

	// Update formData dynamically
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		});
	};

	const handleSubmitAddGroup = () => {
		add_group_super_admin({formData,setMessage,setStatus})
		

	};

    return (
        <section className="w-full h-auto bg-white flex flex-col justify-center items-center py-8">
            <div className="w-4/5 bg-gray-50 shadow-lg rounded-lg p-6">
                <div className="text-center mb-8">
                    <FaHeading className="text-3xl text-gray-700 inline-block mr-2" />
                    <h2 className="text-2xl font-bold text-gray-700">Add a group here</h2>
                </div>

                {/* Group Name Input */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name of the group"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    />
                </div>

                {/* Center Selection */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="center_id">
                        Center
                    </label>
                    <select
                        id="center_id"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={() => {
                            getCentersData({ setStatus, setData });
                            console.log("Request sent for centers");
                        }}
                        onChange={handleChange}
                    >
                        <option value="undefined">-- Select one from below --</option>
                        {status === 1
                            ? centers.map((item, index) => (
                                  <option key={item.UID} value={item.UID}>
                                      {index + 1} {item.name}
                                  </option>
                              ))
                            : ""}
                    </select>
                </div>

                {/* Teacher Selection */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="teacher_id">
                        Teacher
                    </label>
                    <select
                        id="teacher_id"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={() => getTeachers({ setMessage, setStatus, setTeachersData })}
                        onChange={handleChange}
                    >
                        <option value="null">-- Select from below --</option>
                        {teachers.length > 0 && teachers[0]["firstname"] !== "loading"
                            ? teachers.map((teacher, index) => (
                                  <option key={teacher._id} value={teacher._id}>
                                      {index + 1} {teacher.firstname} {teacher.lastname}
                                  </option>
                              ))
                            : ""}
                    </select>
                </div>

                {/* Start Date */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="start_date">
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="start_date"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    />
                </div>

                {/* End Date */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="end_date">
                        End Date
                    </label>
                    <input
                        type="date"
                        id="end_date"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={3}
                        placeholder="Write a description..."
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>
			<Button onClick={handleSubmitAddGroup}>Submit</Button>
            <Card>{message}</Card>
        </section>
    );
}
