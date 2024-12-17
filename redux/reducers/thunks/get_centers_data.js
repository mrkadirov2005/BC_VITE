import { createAsyncThunk } from "@reduxjs/toolkit";
import { fulfilled } from "../status";

export const getCentersData = createAsyncThunk(
  "super_admin/get_centers_data",
  async ({token},{rejectWithValue}) => {
    

    const response = await fetch("http://localhost:7000/super_admin/get_centers", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    if(fulfilled.includes(response.status)){
      const data = await response.json();
      return data;
    }
    rejectWithValue(response.statusText)
return;
  }
);
