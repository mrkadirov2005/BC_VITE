import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Import the CSS file

export default function Sign_in_Comp() {
  return (
    <section className="register-page">
      <div className="register-container">
        <h1 className="register-heading">
          Welcome! Please Choose an Option
        </h1>
        <div className="register-links">
          <Link to="/sign_up" className="register-link">
            <svg
              className="register-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
            Sign Up
          </Link>
          <Link to="/sign_in" className="register-link">
            <svg
              className="register-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
            Sign In
          </Link>
          <Link to="/super_admin" className="register-link">
            <svg
              className="register-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
            Super Admin
          </Link>

        </div>
      </div>
    </section>
  );
}
