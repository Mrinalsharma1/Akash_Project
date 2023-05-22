// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Components/Login';
import Home from './Components/Home';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import AddCustomer from './Components/AddCustomer';
import CreateUser from './Components/CreateUser';
import Logout from './Components/Logout';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/addcustomer' element={<AddCustomer />} />
          <Route path='/createuser' element={<CreateUser />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
