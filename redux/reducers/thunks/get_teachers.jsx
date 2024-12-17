import { createAsyncThunk } from "@reduxjs/toolkit";

export const get_teachers_request = createAsyncThunk(
  "super_admin/get_teachers",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:7000/super_admin/get_teachers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization":JSON.stringify(token)
        }
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
