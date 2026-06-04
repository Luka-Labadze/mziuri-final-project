import React, { useEffect, useState } from 'react';
import SingleProductCarousel from './SingleProductCarousel';
import SingleProductPhotoCarousel from './SingleProductPhotoCarousel';
import { getProducts } from '../api/api';
import { useCartModal } from '../context/AddToCartModalContext';

function SingleProductPage({ product }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentPhotoSlideIndex, setCurrentPhotoSlideIndex] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const { openAddToCartModal } = useCartModal();

  const ITEMS_VISIBLE = 3;
  const PHOTO_ITEMS_VISIBLE = 3;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openAddToCartModal(product._id);
  };

  const photoCarouselImages = [product.image1, product.image2, product.image1, product.image2];

  useEffect(() => {
    getProducts().then((data) => setAllProducts(data));
  }, []);

  const relatedMaxSlides = allProducts.length - ITEMS_VISIBLE;

  const handleNextClick = () => {
    if (currentSlideIndex < relatedMaxSlides) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };

  const handlePrevClick = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setCurrentSlideIndex(relatedMaxSlides);
    }
  };

  const photoMaxSlides = photoCarouselImages.length - PHOTO_ITEMS_VISIBLE;

  const handlePhotoNextClick = () => {
    if (currentPhotoSlideIndex < photoMaxSlides) {
      setCurrentPhotoSlideIndex(currentPhotoSlideIndex + 1);
    } else {
      setCurrentPhotoSlideIndex(0);
    }
  };

  const handlePhotoPrevClick = () => {
    if (currentPhotoSlideIndex > 0) {
      setCurrentPhotoSlideIndex(currentPhotoSlideIndex - 1);
    } else {
      setCurrentPhotoSlideIndex(photoMaxSlides);
    }
  };

  if (!product) {
    return <div className="loading">Loading product...</div>;
  }

  return (
    <div className="singleProductPage">
      <div className="thumbnail">
        <div className="mainImg">
          <img
            src={product.image1}
            alt="mainImg"
            className="thumbnailMainImg"
          />
        </div>
        <div className="thumbnailCarousel">
          <button
            className="photoCarouselBtn prev"
            onClick={handlePhotoPrevClick}
          >
            &lt;
          </button>
          <button
            className="photoCarouselBtn next"
            onClick={handlePhotoNextClick}
          >
            &gt;
          </button>
          <div className="thumbnailCarouselWrapper">
            <div
              className="carouselContainer"
              style={{
                transform: `translateX(-${currentPhotoSlideIndex * (100 / PHOTO_ITEMS_VISIBLE)}%)`,
                display: 'flex',
                transition: ' transform 0.3s ease',
              }}
            >
              {photoCarouselImages.map((image, index) => {
                return (
                  <SingleProductPhotoCarousel
                    key={index}
                    image={image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="productDescription">
        <span className="type">category</span>
        <h3 className="productTitle">{product.title}</h3>
        <div className="priceContainer">
          <span className="newPrice">${product.price}</span>
          <span className="oldPrice">$160.00</span>
          <p className="discount">Save -20%</p>
        </div>
        <p className="priceRatio">In stock</p>
        <p className="productCaption">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered <br />
          alteration in some form, by injected humour, or randomised words which don't look even
          slightly <br />
          believable.
        </p>
        <div className="size">
          <h4 className="sizeTitle">Size :</h4>
          <ul className="sizeList">
            <li>Xl</li>
            <li>Ml</li>
            <li>Xs</li>
            <li>X</li>
            <li>L</li>
            <li>M</li>
          </ul>
        </div>
        <div className="color">
          <p className="colorTitle">Color :</p>
          <ol className="colorList">
            <li className="yellowBox"></li>
            <li className="blackBox"></li>
            <li className="brownBox"></li>
            <li className="grayBox"></li>
            <li className="greenBox"></li>
          </ol>
        </div>
        <div className="material">
          <p className="materialTitle">Material :</p>
          <ol className="materialList">
            <li>Partex</li>
            <li>Wood</li>
            <li>Glass</li>
          </ol>
        </div>
        <div className="quantityAndAddToCart">
          <ol className="quantityList">
            <li>
              <p className="quantityTitle">Quantity:</p>
            </li>
            <li>
              <input
                type="number"
                defaultValue={1}
                className="quantityInput"
              />
            </li>
            <li>
              <button
                className="addToCartBtn"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </li>
            <li>
              <p className="wishlist">♡</p>
            </li>
          </ol>
        </div>
        <div className="buyNow">
          <button className="buyNowBtn">BUY IT NOW</button>
        </div>
        <div className="tag">
          <p className="tagTitle">Tag :</p>
          <ol className="tagList">
            <li>black,</li>
            <li>brown,</li>
            <li>cyan</li>
          </ol>
        </div>
        <div className="share">
          <p className="shareTitle">Share :</p>
          <ol className="shareList">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Google +</li>
            <li>Pinterest</li>
          </ol>
        </div>
        <div className="checkout">
          <p>Guaranteed safe checkout</p>
        </div>
        <div className="singleProductPageCarousel">
          <button
            className="carouselBtn prev"
            onClick={handlePrevClick}
          >
            &lt;
          </button>
          <button
            className="carouselBtn next"
            onClick={handleNextClick}
          >
            &gt;
          </button>
          <div className="carouselWrapper">
            <div
              className="carouselContainer"
              style={{
                transform: `translateX(-${currentSlideIndex * 308}px)`,
                transition: 'transform 0.3s ease',
              }}
            >
              <SingleProductCarousel slides={allProducts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
