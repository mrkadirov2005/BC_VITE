"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Data, getCentersData, SAMPLE_CENTER } from "../../api/center_request";
import {formatCenterData} from "./format"
// Define the shape of the center data with TypeScript



export default function CenterPage() {
  const params = useParams();
  const { id } = params;

  const [centers, setData] = useState<Data[]>(SAMPLE_CENTER);
  const [status, setStatus] = useState<number>(0);
  
  useEffect(() => {
    getCentersData({ setData, setStatus });
  }, [id]);
  
  const currentCenter = status === 1 ? centers?.find(item => item._id === id) : undefined;
  const all_extracted=formatCenterData(currentCenter)
  const all_extracted_ARRAY=Object.entries(all_extracted)
  


  return (
    <div className="center_page w-full min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        {status === 0 || !all_extracted ? (
          <h1 className="text-2xl font-semibold text-gray-900 text-center">Loading data...</h1>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Center Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {all_extracted_ARRAY.map((center,index)=><div>  {all_extracted_ARRAY[index][0]}: {all_extracted_ARRAY[index][1]}</div>)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

interface DetailItemProps {
  label: string;
  value: React.ReactNode;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <div>
    <p className="text-lg font-semibold text-gray-700">{label}:</p>
    <p className="text-xl text-gray-900">{value}</p>
  </div>
);
