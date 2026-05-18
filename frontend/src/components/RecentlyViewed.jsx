import React from "react";
import Headset from "../assets/images/10004.png";
import VRHeadset from '../assets/images/10005.png'

function RecentlyViewed() {
  const rvCards = [
    {
      id: 1,
      image1: Headset,
      title: "Demo Product Title",
      price: 130.0,
      oldPrice: 150.0,
    },
    {
      id: 2,
      image1: VRHeadset,
      title: "Demo Product Title",
      price: 120.0,
      oldPrice: 150.0,
    },
  ];
  return (
    <div className="recentlyViewed">
      <div className="titleContainer">
        <h3 className="rvTitle">Recently Viewed</h3>
      </div>
      <div className="rvCardsWrapper">
        {rvCards.map((product) => (
          <div className="rvCard" key={product.id}>
            <div className="imgContainer">
              <img alt="IMAGE" src={product.image1} className="rvCardsImg" />
            </div>

            <div className="titleAndPriceContainer">
              <h3>{product.title}</h3>
              <div className="priceContainer">
              <p className="newPrice">${product.price} USD</p>
              <p className="oldPrice">${product.oldPrice} USD</p>

              </div>
            </div>

            <button className="shopNow">Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyViewed;
