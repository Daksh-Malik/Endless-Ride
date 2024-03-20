// ContactForm.js

import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import HamburgerMenu from '../components/Hamburger';
import Footer from '../components/Footer';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // const nameInputRef = useRef(null);
    // const emailInputRef = useRef(null);
    // const messageInputRef = useRef(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        // event.preventDefault();
        try {
            await axios.post("http://localhost:8080/create",formData);
            console.log("Message Sent!");
            alert("Message Sent!");
        } catch (error) {
            console.log(error);
        }
        setIsSubmitted(true);
    };

    return (
        <>
        <HamburgerMenu/>
        <Navbar/>
        <div className="form-container">
            {isSubmitted && <p className="submitted">Submitted!</p>}
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-items" id='name'>
                    <label>NAME:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder='Full Name'
                        value={formData.name}
                        onChange={handleInputChange}
                        // ref={nameInputRef}
                    />
                </div>
                <div className="form-items">
                    <label>EMAIL:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder='example@domain.com'
                        value={formData.email}
                        onChange={handleInputChange}
                        // ref={emailInputRef}
                    />
                </div>
                <div className="form-items">
                    <label>MESSAGE:</label>
                    <textarea
                        name="message"
                        class="textarea"
                        placeholder='Type your message'
                        value={formData.message}
                        onChange={handleInputChange}
                        // ref={messageInputRef}
                    />
                </div>
                <button className="submit-btn" type="submit">SUBMIT</button>
            </form>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ContactForm;
