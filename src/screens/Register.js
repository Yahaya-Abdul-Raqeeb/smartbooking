import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="forms">
      <h2>Register</h2>
      <formce className="formular">
        <label>Username</label>
        <input placeholder="username" />

        <label>Email</label>
        <input placeholder="email" />

        <label>Password</label>
        <input placeholder="enter password" />

        <label>Confirm</label>
        <input placeholder="confirm password" />

        <button>
          <Link to="/home">Register</Link>
        </button>
        <div>
          I already have an account
          <Link to="/" className="nav-link">
            Login
          </Link>
        </div>
      </formce>
    </div>
  );
}

export default Register;
