import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Auth/signup';
import Home from './pages/Home/main';
import Login from './pages/Auth/login';
import "./index.css";


const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element = {<Signup />} />
                <Route path='/login' element = {<Login />} />
                <Route path='/home' element = {<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;