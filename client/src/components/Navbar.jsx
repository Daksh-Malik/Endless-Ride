import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

const images = {
  Logo: require("../Images/Logo2.png"),
  nav_icon1: require("../Images/Icon-fb.png"),
  nav_icon2: require("../Images/Icon-g+.png"),
  nav_icon3: require("../Images/Icon-w.png"),
  nav_icon4: require("../Images/Icon-yt.png"),
  user: require("../Images/user-sign-white-icon-vector-15479703-removebg-preview.png"),
}

export default function () {
  const [auth,setAuth] = useState(false);
  const [name, setName] = useState('')
  axios.defaults.withCredentials = true

  useEffect(()=> {
      axios.get("http://localhost:8080/")
      .then(res => {
          if(res.data.Status === "Success"){
              setAuth(true)
              setName(res.data.name)
          } else {
              setAuth(false)
          }
      })
      .then(err => console.log(err))
  },[])
  return (
    <div id="header">
      <div className="nav">
        {/* logo */}
        <Link to={"/"}>
        <div className="logo">
          <a href=""><img width="150px" src={images.Logo} alt="" /></a>
        </div>
        </Link>
        {/* nav items */}
        <div className="nav-items">
          <ul style={{ display: 'flex', gap: '2rem' }} className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/destinations" >DESTINATIONS</Link></li>
            <li><Link to="/motorcycles" >MOTORCYCLES</Link></li>
            <li><Link to="/create" >RENTALS</Link></li>
            <li><Link to="/contact" >CONTACT</Link></li>
            <li>{auth? <Link to="/logout"><img height="20px" width="20px" src={images.user} />{name.toUpperCase()}</Link> : <Link to="/login">LOGIN</Link>} </li>
          </ul>
          <ul className="nav-icons">
            <li><Link to="/"><img height="40px" width="40px" src={images.nav_icon1} alt="" /></Link></li>
            <li><Link to="/"><img height="40px" width="40px" src={images.nav_icon2} alt="" /></Link></li>
            <li><Link to="/"><img height="40px" width="40px" src={images.nav_icon3} alt="" /></Link></li>
            <li><Link to="/"><img height="40px" width="40px" src={images.nav_icon4} alt="" /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}








