import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isLoggedIn = localStorage.getItem("token");

  return (
    <div style={{ padding: 20, background: "#eee", marginBottom: 20 }}>
      <Link to="/">Home</Link> |{" "}
      {isLoggedIn ? (
        <>
          <Link to="/job/new">Post Job</Link> |{" "}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
}

export default NavBar;
