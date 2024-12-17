import { createAsyncThunk } from "@reduxjs/toolkit";
export const delete_center_request = createAsyncThunk(
  "super_admin/delete_center",
  async (formData) => {
    console.log(formData)
    try {
        const response=await fetch("http://localhost:7000/super_admin/delete_center",{
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(formData)
        
        }).then(item=>item.json()).then(item=>item)
        return response
    } catch (error) {
        throw new Error(`${error}`)
    }
  }
);
