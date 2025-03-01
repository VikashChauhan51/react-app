// components/Auth/SignIn.tsx
import React from 'react';
import * as Label from '@radix-ui/react-label';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import './Auth.css';

const SignIn = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign In</h2>
      <form className="auth-form">
        <div className="form-group">
          <Label.Root htmlFor="signin-email" className="form-label">
            Email
          </Label.Root>
          <input
            type="email"
            id="signin-email"
            name="email"
            placeholder="you@example.com"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <Label.Root htmlFor="signin-password" className="form-label">
            Password
          </Label.Root>
          <input
            type="password"
            id="signin-password"
            name="password"
            placeholder="Your Password"
            className="form-input"
            required
          />
        </div>
        <div className="form-group checkbox-group">
          <Checkbox.Root id="remember" className="checkbox-root">
            <Checkbox.Indicator className="checkbox-indicator">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <Label.Root htmlFor="remember" className="checkbox-label">
            Remember me
          </Label.Root>
        </div>
        <button type="submit" className="auth-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
