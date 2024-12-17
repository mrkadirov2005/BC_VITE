import { createAsyncThunk } from "@reduxjs/toolkit";
export const delete_admin_request = createAsyncThunk(
  "super_admin/delete_admin",
  async ({token,_id},{rejectWithValue}) => {
    try {
        const response=await fetch("http://localhost:7000/super_admin/delete_admin",{
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({token,_id})
        
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
