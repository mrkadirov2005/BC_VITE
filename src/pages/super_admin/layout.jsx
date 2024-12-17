import React, { useState } from 'react'
import SuperAdminMenu from './SuperAdmin_main';
import SuperAdminCentersPage from './centers/page';
import "./styles.css"
import VIPPage from './vips/page';
import SuperAdminAdminsPage from './admin/AdminComp';
import SuperAdminTeachersComp from './teachers/SuperAdminTeacherComp';
import SuperAdminGroupsComp from './groups/SuperAdminGroupsComp';
import SuperAdminStudentsComp from './students/SuperAdminStudentsComp';

export default function SuperAdminLayout() {
  const [subPage,setSubPage]=useState(1);
  console.log(subPage)
  return (
    <div className='right_comp'>
    <SuperAdminMenu setSubPage={setSubPage} subPage={subPage}/>
  {  subPage==1?<SuperAdminCentersPage/>:subPage==2?<VIPPage></VIPPage>:subPage==3?<SuperAdminAdminsPage/>:subPage==4?<SuperAdminTeachersComp/>:subPage==5?<SuperAdminGroupsComp/>:subPage==6?<SuperAdminStudentsComp/>:""}
    </div>
  )
}
