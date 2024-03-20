import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HamburgerMenu from '../components/Hamburger';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Footer from '../components/Footer';

export default function Register() {
    const [values, setValues] = useState({
        name: "",
        email: '',
        password: ""
    })
    console.log(values)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/register", values)
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate("/login")
                }
            })
            .then(err => console.log(err))
    }
    return (
        <>
            <Navbar />
            <HamburgerMenu />
            <div class="login-container">
                <form onSubmit={handleSubmit}>
                    <div class="login-form">
                        <h2 class="login-head">SIGN UP</h2>
                        <input
                            name="name"
                            type="text"
                            placeholder="Username"
                            className="form-inputs"
                            onChange={e => setValues({...values, name:e.target.value})}
                        />
                        <div>
                            <input name="email" type="email" className="form-inputs" onChange={e => setValues({ ...values, email: e.target.value })} placeholder='Enter Email' />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="form-inputs"
                            onChange={e => setValues({...values, password:e.target.value})}
                        />
                        <button type='submit' class="login-btn">SIGN UP</button>
                        <p class="login-text">
                            Already have an account?{' '}
                            <Link to="/login"><button class="switch-btn">Switch to Login</button></Link>
                        </p>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    )
}
