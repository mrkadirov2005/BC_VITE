import { createAsyncThunk } from "@reduxjs/toolkit";
export const add_center_request = createAsyncThunk(
  "super_admin/add_center_data",
  async (formData) => {
    alert(`${formData}`)
    try {
        const response = await fetch("http://localhost:7000/super_admin/add_center", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(formData)
        }).then(item=>item.json()).then(item=>item);
        return response;
      } catch (error) {
        alert("Error in fetching data")
      }
  }
);
