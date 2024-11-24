"use client";
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { IncomingTeachersData, SuperAdminAddTeacher, TEACHERINTERFACE } from '../../api/center_request'; 

interface PROPS { 
    setTeachersData: React.Dispatch<React.SetStateAction<IncomingTeachersData[]>>, 
    setStatus: React.Dispatch<React.SetStateAction<number>>
}

const SuperAdminAddTeacherPage = ({ setTeachersData, setStatus }: PROPS) => {
    const [message, setMessage] = useState<string>("");
    const [formData, setFormData] = useState<TEACHERINTERFACE>({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        address: '',
        password: '',
        phone_number: '',
        subject: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = () => {
        // Handle form submission
        setStatus(0);
        SuperAdminAddTeacher({ formData, setMessage, setTeachersData, setStatus }); // Ensure types match
    };

    return (
        <section className='w-full bg-inherit p-4 flex flex-col justify-center items-center'>
            <form className='w-2/4 flex flex-col'>
                <input
                    className='w-full -bg-gray-50 p-2 opacity-1 border border-y-4'
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                />
                <input
                    className='w-full -bg-gray-50 p-2 border border-y-4'
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                />
                <input
                    className='w-full -bg-gray-50 p-2 border border-y-4'
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    placeholder="Username"
                />
                <input
                    className='w-full -bg-gray-50 p-2 border border-y-4'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                />
                <input
                    className='w-full -bg-gray-50 p-2 border border-y-4'
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Address"
                />
                <input
                    className='w-full -bg-gray-50 p-2 border border-y-4'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Password"
                />
                <input
                    className='w-full -bg-gray-50 p-2 border border-y-4'
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                />
                <input
                    className='w-full -bg-gray-50 p-2 border border-y-4'
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                />
            </form>
            <Button variant="contained" color='secondary' onClick={handleSubmit} type="submit">Submit</Button>
            <summary>{message}</summary>
        </section>
    );
};

export default SuperAdminAddTeacherPage;
