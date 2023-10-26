import "./index.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Landing from './pages/landing';


const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element = {<Landing />} />
                <Route path='/signup' element = {<Signup />} />
                <Route path='/login' element = {<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;