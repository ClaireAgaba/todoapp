import React, { useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from './logo.jpg';
import ReactCurvedText from "react-curved-text";

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const history = useHistory();
  const navigate = useNavigate();

function handleSubmit(event) {
    event.preventDefault();
    // handle form submission here
    //navigate('/login');
} 

return (
  <div className='signup'>
    <form onSubmit={handleSubmit}>
      <ReactCurvedText className="heding" width={370} height={60} cx={270} cy={110} rx={100} ry={100} startOffset={100} reversed={true} text="Welcome to TaskMate" />
      {/* <h2> Welcome to TaskMate </h2> */}
      <img src={logo} alt="Logo" className="logo" />

      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={{ width: '300px' }} required/>
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '300px' }} required/>
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '300px' }} required/>
      </label>
      <br />
      <button type="submit">Sign up</button>
      <p>Already have an account?</p>
      {/* <Link to="/login">Login here please </Link> */}
      {/* <NavLink to="/login">Login here please </NavLink> */}
      {/* <a href="#" onClick={() => history.push('/login')}>Login here please</a> */}
      <Link onClick={() => navigate('/login')} to="/login">Login here please</Link>
      
    </form>

  </div>

)
}
export {SignUpPage}

