import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Update() {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bikeName, setBikeName] = useState("");
    const [tourName, settourName] = useState("");
    const [duration, setDuration] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setBikeName(localStorage.getItem("bikeName"));
        settourName(localStorage.getItem("tourName"));
        setDuration(localStorage.getItem("duration"));
    }, []);

    const handleUpdate = () => {
        axios.put(`https://65a3742ca54d8e805ed3a3e3.mockapi.io/EndlessRide/${id}`, {
            name: name,
            email: email,
            bikeName: bikeName,
            tourName: tourName,
            duration: duration,
        })
            .then(() => {
                navigate("/read");
            })
    }
    return (
        <>
            <Navbar></Navbar>
            <div className='absoluteclass'>
                <div className='d-flex justify-content-between mt-5 smallbox'>
                    <h2 className='overflow-hidden'>UPDATE DATA</h2>
                    <Link to={"/read"}>
                        <button className='btn btn-primary'>GO BACK</button>
                    </Link>
                </div>
                <div className="App">
                    <div className="Container">
                        <label>Name</label>
                        <input type="text" value={name} onChange={(event) => { setName(event.target.value); }}></input>
                        <label>E-mail</label>
                        <input type="email" value={email} onChange={(event) => { setEmail(event.target.value); }}></input>
                        <label>Bike Name</label>
                        <input type="text" value={bikeName} onChange={(event) => { setBikeName(event.target.value); }}></input>
                        <label>Tour Name</label>
                        <input type="text" value={tourName} onChange={(event) => { settourName(event.target.value); }}></input>
                        <label>Duration(days)</label>
                        <input type="number" value={duration} onChange={(event) => { setDuration(event.target.value); }}></input>
                        <button className='btn btn-primary' onClick={() => handleUpdate()}>UPDATE</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
