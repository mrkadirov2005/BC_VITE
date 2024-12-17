import { createSlice } from '@reduxjs/toolkit'
import verify_super_admin from './thunks/super_admin_thunk';
import { getCentersData } from './thunks/get_centers_data';
import { add_center_request } from './thunks/add_super_admin_thunk';
import { delete_center_request } from './thunks/delete_center';
import { getVipsData } from './thunks/load_vips_data';
import { add_vip_request } from './thunks/add_vips';
import { delete_vip_request } from './thunks/delete_vip';
import { get_admins_request } from './thunks/get_admins';
import { add_admin_request } from './thunks/add_new_admin';
import { delete_admin_request } from './thunks/delete_admin';
import { get_teachers_request } from './thunks/get_teachers';
import { get_groups_request } from './thunks/get_groups';
import { get_students_request } from './thunks/get_students';
const initialState = {
 data:{},
 centers:{},
 vips:[],
 admins:[],
 teachers:[],
 groups:[],
 students:[],
 status:"loading" | "Pending" | "fulfilled",
 message:"",
 isAuth:false,
 statusCode:0
};

export const SuperAdminSlice = createSlice({
  name: 'Super_admin',
  initialState,
  reducers: {
    },
    extraReducers(builder){
        builder.addCase(verify_super_admin.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status="fulfilled"
            state.isAuth=true
        })
        builder.addCase(verify_super_admin.rejected,(state,action)=>{
            state.data={};
            state.message=action.payload;
            state.status="rejected";
            state.isAuth=false
        })
        builder.addCase(verify_super_admin.pending,(state,action)=>{
            state.data={};
            state.status="pending"
            state.isAuth=false
        })
        builder.addCase(getCentersData.fulfilled,(state,action)=>{
            state.centers=action.payload;
            state.status="fulfilled"
        })
        builder.addCase(getCentersData.pending,(state,action)=>{
            state.centers={};
            state.status="pending"
        })
        builder.addCase(getCentersData.rejected,(state,action)=>{
            state.centers={};
            state.status="rejected"
            state.message=action.payload
        })
        builder.addCase(add_center_request.fulfilled,(state,action)=>{
            state.message=action.payload;
            state.status="fulfilled"
        })
        builder.addCase(add_center_request.rejected,(state)=>{
            state.status="rejected"
        })
        builder.addCase(add_center_request.pending,(state)=>{
            state.status="pending"
        })
        builder.addCase(delete_center_request.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.message=action.payload
        })
        builder.addCase(delete_center_request.rejected,(state)=>{
            state.status="rejected"
        })
        builder.addCase(delete_center_request.pending,(state)=>{
            state.status="pending"
        })
        builder.addCase(getVipsData.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.vips=action.payload
        })
        builder.addCase(getVipsData.rejected,(state)=>{
            state.status="rejected"
        })
        builder.addCase(getVipsData.pending,(state)=>{
            state.status="pending"
        })
        builder.addCase(add_vip_request.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.message=action.payload
        })
        builder.addCase(add_vip_request.rejected,(state)=>{
            state.status="rejected"
        })
        builder.addCase(add_vip_request.pending,(state)=>{
            state.status="pending"
        })
        // delete vip request
        builder.addCase(delete_vip_request.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.message=action.payload
        })
        builder.addCase(delete_vip_request.rejected,(state)=>{
            state.status="rejected"
        })
        builder.addCase(delete_vip_request.pending,(state)=>{
            state.status="pending"
        })
        // get_admins
        builder.addCase(get_admins_request.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.admins=action.payload.data
            state.message=action.payload.message
        })
        builder.addCase(get_admins_request.rejected,(state)=>{
            state.status="rejected"
            
        })
        builder.addCase(get_admins_request.pending,(state)=>{
            state.status="pending"  
            state.message=""
        })
        // add new admin
        builder.addCase(add_admin_request.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.message=action.payload.message
        })
        builder.addCase(add_admin_request.rejected,(state)=>{
            state.status="rejected"
            
        })
        builder.addCase(add_admin_request.pending,(state)=>{
            state.status="pending"  
            state.message=""
        })
        // delete_admin
        builder.addCase(delete_admin_request.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.message=action.payload.message
        })
        builder.addCase(delete_admin_request.rejected,(state)=>{
            state.status="rejected"
        })
        builder.addCase(delete_admin_request.pending,(state)=>{
            state.status="pending"  
            state.message=""
        })
        // get_teachers
        builder.addCase(get_teachers_request.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.teachers=action.payload.data
            state.message=action.payload.message
        })
        builder.addCase(get_teachers_request.rejected,(state,action)=>{
            state.status="rejected"
            state.message=action.error.message
            state.statusCode=action.error.code
            
        })
        builder.addCase(get_teachers_request.pending,(state)=>{
            state.status="pending"  
            state.message=""
        })
        // get groups
        builder.addCase(get_groups_request.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.groups=action.payload.data
            state.message=action.payload.message
        })
        builder.addCase(get_groups_request.rejected,(state,action)=>{
            state.status="rejected"
            state.message=action.error.message
            state.statusCode=action.payload.code
            
        })
        builder.addCase(get_groups_request.pending,(state)=>{
            state.status="pending"  
            state.message=""
        })
        // get_students
        builder.addCase(get_students_request.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.students=action.payload.data
            state.message=action.payload.message
        })
        builder.addCase(get_students_request.rejected,(state,action)=>{
            state.status="rejected"
            state.message=action.error.message
            state.statusCode=action.payload.code
            
        })
        builder.addCase(get_students_request.pending,(state)=>{
            state.status="pending"  
            state.message=""
        })
    }
})

export const {  } = SuperAdminSlice.actions

export default SuperAdminSlice.reducer