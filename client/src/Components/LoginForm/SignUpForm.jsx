import React from "react";
import Logo from "./Logo";

const SignUpForm = ({ handleFocus, handleBlur, toggleForm }) => {
  return (
    <form action="index.html" autoComplete="off" className="sign-up-form">
      <Logo />
      <div className="heading">
        <h2>Get Started</h2>
        <h6>Already have an account?</h6>
        <button type="button" className="toggle" onClick={toggleForm}>
          Sign in
        </button>
      </div>

      <div className="actual-form">
        <div className="input-wrap">
          <input
            type="text"
            minLength="4"
            className="input-field"
            autoComplete="off"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label>Name</label>
        </div>

        <div className="input-wrap">
          <input
            type="email"
            className="input-field"
            autoComplete="off"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label>Email</label>
        </div>

        <div className="input-wrap">
          <input
            type="password"
            minLength="4"
            className="input-field"
            autoComplete="off"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label>Password</label>
        </div>

        <input type="submit" value="Sign Up" className="sign-btn" />

        <p className="text">
          By signing up, I agree to the
          <a href="#">Terms of Services</a> and
          <a href="#">Privacy Policy</a>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
