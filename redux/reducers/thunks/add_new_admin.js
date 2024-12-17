
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fulfilled } from "../status";
export const add_admin_request = createAsyncThunk(
  "super_admin/add_admin_data",
  async ({formData},{rejectWithValue}) => {
    try {
        const response = await fetch("http://localhost:7000/super_admin/add_admin", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        if(response.status!=200){
            return rejectWithValue(response.statusText)
        }
        const result=await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error)
      }
  }
);