import React from 'react'

const images={
    layer_9: require("../Images/layer_9.png"),
    layer_3: require("../Images/layer_3.png"),
}

export default function CompanyFeature() {
    return (
      <div className="background-3">
        <div class="rectangle-2-copy-2-holder">
          <div class="rectangle-2-copy-4"></div>
        </div>
        <img class="layer-9" src={images.layer_9} alt="" />
        <img class="layer-3" src={images.layer_3} alt="" />
        <div class="text-43 group">
          <p class="company-text">Traversing historic Route 66, the Grand Canyon's rugged beauty, and Brazil's coastal wonders, our riders conquered 1000km in 2 days and 3000km in 7 days, crafting remarkable tales of courage and awe-inspiring journeys.</p>
          <p class="company-text2">Journeying through 50+ countries, from the breathtaking Himalayas to the sun-kissed Mediterranean, our riders embraced diverse cultures and landscapes, weaving a vibrant tapestry of global exploration and unity.</p>
        </div>
        <div class="group-8 group">
          <h1 class="t1000">1000</h1>
          <h2 class="km1">KM</h2>
          <h2 class="days1">2 DAYS</h2>
        </div>
        <div class="group-9">
          <h1 class="t50">50+</h1>
          <h2 class="tcountries">COUNTRIES</h2>
        </div>
        <div class="group-10">
          <h1 class="t3000">3000</h1>
          <h2 class="km2">KM</h2>
          <h2 class="days2">7 DAYS</h2>
        </div>
        <div class="group-11">
          <h1 class="t1000">1000</h1>
          <h2 class="km1">KM</h2>
          <h2 class="days1">2 DAYS</h2>
        </div>
        <div class="heading-2">
          <h1 class="bg3-head">GUIDED MOTORCYCLE TOURS</h1>
          <h1 class="bg3-head2">SINCE 1880.</h1>
          <p class="bg3-cont">Discover our enduring heritage in guided motorcycle tours since 1880, offering generations of expertise for unforgettable adventures on the open road.</p>
        </div>
      </div>
    );
  }
