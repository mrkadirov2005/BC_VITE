import React from 'react';
import './styles.css'; // Import the CSS file
import { Button } from '@mui/material';



export default function SuperAdminMenu({subPage,setSubPage}) {
  
  return (
    <section className="menu">
      <div className="profile">
        <div className="avatar"></div>
        <h1>Super Admin</h1>
      </div>
      <Button variant="contained" color="secondary" className="btn-logout" onClick={()=>window.localStorage.clear()}>
        Log out
      </Button>
      <Button onClick={()=>setSubPage(1)} className="link">
        Centers
      </Button>
      <Button onClick={()=>setSubPage(2)} className="link">
        VIPs
      </Button>
      <Button onClick={()=>setSubPage(3)} className="link">
        Admins
      </Button>
      <Button onClick={()=>setSubPage(4)} className="link">
        Teachers
      </Button>
      <Button onClick={()=>setSubPage(5)} className="link">
        Groups
      </Button>
      <Button onClick={()=>setSubPage(6)} className="link">
        Students
      </Button>
      <Button onClick={()=>setSubPage(7)} className="link">
        Reports
      </Button>
      <Button onClick={()=>setSubPage(8)} className="link">
        Requests
      </Button>
    </section>
  );
}
