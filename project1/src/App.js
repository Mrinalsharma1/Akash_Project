import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom'


function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>

      
      </>
  );
}

export default App;
