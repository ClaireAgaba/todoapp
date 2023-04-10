import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { LandingPage } from './components/landing';
import { SignUpPage } from './components/signup';


const App = () =>{
    const [activePage, setActivePage] = useState('landing');

    const handleLinkClick = (page) => {
      setActivePage(page);
    }
    return(
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/signup" element={<SignUpPage/>}/>
    
        </Routes>
      </BrowserRouter>

    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));