import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HamburgerMenu from '../components/Hamburger'
const images={
    blog_item1: require("../Images/blog-item1.png"),
    blog_item2: require("../Images/blog-item2.png"),
    blog_item3: require("../Images/blog-item3.png"),
}

export default function Destinations() {
  return (
    <>
    <Navbar/>
    <HamburgerMenu/>
    <section id="travel-blog" style={{position:"absolute",top:"14%",width:"100%"}}>
        <div class="blog-container" /*style={{backgroundColor:"rgba(0,0,0,0.5)"}}*/ >
          <div class="blog-text">
            <h1>Destinations</h1>
            <p>Embark on an exhilarating motorcycle journey through breathtaking landscapes, winding roads, and cultural gems. Discover the thrill of freedom while exploring our meticulously designed motorcycle tour destinations.</p>
          </div>
          <div class="tour-container">
            <div class="tour-items2" id="box-1">
              <div class="tour-img">
                <img src={images.blog_item1} alt="" />
              </div>
              <div class="tour-text">
                <h2>10 Reasons why South East Asia should be on your bucket list.</h2>
                <p>From vibrant cultural tapestries to pristine tropical paradises, South East Asia beckons with its tantalizing cuisine, ancient wonders, and warm hospitality, promising an enriching journey brimming with unforgettable adventures
                </p>
              </div>
            </div>
            <div class="tour-items2" id="box-2">
              <div class="tour-img">
                <img src={images.blog_item2} alt="" />
              </div>
              <div class="tour-text">
                <h2>10 Reasons why USA should be on your bucket list.</h2>
                <p>Explore the USA's captivating landscapes, from the iconic Grand Canyon to vibrant cities, indulge in diverse cuisines, and experience the rich music scene, creating an unforgettable motorcycle adventure.
                </p>
              </div>
            </div>
            <div class="tour-items2" id="box-3">
              <div class="tour-img">
                <img src={images.blog_item3} alt="" />
              </div>
              <div class="tour-text">
                <h2>10 Reasons why Brazil should be on your bucket list.</h2>
                <p>Experience Brazil's enchanting landscapes, from the Amazon Rainforest to stunning coastlines, savor the vibrant culinary delights, immerse in lively cultural festivities, and embrace the pulsating rhythm of this dynamic nation.
                </p>
              </div>
            </div>
          </div>
        </div>
  
      </section>
    
    <Footer/>
    </>
  )
}
