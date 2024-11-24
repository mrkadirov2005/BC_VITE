import React from 'react'
import './intro.css'
import { Link } from 'react-router-dom'

export default function WELCOME() {
  return (
    <div className="container">
      <div className="welcome-box">
        <div className="text-content">
          <h1 className="title">Welcome to Our Platform</h1>
          <p className="description">
            Join us today and be part of an amazing community. Register now to get started and explore more with us!
          </p>
          <Link to="/register" className="get-started-button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
