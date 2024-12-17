import React from 'react';
import { Link } from 'react-router-dom';
import './SignInRouterPage.css';

export default function SingInRouterPage() {
  return (
    <section className="section-container">
      {/* Page Heading */}
      <h1 className="heading">Choose Your Controlled Sign-in Option:</h1>

      {/* Buttons Container */}
      <div className="buttons-container">
        <Link to="/sign_in/vip" className="btn btn-vip">
          VIP
        </Link>

        <Link to="/sign_in/admin" className="btn btn-admin">
          Admin
        </Link>

        <Link to="/sign_in/teacher" className="btn btn-teacher">
          Teacher
        </Link>

        <Link to="/sign_in/student" className="btn btn-student">
          Student
        </Link>
      </div>
    </section>
  );
}
