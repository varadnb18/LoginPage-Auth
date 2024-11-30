import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpNext = ({
  handleFocus,
  handleBlur,
  toggleForm,
  setPage,
  signup,
  handleChange,
  setSignup,
}) => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const heightAndWeight = {
      height: parseInt(
        signup.heightWeight.split(" / ")[0].replace("cm", "").trim()
      ), // Remove 'cm' and convert to number
      weight: parseInt(
        signup.heightWeight.split(" / ")[1].replace("Kg", "").trim()
      ), // Remove 'Kg' and convert to number
    };

    const dataToSend = {
      ...signup,
      heightAndWeight, // Attach the structured heightAndWeight object
    };

    axios
      .post("http://localhost:4000/register", dataToSend)
      .then((res) => {
        console.log("Signup successful:", res.data, dataToSend);
        const { token } = res.data;
        if (token) {
          localStorage.setItem("authToken", token);
          alert("Login successful!");
          navigate("/");
          setSignup({
            username: "",
            email: "",
            password: "",
            DOB: "",
            Gender: "",
            heightWeight: "",
          });
        }
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
        <div className="input-wrap1">
          <input
            type="date"
            name="DOB"
            className="input-field1"
            value={signup.DOB}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          <label className="label1">Date of Birth</label>
        </div>

        <div className="input-wrap">
          <select
            name="Gender"
            className="input-field"
            value={signup.Gender}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <label>Gender</label>
        </div>

        <div className="input-wrap">
          <input
            type="text"
            name="heightWeight"
            className="input-field"
            value={signup.heightWeight}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          <label>Height/Weight (e.g., 170cm / 70kg)</label>
        </div>

        <div className="submit-btn">
          <input
            value="Prev"
            className="sign-btn"
            onClick={() => {
              setPage((currpage) => currpage - 1);
            }}
          />
          <input type="submit" value="Sign Up" className="sign-btn" />
        </div>

        <p className="text">
          By signing up, I agree to the
          <Link to="#">Terms of Services</Link> and
          <Link to="#">Privacy Policy</Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpNext;
