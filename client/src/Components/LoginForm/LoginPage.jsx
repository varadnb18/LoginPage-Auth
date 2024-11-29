import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Carousel from "./Carousel";
import "./LoginPage.css";

const LoginPage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeBullet, setActiveBullet] = useState(1);

  const handleFocus = (e) => {
    e.target.classList.add("active");
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.classList.remove("active");
    }
  };

  const toggleForm = () => {
    setIsSignUpMode((prevMode) => !prevMode);
  };

  const moveSlider = (index) => {
    setActiveBullet(index);
  };

  return (
    <main className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {!isSignUpMode && (
              <SignInForm
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                toggleForm={toggleForm}
              />
            )}

            {isSignUpMode && (
              <SignUpForm
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                toggleForm={toggleForm}
              />
            )}
          </div>

          <Carousel activeBullet={activeBullet} moveSlider={moveSlider} />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
