import React from 'react'
import {useState} from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bikeName, setBikeName] = useState("");
    const [tourName, setTourName] = useState("");
    const [duration, setDuration] = useState(0);

    const header = { "Access-Control-Allow-Origin": "*" };
    const navigate = useNavigate();

    //create
    const bookNow = (e) => {
        e.preventDefault();
        axios.post("https://65a3742ca54d8e805ed3a3e3.mockapi.io/EndlessRide", { //Here I am using mockAPI as my SQL is not giving permission
            name: name,
            email: email,
            bikeName: bikeName,
            tourName: tourName,
            duration: duration,
        }).then(() => {
            console.log("success");
            navigate("/read");
        });
    };
    return (
        <>
            <Navbar></Navbar>
            <div className='absoluteclass'>
            <div className="blog-text">
                    <h1>RENTALS</h1>
                    <p>Satisfy your wanderlust with our hassle-free motorcycle rental services. Choose from our premium fleet, ensuring an unforgettable ride. Fuel your adventure and explore destinations with the freedom only a motorcycle can offer.</p>
            </div>
            <div className="parentbox">
                <div className="Container">
                    <label>NAME:</label>
                    <input type="text" onChange={(event) => { setName(event.target.value); }}></input>
                    <label>EMAIL:</label>
                    <input type="email" onChange={(event) => { setEmail(event.target.value); }}></input>
                    <label>BIKE NAME:</label>
                    <input type="text" onChange={(event) => { setBikeName(event.target.value); }}></input>
                    <label>TOUR NAME:</label>
                    <input type="text" onChange={(event) => { setTourName(event.target.value); }}></input>
                    <label>DURATION (Days):</label>
                    <input type="number" onChange={(event) => { setDuration(event.target.value); }}></input>
                    <button className='btn btn-primary' onClick={bookNow}>BOOK NOW</button>
                    <Link to={"/read"}>
                        <button className='btn btn-primary'>READ DATA</button>
                    </Link>
                </div>
            </div>
            </div>
            <div className='footerspace'></div>
            <Footer></Footer>
        </>
    )
}
