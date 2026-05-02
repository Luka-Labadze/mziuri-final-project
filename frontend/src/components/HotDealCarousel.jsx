import React from 'react'

function HotDealCarousel({data}) {
  return (
    <div>
        <div className="wishlistContainer">
                <p className="wishlist">♡</p>
            </div>
            <div className="imgContainer">
                <img alt="IMAGE" src={data.image1}/>
                <img alt="IMAGE2" src={data.image2}/>
            </div>
            <div className="titleAndPriceContainer">
                <h3>{data.title}</h3>
                <p>${data.price}</p>
            </div>
            <button>Shop Now</button>
    </div>
  )
}

export default HotDealCarousel