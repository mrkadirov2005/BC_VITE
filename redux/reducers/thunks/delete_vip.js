import { createAsyncThunk } from "@reduxjs/toolkit";

export const delete_vip_request = createAsyncThunk(
  "super_admin/delete_vip",
  async ({ token, id }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:7000/super_admin/delete_vip", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, _id: id }),
      });

      if (response.status === 400) {
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
