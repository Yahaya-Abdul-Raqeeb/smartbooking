import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
      <div>
        <form>
          <div className="form">
            <h2>Login</h2>
            <label>Email</label>
            <input placeholder="email" />

            <label>Password</label>
            <input placeholder="password" />
            <button>Login</button>
            <div>
              I don't have an account
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Login;
