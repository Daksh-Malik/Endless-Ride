import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import HamburgerMenu from '../components/Hamburger'
import Footer from '../components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const [data,setData] = useState([])
    // useEffect(()=> {
    //     axios.get("http://localhost:8080/read")
    //     .then(res => {
    //         setData(res.data)
    //     })
    //     .then(err => console.log(err))
    // },[])
    useEffect(() => {
        axios.get("http://localhost:8080/read")
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    const navigate = useNavigate()
    const handleLogout = () =>{
        axios.get("http://localhost:8080/logout")
        .then(res => {
            navigate("/")    
        }).catch(err => console.log(err))
    }
  return (
    <>
    <Navbar/>
    <HamburgerMenu/>
    <div className='logout-container'>
        <h1>Username: {data.name}</h1>
        <h1>Email: {data.email}</h1>
        <button onClick={handleLogout} className='login-btn'>Logout</button>
    </div>
    <Footer/>
    </>
  )
}
