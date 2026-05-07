import React from 'react'
import HotDealCarousel from './HotDealCarousel'
import Headset from "../assets/images/10004.png";
import VRHeadset from "../assets/images/10005.png";
import SmartWatch from "../assets/images/10006.png";
import Microphone from "../assets/images/10009.png";
import Camera from "../assets/images/10010.png";
import HeadsetHolder from "../assets/images/10012.png";
import MicrophoneFilther from "../assets/images/10016.png";
import Speakers from "../assets/images/10030.png";
function SingleProductPage() {

    const slides = [
        {
          id: 1,
          image1: Headset,
          image2: VRHeadset,
          title: "Demo Product Title",
          price: 349.99,
        },
        {
          id: 2,
          image1: SmartWatch,
          image2: Camera,
          title: "Demo Product Title",
          price: 525.0,
        },
        {
          id: 3,
          image1: Microphone,
          image2: MicrophoneFilther,
          title: "Demo Product Title",
          price: 145.5,
        },
        {
          id: 4,
          image1: HeadsetHolder,
          image2: Speakers,
          title: "Demo Product Title",
          price: 89.95,
        },
      ];
    
    return (
        <div className='singleProductPage'>
            <div className="thumbnail">
                <div className="mainImg">
                    <img alt="mainImg" />
                </div>
                <div className="singleProductCarousel"></div>
            </div>
            <div className="productDescription">
                <h4 className='type'>{133}</h4>
                <h2 className='productTitle'>{13124214}</h2>
                <div className="priceContainer">
                    <h1 className='newPrice'>{"newPrice"}</h1>
                    <h3 className='oldPrice'>{"oldPrice"}</h3>
                    <p className='discount'>Save -13%</p>
                </div>
                <p className='priceCaption'>$130 / 2g</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br />
                 alteration in some form, by injected humour, or randomised words which don't look even slightly <br />
                  believable.
                </p>
                <div className="size">
                    <p>Size :</p>
                    <ol className='sizeList'>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ol>
                </div>
                <div className="color">
                    <p>Color :</p>
                    <ol className='colorList'>
                        <li>🟨</li>
                        <li>⬛</li>
                        <li>🟫</li>
                        <li>🟥</li>
                        <li>🟩</li>
                    </ol>
                </div>
                <div className="material">
                    <p>Material :</p>
                    <ol className='materialList'>
                        <li>Partex</li>
                        <li>Wood</li>
                        <li>Glass</li>
                    </ol>
                </div>
                <div className="quantityAndAddToCart">
                    <ol className='quantityList'>
                        <li>
                            <p>Quantity:</p>
                        </li>
                        <li>
                            <input type="number" defaultValue={1}/>
                        </li>
                        <li>
                            <button>ADD TO CART</button>
                        </li>
                        <li>
                        <p className="wishlist">♡</p>
                        </li>
                    </ol>
                </div>
                <div className="tag">
                    <p>Tag :</p>
                    <ol className='tagList'>
                        <li>black,</li>
                        <li>brown,</li>
                        <li>cyan</li>
                    </ol>
                </div>
                <div className="share">
                    <p>Share :</p>
                    <ol className='shareList'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Google + </li>
                        <li>Pintereset</li>
                    </ol>
                </div>
                <div className="checkout">
                    <p>Guaranteed safe checkout</p>
                </div>
                <div className="singleProductPageCarousel">
                    <HotDealCarousel 
                        slides={slides}
                    />
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage