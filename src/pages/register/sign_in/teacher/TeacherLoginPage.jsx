"use client";
import React, { useState } from "react";
import "./TeacherLoginPage.css";

function TeacherLoginPage() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    if (!formData.phoneNumber || !formData.password) {
      setError("Please enter both phone number and password.");
      setIsSubmitting(false);
      return;
    }

    // Add form submission logic here
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Teacher Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="form-error">{error}</div>}

          {/* Success Message */}
          {success && <div className="form-success">Login successful!</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`form-submit ${isSubmitting ? "button-disabled" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TeacherLoginPage;
