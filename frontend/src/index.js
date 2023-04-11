import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/landing';
import { SignUpPage } from './components/signup';
import { Login } from './components/login';
import { Dash } from './components/maindash';


const App = () => {
  

    return(
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/signup" element={<SignUpPage/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/maindash" element={<Dash/>}/>
        </Routes>
      </BrowserRouter>

    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));