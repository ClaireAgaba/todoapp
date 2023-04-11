import React, { useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from './logo.jpg';
import ReactCurvedText from "react-curved-text";
import axios from 'axios';
import './maindash';


const baseURL='http://localhost:8000'

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    axios.post(`${baseURL}/customers/`, {
      email,
      password
    }).then(response => {
      console.log(response.data);
      navigate('./maindash');
    }).catch(error => {
      console.error(error);
      if (error.response.status === 409) {
        alert('Email is already taken.');
      }
    });
  }

  return (
    <div className='signup'>
      <div className='signup-form'>
        <form onSubmit={handleSubmit}>
          <ReactCurvedText className="heding" width={370} height={60} cx={270} cy={110} rx={100} ry={100} startOffset={100} reversed={true} text="Welcome to TaskMate" />
          <img src={logo} alt="Logo" className="logo" />

          <label className='labe'>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '300px' }} required/>
          </label>
          <br />
          <label className='labe'>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '300px' }} required/>
          </label>
          <br />
          <label className='labe'>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} style={{ width: '300px' }} required/>
          </label>
          <br />
          <button type="submit" className='signup-button'>Sign up</button>
          <p>Already have an account?</p>
          <Link onClick={() => navigate('/login')} to="/login">Login here please</Link>
        </form>
      </div>
    </div>
  );
}
export {SignUpPage}