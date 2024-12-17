import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  return (
    <section className="registration-container">
      {/* Heading */}
      <h1 className="registration-heading">Choose Your Registration Option:</h1>
      
      {/* Buttons Container */}
      <div className="registration-buttons">
        <Link to="/sign_up/vip" className="registration-button vip">
          VIP
        </Link>
        
        <Link to="/sign_up/admin" className="registration-button admin">
          Admin
        </Link>
      </div>
    </section>
  );
}

export default SignUp;
