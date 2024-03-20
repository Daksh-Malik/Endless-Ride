import React from 'react'

const images={
    main_rider: require("../Images/main_rider.png"),
    center_motorcycle: require("../Images/center_motorcycle_image.png"),
}

export default function AboutCompany() {
  return (
    <div className="background-2" id="about-company">
      <div class="rectangle-2-holder">
        <div class="left-side">
          <div class="about-head-div">
          <h1 class="about-head">WE ARE WORLD WIDE</h1>
          </div>
          <div class="group-1">
            <h2 class="about-head2">10 reasons why USA.</h2>
            <p class="about-text">Discover the allure of the USA on our thrilling motorcycle tours, showcasing the nation's beauty and rich cultural tapestry in 10 remarkable ways</p>
            {/* <img class="text-24" src={images.loremipsum11} /> */}
          </div>
          <div class="group-1-copy">
            <h2 class="about-head2">10 reasons why South East Asia.</h2>
            <p class="about-text">Cruise through the wonders of Southeast Asia on our captivating motorcycle tours, uncovering the region's diversity in 10 unforgettable adventures</p>
            {/* <img class="text-26" src={images.loremipsum11} /> */}
          </div>
          <div class="group-1-copy-2">
            <h2 class="about-head2">10 reasons why Brazil.</h2>
            <p class="about-text">Embark on an unforgettable journey through Brazil on our exhilarating motorcycle tours, experiencing the country's vibrant spirit and natural marvels in 10 breathtaking escapades</p>
            {/* <img class="text-28" src={images.loremipsum11} /> */}
          </div>
        </div>
      </div>
      <div class="rectangle-2-copy-holder">
        <div class="right-side">
          <div class="group-5 group">
            <div class="ellipse-2"></div>
            <div class="col-7">
              <div class="rider-name group">
                <h1 class="about-name">ALEX DOE</h1>
                <img class="text-30" src={images.main_rider} alt="Main Rider" title="Main Rider" />
              </div>
              <p class="rider-text">Our USA rider, fueled by passion and adventure, as he conquers the open road with expertise and unwavering determination</p>
              {/* <img class="text-31" src={images.loremipsum14} /> */}
            </div>
          </div>
          <div class="group-6 group">
            <div class="col-6">
              <div class="rider-name-2 group">
                <h1 class="about-name">STEVE DOE</h1>
                <img class="text-33" src={images.main_rider} alt="Main Rider" title="Main Rider" />
              </div>
              <p class="rider-text">For our South East Asia rider, every twist and turn is an exploration of the region's vibrant cultures and scenic landscapes</p>
            </div>
            <div class="ellipse-2-copy"></div>
          </div>
          <div class="group-7 group">
            <div class="ellipse-2-copy-2"></div>
            <div class="col-5">
              <div class="name group">
                <h1 class="about-name">BILL DOE</h1>
                <img class="text-36" src={images.main_rider} alt="Main Rider" title="Main Rider" />
              </div>
              <p class="rider-text">Our Brazil rider captures the essence of the country's zest for life, riding through diverse terrains and capturing the heart of the nation's soul</p>
            </div>
          </div>
        </div>
      </div>
      <img class="center-motorcycle-image" src={images.center_motorcycle} alt="" />
    </div>
  );
}
