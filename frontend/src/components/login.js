import React from "react";
import "./main.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
        <h1>Welcome back</h1>
        <div className="login-section">
            <h2>User Login</h2>
        <form>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <label htmlFor="email">Email:  </label>
                    </div>
                    <div class="col">
                        <input type="email" id="email" name="email" required />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label htmlFor="password">Password:  </label>
                    </div>
                    <div class="col">
                        <input type="password" id="password" name="password" required />
                    </div>
                </div>
            </div>          

          <button type="submit" className="login-button">Login</button>
          <Link to="/forgotpwd">Forgot password?</Link>
        </form>
        <div className="small-info"> <Link to="/signup">Don't have an account?</Link></div>
      </div>
      
    </div>
  );
}

export {Login};
