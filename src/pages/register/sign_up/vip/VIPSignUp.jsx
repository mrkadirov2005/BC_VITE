import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';  // Import the CSS file for custom styles

const VIP_signUp = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    username: '',
    email: '',
    password: '',
    phone_number: "",
  });

  // State to handle form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage('');
    console.log(formData);
  };

  return (
    <section className="sign-up-section">
      <div className="sign-up-container">
        <h2 className="sign-up-header">Create Your Account</h2>

        {/* Submission Message */}
        {submissionMessage && (
          <div className={`submission-message ${submissionMessage.includes('successful') ? 'success' : 'error'}`}>
            {submissionMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="sign-up-form">
          {/* Name */}
          <div className="form-field">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter your first name"
            />
          </div>

          {/* Surname */}
          <div className="form-field">
            <label htmlFor="surname" className="form-label">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter your surname"
            />
          </div>

          {/* Phone number */}
          <div className="form-field">
            <label htmlFor="phone_number" className="form-label">
              Phone number
            </label>
            <input
              type="number"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Age */}
          <div className="form-field">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="1"
              max="120"
              className="form-input"
              placeholder="Enter your age"
            />
          </div>

          {/* Username */}
          <div className="form-field">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Choose a username"
            />
          </div>

          {/* Email */}
          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter your email address"
            />
          </div>

          {/* Password */}
          <div className="form-field">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="form-input"
              placeholder="Create a strong password"
            />
          </div>

          {/* Submit Button */}
          <div className="form-field">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`submit-button ${isSubmitting ? 'disabled' : ''}`}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>

        {/* Link to Sign In */}
        <p className="sign-in-link">
          Already have an account?{' '}
          <Link to="/register/sign_in" className="sign-in-link-text">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default VIP_signUp;
