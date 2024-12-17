import { createAsyncThunk } from "@reduxjs/toolkit";

const verify_super_admin = createAsyncThunk(
  "/verify_super_admin",
  async (data, { rejectWithValue }) => {
      console.log(data);
    try {
      const response = await fetch("http://localhost:7000/verify_super_admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to verify super admin");
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default verify_super_admin;

