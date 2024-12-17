"use client";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function VIPLoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

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

    if (!formData.username || !formData.password) {
      setError('Please enter both username and password.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:7000/verify_vip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const jsonifiedRes = await response.json();
      setMessage(jsonifiedRes.message);

      if (Object.keys(jsonifiedRes).includes('token')) {
        setIsSubmitting(false);
        setSuccess(true);
        setToken(jsonifiedRes.token);
      }
    } catch (error) {
      setIsSubmitting(false);
      setSuccess(false);
      setError(`${error}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">VIP Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your username"
              required
            />
          </div>

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

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">Login successful!</div>}

          <button
            type="submit"
            className={`submit-button ${isSubmitting ? 'disabled-button' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging In...' : 'Login'}
          </button>
        </form>
        <span>{message}</span>
        {success && (
          <Link
            className="continue-button"
            href={`/vip?token=${token}&username=${formData.username}&password=${formData.password}`}
          >
            Continue
          </Link>
        )}
      </div>
    </div>
  );
}

export default VIPLoginPage;
