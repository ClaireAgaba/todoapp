import React from 'react';
import main from './main.jpg';
import "./main.css";
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='container'>
      <div className='card'>
        <img src={main}/>
        <div className='title'>
          <h2> <b> Manage your tasks efficiently </b></h2>
          <div className='btn'>
            <Link to='/login'> <button className='btn1'> Sign in </button></Link>
            <Link to='/signup'> <button className='btn2'> Sign up </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export {LandingPage};
