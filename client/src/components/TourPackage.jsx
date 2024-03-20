import React from 'react'
import { Link } from 'react-router-dom';

const images={
    tourbox1: require("../Images/tour-box-1.png"),
    booknow: require("../Images/booknow-btn.png"),
    tourbox2: require("../Images/tour-box-2.png"),
    tourbox3: require("../Images/tour-box-3.png"),  
}

export default function TourPackage() {
    return (
      <section id="tour-package">
        <div class="tour-container">
          <div class="tour-items" id="box-1">
            <div class="tour-img">
              <img src={images.tourbox1} alt="" />
            </div>
            <div class="tour-text">
              <h2>Motorcycle Expeditions</h2>
              <p>
              Embark on an unforgettable journey with our budget-friendly motorcycle tour. Explore breathtaking landscapes and create unforgettable memories on an adventure of a lifetime!
              </p>
            </div>
            {/* <!-- <button class="tour-btn">BOOK NOW</button> --> */}
            <Link to="/create">
              <img class="tour-btn" src={images.booknow} alt="" />
            </Link>
          </div>
          <div class="tour-items" id="box-2">
            <div class="tour-img">
              <img src={images.tourbox2} alt="" />
            </div>
            <div class="tour-text">
              <h2>Mountains Motorcycle Tours</h2>
              <p>Indulge in the tranquility of nature's beauty as you embark on an epic motorcycle tour through the breathtaking mountains, all at an unbeatable price.
              </p>
            </div>
            <Link to="/create">
              <img class="tour-btn" src={images.booknow} alt="" />
            </Link>
          </div>
          <div class="tour-items" id="box-3">
            <div class="tour-img">
              <img src={images.tourbox3} alt="" />
            </div>
            <div class="tour-text">
              <h2>Motorcycle Adventure Tours</h2>
              <p>Prepare for an action-packed and budget-friendly motorcycle adventure, offering an exhilarating experience and lasting memories for all adventure enthusiasts.
              </p>
            </div>
            <Link to="/create">
              <img class="tour-btn" src={images.booknow} alt="" />
            </Link>
          </div>
          </div>
      </section>
    );
  }





