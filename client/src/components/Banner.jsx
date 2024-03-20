import React from 'react'

const images = {
    banner: require("../Images/Banner-text-and-Image.png"),
}

export default function Banner() {
  return (
    <div>
        <div className="banner">
            <img src={images.banner} alt="" />
        </div>
    </div>
  )
}
