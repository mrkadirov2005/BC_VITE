"use client";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getVIPSData, VIP_SCOPE_SAMPLE } from "../../api/center_request";
import { single_VIP_SCOPE, VIP_SCOPE } from "../../api/center_request";
import { parseCookies } from "nookies";

export default function DeleteVip() {
  const [data, setVIPsData] = useState<VIP_SCOPE[]>(VIP_SCOPE_SAMPLE); // Initialize as empty array
  const [status, setStatus] = useState<number>(0);
  const [_id, set_id] = useState<string | undefined>(undefined); // Allow undefined

  const [message, setMessage] = useState<string | undefined>(undefined);

  // Fetch VIPs data on component mount
  useEffect(() => {
    getVIPSData({ setMessage, setStatus, setVIPsData });
  }, []);

  const handleDeleteSubmit = async () => {
    const token = parseCookies().super_admin_token;
    try {
      const responseFromBackend = await fetch("http://localhost:7000/super_admin/delete_vip", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", // Corrected header
        },
        body: JSON.stringify({ token, _id }), // Make sure _id is defined and accessible
      }).then((item) => item.json());
      setMessage(responseFromBackend.message)
      
      // Assuming you want to handle response details
      // Define responseDetails and setResponseDetails as needed here
      // setResponseDetails({ ...responseDetails, statusCode: responseFromBackend.statusCode, statusText: responseFromBackend.message, color: `${responseFromBackend.statusCode !== 200 ? "red" : "green"}` })
    } catch (error) {
      console.error("Error deleting VIP:", error);
    }
  };

  return status === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <section className="w-full h-auto bg-gray-100 p-6 rounded-lg shadow-md flex flex-col space-y-6 max-w-lg mx-auto">
      <h1 className="text-xl font-semibold text-gray-700">Select the VIP to remove:</h1>

      <div className="w-full">
        <select
          name="removeVip"
          id="remove_Vip"
          className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          defaultValue={"empty"}
          onChange={(e) => {
            set_id(e.target.value);
          }}
        >
          <option value={"empty"} disabled>
            Please select a VIP
          </option>
          {data.length > 0 ? (
            data.map((item) => (
              <option key={item._id} value={item._id}>
                Name: {item.firstname} | Username: {item.username}
              </option>
            ))
          ) : (
            <option value="loading">Loading VIPs...</option>
          )}
        </select>
      </div>

      <Button
        variant="contained"
        color="primary"
        className="w-full"
        onClick={handleDeleteSubmit}
      >
        Submit
      </Button>

      {message && (
        <span className={`text-orange-600 font-semibold text-center`}>
          {message}
        </span>
      )}
    </section>
  );
}
