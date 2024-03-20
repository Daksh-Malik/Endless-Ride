import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Read() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    function getData() {
        setIsLoading(true);
        axios.get("https://65a3742ca54d8e805ed3a3e3.mockapi.io/EndlessRide")
            .then((res) => {
                console.log(res);
                setData(res.data);
                setIsLoading(false);
            });
    }

    function handleDelete(id) {
        axios.delete(`https://65a3742ca54d8e805ed3a3e3.mockapi.io/EndlessRide/${id}`)
        .then(()=> {
            getData();
        })
    }

    const navigate = useNavigate();

    function setToLocalStorage(id,name,email,bikeName,tourName,duration){
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("bikeName",bikeName);
        localStorage.setItem("tourName",tourName);
        localStorage.setItem("duration",duration);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
        <Navbar></Navbar>
        <div className='mt-5 me-5 absoluteclass'> 
            <div className='d-flex justify-content-between mt-2'>
                <h2 className='overflow-hidden'>READ DATA</h2>
                <Link to={"/create"}>
                    <button className='btn btn-primary'>GO BACK</button>
                </Link>
            </div>
            {/* <div style={{margin:'0 auto'}}>{isLoading ? <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g><animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s" repeatCount="indefinite"></animateTransform><path d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20" fill="#e50914"></path></g></g></svg></div> : null}</div> */}
            <div>{isLoading ? <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: 'rgb(255, 255, 255)', display: 'block', shapeRendering: 'auto' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g><animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s" repeatCount="indefinite"></animateTransform><path d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20" fill="#e50914"></path></g></g></svg></div> : null}</div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Bike Name</th>
                        <th scope="col">Tour Name</th>
                        <th scope="col">Duration(Days)</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {data.map((eachData) => {
                    return(
                        <>
                            <tbody>
                                <tr>
                                    <th scope="row">{eachData.id}</th>
                                    <td>{eachData.name}</td>
                                    <td>{eachData.email}</td>
                                    <td>{eachData.bikeName}</td>
                                    <td>{eachData.tourName}</td>
                                    <td>{eachData.duration}</td>
                                    <td>
                                    <Link to="/update">
                                        <button className='btn-success' onClick={()=> setToLocalStorage(eachData.id,eachData.name,eachData.email,eachData.bikeName,eachData.tourName,eachData.duration)}>EDIT</button>
                                    </Link>
                                    </td>
                                    <td><button className='btn-danger' onClick={()=> handleDelete(eachData.id)}>DELETE</button></td>
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </table>
        </div>
        <Footer></Footer>
        </>
    )
}
