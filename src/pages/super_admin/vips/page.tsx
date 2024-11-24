"use client";
import React, { useEffect, useState } from "react";
import AddVipPage from "./add_vip/ADD_VIP";
import DeleteVip from "./deelete_vip/DELETE_VIP";
import SuperAdminPageVIPComp from "./VIP/SINGLE_PAGE";
import { getVIPSData, VIP_SCOPE, VIP_SCOPE_ITEM_SAMPLE, VIP_SCOPE_SAMPLE } from "../api/center_request";

// VIP_SCOPE interface to define the shape of VIP data

export default function VIPPage() {
	// Define all state variables
	const [page, setPage] = useState<number>(0); // 0 is home page by default
	const [VIPdata, setVIPsData] = useState<VIP_SCOPE[]>(VIP_SCOPE_SAMPLE);
	const [status, setStatus] = useState<number>(0);
	const [VIP, setVIP] = useState<VIP_SCOPE>(VIP_SCOPE_ITEM_SAMPLE); // Used for single VIP page
	const [message, setMessage] = useState<string>();

	

	// Fetch VIP data when the component is mounted
	useEffect(() => {
		getVIPSData({setMessage,setStatus,setVIPsData});
	}, []);

	// Function to render the main page content based on current page
	const renderPageContent = () => {
		switch (page) {
			case 1:
				return <AddVipPage />;
			case 2:
				return <DeleteVip />;
			case 3:
				return VIP ? <SuperAdminPageVIPComp data={[VIP]} /> : <p>Loading VIP data...</p>;
			default:
				return (
					<div className="text-center text-gray-700">
						<h1 className="text-3xl font-bold mb-4">Default Page</h1>
						<p>Welcome to the default VIP page. Click the button above to add a VIP.</p>
					</div>
				);
		}
	};

	// Function to render the VIP list
	const renderVIPList = () => {
		if (status === 0) {
			return <p className="text-lg font-medium text-gray-600">{status}</p>;
		}

		return VIPdata?.map((item) => (
			<div
				key={item._id}
				onClick={() => {
					setVIP(item);
					setPage(3);
				}}
				className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between hover:bg-gray-800 hover:text-white shadow-md rounded-lg p-4 mb-4 cursor-pointer"
			>
				<h1 className="text-lg font-semibold">Firstname: {item.firstname}</h1>
				<h1 className="text-lg font-semibold">Lastname: {item.lastname}</h1>
				<h1 className="text-lg font-semibold">Username: {item.username}</h1>
			</div>
		));
	};

	// Render the main component
	return (
		<main className="flex flex-col w-full items-center justify-center h-auto bg-gray-100">
			{/* Page Content */}
			<div className="w-full  mx-auto p-6 bg-gray-800 rounded-lg shadow-md mb-6">{renderPageContent()}</div>

			{/* Navigation Buttons */}
			<div className="button_container w-full  flex items-center justify-evenly mb-4">
				<button
					onClick={() => setPage(page === 1 ? 0 : 1)}
					className={`${
						page === 1 ? "bg-blue-600" : "bg-green-600"
					} text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
				>
					{page === 1 ? "Go Back" : "Add VIP"}
				</button>
				<button
					onClick={() => setPage(page === 2 ? 0 : 2)}
					className={`${
						page === 2 ? "bg-red-600" : "bg-green-600"
					} text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
				>
					{page === 2 ? "Go Back" : "Delete VIP"}
				</button>
			</div>

			{/* VIP List Section */}
			<section className="flex flex-col items-center py-8 px-4 w-full bg-gray-50">{renderVIPList()}</section>

			{/* Status Indicator */}
			<span className="text-sm text-gray-500 mt-2">{message}</span>
		</main>
	);
}
