import React, { useState } from "react";
import './loginPage.css';
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setUser, onLogin }) => {
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      onLogin(email);
      setUser(email);
      navigate('/'); // go to dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login">
      <div className="title">
        <h3>Sign in to access your dashboard</h3>
      </div>
      <div className="login-containter">
        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label>Password</label>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
