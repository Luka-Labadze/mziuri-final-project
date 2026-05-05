import React from 'react'

function ProductSingle({ img1,img2, title, price}) {
  return (
   <div className="productSingle">
      <p className="wishlist">♡</p>

      <div className="imgContainer">
        <img
          alt="IMAGE"
          src={img1}
          className="productImg"
          id="image1"
        />
        <img
          alt="IMAGE2"
          src={img2}
          className="productImg"
          id="image2"
        />
      </div>

      <div className="titleAndPriceContainer">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>

      <button className="addToCart">ADD TO CART</button>
    </div>
  )
}

export default ProductSingle