import React from 'react';
import './index.css'; // Import your CSS file here
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ContactForm from './pages/ContactForm';
import LoginAndSignup from './pages/LoginAndSignUp';
import Home from './pages/Home';
import Register from './pages/Register';
import Destinations from './pages/Destinations';
import Motorcycles from './pages/Motorcycles';
import Rentals from './pages/Rentals';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Login from './pages/Login';
import Logout from './pages/Logout';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/contact' element={<ContactForm/>}></Route>
        <Route path='/loginandsignup' element={<LoginAndSignup/>}></Route>
        <Route path='/destinations' element={<Destinations/>}></Route>
        <Route path='/motorcycles' element={<Motorcycles/>}></Route>
        <Route path='/rentals' element={<Rentals/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/read' element={<Read/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
