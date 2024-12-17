import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WELCOME from './components/intro/intro';
import RegisterPage from './pages/register/Register_comp';
import Sing_in_router_page from "./pages/register/sign_in/sing_in_page_router"
import Sign_up from "./pages/register/sign_up/Sign_up"
import AdminLoginPage from './pages/register/sign_in/admin/AdminLoginPage';
import StudentLoginPage from './pages/register/sign_in/student/StudentloginPage';
import TeacherLoginPage from './pages/register/sign_in/teacher/TeacherLoginPage';
import VIPLoginPage from './pages/register/sign_in/vip/VIPLoginPage';
import VIP_signUp from './pages/register/sign_up/vip/VIPSignUp';
import AdminSignUp from './pages/register/sign_up/admin/AdminSignUp';
import Verify_super_admin from './pages/super_admin/SuperAdminPage';
import Super_admin_panel from "./pages/super_admin/SuperAdmin_main"
import SuperAdminLayout from './pages/super_admin/layout';
const App = () => {

  return (
  
    <Routes>
      <Route path="/" element={<WELCOME />} />
      <Route path="/sign_in" element={<Sing_in_router_page/>} />
      <Route path="/sign_in/admin" element={<AdminLoginPage />} />
      <Route path="/sign_in/student" element={<StudentLoginPage />} />
      <Route path="/sign_in/teacher" element={<TeacherLoginPage/>} />
      <Route path="/sign_in/vip" element={<VIPLoginPage/>} />

      <Route path="/sign_up" element={<Sign_up />} />
      <Route path="/sign_up/vip" element={<VIP_signUp/>} />
      <Route path="/sign_up/admin" element={<AdminSignUp/>} />

{/* protected route */}
      <Route  element={<Verify_super_admin/>}>
        <Route path="/super_admin/*" element={<SuperAdminLayout/>}/>
      </Route>

      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
