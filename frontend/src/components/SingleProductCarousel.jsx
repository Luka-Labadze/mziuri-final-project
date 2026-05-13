import React from 'react'

function SingleProductCarousel({ slides }) {
  return (
     <div className="singleProductCarousel">

      <p className="wishlist">♡</p>

      <div className="imgContainer">
        <img
          alt="IMAGE"
          src={slides.image1}
          className="hdCarouselImg"
          id="image1"
        />
        <img
          alt="IMAGE2"
          src={slides.image2}
          className="hdCarouselImg"
          id="image2"
        />
      </div>

      <div className="titleAndPriceContainer">
        <h3>{slides.title}</h3>
        <p>${slides.price}</p>
      </div>

      <button className="shopNow">Shop Now</button>
    </div>
  )
}

export default SingleProductCarousel