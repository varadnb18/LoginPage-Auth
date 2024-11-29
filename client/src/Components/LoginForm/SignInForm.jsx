import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInForm = ({ handleFocus, handleBlur, toggleForm }) => {
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setSignin((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:4000/Login", signin)
      .then((res) => {
        const { token } = res.data;

        if (token) {
          localStorage.setItem("authToken", token);

          alert("Login successful!");
          navigate("/");

          setSignin({
            email: "",
            password: "",
          });
        }
      })
      .catch((error) => {
        console.error("Login failed:", error.response?.data || error.message);
        alert("Invalid email or password. Please try again.");
      });
  }

  return (
    <form
      action="index.html"
      autoComplete="off"
      className="sign-in-form"
      onSubmit={handleSubmit}
    >
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
            type="email"
            className="input-field"
            autoComplete="off"
            name="email"
            value={signin.email}
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
            minLength="4"
            className="input-field"
            autoComplete="off"
            name="password"
            value={signin.password}
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>

        <input type="submit" value="Sign In" className="sign-btn" />

        <p className="text">
          Forgotten your password or your login details?
          <Link to="#">Get help</Link> signing in
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
