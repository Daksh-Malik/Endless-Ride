import React from 'react'

const images={
    blog_item1: require("../Images/blog-item1.png"),
    blog_item2: require("../Images/blog-item2.png"),
    blog_item3: require("../Images/blog-item3.png"),
}

export default function TravelBlog() {
    return (
      <section id="travel-blog">
        <div class="blog-container">
          <div class="blog-text">
            <h1>TRAVEL BLOG</h1>
            <p>Explore our travel blog, a treasure trove of captivating narratives, insider tips, and awe-inspiring photographs, offering a virtual passage to the world's most enchanting destinations and unforgettable experiences.</p>
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
    );
  }
