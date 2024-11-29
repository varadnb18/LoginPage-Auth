import React from "react";
import Logo from "./Logo";

const SignInForm = ({ handleFocus, handleBlur, toggleForm }) => {
  return (
    <form action="index.html" autoComplete="off" className="sign-in-form">
      <Logo />
      <div className="heading">
        <h2>Welcome Back</h2>
        <h6>Not registered yet?</h6>
        <button type="button" className="toggle" onClick={toggleForm}>
          Sign up
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

        <input type="submit" value="Sign In" className="sign-btn" />

        <p className="text">
          Forgotten your password or your login details?
          <a href="#">Get help</a> signing in
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
