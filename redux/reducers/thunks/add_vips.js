


    
import { createAsyncThunk } from "@reduxjs/toolkit";
export const add_vip_request = createAsyncThunk(
  "super_admin/add_vips",
  async (formData) => {
    try {
        const response = await fetch("http://localhost:7000/super_admin/add_vip", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then(res=>res.json()).then(item=>item);
        return response;
    
      } catch (error) {
       throw new Error(`${error}`) 
      }
  }
);