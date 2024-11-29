import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [header, setHeader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setHeader(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setHeader(false);
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <div>
      <button onClick={header ? handleLogout : () => navigate("/Login-Page")}>
        {header ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Header;
