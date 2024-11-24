"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { AdminInterface, getSingleAdminData } from "./../../api/center_request";
import {  Card, CardContent, Divider, Typography } from '@mui/material';
import Link from 'next/link';

export default function SuperAdminAdminPage() {
  const params = useParams();
  const { id:ids  } = params; // Extract 'id' from useParams
  const id:string=ids as string
  const [admin, setSingleAdminData] = useState<AdminInterface | undefined>(); // Initialize the state
  

    if (id) {
      getSingleAdminData({setSingleAdminData,id}); 
    }

  return (
    <div>

      
      {admin ? (
       <Card className="max-w-md mx-auto my-4 shadow-lg border border-gray-200">
       <CardContent>
         <Typography variant="h5" component="div" className="text-center font-bold text-blue-600 mb-4">
           Admin Profile
         </Typography>
         <Link href={"/super_admin"} className='bg-gray-400  px-4 text-red-700'>X</Link>
         <Divider className="mb-4" />
         <div className="space-y-2">
           <Typography className="flex justify-between">
             <span className="font-medium">ID:</span> 
             <span>{admin._id}</span>
           </Typography>
           <Typography className="flex justify-between">
             <span className="font-medium">Name:</span> 
             <span>{admin.firstname} {admin.lastname}</span>
           </Typography>
           <Typography className="flex justify-between">
             <span className="font-medium">Username:</span> 
             <span>{admin.username}</span>
           </Typography>
           <Typography className="flex justify-between">
             <span className="font-medium">Age:</span> 
             <span>{admin.age}</span>
           </Typography>
           <Typography className="flex justify-between">
             <span className="font-medium">Email:</span> 
             <span>{admin.email}</span>
           </Typography>
           <Typography className="flex justify-between">
             <span className="font-medium">Address:</span> 
             <span>{admin.address}</span>
           </Typography>
           <Typography className="flex justify-between">
             <span className="font-medium">Phone Number:</span> 
             <span>{admin.phone_number}</span>
           </Typography>
           <Typography className="flex justify-between">
             <span className="font-medium">Logged In:</span> 
             <span>{admin.loggedIn ? 'Yes' : 'No'}</span>
           </Typography>
           <Typography className="flex justify-between">
             <span className="font-medium">Center ID:</span> 
             <span>{admin.center_id}</span>
           </Typography>
           <Typography className="flex justify-between">
             <span className="font-medium">VIP ID:</span> 
             <span>{admin.vip_id}</span>
           </Typography>
         </div>
       </CardContent>
     </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}



