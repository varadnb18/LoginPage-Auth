import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ handleFocus, handleBlur, toggleForm }) => {
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setSignup((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:4000/register", signup)
      .then((res) => {
        console.log("Signup successful:", res.data);
        navigate("/");
        alert("Signup successful!");
        setSignup({
          username: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.error("Error during signup:", error.res?.data || error.message);
        alert("Signup failed. Please try again.");
      });
  }

  return (
    <form
      action="index.html"
      autoComplete="off"
      className="sign-up-form"
      onSubmit={handleSubmit}
    >
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
            name="username"
            value={signup.username}
            className="input-field"
            autoComplete="off"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label>Name</label>
        </div>

        <div className="input-wrap">
          <input
            type="email"
            name="email"
            className="input-field"
            value={signup.email}
            autoComplete="off"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label>Email</label>
        </div>

        <div className="input-wrap">
          <input
            type="password"
            name="password"
            minLength="4"
            className="input-field"
            value={signup.password}
            autoComplete="off"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>

        <input type="submit" value="Sign Up" className="sign-btn" />

        <p className="text">
          By signing up, I agree to the
          <Link to="#">Terms of Services</Link> and
          <Link to="#">Privacy Policy</Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
