"use client"; // Ensure this component is a client component
import React, {  useEffect, useState } from 'react';
import { parseCookies, setCookie } from "nookies";
import { useRouter } from 'next/navigation';
interface UserDataCollection {
    username: string;
    password: string;
}

export default function VerifySuperAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const cookies = parseCookies();
    const token = cookies.super_admin_token;

        const checkIsSignedIn = async () => {
            if (token) {
                try {
                    const superAdminData = await fetch("http://localhost:7000/verify_super_admin", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": token // Pass the token directly
                        },
                    });
                    if (superAdminData.status === 200) {
                        setIsSignedIn(true);
                        // Handle success scenario, e.g., redirect or show admin dashboard
                    } else {
                        // Handle error scenario
                    }
                } catch (error) {
                    console.error("Error in checking signed in process:", error);
                }
            }
        };

        checkIsSignedIn();

        const router=useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission

        try {
            const superAdminData = await fetch("http://localhost:7000/verify_super_admin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password })
            }).then(res => res.json());

            if (superAdminData.sendable_data?.name) {
                const expires = 1;
                const date = new Date();
                date.setTime(date.getTime() + 365 * expires * 60 * 60 * 1000);

                setCookie(null, "super_admin_token", superAdminData.token, {
                    maxAge: expires * 60 * 60 * 24, // 1 day
                    path: "/"
                });
                setCookie(null, "super_admin_details", JSON.stringify(superAdminData.sendable_data), {
                    maxAge: expires * 60 * 60 * 24, // 1 day
                    path: "/"
                });
                router.push("/super_admin/centers")
                useEffect(() => {
                    window.location.reload()
                }, [])
                // Optionally redirect or update the UI here
            } else {
                alert("did not work")
                return
            }
        } catch (error) {
            console.error("Error in fetching Super admin data:", error);
            return
        }
    };

    return (
        <section className="w-full max-w-md h-auto p-6 absolute bg-slate-200 rounded-lg shadow-lg mx-auto mt-20">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Verify Super Admin</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="super_admin_username" className="block text-gray-700 font-semibold mb-2">
                        Username
                    </label>
                    <input
                        id="super_admin_username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update state
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Enter your username"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="super_admin_password" className="block text-gray-700 font-semibold mb-2">
                        Password
                    </label>
                    <input
                        id="super_admin_password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update state
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
