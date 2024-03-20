import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import HamburgerMenu from '../components/Hamburger';
import TourPackage from '../components/TourPackage';
import AboutCompany from '../components/AboutCompany';
import ClientTestimonial from '../components/ClientTestimonial';
import CompanyFeature from '../components/CompanyFeature';
import TravelBlog from '../components/TravelBlog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Home() {
    axios.defaults.withCredentials = true
  return (
    <>
    <HamburgerMenu />
    <Navbar />
    <Banner />
    <TourPackage />
    <AboutCompany />
    <ClientTestimonial />
    <CompanyFeature />
    <TravelBlog />
    <Contact />
    <Footer />  
    </>
  )
}
