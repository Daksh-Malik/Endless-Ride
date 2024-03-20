import React from 'react'

const images={
    john_smith_full: require("../Images/john-smith-full.png"),
    place_image: require("../Images/place_image_here_4.png"),
}

export default function ClientTestimonial() {
    return (
      <div className="client-testimonial">
        <div class="heading">
          <h1 class="one">WE ARE</h1>
          <h1 class="two"> WORLD WIDE</h1>
          <p>With a global clientele, we cater to riders from every corner of the globe, uniting adventure enthusiasts with our unparalleled motorcycle tours and top-tier services. Our diverse clientele shares a passion for exploration, seeking thrilling experiences and unforgettable journeys through our meticulously crafted expeditions.</p>
        </div>
        <div class="row-2 ">
          <div class="rectangle-2-copy-3-holder">
            <div class="rider-testimonial">
              <div class="row-3 group">
                <img src={images.john_smith_full} alt="" />
              </div>
              <p class="test-text">"The motorcycle tour was an exhilarating experience, taking us through stunning landscapes and hidden gems we wouldn't have discovered otherwise. The well-planned routes and expert guides made every moment memorable. Highly recommended for anyone seeking an adventure that combines thrill, beauty, and cultural immersion."</p>
            </div>
          </div>
          <img class="place-image-here" src={images.place_image} alt="" />
        </div>
      </div>
    );
  }
