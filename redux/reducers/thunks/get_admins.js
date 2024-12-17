import { createAsyncThunk } from "@reduxjs/toolkit";

export const get_admins_request = createAsyncThunk(
  "super_admin/get_admins",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:7000/super_admin/get_admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (response.status === 400 || response.status===401) {
        const errorText = await response.text();
        console.log(errorText);
        return rejectWithValue(errorText);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
