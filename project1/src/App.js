// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import AddCustomer from './Components/AddCustomer';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/addcustomer' element={<AddCustomer />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
