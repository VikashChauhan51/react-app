// components/Auth/SignUp.tsx
import React from 'react';
import * as Label from '@radix-ui/react-label';
import './Auth.css';

const SignUp = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign Up</h2>
      <form className="auth-form">
        <div className="form-group">
          <Label.Root htmlFor="signup-name" className="form-label">
            Full Name
          </Label.Root>
          <input
            type="text"
            id="signup-name"
            name="name"
            placeholder="Your Full Name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <Label.Root htmlFor="signup-email" className="form-label">
            Email
          </Label.Root>
          <input
            type="email"
            id="signup-email"
            name="email"
            placeholder="you@example.com"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <Label.Root htmlFor="signup-password" className="form-label">
            Password
          </Label.Root>
          <input
            type="password"
            id="signup-password"
            name="password"
            placeholder="Your Password"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <Label.Root htmlFor="signup-confirm-password" className="form-label">
            Confirm Password
          </Label.Root>
          <input
            type="password"
            id="signup-confirm-password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="auth-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
