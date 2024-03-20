import React from 'react'
import { Link } from 'react-router-dom';

const images={
    big_icon: require("../Images/Big-Icon.png"),
    icon_mail: require("../Images/Icon_mail.png"),
    text_mail: require("../Images/text_mail.png"),
    icon_phone: require("../Images/Icon_phone.png"),
    text_phone: require("../Images/text_phone.png"),
    icon_address: require("../Images/Icon_address.png"),
    text_address: require("../Images/text_address.png"),
    link1: require("../Images/link1.png"),
    link2: require("../Images/link2.png"),
    link3: require("../Images/link3.png"),
    link4: require("../Images/link4.png"),
    link5: require("../Images/link5.png"),
    link6: require("../Images/link6.png"),
    link7: require("../Images/link7.png"),
}

export default function Contact() {
    return (
      <section id="contact">
        <div class="contact-container">
          <div class="location">
            <h1>START YOUR JOURNEY</h1>
            <p>Embark on an unforgettable adventure. Start your journey with us and delve into a world of discovery, camaraderie, and thrilling escapades, creating lasting memories along the way. Join us today!</p>
          </div>
          <img class="pin" src={images.big_icon} alt="" />
          <div class="contact-info">
            <div class="info">
              <div class="info-items" id="item1">
                <div class="info-icon">
                  <img src={images.icon_mail} alt="" />
                </div>
                <div class="info-text-parent">
                  <div class="info-head">
                    <img src={images.text_mail} alt="" />
                  </div>
                  <div class="info-text">
                    <p class="info-text1">info@endlessride.com</p>
                    <p class="info-text1">support@endlessride.com</p>
                  </div>
                </div>
              </div>
              <div class="info-items" id="item1">
                <div class="info-icon">
                  <img src={images.icon_phone} alt="" />
                </div>
                <div class="info-text-parent phone">
                  <div class="info-head">
                    <img src={images.text_phone} alt="" />
                  </div>
                  <div class="info-text">
                    <p class="info-text1">+123 456 7890</p>
                    <p class="info-text1">+123 456 7890</p>
                  </div>
                </div>
              </div>
              <div class="info-items" id="item1">
                <div class="info-icon">
                  <img src={images.icon_address} alt="" />
                </div>
                <div class="info-text-parent">
                  <div class="info-head">
                    <img src={images.text_address} alt="" />
                  </div>
                  <div class="info-text">
                    <p class="info-text1">123, Main Road, New City,</p>
                    <p class="info-text1">My Country 123456</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="links">
              <div class="link-items" id="link-1"><Link to="/"><img height="60px" width="60px" src={images.link1}
                alt="" /></Link></div>
              <div class="link-items" id="link-2"><Link to="/"><img height="60px" width="60px" src={images.link2}
                alt="" /></Link></div>
              <div class="link-items" id="link-3"><Link to="/"><img height="60px" width="60px" src={images.link3}
                alt="" /></Link></div>
              <div class="link-items" id="link-4"><Link to="/"><img height="60px" width="60px" src={images.link4}
                alt="" /></Link></div>
              <div class="link-items" id="link-5"><Link to="/"><img height="60px" width="60px" src={images.link5}
                alt="" /></Link></div>
              <div class="link-items" id="link-6"><Link to="/"><img height="60px" width="60px" src={images.link6}
                alt="" /></Link></div>
              <div class="link-items" id="link-7"><Link to="/"><img height="60px" width="60px" src={images.link7}
                alt="" /></Link></div>
            </div>
          </div>
        </div>
  
      </section>
    );
  }
