"use client";
import React, { useEffect, useState } from "react";
import {getCentersData,Data,deleteCenterRequest, SAMPLE_CENTER} from "../../api/center_request" 
import "./styles.css";


export default function SuperAdminDeleteCenter() {
	const [status, setStatus] = useState<number>(0);
	const [data, setData] = useState<Data[]>(SAMPLE_CENTER);
	const [selectedCenter, setSelectedCenter] = useState<string>();

	useEffect(() => {
		getCentersData({setData,setStatus});
	}, []);


    


	const handleSubmitDeleteCenter = async () => {
		console.log(selectedCenter);
        deleteCenterRequest({selectedCenter})
        getCentersData({setData,setStatus})        
	};

    const selectItem = (e: React.MouseEvent<HTMLElement>) => {
        const id = (e.target as HTMLElement).id;
        document.getElementById(id)?.classList.toggle("selected_item");
    };
    
    
    
	return (
        <>
            {status !=0 ? (
                <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
                    <div className="w-full max-w-3xl">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Available Centers</h2>
                        <ul className="space-y-4">
                            {data?.map((item) => (
                                <li
                                    id={item.UID}
                                    onClick={(e) => {
                                        setSelectedCenter(item.UID);
                                        selectItem(e);
                                    }}
                                    className="flex justify-between items-center bg-white border border-gray-200 shadow-lg rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer p-4"
                                    key={item.UID}
                                    value={item.UID}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Center ID</span>
                                        <span className="text-lg font-semibold text-gray-800">{item.UID}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Name</span>
                                        <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => handleSubmitDeleteCenter()}
                                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className="text-center text-lg font-semibold">Loading....</h1>
            )}
        </>
    );
    
}
