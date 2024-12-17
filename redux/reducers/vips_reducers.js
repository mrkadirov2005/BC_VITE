import { createSlice } from '@reduxjs/toolkit'
const initialState = {
 vips:{},
 status:"loading" | "Pending" | "fulfilled",
 message:""
};

export const VipAdminSlice = createSlice({
  name: 'vip',
  initialState,
  reducers: {
    },
    extraReducers(builder){
    
    }
})

export const {  } = SuperAdminSlice.actions

export default SuperAdminSlice.reducer