import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HamburgerMenu from '../components/Hamburger'

const images = {
    bike1: require("../Images/bike1.webp"),
    bike2: require("../Images/bike2.jpg"),
    bike3: require("../Images/bike3.jpg"),
}

export default function Motorcycles() {
    return (
        <>
            <Navbar />
            <HamburgerMenu />
            <section id="travel-blog" style={{ position: "absolute", top: "14%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor:"black", color:"white" }}>
                <div class="blog-text">
                    <h1>MOTORCYCLES</h1>
                    <p>Rev up your adrenaline with our dynamic range of high-performance motorcycles. Experience unrivaled power, agility, and style as you embrace the thrill of the open road with our expertly crafted two-wheeled marvels.</p>
                </div>
                <div class="tour-container" style={{ flexWrap: "wrap", width: "80%" }}>
                    <div class="tour-items2" id="box-1">
                        <div class="tour-img">
                            <img src={images.bike1} alt="" />
                        </div>
                        <div class="tour-text">
                            <h1>BMW</h1>
                            <p>BMW bikes combine cutting-edge technology, sleek design, and unparalleled performance, setting the standard for exhilarating rides. With precision engineering and a legacy of excellence, every BMW motorcycle embodies the thrill of the open road.
                            </p>
                        </div>
                    </div>
                    <div class="tour-items2" id="box-2">
                        <div class="tour-img">
                            <img src={images.bike2} alt="" />
                        </div>
                        <div class="tour-text">
                            <h1>Royal Enfield</h1>
                            <p>Royal Enfield motorcycles epitomize classic charm, blending timeless design with robust performance, capturing the essence of a bygone era. Crafted with heritage and modernity, each ride embodies a nostalgic yet exhilarating journey through the roads of today.
                            </p>
                        </div>
                    </div>
                    <div class="tour-items2" id="box-3" style={{marginLeft:"20px",}}>
                        <div class="tour-img">
                            <img src={images.bike3} alt="" />
                        </div>
                        <div class="tour-text">
                            <h1>Yamaha</h1>
                            <p>Yamaha motorcycles epitomize innovation, performance, and reliability, delivering a thrilling ride every time. With a legacy of cutting-edge technology and a passion for excellence, each Yamaha bike promises an unforgettable experience on the road.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}
