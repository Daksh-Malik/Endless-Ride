import React,{useState} from 'react'
import HamburgerMenu from '../components/Hamburger'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../components/Footer'

export default function Login() {
    const [values,setValues] = useState({
        name: '',
        password: ""
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/login", values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate("/")
            } else {
                alert("Username or Password is incorrect")
                // alert(res.data.Error)
            }
        })
        .then(err => console.log(err))
    }
    return (
        <>
        <Navbar/>
        <HamburgerMenu/>
        <div className='login-container'>
        <form onSubmit={handleSubmit}>
            <div class="login-form">
                <h2 class="login-head">LOGIN</h2>
                <input
                    name="name"
                    type="text"
                    placeholder="Username"
                    class="form-inputs"
                    onChange={e => setValues({...values, name:e.target.value})}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    class="form-inputs"
                    onChange={e => setValues({...values, password:e.target.value})}
                />
                <button type="submit" class="login-btn">LOGIN</button>
                <p class="login-text">
                    Don't have an account?{' '}
                    <Link to="/register"><button class="switch-btn">Switch to Sign Up</button></Link>
                </p>
            </div>
        </form>
        </div>
        <Footer/>
        </>
    )
}
